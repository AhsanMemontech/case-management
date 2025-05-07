// 'use client';
// import React, { useState } from 'react';
// import { Dialog, Transition } from '@headlessui/react';
// //import { Persons } from '../interface/types';

// type ViewPersonModalProps = {
//   //person: Persons;
// };

// export default function ViewPersonModal({ }: ViewPersonModalProps) {
//   const [isOpen, setIsOpen] = useState(false);

//   function closeModal() {
//     setIsOpen(false);
//   }

//   function openModal() {
//     setIsOpen(true);
//   }

//   return (
//     <>
//       <button
//         type="button"
//         onClick={openModal}
//         className="text-blue-600 hover:text-blue-900"
//       >
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//         </svg>
//       </button>

//       <Transition appear show={isOpen} as={React.Fragment}>
//         <Dialog as="div" className="relative z-10" onClose={closeModal}>
//           <Transition.Child
//             as={React.Fragment}
//             enter="ease-out duration-300"
//             enterFrom="opacity-0"
//             enterTo="opacity-100"
//             leave="ease-in duration-200"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//           >
//             <div className="fixed inset-0 bg-opacity-50 backdrop-blur-sm" />
//           </Transition.Child>

//           <div className="fixed inset-0 overflow-y-auto">
//             <div className="flex min-h-full items-center justify-center p-4 text-center">
//               <Transition.Child
//                 as={React.Fragment}
//                 enter="ease-out duration-300"
//                 enterFrom="opacity-0 scale-95"
//                 enterTo="opacity-100 scale-100"
//                 leave="ease-in duration-200"
//                 leaveFrom="opacity-100 scale-100"
//                 leaveTo="opacity-0 scale-95"
//               >
//                 <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
//                   <Dialog.Title
//                     as="h3"
//                     className="text-lg font-medium leading-6 text-gray-900"
//                   >
//                     Person Details
//                   </Dialog.Title>
                  
//                   {/* <div className="mt-4 space-y-3">
//                     <div>
//                       <div className="text-sm font-medium text-gray-500">Name</div>
//                       <div className="text-base text-gray-900">{person.name}</div>
//                     </div>
                    
//                     <div>
//                       <div className="text-sm font-medium text-gray-500">Role</div>
//                       <div className="text-base text-gray-900">{person.role}</div>
//                     </div>
                    
//                     <div>
//                       <div className="text-sm font-medium text-gray-500">Contact</div>
//                       <div className="text-base text-gray-900">{person.contact}</div>
//                     </div>
                    
//                     <div>
//                       <div className="text-sm font-medium text-gray-500">Added On</div>
//                       <div className="text-base text-gray-900">{person.addedOn?.toString().split('T')[0]} | {person.addedOn?.toString().split('T')[1].split('.')[0]}</div>
//                     </div>

//                     <div>
//                       <div className="text-sm font-medium text-gray-500">Created On</div>
//                       <div className="text-base text-gray-900">{person.createdAt?.toString().split('T')[0]} | {person.createdAt?.toString().split('T')[1].split('.')[0]}</div>
//                     </div>

//                     <div>
//                       <div className="text-sm font-medium text-gray-500">Updated On</div>
//                       <div className="text-base text-gray-900">{person.updatedAt?.toString().split('T')[0]} | {person.updatedAt?.toString().split('T')[1].split('.')[0]}</div>
//                     </div>
//                   </div> */}

//                   <div className="mt-6">
//                     <button
//                       type="button"
//                       className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
//                       onClick={closeModal}
//                     >
//                       Close
//                     </button>
//                   </div>
//                 </Dialog.Panel>
//               </Transition.Child>
//             </div>
//           </div>
//         </Dialog>
//       </Transition>
//     </>
//   );
// }