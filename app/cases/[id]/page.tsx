'use client';
import React, { useState, useEffect } from 'react';
import MainLayout from '@/app/components/layout/MainLayout';
import Link from 'next/link';
import ViewMemoModal from '@/app/components/cases/ViewMemoModal';
import { useParams } from 'next/navigation';
import { Cases } from '@/app/components/interface/types';
import { useAuth } from '@/app/context/AuthContext';

export default function CaseDetailPage() {
  const params = useParams();
  const id = params.id;

  const [caseData, setCaseData] = useState<Cases>({});
  const [reports, setReports] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshKey, setRefreshKey] = useState(0);
  const { user } = useAuth();

  useEffect(() => {
    async function fetchCase() {
      try {
        setLoading(true);
        const res = await fetch(`/api/cases/${id}`);
        
        if (!res.ok) {
          throw new Error(`Failed to fetch case: ${res.status}`);
        }
        
        const data = await res.json();
        setCaseData(data);
        
      } catch (err) {
        console.error('Error fetching case:', err);
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      fetchCase();
    }

    async function fetchReports() {
      try {
        const response = await fetch(`/api/reports/${id}`);
        if (response.ok) {
          const data = await response.json();
          setReports(data);
        }
      } catch (error) {
        console.error('Error fetching reports:', error);
      }
    }
  
    if (id) {
      fetchReports();
    }
  }, [id, refreshKey]);

  const [isUploading, setIsUploading] = useState(false);
  const [uploadingReportType, setUploadingReportType] = useState<string | null>(null);

  const handleUpload = async (reportType: string, file: File) => {
    if (!file) return;
    
    setIsUploading(true);
    setUploadingReportType(reportType);
    
    try {
      // Create form data
      const formData = new FormData();
      formData.append('file', file);
      formData.append('reportType', reportType);
      formData.append('caseId', id as string);
      
      // Upload the file
      const response = await fetch('/api/reports/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to upload report');
      }

      // Refresh the case data
      setRefreshKey(prev => prev + 1);
      alert('Report uploaded successfully!');
    } catch (error) {
      console.error('Error uploading report:', error);
      alert('Failed to upload report. Please try again.');
    } finally {
      setIsUploading(false);
      setUploadingReportType(null);
    }
  };

  // Create a ref for the hidden file input
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const [currentReportType, setCurrentReportType] = useState<string>('');

  // Function to trigger file input click
  const triggerFileInput = (reportType: string) => {
    setCurrentReportType(reportType);
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleUpload(currentReportType, e.target.files[0]);
      // Reset the input value so the same file can be selected again if needed
      e.target.value = '';
    }
  };

  return (
    <MainLayout>
      {loading ? (
        <div className="flex flex-col items-center justify-center h-64">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-600">Loading dashboard data...</p>
        </div>
      ) : (
        <div className="mb-8">
          
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <Link href="/cases" className="text-blue-600 hover:text-blue-800 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </Link>
              <h2 className="text-3xl font-bold text-gray-800">Case Details</h2>
            </div>
            <div className="flex space-x-3">
              {user?.role !== 'AC' && user?.role !== 'Mukhtiarkar' && (
                <Link 
                  href={`/cases/${params.id}/edit`}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Edit Case
                </Link>
              )}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-sm text-gray-500">Case ID</div>
                  <div className="text-xl font-bold text-gray-800">{caseData.code}</div>
                </div>
                <div className="flex items-center">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    caseData.status === 'Active' ? 'bg-green-100 text-green-800' :
                    caseData.status === 'Suspended' ? 'bg-red-100 text-black' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {caseData.status}
                  </span>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-4">
                <h3 className="text-xl font-bold text-gray-800">{caseData.title}</h3>
                <div className="w-full md:w-auto flex flex-col md:flex-row gap-2">
                  <div className="border border-blue-200 rounded-lg px-4 py-2 bg-blue-50 w-full md:w-auto">
                    <div className="text-xs text-blue-600 mb-1 text-left">Assigned To</div>
                    <div className="text-sm font-medium text-gray-700">
                      {caseData.userCases?.[0]?.assignedToUser ? (
                        <div className="flex items-center">
                          <span className="text-blue-700">{caseData.userCases[0].assignedToUser.name}</span>
                          <span className="ml-2 text-sm text-blue-600">({caseData.userCases[0].assignedToUser.role})</span>
                        </div>
                      ) : (
                        <span className="text-gray-500">Not assigned</span>
                      )}
                    </div>
                  </div>
                  
                  {caseData.forwardedToMukhtiarkarId && (
                    <div className="border border-green-200 rounded-lg px-4 py-2 bg-green-50 w-full md:w-auto">
                      <div className="text-xs text-green-600 mb-1 text-left">Forwarded To</div>
                      <div className="text-sm font-medium text-gray-700">
                        <div className="flex items-center">
                          <span className="text-green-700">
                            {caseData.forwardedToMukhtiarkar ? caseData.forwardedToMukhtiarkar.name : 'Mukhtiarkar'}
                          </span>
                          <span className="ml-2 text-sm text-green-600">(Mukhtiarkar)</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="text-sm font-medium text-gray-500 mb-1">Case Type</div>
                  <div className="text-gray-800">{caseData.caseType}</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-500 mb-1">Location</div>
                  <div className="text-gray-800">{caseData.location}</  div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="text-sm font-medium text-gray-500 mb-1">Taluka</div>
                  <div className="text-gray-800">{caseData.taluka?.name}</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-500 mb-1">Deh</div>
                  <div className="text-gray-800">{caseData.deh?.name}</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="text-sm font-medium text-gray-500 mb-1">Date Of Institution</div>
                  <div className="text-gray-800">{caseData.dateOfInstitution?.toString().split('T')[0]} | {caseData.dateOfInstitution?.toString().split('T')[1].split('.')[0]}</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-500 mb-1">Next Date</div>
                  <div className="text-gray-800">{caseData.nextDate?.toString().split('T')[0]} | {caseData.nextDate?.toString().split('T')[1].split('.')[0]}</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-500 mb-1">Order Of Date</div>
                  <div className="text-gray-800">{caseData.orderOfDate?.toString().split('T')[0]} | {caseData.orderOfDate?.toString().split('T')[1].split('.')[0]}</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="text-sm font-medium text-gray-500 mb-1">Case Created Date</div>
                  <div className="text-gray-800">{caseData.createdAt?.toString().split('T')[0]} | {caseData.createdAt?.toString().split('T')[1].split('.')[0]}</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-500 mb-1">Case Updated On</div>
                  <div className="text-gray-800">{caseData.updatedAt?.toString().split('T')[0]} | {caseData.updatedAt?.toString().split('T')[1].split('.')[0]}</div>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="text-sm font-medium text-gray-500 mb-1">Description</div>
                <div className="text-gray-800 whitespace-pre-line">{caseData.description}</div>
              </div>

              {/* Hidden file input */}
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                style={{ display: 'none' }}
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              />
              {/* Mukhtiarkar/AC Report */}
              <h3 className="block text-sm font-medium text-gray-700 mb-1">Required Reports</h3>
              <div className="flex items-center justify-between border rounded-lg p-4">
                <div className="flex items-center">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${caseData.mukhtiarkarACReportUploaded ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {caseData.mukhtiarkarACReportUploaded ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )}
                  </div>
                  <span className="font-medium text-gray-500">Mukhtiarkar/AC Report</span>
                </div>
                {/* Report forwarding flow visualization */}
                <div className="flex items-center">
                  {caseData.mukhtiarkarACReportUploaded && caseData.mukhtiarkarACReportPath && (
                    <>
                      <div className="hidden md:flex items-center mr-4">
                        {/* Mukhtiarkar */}
                        <div className="flex flex-col items-center">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-md transition-all duration-200 ${reports?.find(r => r.reportType === 'mukhtiarkarACReport')?.forwardedByMukhiarkar ? 'bg-green-100 text-green-600 border-2 border-green-500' : 'bg-gray-100 text-gray-600 border border-gray-300'}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                          <span className="text-xs font-medium mt-1 text-gray-700">Mukhtiarkar</span>
                        </div>
                        
                        {/* Arrow 1 */}
                        <div className="relative mx-2 flex flex-col items-center">
                          <div className="h-7 w-14 flex items-center justify-center">
                            <div className={`h-2 w-full rounded-full ${reports?.find(r => r.reportType === 'mukhtiarkarACReport')?.forwardedByMukhiarkar ? 'bg-green-500' : 'bg-gray-200'}`}></div>
                            <div className={`absolute right-0 w-4 h-4 rounded-full flex items-center justify-center ${reports?.find(r => r.reportType === 'mukhtiarkarACReport')?.forwardedByMukhiarkar ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-400'}`}>
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                          </div>
                          {reports?.find(r => r.reportType === 'mukhtiarkarACReport')?.forwardedByMukhiarkar && (
                            <span className="text-xs font-medium mt-1 text-green-600">Forwarded</span>
                          )}
                        </div>
                        
                        {/* AC */}
                        <div className="flex flex-col items-center">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-md transition-all duration-200 ${
                            reports?.find(r => r.reportType === 'mukhtiarkarACReport')?.forwardedByAC 
                              ? 'bg-green-100 text-green-600 border-2 border-green-500' 
                              : reports?.find(r => r.reportType === 'mukhtiarkarACReport')?.forwardedByMukhiarkar 
                                ? 'bg-green-100 text-green-600 border-2 border-green-500' 
                                : 'bg-gray-100 text-gray-600 border border-gray-300'
                          }`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                          <span className="text-xs font-medium mt-1 text-gray-700">AC</span>
                        </div>
                        
                        {/* Arrow 2 */}
                        <div className="relative mx-2 flex flex-col items-center">
                          <div className="h-7 w-14 flex items-center justify-center">
                            <div className={`h-2 w-full rounded-full ${reports?.find(r => r.reportType === 'mukhtiarkarACReport')?.forwardedByAC ? 'bg-green-500' : 'bg-gray-200'}`}></div>
                            <div className={`absolute right-0 w-4 h-4 rounded-full flex items-center justify-center ${reports?.find(r => r.reportType === 'mukhtiarkarACReport')?.forwardedByAC ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-400'}`}>
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                          </div>
                          {reports?.find(r => r.reportType === 'mukhtiarkarACReport')?.forwardedByAC && (
                            <span className="text-xs font-medium mt-1 text-green-600">Forwarded</span>
                          )}
                        </div>
                        
                        {/* DD */}
                        <div className="flex flex-col items-center">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-md transition-all duration-200 ${
                            reports?.find(r => r.reportType === 'mukhtiarkarACReport')?.forwardedByAC 
                              ? 'bg-green-100 text-green-600 border-2 border-green-500' 
                              : 'bg-gray-100 text-gray-600 border border-gray-300'
                          }`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                          <span className="text-xs font-medium mt-1 text-gray-700">DD</span>
                        </div>
                      </div>
                    </>
                  )}
                </div>
                <div className="flex items-center justify-between gap-2">
                  {caseData.mukhtiarkarACReportUploaded && caseData.mukhtiarkarACReportPath && (
                    <a 
                      href={caseData.mukhtiarkarACReportPath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700 flex items-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download
                    </a>
                  )}
                  {(user?.role === 'AC' || user?.role === 'Mukhtiarkar') && (
                    <button 
                      className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                      onClick={() => triggerFileInput('mukhtiarkarACReport')}
                      disabled={isUploading}
                    >
                      {isUploading && uploadingReportType === 'mukhtiarkarACReport' ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Uploading...
                        </span>
                      ) : 'Upload'}
                    </button>
                  )}
                </div>
              </div>

              {/* Evacuee Property Report */}
              <div className="flex items-center justify-between border rounded-lg p-4">
                <div className="flex items-center">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${caseData.evacueePropertyReportUploaded ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {caseData.evacueePropertyReportUploaded ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )}
                  </div>
                  <span className="font-medium text-gray-500">Evacuee Property Report</span>
                </div>
                {/* Report forwarding flow visualization */}
                <div className="flex items-center">
                  {caseData.evacueePropertyReportUploaded && caseData.evacueePropertyReportPath && (
                    <>
                      <div className="hidden md:flex items-center mr-4">
                        {/* Mukhtiarkar */}
                        <div className="flex flex-col items-center">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-md transition-all duration-200 ${reports?.find(r => r.reportType === 'evacueePropertyReport')?.forwardedByMukhiarkar ? 'bg-green-100 text-green-600 border-2 border-green-500' : 'bg-gray-100 text-gray-600 border border-gray-300'}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                          <span className="text-xs font-medium mt-1 text-gray-700">Mukhtiarkar</span>
                        </div>
                        
                        {/* Arrow 1 */}
                        <div className="relative mx-2 flex flex-col items-center">
                          <div className="h-7 w-14 flex items-center justify-center">
                            <div className={`h-2 w-full rounded-full ${reports?.find(r => r.reportType === 'evacueePropertyReport')?.forwardedByMukhiarkar ? 'bg-green-500' : 'bg-gray-200'}`}></div>
                            <div className={`absolute right-0 w-4 h-4 rounded-full flex items-center justify-center ${reports?.find(r => r.reportType === 'evacueePropertyReport')?.forwardedByMukhiarkar ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-400'}`}>
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                          </div>
                          {reports?.find(r => r.reportType === 'evacueePropertyReport')?.forwardedByMukhiarkar && (
                            <span className="text-xs font-medium mt-1 text-green-600">Forwarded</span>
                          )}
                        </div>
                        
                        {/* AC */}
                        <div className="flex flex-col items-center">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-md transition-all duration-200 ${
                            reports?.find(r => r.reportType === 'evacueePropertyReport')?.forwardedByAC 
                              ? 'bg-green-100 text-green-600 border-2 border-green-500' 
                              : reports?.find(r => r.reportType === 'evacueePropertyReport')?.forwardedByMukhiarkar 
                                ? 'bg-green-100 text-green-600 border-2 border-green-500' 
                                : 'bg-gray-100 text-gray-600 border border-gray-300'
                          }`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                          <span className="text-xs font-medium mt-1 text-gray-700">AC</span>
                        </div>
                        
                        {/* Arrow 2 */}
                        <div className="relative mx-2 flex flex-col items-center">
                          <div className="h-7 w-14 flex items-center justify-center">
                            <div className={`h-2 w-full rounded-full ${reports?.find(r => r.reportType === 'evacueePropertyReport')?.forwardedByAC ? 'bg-green-500' : 'bg-gray-200'}`}></div>
                            <div className={`absolute right-0 w-4 h-4 rounded-full flex items-center justify-center ${reports?.find(r => r.reportType === 'evacueePropertyReport')?.forwardedByAC ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-400'}`}>
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                          </div>
                          {reports?.find(r => r.reportType === 'evacueePropertyReport')?.forwardedByAC && (
                            <span className="text-xs font-medium mt-1 text-green-600">Forwarded</span>
                          )}
                        </div>
                        
                        {/* DD */}
                        <div className="flex flex-col items-center">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-md transition-all duration-200 ${
                            reports?.find(r => r.reportType === 'evacueePropertyReport')?.forwardedByAC 
                              ? 'bg-green-100 text-green-600 border-2 border-green-500' 
                              : 'bg-gray-100 text-gray-600 border border-gray-300'
                          }`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                          <span className="text-xs font-medium mt-1 text-gray-700">DD</span>
                        </div>
                      </div>
                    </>
                  )}
                </div>
                <div className="flex items-center justify-between gap-2">
                  {caseData.evacueePropertyReportUploaded && caseData.evacueePropertyReportPath && (
                      <a 
                        href={caseData.evacueePropertyReportPath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700 flex items-center"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download
                      </a>
                  )}
                  {(user?.role === 'AC' || user?.role === 'Mukhtiarkar') && (
                    <button 
                      className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                      onClick={() => triggerFileInput('evacueePropertyReport')}
                      disabled={isUploading}
                    >
                      {isUploading && uploadingReportType === 'evacueePropertyReport' ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Uploading...
                        </span>
                      ) : 'Upload'}
                    </button>
                  )}
                </div>
              </div>

              {/* Barrage Branch Report */}
              <div className="flex items-center justify-between border rounded-lg p-4">
                <div className="flex items-center">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${caseData.barrageBranchReportUploaded ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {caseData.barrageBranchReportUploaded ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )}
                  </div>
                  <span className="font-medium text-gray-500">Barrage Branch Report</span>
                </div>
                {/* Report forwarding flow visualization */}
                <div className="flex items-center">
                  {caseData.barrageBranchReportUploaded && caseData.barrageBranchReportPath && (
                    <>
                      <div className="hidden md:flex items-center mr-4">
                        {/* Mukhtiarkar */}
                        <div className="flex flex-col items-center">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-md transition-all duration-200 ${reports?.find(r => r.reportType === 'barrageBranchReport')?.forwardedByMukhiarkar ? 'bg-green-100 text-green-600 border-2 border-green-500' : 'bg-gray-100 text-gray-600 border border-gray-300'}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                          <span className="text-xs font-medium mt-1 text-gray-700">Mukhtiarkar</span>
                        </div>
                        
                        {/* Arrow 1 */}
                        <div className="relative mx-2 flex flex-col items-center">
                          <div className="h-7 w-14 flex items-center justify-center">
                            <div className={`h-2 w-full rounded-full ${reports?.find(r => r.reportType === 'barrageBranchReport')?.forwardedByMukhiarkar ? 'bg-green-500' : 'bg-gray-200'}`}></div>
                            <div className={`absolute right-0 w-4 h-4 rounded-full flex items-center justify-center ${reports?.find(r => r.reportType === 'barrageBranchReport')?.forwardedByMukhiarkar ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-400'}`}>
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                          </div>
                          {reports?.find(r => r.reportType === 'barrageBranchReport')?.forwardedByMukhiarkar && (
                            <span className="text-xs font-medium mt-1 text-green-600">Forwarded</span>
                          )}
                        </div>
                        
                        {/* AC */}
                        <div className="flex flex-col items-center">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-md transition-all duration-200 ${
                            reports?.find(r => r.reportType === 'barrageBranchReport')?.forwardedByAC 
                              ? 'bg-green-100 text-green-600 border-2 border-green-500' 
                              : reports?.find(r => r.reportType === 'barrageBranchReport')?.forwardedByMukhiarkar 
                                ? 'bg-green-100 text-green-600 border-2 border-green-500' 
                                : 'bg-gray-100 text-gray-600 border border-gray-300'
                          }`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                          <span className="text-xs font-medium mt-1 text-gray-700">AC</span>
                        </div>
                        
                        {/* Arrow 2 */}
                        <div className="relative mx-2 flex flex-col items-center">
                          <div className="h-7 w-14 flex items-center justify-center">
                            <div className={`h-2 w-full rounded-full ${reports?.find(r => r.reportType === 'barrageBranchReport')?.forwardedByAC ? 'bg-green-500' : 'bg-gray-200'}`}></div>
                            <div className={`absolute right-0 w-4 h-4 rounded-full flex items-center justify-center ${reports?.find(r => r.reportType === 'barrageBranchReport')?.forwardedByAC ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-400'}`}>
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                          </div>
                          {reports?.find(r => r.reportType === 'barrageBranchReport')?.forwardedByAC && (
                            <span className="text-xs font-medium mt-1 text-green-600">Forwarded</span>
                          )}
                        </div>
                        
                        {/* DD */}
                        <div className="flex flex-col items-center">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-md transition-all duration-200 ${
                            reports?.find(r => r.reportType === 'barrageBranchReport')?.forwardedByAC 
                              ? 'bg-green-100 text-green-600 border-2 border-green-500' 
                              : 'bg-gray-100 text-gray-600 border border-gray-300'
                          }`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                          <span className="text-xs font-medium mt-1 text-gray-700">DD</span>
                        </div>
                      </div>
                    </>
                  )}
                </div>
                <div className="flex items-center justify-between gap-2">
                  {caseData.barrageBranchReportUploaded && caseData.barrageBranchReportPath && (
                    <a 
                      href={caseData.barrageBranchReportPath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700 flex items-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download
                    </a>
                  )}
                  {(user?.role === 'AC' || user?.role === 'Mukhtiarkar') && (
                    <button 
                      className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                      onClick={() => triggerFileInput('barrageBranchReport')}
                      disabled={isUploading}
                    >
                      {isUploading && uploadingReportType === 'barrageBranchReport' ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Uploading...
                        </span>
                      ) : 'Upload'}
                    </button>
                  )}
                </div>
              </div>

              {/* Newspaper Publication */}
              <div className="flex items-center justify-between border rounded-lg p-4">
                <div className="flex items-center">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${caseData.newspaperPublicationUploaded ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {caseData.newspaperPublicationUploaded ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )}
                  </div>
                  <span className="font-medium text-gray-500">Newspaper Publication</span>
                </div>
                {/* Report forwarding flow visualization */}
                <div className="flex items-center">
                  {caseData.newspaperPublicationUploaded && caseData.newspaperPublicationPath && (
                    <>
                      <div className="hidden md:flex items-center mr-4">
                        {/* Mukhtiarkar */}
                        <div className="flex flex-col items-center">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-md transition-all duration-200 ${reports?.find(r => r.reportType === 'newspaperPublication')?.forwardedByMukhiarkar ? 'bg-green-100 text-green-600 border-2 border-green-500' : 'bg-gray-100 text-gray-600 border border-gray-300'}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                          <span className="text-xs font-medium mt-1 text-gray-700">Mukhtiarkar</span>
                        </div>
                        
                        {/* Arrow 1 */}
                        <div className="relative mx-2 flex flex-col items-center">
                          <div className="h-7 w-14 flex items-center justify-center">
                            <div className={`h-2 w-full rounded-full ${reports?.find(r => r.reportType === 'newspaperPublication')?.forwardedByMukhiarkar ? 'bg-green-500' : 'bg-gray-200'}`}></div>
                            <div className={`absolute right-0 w-4 h-4 rounded-full flex items-center justify-center ${reports?.find(r => r.reportType === 'newspaperPublication')?.forwardedByMukhiarkar ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-400'}`}>
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                          </div>
                          {reports?.find(r => r.reportType === 'newspaperPublication')?.forwardedByMukhiarkar && (
                            <span className="text-xs font-medium mt-1 text-green-600">Forwarded</span>
                          )}
                        </div>
                        
                        {/* AC */}
                        <div className="flex flex-col items-center">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-md transition-all duration-200 ${
                            reports?.find(r => r.reportType === 'newspaperPublication')?.forwardedByAC 
                              ? 'bg-green-100 text-green-600 border-2 border-green-500' 
                              : reports?.find(r => r.reportType === 'newspaperPublication')?.forwardedByMukhiarkar 
                                ? 'bg-green-100 text-green-600 border-2 border-green-500' 
                                : 'bg-gray-100 text-gray-600 border border-gray-300'
                          }`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                          <span className="text-xs font-medium mt-1 text-gray-700">AC</span>
                        </div>
                        
                        {/* Arrow 2 */}
                        <div className="relative mx-2 flex flex-col items-center">
                          <div className="h-7 w-14 flex items-center justify-center">
                            <div className={`h-2 w-full rounded-full ${reports?.find(r => r.reportType === 'newspaperPublication')?.forwardedByAC ? 'bg-green-500' : 'bg-gray-200'}`}></div>
                            <div className={`absolute right-0 w-4 h-4 rounded-full flex items-center justify-center ${reports?.find(r => r.reportType === 'newspaperPublication')?.forwardedByAC ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-400'}`}>
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                          </div>
                          {reports?.find(r => r.reportType === 'newspaperPublication')?.forwardedByAC && (
                            <span className="text-xs font-medium mt-1 text-green-600">Forwarded</span>
                          )}
                        </div>
                        
                        {/* DD */}
                        <div className="flex flex-col items-center">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-md transition-all duration-200 ${
                            reports?.find(r => r.reportType === 'newspaperPublication')?.forwardedByAC 
                              ? 'bg-green-100 text-green-600 border-2 border-green-500' 
                              : 'bg-gray-100 text-gray-600 border border-gray-300'
                          }`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                          <span className="text-xs font-medium mt-1 text-gray-700">DD</span>
                        </div>
                      </div>
                    </>
                  )}
                </div>
                <div className="flex items-center justify-between gap-2">
                  {caseData.newspaperPublicationUploaded && caseData.newspaperPublicationPath && (
                    <a 
                      href={caseData.newspaperPublicationPath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700 flex items-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download
                    </a>
                  )}
                  {(user?.role === 'AC' || user?.role === 'Mukhtiarkar') && (
                    <button 
                      className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                      onClick={() => triggerFileInput('newspaperPublication')}
                      disabled={isUploading}
                    >
                      {isUploading && uploadingReportType === 'newspaperPublication' ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Uploading...
                        </span>
                      ) : 'Upload'}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800">Memo Of Complaint</h3>
            </div>
            <div className="p-6">
              {caseData.memos != null && caseData.memos.length === 0 ? (
                <p className="text-gray-500">No memo of complaint added to this case.</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date Collected</th>
                        <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {caseData.memos != null ? caseData.memos.map(memo => (
                        <tr key={memo.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{memo.code}</td>
                          <td className="px-6 py-4 text-sm text-gray-500">
                            <span title={memo.description}>
                              {memo.description != null ? memo.description.length > 50 
                                ? `${memo.description.substring(0, 50)}...` 
                                : memo.description : ''}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{memo.dateCollected?.toString().split('T')[0]} | {memo.dateCollected?.toString().split('T')[1].split('.')[0]}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-right">
                            <div className="flex justify-end space-x-3">
                              <ViewMemoModal memo={memo} />
                            </div>
                          </td>
                        </tr>
                      )): []}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>

          <div className="mt-8 bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-800">Case Notes</h3>
              </div>
            </div>
            <div className="p-6">
              {caseData.notes?.length === 0 ? (
                <p className="text-gray-500">No notes added to this case.</p>
              ) : (
                <div className="space-y-4">
                  {caseData.notes?.map(note => (
                    <div key={note.id} className="bg-gray-50 p-4 rounded-md">
                      <div className="flex justify-between items-start mb-2">
                        <div className="font-medium text-gray-800">{note.title}</div>
                        <div className="text-xs text-gray-500">{note.noteAddedOn?.toString().split('T')[0]} | {note.noteAddedOn?.toString().split('T')[1].split('.')[0]}</div>
                      </div>
                      <div className="text-gray-700 whitespace-pre-line">{note.content}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </MainLayout>
  )
};
