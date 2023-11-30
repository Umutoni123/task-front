import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { AiTwotoneSave } from 'react-icons/ai'
import { GiCancel } from 'react-icons/gi'
import { IoMdDownload } from "react-icons/io";

const TasksModal = ({ isOpen, onClose, children }) => {
    useEffect(() => {
        const handleOutsideClick = (e) => {
          if (e.target.classList.contains('modal-overlay')) {
            onClose();
          }
        };
        if (isOpen) {
          document.addEventListener('click', handleOutsideClick);
        }
        return () => {
          document.removeEventListener('click', handleOutsideClick);
        };
      }, [isOpen, onClose]);
    
      if (!isOpen) return null;
    
      return (
        <div className="fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-50 flex items-center justify-center modal-overlay">
          <div className="bg-white p-6 rounded-lg shadow-xl w-full mx-[10px] md:mx-[90px] lg:mx-[450px] xl:mx-[450px]">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-bold">View Porject Details</h1>
                    <button
                        className="text-gray-600 hover:text-gray-800 focus:outline-none border-2 p-1 rounded"
                        onClick={onClose}
                    >
                        <svg
                        className="h-6 w-6"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        >
                        <path d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
            </div>
            {children}
            <div className='flex gap-3'>
                <div>
                    <button
                    className="mt-4 p-2 px-3 bg-[#f3f6fb] border-teal-500 border rounded-md"
                    onClick={onClose}
                    >
                        <div className='flex gap-2'>
                            <div>
                                <GiCancel className='text-[20px] text-red-500' />
                            </div>
                            <div>
                                CANCEL
                            </div>
                        </div>
                    </button>
                </div>
                <div>
                    <button
                    className="mt-4 p-2 px-3 bg-[#f3f6fb] border-blue-500 border rounded-md"
                    >
                        <div className='flex gap-2 items-center'>
                            <div>
                                <IoMdDownload className='text-[20px] text-blue-500' />
                            </div>
                            <div className='w-full'>
                            DOWNLOAD FILES
                            </div>
                        </div>
                    </button>
                </div>
            </div>
          </div>
        </div>
      );
    };
    
    TasksModal.propTypes = {
      isOpen: PropTypes.bool.isRequired,
      onClose: PropTypes.func.isRequired,
      children: PropTypes.node,
    };
export default TasksModal;
