'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDownIcon, ChevronUpIcon, CalendarIcon, MapPinIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

interface CaseFilter {
  institutionDate: string;
  orderOfDate: string;
  taluka: string;
  deh?: string;
  title: string;
}

interface Case {
  id: string;
  code: string;
  title: string;
  status: string;
  dateOfInstitution: string;
  orderOfDate: string;
  nextDate: string;
  taluka: { name: string };
  deh: { name: string };
  description: string;
  mukhtiarkarACReportUploaded: boolean;
  evacueePropertyReportUploaded: boolean;
  barrageBranchReportUploaded: boolean;
  newspaperPublicationUploaded: boolean;
}

export default function PublicViewPage() {
  const [filters, setFilters] = useState<CaseFilter>({
    institutionDate: '',
    orderOfDate: '',
    taluka: '',
    deh: '',
    title: ''
  });
  const [cases, setCases] = useState<Case[]>([]);
  const [talukas, setTalukas] = useState([]);
  const [dehs, setDehs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [expandedCaseId, setExpandedCaseId] = useState<string | null>(null);

  useEffect(() => {
    const fetchTalukas = async () => {
      try {
        const response = await fetch('/api/talukas');
        if (response.ok) {
          const data = await response.json();
          setTalukas(data);
        }
      } catch (error) {
        console.error('Error fetching talukas:', error);
      }
    };
    fetchTalukas();
  }, []);

  useEffect(() => {
    if (filters.taluka) {
      const fetchDehs = async () => {
        try {
          const response = await fetch(`/api/dehs?talukaId=${filters.taluka}`);
          if (response.ok) {
            const data = await response.json();
            setDehs(data);
          }
        } catch (error) {
          console.error('Error fetching dehs:', error);
        }
      };
      fetchDehs();
    } else {
      setDehs([]);
    }
  }, [filters.taluka]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value,
      // Reset deh when taluka changes
      ...(name === 'taluka' && { deh: '' })
    }));
  };

  const handleSearch = async () => {
    // Validate required fields
    if (!filters.institutionDate || !filters.taluka || !filters.title) {
      alert('Please fill in all required fields (Institution Date, Title, and Taluka)');
      return;
    }
    
    setLoading(true);
    try {
      const queryParams = new URLSearchParams();
      if (filters.institutionDate) queryParams.append('institutionDate', filters.institutionDate);
      if (filters.taluka) queryParams.append('talukaId', filters.taluka);
      if (filters.deh) queryParams.append('dehId', filters.deh);

      const response = await fetch(`/api/cases/publicview?${queryParams}`);
      if (response.ok) {
        const data = await response.json();
        setCases(data);
      }
    } catch (error) {
      console.error('Error fetching cases:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleCaseExpansion = (caseId: string) => {
    setExpandedCaseId(expandedCaseId === caseId ? null : caseId);
  };

  const getStatusColor = (status: string) => {
    switch (status?.toLowerCase()) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Case Management Portal</h1>
              <p className="mt-2 text-sm text-gray-600">Track and monitor case progress in real-time</p>
            </div>
            <Link 
              href="/login"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {/* Filters Section */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Search Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Institution Date <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="date"
                  name="institutionDate"
                  value={filters.institutionDate}
                  onChange={handleFilterChange}
                  required
                  className="w-full rounded-md border border-gray-300 text-gray-600 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <CalendarIcon className="h-5 w-5 text-gray-400 absolute right-3 top-2.5 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Case Title <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="title"
                  value={filters.title}
                  onChange={handleFilterChange}
                  required
                  placeholder="Search by title"
                  className="w-full rounded-md border border-gray-300 text-gray-600 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <DocumentTextIcon className="h-5 w-5 text-gray-400 absolute right-3 top-2.5 pointer-events-none" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Taluka <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  name="taluka"
                  value={filters.taluka}
                  onChange={handleFilterChange}
                  required
                  className="w-full rounded-md border border-gray-300 text-gray-600 px-3 py-2 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select Taluka</option>
                  {talukas.map((taluka: any) => (
                    <option key={taluka.id} value={taluka.id}>
                      {taluka.name}
                    </option>
                  ))}
                </select>
                <MapPinIcon className="h-5 w-5 text-gray-400 absolute right-3 top-2.5 pointer-events-none" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Deh
              </label>
              <div className="relative">
                <select
                  name="deh"
                  value={filters.deh}
                  onChange={handleFilterChange}
                  className="w-full rounded-md border border-gray-300 text-gray-600 px-3 py-2 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:text-gray-500"
                  disabled={!filters.taluka}
                >
                  <option value="">Select Deh</option>
                  {dehs.map((deh: any) => (
                    <option key={deh.id} value={deh.id}>
                      {deh.name}
                    </option>
                  ))}
                </select>
                <MapPinIcon className="h-5 w-5 text-gray-400 absolute right-3 top-2.5 pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              onClick={handleSearch}
              disabled={loading}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Searching...
                </>
              ) : (
                'Search Cases'
              )}
            </button>
          </div>
        </div>

        {/* Cases List */}
        <div className="space-y-4">
          {cases.map((case_: Case) => (
            <div key={case_.id} className="bg-white rounded-lg shadow overflow-hidden">
              {/* Case Header */}
              <div 
                className="p-4 cursor-pointer hover:bg-gray-50 transition-colors duration-150"
                onClick={() => toggleCaseExpansion(case_.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <DocumentTextIcon className="h-6 w-6 text-gray-400" />
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">{case_.title || `Case ${case_.code}`}</h3>
                      <p className="text-sm text-gray-500">
                        Filed on {new Date(case_.dateOfInstitution).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(case_.status)}`}>
                      {case_.status}
                    </span>
                    {expandedCaseId === case_.id ? (
                      <ChevronUpIcon className="h-5 w-5 text-gray-400" />
                    ) : (
                      <ChevronDownIcon className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                </div>
              </div>

              {/* Expanded Case Details */}
              {expandedCaseId === case_.id && (
                <div className="border-t border-gray-200 p-4 bg-gray-50">
                  <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4">
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Location</dt>
                      <dd className="mt-1 text-sm text-gray-900">{case_.taluka.name} - {case_.deh.name}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Next Date</dt>
                      <dd className="mt-1 text-sm text-gray-900">
                        {case_.nextDate ? new Date(case_.nextDate).toLocaleDateString() : 'Not scheduled'}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Order Of Date</dt>
                      <dd className="mt-1 text-sm text-gray-900">
                        {case_.orderOfDate ? new Date(case_.orderOfDate).toLocaleDateString() : 'Not added'}
                      </dd>
                    </div>
                    <div className="col-span-2">
                      <dt className="text-sm font-medium text-gray-500">Case Description</dt>
                      <dd className="mt-1 text-sm text-gray-900">{case_.description || 'No description available'}</dd>
                    </div>
                    <div className="col-span-2">
                      <dt className="text-sm font-medium text-gray-500 mb-2">Documents Status</dt>
                      <dd className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center space-x-2">
                          <span className={`h-2.5 w-2.5 rounded-full ${case_.mukhtiarkarACReportUploaded ? 'bg-green-400' : 'bg-gray-300'}`}></span>
                          <span className="text-sm text-gray-900">Mukhtiarkar AC Report</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className={`h-2.5 w-2.5 rounded-full ${case_.evacueePropertyReportUploaded ? 'bg-green-400' : 'bg-gray-300'}`}></span>
                          <span className="text-sm text-gray-900">Evacuee Property Report</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className={`h-2.5 w-2.5 rounded-full ${case_.barrageBranchReportUploaded ? 'bg-green-400' : 'bg-gray-300'}`}></span>
                          <span className="text-sm text-gray-900">Barrage Branch Report</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className={`h-2.5 w-2.5 rounded-full ${case_.newspaperPublicationUploaded ? 'bg-green-400' : 'bg-gray-300'}`}></span>
                          <span className="text-sm text-gray-900">Newspaper Publication</span>
                        </div>
                      </dd>
                    </div>
                  </dl>
                </div>
              )}
            </div>
          ))}

          {cases.length === 0 && (
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <DocumentTextIcon className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">No cases found</h3>
              <p className="mt-1 text-sm text-gray-500">Try adjusting your search filters</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}