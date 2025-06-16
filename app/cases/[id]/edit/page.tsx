'use client';
import React, { useState, useEffect } from 'react';
import MainLayout from '@/app/components/layout/MainLayout';
import Link from 'next/link';
import AddMemoModal from '@/app/components/cases/AddMemoModal';
import AddNoteModal from '@/app/components/cases/AddNoteModal';
import EditMemoModal from '@/app/components/cases/EditMemoModal';
import { useParams } from 'next/navigation';
import { Cases, Memos, Notes } from '@/app/components/interface/types';
import WithRoleAccess from '@/app/components/auth/withRoleAccess';
import Image from 'next/image';

export default function EditCasePage() {
  const getCurrentLocalDatetime = (): string => {
    const now = new Date();
    const localDate = new Date(now.getTime() - now.getTimezoneOffset() * 60000);
    return localDate.toISOString().slice(0, 16);
  };

  const params = useParams();
  const id = params.id;

  const [caseData, setCaseData] = useState<Cases>({});
  const [loading, setLoading] = useState(true);

  // Add state for tracking added items
  //const [officers, setOfficers] = useState<Array<Officers>>([]);
  //const [persons, setPersons] = useState<Array<Persons>>([]);
  const [memos, setMemos] = useState<Array<Memos>>([]);
  const [notes, setNotes] = useState<Array<Notes>>([]);

  const [talukas, setTalukas] = useState<Array<{ id: string; name: string }>>([]);
  const [dehs, setDehs] = useState<Array<{ id: string; name: string }>>([]);
  const [selectedTaluka, setSelectedTaluka] = useState<string>('');
  const [selectedDeh, setSelectedDeh] = useState<string>('');
  
  useEffect(() => {
    async function fetchTalukas() {
      try {
        const response = await fetch('/api/talukas');
        if (!response.ok) {
          throw new Error('Failed to fetch talukas');
        }
        const data = await response.json();
        setTalukas(data);
        
        // If case has taluka, set the selected taluka
        if (caseData.taluka) {
          const taluka = data.find((t: any) => t.name === caseData.taluka?.name);
          if (taluka) {
            setSelectedTaluka(taluka.id);
          }
        }
      } catch (error) {
        console.error('Error fetching talukas:', error);
      }
    }
    
    fetchTalukas();
  }, [caseData.taluka]);

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
        
        // If case has deh, set the selected deh
        if (caseData.deh) {
          const deh = data.find((d: any) => d.name === caseData.deh?.name);
          if (deh) {
            setSelectedDeh(deh.id);
          }
        }
      } catch (error) {
        console.error('Error fetching dehs:', error);
      }
    }
    
    fetchDehs();
  }, [selectedTaluka, caseData.deh]);

  const handleTalukaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const talukaId = e.target.value;
    setSelectedTaluka(talukaId);
    setSelectedDeh(''); // Reset deh when taluka changes
    const selectedTaluka = talukas.find(t => t.id === talukaId)?.id || '';
    setCaseData(prev => ({
      ...prev,
      talukaId: selectedTaluka,
      dehId: '' // Clear deh when taluka changes
    }));
  };

  const handleDehChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const dehId = e.target.value;
    setSelectedDeh(dehId);
    const selectedDeh = dehs.find(d => d.id === dehId)?.id || '';
    setCaseData(prev => ({
      ...prev,
      dehId: selectedDeh
    }));
  };

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
        console.log(data);

        //setOfficers(data.involvedOfficers);
        //setPersons(data.involvedPersons);
        setMemos(data.memos);
        setNotes(data.notes);
        
      } catch (err) {
        console.error('Error fetching case:', err);
      } finally {
        setLoading(false); 
      }
    }

    if (id) {
      fetchCase();
    }
  }, [id]);

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setCaseData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  // Handler functions for adding items
  // const handleOfficerAdded = (newOfficer: Officers) => {
  //     setOfficers([...officers, newOfficer]);
  // };
  
  // const handlePersonAdded = (newPerson : Persons) => {
  //   setPersons([...persons, newPerson]);
  // };

  const handleMemoAdded = (newMemo : Memos) => {
    setMemos([...memos, newMemo]);
  };
  
  const handleNoteAdded = (newNote : Notes) => {
    setNotes([...notes, newNote]);
  };
  
  // Add these new states at the top of your component with other state declarations
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  // const [officerToDelete, setOfficerToDelete] = useState<string | null>(null);
  // const [personToDelete, setPersonToDelete] = useState<string | null>(null);
  const [memoToDelete, setMemoToDelete] = useState<string | null>(null);
  const [noteToDelete, setNoteToDelete] = useState<string | null>(null);
  
  // Handler functions for removing items
  // const handleRemoveOfficer = (id : string) => {
  //   setOfficerToDelete(id);
  //   setShowDeleteConfirm(true);
  // };
  
  // const handleRemovePerson = async (id: string) => {
  //   setPersonToDelete(id);
  //   setShowDeleteConfirm(true);
  // };

  const handleRemoveMemo = (id: string) => {
    setMemoToDelete(id);
    setShowDeleteConfirm(true);
  };

  const handleRemoveNote = (id: string) => {
    setNoteToDelete(id);
    setShowDeleteConfirm(true);
  }
  
  // Add a new function to handle the actual deletion
  const confirmDeletePerson = async () => {
    if (!memoToDelete && !noteToDelete) {
      setShowDeleteConfirm(false);
      return;
    }

    try {

      // Call the DELETE API endpoint
      // if(officerToDelete){
      //   const response = await fetch(`/api/officers/${officerToDelete}`, {
      //     method: 'DELETE',
      //     headers: {
      //       'Content-Type': 'application/json',
      //     }
      //   });
        
      //   if (!response.ok) {
      //     throw new Error(`Failed to delete officer: ${response.status}`);
      //   }
        
      //   // Remove the person from state after successful API call
      //   setOfficers(officers.filter(officer => officer.id !== officerToDelete));
      // }
      // else if(personToDelete){
      //   const response = await fetch(`/api/persons/${personToDelete}`, {
      //     method: 'DELETE',
      //     headers: {
      //       'Content-Type': 'application/json',
      //     }
      //   });
        
      //   if (!response.ok) {
      //     throw new Error(`Failed to delete person: ${response.status}`);
      //   }
        
      //   // Remove the person from state after successful API call
      //   setPersons(persons.filter(person => person.id !== personToDelete));
      // }
      // else 
      if(memoToDelete){
        const response = await fetch(`/api/memo/${memoToDelete}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          }
        });
        
        if (!response.ok) {
          throw new Error(`Failed to delete memo: ${response.status}`);
        }
        
        // Remove the person from state after successful API call
        setMemos(memos.filter(memo => memo.id !== memoToDelete));
      }
      else if(noteToDelete){
        const response = await fetch(`/api/notes/${noteToDelete}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          }
        });
        
        if (!response.ok) {
          throw new Error(`Failed to delete notes: ${response.status}`);
        }
        
        // Remove the person from state after successful API call
        setNotes(notes.filter(note => note.id !== noteToDelete));
      }
      
    } catch (error) {
      console.error('Error deleting:', error);
      alert('Failed to delete. Please try again.');
    } finally {
      // Close the confirmation dialog
      setShowDeleteConfirm(false);
      //setOfficerToDelete(null);
      //setPersonToDelete(null);
      setMemoToDelete(null);
      setNoteToDelete(null);
    }
  };

  // const handlePersonUpdated = (updatedPerson: Persons) => {
  //   const updatedPersons = persons.map(person => 
  //     person.id === updatedPerson.id ? updatedPerson : person
  //   );
    
  //   setPersons(updatedPersons);
    
  //   setCaseData(prev => ({
  //     ...prev,
  //     involvedPersons: prev?.involvedPersons?.map(person => 
  //       person.id === updatedPerson.id ? updatedPerson : person
  //     )
  //   }));
  // };

  const handleMemoUpdated = (updatedMemo: Memos) => {
    const updatedMemos = memos.map(memo => 
      memo.id === updatedMemo.id ? updatedMemo : memo
    );
    
    setMemos(updatedMemos);

    setCaseData(prev => ({
      ...prev,
      memos: prev?.memos?.map(item => 
        item.id === updatedMemo.id ? updatedMemo : item
      )
    }));
  };

  const OpenImage = (filePath: string) => {
    const imageWindow = window.open('', '_blank');
    if (imageWindow) {
      imageWindow.document.write(`<img src="${filePath}" alt="Image" />`);
    }
  };

  // Add a save handler function
  const handleSaveChanges = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Prepare the updated case data
      const updatedCaseData = {
        ...caseData,
        //involvedOfficers: officers,
        //involvedPersons: persons,
        memos: memos,
        notes: notes
      };
      
      // Send the update request
      const response = await fetch(`/api/cases/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedCaseData),
      });
      
      if (!response.ok) {
        throw new Error(`Failed to update case: ${response.status}`);
      }
      
      // Redirect to the case details page after successful update
      window.location.href = `/cases/${id}`;
      
    } catch (error) {
      console.error('Error updating case:', error);
      alert('Failed to update case. Please try again.');
    }
  };

  return (
    <WithRoleAccess allowedRoles={['DD', 'Admin']}>
      <MainLayout>
      {loading ? (
        <div className="flex flex-col items-center justify-center h-64">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-600">Loading dashboard data...</p>
        </div>
      ) : (  
        <div className="mb-8">
          <div className="flex items-center mb-6">
            <Link href={`/cases/${params.id}`} className="text-blue-600 hover:text-blue-800 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </Link>
            <h2 className="text-3xl font-bold text-gray-800">Edit Case</h2>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <div className="text-sm text-gray-500">Case ID</div>
                  <div className="text-xl font-bold text-gray-500">{caseData.code}</div>
                </div>
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
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Case Title</label>
                  <input 
                    type="text" 
                    id="title" 
                    defaultValue={caseData.title}
                    onChange={handleInputChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-gray-500"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="caseType" className="block text-sm font-medium text-gray-700 mb-1">Case Type</label>
                    <select 
                      id="caseType" 
                      value={caseData.caseType}
                      onChange={handleInputChange}
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-gray-500"
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
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div>
                  <label htmlFor="taluka" className="block text-sm font-medium text-gray-700 mb-1">
                    Taluka
                  </label>
                  <select
                    id="taluka"
                    value={selectedTaluka}
                    onChange={handleTalukaChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-gray-500"
                  >
                    <option value="">Select Taluka</option>
                    {talukas.map((taluka) => (
                      <option key={taluka.id} value={taluka.id}>
                        {taluka.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="deh" className="block text-sm font-medium text-gray-700 mb-1">
                    Deh
                  </label>
                  <select
                    id="deh"
                    value={selectedDeh}
                    onChange={handleDehChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-gray-500"
                    disabled={!selectedTaluka}
                  >
                    <option value="">Select Deh</option>
                    {dehs.map((deh) => (
                      <option key={deh.id} value={deh.id}>
                        {deh.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                  <select 
                    id="status" 
                    value={caseData.status}
                    onChange={handleInputChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-gray-500"
                  >
                    <option value="Active">Active</option>
                    <option value="Suspended">Suspended</option>
                    <option value="Closed">Closed</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div>
                  <label htmlFor="dateOfInstitution" className="block text-sm font-medium text-gray-700 mb-1">Date Of Institution</label>
                  <input 
                    type="datetime-local" 
                    id="dateOfInstitution" 
                    value={caseData.dateOfInstitution?.toString().slice(0, 16) ?? getCurrentLocalDatetime()}
                    onChange={handleInputChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-gray-500"
                  />
                </div>
                <div>
                  <label htmlFor="nextDate" className="block text-sm font-medium text-gray-700 mb-1">Next Date</label>
                  <input 
                    type="datetime-local" 
                    id="nextDate" 
                    value={caseData.nextDate?.toString().slice(0, 16) ?? getCurrentLocalDatetime()}
                    onChange={handleInputChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-gray-500"
                  />
                </div>
                <div>
                  <label htmlFor="orderOfDate" className="block text-sm font-medium text-gray-700 mb-1">Order Of Date</label>
                  <input 
                    type="datetime-local" 
                    id="orderOfDate" 
                    value={caseData.orderOfDate?.toString().slice(0, 16) ?? getCurrentLocalDatetime()}
                    onChange={handleInputChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-gray-500"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <input 
                  type="text" 
                  id="location" 
                  defaultValue={caseData.location}
                  onChange={handleInputChange}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-gray-500"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea 
                  id="description" 
                  rows={5}
                  defaultValue={caseData.description}
                  onChange={handleInputChange}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-gray-500"
                ></textarea>
              </div>

              {/* <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-800 mb-3">Involved Officers</h3>
                <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-medium text-gray-700">
                      {officers.length === 0 ? "No officers added yet" : `${officers.length} officer(s) assigned`}
                    </span>
                    <AddOfficerModal id={id?.toString()} onOfficerAdded={handleOfficerAdded}/>
                  </div>
                  
                  {officers.length > 0 && (
                    <div className="space-y-3">
                      {officers.map(officer => (
                        <div key={officer.id ?? officer.code ?? ''} className="flex items-center justify-between bg-white p-3 rounded shadow-sm">
                          <div>
                            <div className="font-medium text-gray-600">{officer.name}</div>
                            <div className="text-sm text-gray-500">Badge: {officer.badge}</div>
                          </div>
                          <button 
                            type="button" 
                            onClick={() => handleRemoveOfficer(officer.id ?? officer.code ?? '')}
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
                    <AddPersonModal id={id?.toString()} onPersonAdded={handlePersonAdded}/>
                  </div>
                  
                  {persons.length > 0 && (
                    <div className="space-y-3">
                      {persons.map(person => (
                        <div key={person.id ?? person.code ?? ''} className="flex items-center justify-between bg-white p-3 rounded shadow-sm">
                          <div>
                            <div className="font-medium text-gray-600">{person.name}</div>
                            <div className="text-sm text-gray-500">{person.role} • {person.contact}</div>
                            <div className="text-sm text-gray-500">{person.addedOn?.toString().split('T')[0]} | {person.addedOn?.toString().split('T')[1].split('.')[0]}</div>
                          </div>
                          <div>
                            <EditPersonModal person={person} onPersonUpdated={handlePersonUpdated} />
                            <button 
                              type="button" 
                              onClick={() => handleRemovePerson(person.id ?? person.code ?? '')}
                              className="text-red-600 hover:text-red-800"
                              >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div> */}

              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-800 mb-3">Memo Of Complaint</h3>
                <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-medium text-gray-700">
                      {memos.length === 0 ? "No Memo Of Complaint added yet" : `${memos.length} memo of complaint item(s) added`}
                    </span>
                    <AddMemoModal id={id?.toString()} onMemoAdded={handleMemoAdded}/>
                  </div>
                  
                  {memos.length > 0 && (
                    <div className="space-y-3">
                      {memos.map(item => (
                        <div key={item.id ?? item.code ?? ''} className="flex items-center justify-between bg-white p-3 rounded shadow-sm">
                        {/* {item.filePath && (
                          <div className='uploadedMemo'>
                            {item.filePath?.split('.').pop() !== 'txt' && (
                              <div className='flex'
                                  onClick={() => OpenImage(item.filePath || '')}
                                  style={{cursor: 'pointer'}}
                                >
                                <div className='text-blue-700'>
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                  </svg> 
                                </div>
                                <Image 
                                  src={item.filePath || ''}
                                  alt='Memo Image'
                                  width={50}
                                  height={50}
                                >
                                </Image>
                              </div>
                            )} 
                            {item.filePath?.split('.').pop() === 'txt' && (
                              <a 
                                className='text-blue-700 text-sm'
                                href={item.filePath || ''}
                                target="_blank"
                                style={{cursor: 'pointer', fontWeight: 'bold', fontSize: '12px'}}
                              >
                                <div className='flex'>
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                  </svg>
                                  <span>Text File</span>
                                </div>
                              </a>
                            )}
                          </div>
                        )} */}
                          <div>
                            <div className="text-sm text-gray-500">
                              <span title={item.description}>
                                    {item.description != null && item.description.length > 50 
                                    ? `${item.description.substring(0, 50)}...` 
                                    : item.description}
                                  </span> • {item.dateCollected?.toString().split('T')[0]} | {item.dateCollected?.toString().split('T')[1].split('.')[0]}
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <EditMemoModal memo={item} onMemoUpdated={handleMemoUpdated} />
                            <button 
                              type="button" 
                              onClick={() => handleRemoveMemo(item.id ?? item.code ?? '')}
                              className="text-red-600 hover:text-red-800"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-800 mb-3">Add Note</h3>
                <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-medium text-gray-700">
                      {notes.length === 0 ? "No note added yet" : `${notes.length} notes item(s) added`}
                    </span>
                    <AddNoteModal id={id?.toString()} onNoteAdded={handleNoteAdded}/>
                  </div>
                  
                  {notes.length > 0 && (
                    <div className="space-y-3">
                      {notes.map(item => (
                        <div key={item.id ?? item.code ?? ''} className="flex items-center justify-between bg-white p-3 rounded shadow-sm">
                          <div>
                            <div className="font-medium text-gray-600">{item.title}</div>
                            <div className="text-sm text-gray-500">
                              <span title={item.content}>
                                {item.content != null && item.content.length > 50 
                                  ? `${item.content.substring(0, 50)}...` 
                                  : item.content} • {item.noteAddedOn?.toString().split('T')[0]} | {item.noteAddedOn?.toString().split('T')[1].split('.')[0]}
                              </span> 
                            </div>
                          </div>
                          <button 
                            type="button" 
                            onClick={() => handleRemoveNote(item.id ?? item.code ?? '')}
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
                  href={`/cases/${params.id}`}
                  className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Cancel
                </Link>
                <button 
                  type="submit"
                  onClick={handleSaveChanges}
                  className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Custom Delete Confirmation Dialog */}
        {showDeleteConfirm && (
          <div className="fixed inset-0 bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 shadow-xl">
              <div className="text-center">
                <svg className="mx-auto mb-4 text-red-500 w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                </svg>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Confirm Deletion</h3>
                <p className="text-gray-500 mb-6">Are you sure you want to delete this person? This action cannot be undone.</p>
                <div className="flex justify-center space-x-4">
                  <button
                    onClick={() => setShowDeleteConfirm(false)}
                    className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={confirmDeletePerson}
                    className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </MainLayout>
    </WithRoleAccess>
  );}
