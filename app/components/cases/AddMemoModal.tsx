'use client';

import React, { memo, useState } from 'react';

interface AddMemoModalProps {
  id?: string;
  onMemoAdded?: (memo: { id?: string, code: string, file: File, caseId: string, description: string, dateCollected: string }) => void;
}

export default function AddMemoModal({ id, onMemoAdded }: AddMemoModalProps) {
  const getCurrentLocalDatetime = (): string => {
    const now = new Date();
    const localDate = new Date(now.getTime() - now.getTimezoneOffset() * 60000);
    return localDate.toISOString().slice(0, 16);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [description, setDescription] = useState('');
  const [dateCollected, setDateCollected] = useState(getCurrentLocalDatetime());
  
  const [isUploading, setIsUploading] = useState(false);

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  // Create a ref for the hidden file input
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  // Function to trigger file input click
  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    setIsUploading(true);
    
    if (!selectedFile) {
      setIsUploading(false);
      alert('Please select a file to upload');
      return;
    }

    if (!description) {
      setIsUploading(false);
      alert('Please enter a description');
      return;
    }

    try {
      // Generate a simple ID for the new memo
      const newMemo = {
        id: '',
        code: `MEMO-${Date.now()}`,
        file: selectedFile as File,
        description: description,
        dateCollected: dateCollected == "" ? getCurrentLocalDatetime() : dateCollected,
        caseId: id as string
      };
  
      if(newMemo.caseId !== null && newMemo.caseId !== undefined && newMemo.caseId !== "") {
        // Create FormData for file upload
        const formData = new FormData();
        formData.append('filePath', selectedFile);
        formData.append('code', newMemo.code);
        formData.append('description', newMemo.description);
        formData.append('dateCollected', new Date(newMemo.dateCollected).toISOString());
        formData.append('caseId', newMemo.caseId);
  
        // Upload file and create memo
        const memoResponse = await fetch('/api/memo', {
          method: 'POST',
          body: formData, // Send as FormData instead of JSON
        });
  
        if (!memoResponse.ok) {
          const errorData = await memoResponse.json().catch(() => ({}));
          console.error('Server response:', errorData);
          throw new Error(`Failed to create memo: ${memoResponse.status} ${memoResponse.statusText}${errorData.error ? ` - ${errorData.error}` : ''}`);
        }
  
        const memoData = await memoResponse.json();
        newMemo.id = memoData.id;
  
      }
      
      // Call the callback if provided
      if (onMemoAdded) {
        onMemoAdded(newMemo);
      }

      // Reset form and close modal
      setDescription('');
      setDateCollected(getCurrentLocalDatetime());
      setSelectedFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      closeModal();

      console.log('Memo added successfully!');
    } catch (error) {
      console.error('Error adding memo:', error);
      alert(error instanceof Error ? error.message : 'Failed to upload file');
    } finally {
      setIsUploading(false);
    }
  };
  
  return (
    <>
      <button 
        type="button"
        onClick={openModal}
        className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
        Add Memo Of Complaint
      </button>
      
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}
        accept=".jpg,.jpeg,.png,.txt"
      />

      {isOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 backdrop-blur-sm overflow-y-auto h-full w-full z-50 flex items-center justify-center">
          <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
            <div className="flex justify-between items-center p-5 border-b">
              <h3 className="text-lg font-medium text-gray-900">Add Memo of complaint to Case</h3>
              <button 
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-500"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-5">
              <div className="mb-4">
                <label htmlFor="memoReport" className="block text-sm font-medium text-gray-700 mb-1">
                  Upload Report
                </label>
                <button 
                  className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={() => triggerFileInput()}
                  disabled={isUploading}
                >
                  {isUploading ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Uploading...
                    </span>
                  ) : 'Upload'}
                </button>
              </div>
              
              <div className="mb-4">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  id="description"
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Description..."
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-black"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="dateCollected" className="block text-sm font-medium text-gray-700 mb-1">
                  Date Collected
                </label>
                <input
                  type="datetime-local"
                  id="dateCollected"
                  value={dateCollected}
                  onChange={(e) => setDateCollected(e.target.value)}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-black"
                  required
                />
              </div>
              
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                >
                  Add Memo Of Complaint
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}