'use client';
import React, { useState, useEffect } from 'react';
import MainLayout from '@/app/components/layout/MainLayout';
import Link from 'next/link';
import AddMemoModal from '@/app/components/cases/AddMemoModal';
import AddNoteModal from '@/app/components/cases/AddNoteModal';
import { useRouter } from 'next/navigation';
import { useAuth } from "@/app/context/AuthContext";
import WithRoleAccess from '@/app/components/auth/withRoleAccess';

// Define User type
type User = {
  id: string;
  name: string;
  role: string;
  designation: string;
};

export default function NewCasePage() {
  const getCurrentLocalDatetime = (): string => {
    const now = new Date();
    const localDate = new Date(now.getTime() - now.getTimezoneOffset() * 60000);
    return localDate.toISOString().slice(0, 16);
  };

  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [assignedToUserId, setAssignedUserId] = useState<string>('');
  const [formData, setFormData] = useState({
    code: `CASE-${Date.now()}` as string,
    caseType: '' as string,
    // priority: 'Low' as string,
    title: '' as string,
    location: '' as string,
    talukaId: '' as string,
    dehId: '' as string,
    nextDate: getCurrentLocalDatetime() as string,
    dateOfInstitution: getCurrentLocalDatetime() as string,
    orderOfDate: getCurrentLocalDatetime() as string,
    description: '' as string,
    //involvedOfficers: [] as Array<{id?: string, code: string, name: string, badge: string}>,
    //involvedPersons: [] as Array<{ id?: string, code: string, name: string, role: string, contact: string, addedOn: string }>,
    memos: [] as Array<{ id?: string, code: string, file: File, description: string, dateCollected: string }>,
    notes: [] as Array<{ id?: string, code: string, title: string, content: string, noteAddedOn: string }>,
  });

  const { user } = useAuth();

  // Fetch users with roles AC or Mukhtiarkar
  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch('/api/users?role=AC');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    }
    
    fetchUsers();
  }, []);

  // Add state for tracking added items
  //const [officers, setOfficers] = useState<Array<{ id?: string, code: string, name: string, badge: string }>>([]);
  //const [persons, setPersons] = useState<Array<{ id?: string, code: string, name: string, role: string, contact: string, addedOn: string }>>([]);
  const [memos, setMemos] = useState<Array<{ id?: string, code: string, file: File, description: string, dateCollected: string }>>([]);
  const [notes, setNotes] = useState<Array<{ id?: string, code: string, title: string, content: string, noteAddedOn: string }>>([]);

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  // Handler functions for adding items
  // const handleOfficerAdded = (newOfficer: { id?: string, code: string, name: string, badge: string }) => {
  //   setOfficers([...officers, newOfficer]);
  // };

  // const handlePersonAdded = (newPerson: { id?: string, code: string, name: string, role: string, contact: string, addedOn: string }) => {
  //   setPersons([...persons, newPerson]);
  // };

  const handleMemoAdded = (newMemo: { id?: string, code: string, file: File, description: string, dateCollected: string }) => {
    setMemos([...memos, newMemo]);
  };

  const handleNoteAdded = (newNote: { id?: string, code: string, title: string, content: string, noteAddedOn: string }) => {
    setNotes([...notes, newNote]);
  };

  // Handler functions for removing items
  // const handleRemoveOfficer = (officerId: string) => {
  //   setOfficers(officers.filter(officer => officer.id !== officerId));
  // };

  // const handleRemovePerson = (personId: string) => {
  //   setPersons(persons.filter(person => person.id !== personId));
  // };

  const handleRemoveMemo = (memoId: string) => {
    setMemos(memos.filter(item => item.id !== memoId));
  };

  const handleRemoveNote = (noteId: string) => {
    setNotes(notes.filter(item => item.id!== noteId));
  };

  // Add these new state variables at the top with other state declarations
  const [talukas, setTalukas] = useState<Array<{ id: string; name: string }>>([]);
  const [dehs, setDehs] = useState<Array<{ id: string; name: string; talukaId: string }>>([]);
  const [selectedTaluka, setSelectedTaluka] = useState<string>('');
  const [selectedDeh, setSelectedDeh] = useState<string>('');

  // Add these new useEffects after your existing useEffects
  useEffect(() => {
    async function fetchTalukas() {
      try {
        const response = await fetch('/api/talukas');
        if (!response.ok) {
          throw new Error('Failed to fetch talukas');
        }
        const data = await response.json();
        setTalukas(data);
      } catch (error) {
        console.error('Error fetching talukas:', error);
      }
    }
    
    fetchTalukas();
  }, []);

  useEffect(() => {
    async function fetchDehs() {
      if (!selectedTaluka) {
        setDehs([]);
        return;
      }
      
      try {
        const response = await fetch(`/api/dehs?talukaId=${selectedTaluka}`);
        if (!response.ok) {
          throw new Error('Failed to fetch dehs');
        }
        const data = await response.json();
        setDehs(data);
      } catch (error) {
        console.error('Error fetching dehs:', error);
      }
    }
    
    fetchDehs();
  }, [selectedTaluka]);

  // Add these new handlers before your existing handlers
  const handleTalukaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const talukaId = e.target.value;
    setSelectedTaluka(talukaId);
    setSelectedDeh(''); // Reset deh selection when taluka changes
    setFormData(prev => ({
      ...prev,
      talukaId: talukas.find(t => t.id === talukaId)?.id || ''
    }));
  };

  const handleDehChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const dehId = e.target.value;
    setSelectedDeh(dehId);
    const selectedDehName = dehs.find(d => d.id === dehId)?.name || '';
    const selectedTalukaName = talukas.find(t => t.id === selectedTaluka)?.name || '';
    setFormData(prev => ({
      ...prev,
      dehId: dehs.find(t => t.id === dehId)?.id || ''
    }));
  };


  // Handle form submission
  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      
      //First, create the case
      const caseResponse = await fetch('/api/cases', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }, 
        body: JSON.stringify({
          code: formData.code,
          caseType: formData.caseType,
          // priority: formData.priority,
          title: formData.title,
          location: formData.location,
          nextDate: formData.nextDate,
          dateOfInstitution: formData.dateOfInstitution,
          orderOfDate: formData.orderOfDate,
          description: formData.description,
          status: 'Active',
          assignedToUserId: assignedToUserId || null,
          userId: user?.id,
          talukaId: formData.talukaId,
          dehId: formData.dehId,
          // involvedOfficers: officers.map(officer => ({
          //   code: officer.code,
          //   name: officer.name,
          //   badge: officer.badge,
          // })),
          // involvedPersons: persons.map(person => ({
          //   code: person.code,
          //   name: person.name,
          //   role: person.role,
          //   contact: person.contact,
          //   addedOn: person.addedOn,
          // })),
          memos: memos.map(memo => ({
            code: memo.code,
            file: memo.file,
            description: memo.description,
            dateCollected: memo.dateCollected,
          })),
          notes: notes.map(note=>({
            code: note.code,
            title: note.title,
            content: note.content,
            noteAddedOn: note.noteAddedOn,
          })),
        }),
      });

      if (!caseResponse.ok) {
        const errorData = await caseResponse.json().catch(() => ({}));
        console.error('Server response:', errorData);
        throw new Error(`Failed to create case: ${caseResponse.status} ${caseResponse.statusText}${errorData.error ? ` - ${errorData.error}` : ''}`);
      }

      const caseData = await caseResponse.json();
      router.push(`/cases/${caseData.id}`);
    }
    catch (error) {
      console.error('Error creating case:', error);
    }
    finally {
      setIsSubmitting(false);
    }
  }

  return (
    <WithRoleAccess allowedRoles={['DD', 'Admin']}>
      <MainLayout>
        <div className="mb-8">
          <div className="flex items-center mb-6">
            <Link href="/" className="text-blue-600 hover:text-blue-800 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </Link>
            <h2 className="text-3xl font-bold text-gray-800">Create New Case</h2>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="caseType" className="block text-sm font-medium text-gray-700 mb-1">Case Type</label>
                  <select 
                    id="caseType" 
                    value={formData.caseType}
                    onChange={handleInputChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-black"
                  >
                    <option value="">Select a case type</option>
                    <option value="Reconstruction or Rewriting">Reconstruction or Rewriting</option>
                    <option value="Blocked Entry">Blocked Entry</option>
                    <option value="Appeal against Partition">Appeal against Partition</option>
                    <option value="Appeal against Foti Khata">Appeal against Foti Khata</option>
                    <option value="Appeal against Cancellation or any Mutation">Appeal against Cancellation or any Mutation</option>
                    <option value="Miscellaneous">Miscellaneous</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="assignedUser" className="block text-sm font-medium text-gray-700 mb-1">Assign To</label>
                  <select 
                    id="assignedUser" 
                    value={assignedToUserId}
                    onChange={(e) => setAssignedUserId(e.target.value)}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-black"
                  >
                    <option value="">Select an officer</option>
                    {users.map((user) => (
                      <option key={user.id} value={user.id}>
                        {user.name} ({user.designation})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Case Title</label>
                <input 
                  type="text" 
                  id="title" 
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Enter a descriptive title for the case"
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-black"
                />
              </div>

              {/* Add Taluka and Deh dropdowns before location field */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="taluka" className="block text-sm font-medium text-gray-700 mb-1">Taluka</label>
                  <select 
                    id="taluka" 
                    value={selectedTaluka}
                    onChange={handleTalukaChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-black"
                  >
                    <option value="">Select a Taluka</option>
                    {talukas.map((taluka) => (
                      <option key={taluka.id} value={taluka.id}>
                        {taluka.name}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="deh" className="block text-sm font-medium text-gray-700 mb-1">Deh</label>
                  <select 
                    id="deh" 
                    value={selectedDeh}
                    onChange={handleDehChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-black"
                    disabled={!selectedTaluka}
                  >
                    <option value="">Select a Deh</option>
                    {dehs.map((deh) => (
                      <option key={deh.id} value={deh.id}>
                        {deh.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <input 
                  type="text" 
                  id="location" 
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="Enter the location where the incident occurred"
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-black"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div>
                  <label htmlFor="dateOfInstitution" className="block text-sm font-medium text-gray-700 mb-1">Date Of Institution</label>
                  <input 
                    type="datetime-local" 
                    id="dateOfInstitution" 
                    value={formData.dateOfInstitution}
                    onChange={handleInputChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-black"
                  />
                </div>
                
                <div>
                  <label htmlFor="nextDate" className="block text-sm font-medium text-gray-700 mb-1">Next Date</label>
                  <input 
                    type="datetime-local" 
                    id="nextDate" 
                    value={formData.nextDate}
                    onChange={handleInputChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-black"
                  />
                </div>

                <div>
                  <label htmlFor="orderOfDate" className="block text-sm font-medium text-gray-700 mb-1">Order Of Date</label>
                  <input 
                    type="datetime-local" 
                    id="orderOfDate" 
                    value={formData.orderOfDate}
                    onChange={handleInputChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-black"
                  />
                </div>
              </div>

              <div className="mb-6">
                <h3 className="block text-sm font-medium text-gray-700 mb-1">Required Reports</h3>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <div className="flex flex-col space-y-3">
                    <div className="flex items-center">
                      <label htmlFor="mukhtiarkarACReport" className="ml-2 text-sm font-medium text-gray-900">
                        Report of Mukhtiarkar and AC
                      </label>
                    </div>
                    
                    <div className="flex items-center">
                      <label htmlFor="evacueePropertyReport" className="ml-2 text-sm font-medium text-gray-900">
                        Report of Evacuee Property Branch
                      </label>
                    </div>
                    
                    <div className="flex items-center">
                      <label htmlFor="barrageBranchReport" className="ml-2 text-sm font-medium text-gray-900">
                        Report of Barrage Branch
                      </label>
                    </div>
                    
                    <div className="flex items-center">
                      <label htmlFor="newspaperPublication" className="ml-2 text-sm font-medium text-gray-900">
                        Publication in Newspaper
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea 
                  id="description" 
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={5}
                  placeholder="Provide a detailed description of the incident"
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-black"
                ></textarea>
              </div>

              {/* <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-800 mb-3">Involved Officers</h3>
                <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-medium text-gray-700">
                      {officers.length === 0 ? "No officers added yet" : `${officers.length} officer(s) assigned`}
                    </span>
                    <AddOfficerModal onOfficerAdded={handleOfficerAdded}/>
                  </div>
                  
                  {officers.length > 0 && (
                    <div className="space-y-3">
                      {officers.map(officer => (
                        <div key={officer.code} className="flex items-center justify-between bg-white p-3 rounded shadow-sm">
                          <div>
                            <div className="font-medium text-gray-600">{officer.name}</div>
                            <div className="text-sm text-gray-500">Badge: {officer.badge}</div>
                          </div>
                          <button 
                            type="button" 
                            onClick={() => handleRemoveOfficer(officer.code)}
                            className="text-red-600 hover:text-red-800"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-800 mb-3">Involved Persons</h3>
                <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-medium text-gray-700">
                      {persons.length === 0 ? "No persons added yet" : `${persons.length} person(s) involved`}
                    </span>
                    <AddPersonModal onPersonAdded={handlePersonAdded} />
                  </div>
                  
                  {persons.length > 0 && (
                    <div className="space-y-3">
                      {persons.map(person => (
                        <div key={person.code} className="flex items-center justify-between bg-white p-3 rounded shadow-sm">
                          <div>
                            <div className="font-medium text-gray-600">{person.name}</div>
                            <div className="text-sm text-gray-500">{person.role} • {person.contact}</div>
                          </div>
                          <button 
                            type="button" 
                            onClick={() => handleRemovePerson(person.code)}
                            className="text-red-600 hover:text-red-800"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div> */}

              {/* <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-800 mb-3">Memo Of Complaint</h3>
                <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-medium text-gray-700">
                      {memos.length === 0 ? "No Memo of complaint added yet" : `${memos.length} memo of complaint item(s) added`}
                    </span>
                    <AddMemoModal onMemoAdded={handleMemoAdded}/>
                  </div>
                  
                  {memos.length > 0 && (
                    <div className="space-y-3">
                      {memos.map(item => (
                        <div key={item.code} className="flex items-center justify-between bg-white p-3 rounded shadow-sm">
                          <div>
                            <div className="font-medium text-gray-600">{item.file.name}</div>
                            <div className="text-sm text-gray-500">
                              {item.description.length > 50 
                                ? `${item.description.substring(0, 50)}...` 
                                : item.description} • {item.dateCollected}
                            </div>
                          </div>
                          <button 
                            type="button" 
                            onClick={() => handleRemoveMemo(item.code)}
                            className="text-red-600 hover:text-red-800"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div> */}

              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-800 mb-3">Add Note</h3>
                <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-medium text-gray-700">
                      {notes.length === 0 ? "No note added yet" : `${notes.length} notes item(s) added`}
                    </span>
                    <AddNoteModal onNoteAdded={handleNoteAdded}/>
                  </div>
                  
                  {notes.length > 0 && (
                    <div className="space-y-3">
                      {notes.map(item => (
                        <div key={item.code} className="flex items-center justify-between bg-white p-3 rounded shadow-sm">
                          <div>
                            <div className="font-medium text-gray-600">{item.title}</div>
                            <div className="text-sm text-gray-500">
                              {item.content.length > 50 
                                ? `${item.content.substring(0, 50)}...` 
                                : item.content} • {item.content}
                            </div>
                          </div>
                          <button 
                            type="button" 
                            onClick={() => handleRemoveNote(item.code)}
                            className="text-red-600 hover:text-red-800"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <Link 
                  href="/"
                  className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Cancel
                </Link>
                <button 
                  type="submit"
                  onClick={handleSubmit}
                  disabled={isSubmitting} // Disable the button while submitting
                  className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  {isSubmitting ? 'Creating...': 'Create Case'} 
                </button>
              </div>
            </div>
          </div>
      </MainLayout>
    </WithRoleAccess>
  )
};
