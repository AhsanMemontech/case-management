'use client';
import React, { useState, useEffect } from 'react';
import MainLayout from './components/layout/MainLayout';
import Link from 'next/link';
import { Cases, DashboardStats } from '@/app/components/interface/types';
import { useAuth } from './context/AuthContext';

export default function Home() {
  const [caseData, setCaseData] = useState<Cases[]>([]);
  const [recentCases, setRecentCases] = useState<Cases[]>([]);
  const [_loading, setLoading] = useState(true);
  const [caseAgeStats, setCaseAgeStats] = useState({
    lessThan3Months: 0,
    moreThan3Months: 0,
    moreThan6Months: 0,
    moreThan1Year: 0
  });

  const { user, loading } = useAuth();

  useEffect(() => {
    if(!loading && user?.id){
      console.log('User is authenticated. Fetching cases...');
      async function fetchCases() {
        try {
          setLoading(true);
          console.log('Fetching cases for user:', user?.id);
          const res = await fetch(`/api/cases?userId=${user?.id}`);
          
          if (!res.ok) {
            const errorText = await res.text();
            console.error('Error fetching cases:', errorText);
            throw new Error(`Failed to fetch cases: ${res.status}`);
          }
          
          const data = await res.json();
          setCaseData(data);
          // After you've fetched the cases data and set it to state
          setCaseAgeStats(calculateCaseAgeStats(data));
          console.log(data);

          setRecentCases(data
            .sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
            .slice(0, 3)
          );
          
        } catch (err) {
          console.error('Error fetching case:', err);
        } finally {
          setLoading(false);
        }
      }
      fetchCases();
    }
  }, [loading, user]);

  // Add this function to calculate case age statistics
  const calculateCaseAgeStats = (cases: any[]) => {
    const now = new Date();
    const threeMonthsAgo = new Date(now);
    threeMonthsAgo.setMonth(now.getMonth() - 3);
    
    const sixMonthsAgo = new Date(now);
    sixMonthsAgo.setMonth(now.getMonth() - 6);
    
    const oneYearAgo = new Date(now);
    oneYearAgo.setFullYear(now.getFullYear() - 1);
    
    const lessThan3Months = cases.filter(c => {
      if (!c.dateOfInstitution) return false;
      const institutionDate = new Date(c.dateOfInstitution);
      return institutionDate > threeMonthsAgo;
    }).length;
    
    const moreThan3Months = cases.filter(c => {
      if (!c.dateOfInstitution) return false;
      const institutionDate = new Date(c.dateOfInstitution);
      return institutionDate <= threeMonthsAgo && institutionDate > sixMonthsAgo;
    }).length;
    
    const moreThan6Months = cases.filter(c => {
      if (!c.dateOfInstitution) return false;
      const institutionDate = new Date(c.dateOfInstitution);
      return institutionDate <= sixMonthsAgo && institutionDate > oneYearAgo;
    }).length;
    
    const moreThan1Year = cases.filter(c => {
      const institutionDate = new Date(c.dateOfInstitution);
      return institutionDate <= oneYearAgo;
    }).length;
    
    return {
      lessThan3Months,
      moreThan3Months,
      moreThan6Months,
      moreThan1Year
    };
  };

  const activeCasesCount = caseData.filter(caseItem => caseItem.status === 'Active').length;
  const suspendedCasesCount = caseData.filter(caseItem => caseItem.status === 'Suspended').length;
  const closedCasesCount = caseData.filter(caseItem => caseItem.status === 'Closed').length;
  // const highPriorityCount = caseData.filter(caseItem => caseItem.priority === 'High').length;
  // const criticalPriorityCount = caseData.filter(caseItem => caseItem.priority === 'Critical').length;
  const dashboardStats: DashboardStats[] = [
    { label: 'Active Cases', value: activeCasesCount, color: 'bg-blue-500' },
    { label: 'Suspended Cases', value: suspendedCasesCount, color: 'bg-red-500' },
    { label: 'Closed Cases', value: closedCasesCount, color: 'bg-green-500' },
    // { label: 'High Priority', value: highPriorityCount, color: 'bg-red-500' },
    // { label: 'Critical', value: criticalPriorityCount, color: 'bg-purple-600' },
  ];

  return (
    <MainLayout>
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Dashboard</h2>
            <div className="flex items-center mt-1">
              <p className="text-gray-500">Welcome to your case management system</p>
              <div className="ml-3 bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
                <span>Total Cases: {caseData.length}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full sm:w-auto">
            <div className="text-sm text-gray-600 bg-gray-100 px-4 py-2 rounded-lg shadow-sm w-full sm:w-auto text-center sm:mr-4">
              {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
            {user?.role !== 'AC' && user?.role !== 'Mukhtiarkar' && (
            <Link href="/cases/new" className="flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2.5 px-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md whitespace-nowrap w-full sm:w-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add New Case
            </Link>)}
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          
          <div className="lg:w-3/3">
          {_loading ? (
              <div className="flex flex-col items-center justify-center h-64">
                <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                <p className="mt-4 text-gray-600">Loading dashboard data...</p>
              </div>
            ) : (
              
            <div className="flex flex-col gap-8">
              {/* Stats Cards on top */}
              <div className="w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 relative">
                  
                  {dashboardStats.map((stat, index) => (
                    <div key={index} className="bg-white overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 group">
                      <div className={`h-1 ${stat.color}`}></div>
                      <div className="p-4 relative">
                        <div className="flex items-center mb-2">
                          <div className={`flex items-center justify-center w-8 h-8 rounded-md ${
                                            stat.color === 'bg-purple-600 border-0' 
                                              ? 'bg-purple-100 text-purple-600 border-0' 
                                              : stat.color.replace('bg-', 'bg-opacity-15 text-').replace('-500', '-600')
                                          } mr-3 group-hover:scale-110 transition-transform duration-300`}>
                                            {index === 0 && (
                                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                              </svg>
                                            )}
                            {index === 1 && (
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                              </svg>
                            )}
                            {index === 2 && (
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                              </svg>
                            )}
                          </div>
                          <div className="text-xs font-semibold text-gray-600 uppercase tracking-wide">{stat.label}</div>
                        </div>
                        
                        <div className="flex items-end">
                          <div className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">{stat.value}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {user?.role !== 'AC' && user?.role !== 'Mukhtiarkar' && (
              <div className="mt-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Pendency Timeline Breakup</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="bg-green-100 rounded-lg p-4">
                    <div className="font-medium text-green-800 mb-1">Less than 3 months</div>
                    <div className="text-2xl font-bold text-green-700">{caseAgeStats.lessThan3Months}</div>
                  </div>
                  
                  <div className="bg-yellow-100 rounded-lg p-4">
                    <div className="font-medium text-yellow-800 mb-1">More than 3 months</div>
                    <div className="text-2xl font-bold text-yellow-700">{caseAgeStats.moreThan3Months}</div>
                  </div>
                  
                  <div className="bg-orange-100 rounded-lg p-4">
                    <div className="font-medium text-orange-800 mb-1">More than 6 months</div>
                    <div className="text-2xl font-bold text-orange-700">{caseAgeStats.moreThan6Months}</div>
                  </div>
                  
                  <div className="bg-red-100 rounded-lg p-4">
                    <div className="font-medium text-red-800 mb-1">More than 1 year</div>
                    <div className="text-2xl font-bold text-red-700">{caseAgeStats.moreThan1Year}</div>
                  </div>
                </div>
              </div>)}
              
              {/* Recent Cases below */}
              <div className="w-full">
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 h-full overflow-hidden">
                  <div className="border-b border-gray-200 p-6 flex justify-between items-center bg-gradient-to-r from-gray-50 to-white">
                    <h3 className="text-xl font-semibold text-gray-800">Recent Cases</h3>
                    <Link href="/cases" className="inline-flex items-center text-blue-600 hover:text-blue-900 font-medium text-sm hover:underline transition-colors">
                      View all cases
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                  <div className="p-6">
                    <div className="overflow-x-auto">
                      <table className="min-w-full">
                        <thead>
                          <tr className="bg-gray-50 border-b">
                            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Case ID</th>
                            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created Date</th>
                            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {recentCases.map((caseItem) => (
                            <tr key={caseItem.id} className="hover:bg-blue-50 transition-colors duration-150">
                              <td className="py-3.5 px-4 text-sm font-medium text-gray-900">{caseItem.code}</td>
                              <td className="py-3.5 px-4 text-sm text-gray-700">{caseItem.title}</td>
                              <td className="py-3.5 px-4 text-sm text-gray-500">{caseItem.createdAt?.toString().split('T')[0]} | {caseItem.createdAt?.toString().split('T')[1].split('.')[0]}</td>
                              <td className="py-3.5 px-4">
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                  caseItem.status === 'Active' ? 'bg-blue-100 text-blue-800' : 
                                  caseItem.status === 'Suspended' ? 'bg-red-100 text-black' : 
                                  'bg-green-100 text-green-800'
                                }`}>
                                  {caseItem.status === 'Closed' && (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                  )}
                                  {caseItem.status}
                                </span>
                              </td>
                              {user?.role === 'AC' || user?.role === 'Mukhtiarkar' ? (
                                <td className="py-3.5 px-4 flex items-center">
                                  <Link href={`/cases/${caseItem.id}/uploadreport`} className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors flex items-center gap-1 border border-blue-700 shadow-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                  </Link>
                                  <div className='mr-3'></div>
                                  <Link href={`/cases/${caseItem.id}`} className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors flex items-center gap-1 border border-blue-700 shadow-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                  </Link>
                                </td>
                              ) : 
                              <td className="py-3.5 px-4 flex items-center">
                                <Link href={`/cases/${caseItem.id}`} className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors flex items-center gap-1 border border-blue-700 shadow-sm">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                  </svg>
                                </Link>
                                <div className='mr-3'></div>
                                <Link href={`/cases/${caseItem.id}/edit`} className='px-3 py-1.5 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors flex items-center gap-1 border border-blue-700 shadow-sm'>
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                  </svg>
                                </Link>
                              </td>}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}