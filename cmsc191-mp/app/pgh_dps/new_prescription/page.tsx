"use client"
import 'flowbite';
import { initFlowbite } from 'flowbite';
import { useEffect } from 'react';

export default function NewPrescription() {
    useEffect(() => {
        initFlowbite();
    })

    return (
        <>
            <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
                {/* <span className="sr-only">Open sidebar</span> */}
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50">
                    <a href="/pgh_dps/view_prescriptions" className="flex items-center justify-center ps-2.5 mt-3 mb-14">
                        <img src="/pgh_logo.png" className="h-6 me-3 sm:h-7 md:h-24" alt="PGH Logo" />
                    </a>

                    <ul className="space-y-2 font-medium">
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M14 4.182A4.136 4.136 0 0 1 16.9 3c1.087 0 2.13.425 2.899 1.182A4.01 4.01 0 0 1 21 7.037c0 1.068-.43 2.092-1.194 2.849L18.5 11.214l-5.8-5.71 1.287-1.31.012-.012Zm-2.717 2.763L6.186 12.13l2.175 2.141 5.063-5.218-2.141-2.108Zm-6.25 6.886-1.98 5.849a.992.992 0 0 0 .245 1.026 1.03 1.03 0 0 0 1.043.242L10.282 19l-5.25-5.168Zm6.954 4.01 5.096-5.186-2.218-2.183-5.063 5.218 2.185 2.15Z" clipRule="evenodd" />
                                </svg>
                                <span className="ms-3">Create new prescription</span>
                            </a>
                        </li>

                        <li>
                            <a href="/pgh_dps/view_prescriptions" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                                </svg>
                                <span className="flex-1 ms-3 whitespace-nowrap">View prescriptions</span>
                                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full">3</span>
                            </a>
                        </li>

                        <li>
                            <a href="/pgh_dps/view_patients" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                    <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                                </svg>
                                <span className="flex-1 ms-3 whitespace-nowrap">View patients</span>
                            </a>
                        </li>

                        <li>
                            <a href="/pgh_dps/login" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                <svg className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2" />
                                </svg>
                                <span className="flex-1 ms-3 whitespace-nowrap">Sign out</span>
                            </a>
                        </li>


                    </ul>
                </div>
            </aside>


            <div className="p-4 sm:ml-64">

                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg">

                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">

                    <div className="items-center justify-center w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                            <div className="relative w-full max-w-6xl max-h-full">
                                
                                <form className="relative bg-white rounded-lg">
                                    
                                    <div className="flex items-start justify-between p-4 border-b rounded-t">
                                        <h4 className="text-2xl font-semibold text-gray-900">
                                            New Prescription
                                        </h4>
                                    </div>

                                    <div className="p-6 space-y-6">
                                        <div className="grid grid-cols-2 gap-6">
                                            <div className="relative">
                                                <label htmlFor="patient-name" className="block mb-2 text-sm font-medium text-gray-900">Patient Name</label>
                                                <input type="text" name="patient-name" id="patient-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" placeholder="Jane Doe" required />
                                            </div>
                                            <div className="relative">
                                                <label htmlFor="prescribed-med" className="block mb-2 text-sm font-medium text-gray-900">Prescribed Medication</label>
                                                <div className="relative flex items-center max-w-[8rem]">
                                                    <button type="button" id="decrement-button" data-input-counter-decrement="prescribed-med" className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                                                        <svg className="w-3 h-3 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                                                        </svg>
                                                    </button>
                                                    <input type="text" id="prescribed-med" data-input-counter aria-describedby="helper-text-explanation" className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5" placeholder="0" required />
                                                    <button type="button" id="increment-button" data-input-counter-increment="prescribed-med" className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                                                        <svg className="w-3 h-3 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-5 gap-6">
                                            <div className="relative">
                                                <label htmlFor="generic-name" className="block mb-2 text-sm font-medium text-gray-900">Generic Name</label>
                                                <input type="text" name="generic-name" id="generic-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" placeholder="Generika" required />
                                            </div>
                                            <div className="relative">
                                                <label htmlFor="brand-name" className="block mb-2 text-sm font-medium text-gray-900">Brand Name</label>
                                                <input type="text" name="brand-name" id="brand-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" placeholder="Bear Brand" required />
                                            </div>
                                            <div className="relative">
                                                <label htmlFor="amount" className="block mb-2 text-sm font-medium text-gray-900">Amount</label>
                                                <input type="number" name="amount" id="amount" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" placeholder="1" required />
                                            </div>
                                            <div className="relative col-span-2">
                                                <label htmlFor="instructions" className="block mb-2 text-sm font-medium text-gray-900">Instructions</label>
                                                <input type="text" name="instructions" id="instructions" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" placeholder="Once a day" required />
                                            </div>
                                            <div className="relative col-span-5">
                                                <label htmlFor="notes" className="block mb-2 text-sm font-medium text-gray-900">Notes</label>
                                                <textarea name="notes" id="notes" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" wrap="hard" rows={5} cols={10} placeholder="Waga waga" required />
                                            </div>

                                        </div>

                                    </div>
                                    
                                    <div className="flex items-center p-6 space-x-3 rtl:space-x-reverse border-t border-gray-200 rounded-b">
                                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Create</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        
                    </div>


                </div>
            </div>


        </>
    );
}
