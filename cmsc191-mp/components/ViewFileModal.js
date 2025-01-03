"use client"
import React from 'react';
const ViewFileModal = ({ isVisible, onClose, content }) => {

    if ( !isVisible ) return null;

    const handleClose = (e) => {
        if( e.target.id === 'wrapper' ) onClose();
    }

    return (
        <div id="wrapper" className="fixed top-0 left-0 right-0 z-50 items-center justify-center hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full" onClick={handleClose}>
            <div className="relative w-full max-w-2xl max-h-full">
                {/* Modal content */}
                <form className="relative bg-white rounded-lg shadow">
                    {/* Modal header */}
                    <div className="flex items-start justify-between p-4 border-b rounded-t">
                        <h3 className="text-xl font-semibold text-gray-900">
                            Prescription File
                        </h3>
                        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" onClick={()=>onClose()}>
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>

                    {/* Modal body */}
                    <div className="p-6 space-y-6">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="relative">
                                <label htmlFor="patient-name" className="block mb-2 text-sm font-medium text-gray-900">Patient Name</label>
                                <input type="text" name="patient-name" id="patient-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" placeholder="Jane Doe" readOnly />
                            </div>
                        </div>

                        <div className="grid grid-cols-5 gap-6">
                            <div className="relative">
                                <label htmlFor="generic-name" className="block mb-2 text-sm font-medium text-gray-900">Generic Name</label>
                                <input type="text" name="generic-name" id="generic-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" placeholder="Generika" readOnly />
                            </div>
                            <div className="relative">
                                <label htmlFor="brand-name" className="block mb-2 text-sm font-medium text-gray-900">Brand Name</label>
                                <input type="text" name="brand-name" id="brand-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" placeholder="Bear Brand" readOnly />
                            </div>
                            <div className="relative">
                                <label htmlFor="amount" className="block mb-2 text-sm font-medium text-gray-900">Amount</label>
                                <input type="number" name="amount" id="amount" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" placeholder="1" readOnly />
                            </div>
                            <div className="relative col-span-2">
                                <label htmlFor="instructions" className="block mb-2 text-sm font-medium text-gray-900">Instructions</label>
                                <input type="text" name="instructions" id="instructions" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" placeholder="Once a day" readOnly />
                            </div>
                            <div className="relative col-span-5">
                                <label htmlFor="notes" className="block mb-2 text-sm font-medium text-gray-900">Notes</label>
                                <textarea name="notes" id="notes" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" wrap="hard" rows={5} cols={10} placeholder="Waga waga" readOnly />
                            </div>
                        </div>

                    </div>
                    {/* Modal footer */}
                    {/* <div className="flex items-center p-6 space-x-3 rtl:space-x-reverse border-t border-gray-200 rounded-b">
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Save all</button>
                    </div> */}
                </form>
            </div>
        </div>

  )
}

export default ViewFileModal