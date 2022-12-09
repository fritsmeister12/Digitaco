import React from 'react'

function ConfirmModal({ setOpenModal }) {
  return (
    <div>
        <div class="bg-gray-700 flex justify-center items-center h-screen bg-opacity-50 fixed top-0 mx-auto right-0 z-50  p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
            <div class="relative w-full h-full max-w-md md:h-auto">
                <div class="relative bg-orange-50 rounded-lg shadow ">
                    <div class="p-6 text-center">
                        <svg aria-hidden="true" class="mx-auto mb-4 text-gray-800 w-14 h-14 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <h3 class="mb-5 text-lg font-normal text-gray-800 dark:text-gray-800">Are you sure you want to delete this product?</h3>
                        <button onClick={() => {setOpenModal(false);}} data-modal-toggle="popup-modal" type="button" class="text-white bg-orange-400 hover:bg-orange-500 focus:ring-1 focus:outline-none focus:ring-red-300 dark:focus:ring-orange-400 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                            Yes, I'm sure
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ConfirmModal