import React, { useEffect } from 'react';
import { FcDeleteDatabase } from 'react-icons/fc';

const DeleteModal = ({ isOpen, onClose, onConfirm }) => {
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isOpen && !event.target.closest('.modal-content')) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black opacity-50 z-50"></div>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded shadow-md modal-content">
          <div className='flex justify-center'>
            <FcDeleteDatabase className=" text-[55px] text-red-500" />
          </div>
          <p className="mb-4 mt-3">Are you sure you want to delete?</p>
          <div className="flex justify-end">
            <button
              className="bg-red-500 text-white px-4 py-2 mr-2 rounded"
              onClick={onConfirm}
            >
              Yes
            </button>
            <button
              className="bg-gray-300 px-4 py-2 rounded"
              onClick={onClose}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteModal;
