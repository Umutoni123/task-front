import React, { useEffect, useState } from 'react';
import { FaUsers } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';
import { IoMdAdd } from 'react-icons/io';
import { BiSearch } from 'react-icons/bi';
import { TasksData } from '../Data/TasksData';
import Spinner from '../Components/Spinner';
import { AiFillEye } from "react-icons/ai";
import TasksModal from '../Components/TasksModal';
import DeleteModal from '../Components/DeleteModal';
import { GoTasklist } from "react-icons/go";
import NewTasks from '../Components/NewTasks';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTaskAction, getTasks } from '../redux/actions/tasksAction';
export default function Tasks() {
  const itemsPerPage = 16;
  const [currentPage, setCurrentPage] = useState(1);
  const [item, setItem] = useState({});
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUsers = TasksData.slice(indexOfFirstItem, indexOfLastItem);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const dispatch = useDispatch();
  const { tasts } = useSelector(state => state.tasks);

  
  useEffect(() => {
    dispatch(getTasks());
  }, [])
  
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    const totalPages = Math.ceil(TasksData.length / itemsPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const isPrevInactiveDisabled = currentPage === 1;
  const isNextInactiveDisabled =
  currentPage === Math.ceil(TasksData.length / itemsPerPage);
  const handleDeleteClick = (item) => {
    setItem(item);
    setDeleteModalOpen(true);
  };
  const handleCloseModal = () => {
    setDeleteModalOpen(false);
  };


  const handleConfirmDelete = () => {
    console.log('Deleting...');
    dispatch(deleteTaskAction(item?._id))
    handleCloseModal();
  };

  return (
    <div>
      <Spinner />
        <div className='flex justify-end flex-wrap gap-3 m-3 font-serif font-bold'>
            <div className='flex gap-3'>
                <div>
                  <input 
                  type="text" 
                  name="search" 
                  id="" 
                  placeholder='Search Tasks'
                  className='border border-blue-500 rounded h-[33px] px-2' />
                </div>
                <div className='bg-teal-500 text-white px-5 py-1 rounded cursor-pointer'>
                  <BiSearch className='text-[25px]' />
                </div>
            </div>
           
            <div className='flex gap-3'>
                <Link to="/newtasks">
                    <div className='bg-teal-500 text-white px-5 py-1 rounded flex gap-1 cursor-pointer' >
                        <div className='text-white'>
                            <IoMdAdd className='text-[25px]' />
                        </div>
                        <div>
                            Tasks
                        </div>
                    </div>
                </Link>
            </div>
        </div>
        <TasksModal isOpen={isModalOpen} onClose={closeModal}>
            <hr />
            <div className='font-quicksand flex justify-between my-4'>
                <div className='pt-2'>TM Tasks</div>
                <div>
                    <GoTasklist className='text-[38px] text-blue-500' />
                </div>
            </div>
            <div className='border rounded border-blue-500 p-4'>
                <NewTasks projectDescription={item.projectName} projectName={item.projectDescription} />
            </div>
        </TasksModal>
        <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmDelete}
      />
      <div className='flex justify-between px-4 bg-teal-500 font-quicksand text-white m-3 py-1 rounded'>
        <div className='text-xl'>Tasks</div>
        <div className='flex gap-2'>
          <div>
            <FaUsers className='text-white mt-[6px]' />
          </div>
          <div>
            <FaUsers className='text-red-500 mt-[6px]' />
          </div>
        </div>
      </div>
      <div className='m-3 pb-7'>
        <table className='w-full text-left'>
          <thead className='font-serif bg-white'>
            <tr>
              <th className='py-1 pl-1'>#</th>
              <th>Task Name</th>
              <th className=''>Start Date</th>
              <th className=''>End Date</th>
              <th>Assignee</th>
              <th className=''>Project Name</th>
              <th className=''>Priority</th>
              <th className='text-center'>Actions</th>
            </tr>
          </thead>
          {tasts.map((item, index) => (
            <tbody
              key={index}
              className={`${index % 2 !== 0 ? 'bg-white' : null} font-quicksand`}
            >
              <tr>
                <td className='py-1 pl-2'>{indexOfFirstItem + index + 1}</td>
                <td className='py-1 pl-1'>{item.name}</td>
                <td className='py-1 pl-1'>{item.startDate}</td>
                <td className='py-1 pl-1'>{item.endDate}</td>
                <td className='py-1 pl-1 '>{item.assignee[0]?.name}</td>
                <td className='py-1 pl-1 '>{item.projectName}</td>
                <td className='py-1 pl-1'>{item.priority}</td>
                <td
                  className='py-1 pl-1'
                >
                  <div className='flex gap-2 justify-center'>
                    <Link to={`/newtasks/${item._id}`}>
                      <FaEdit className='mt-[3px] text-green-500 cursor-pointer' />
                    </Link>
                    <div className='' onClick={() => handleDeleteClick(item)}>
                      <AiFillDelete className='mt-[3px] text-red-500 cursor-pointer' />
                    </div>
                    <div>
                      <AiFillEye className='mt-[3px] text-blue-500 cursor-pointer' onClick={() => {
                        openModal();
                        setItem(item);
                      }} />
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
        <div className='flex justify-between mt-7'>
          <button
            onClick={handlePrevPage}
            disabled={isPrevInactiveDisabled}
            className={`py-1 px-2 ${
              isPrevInactiveDisabled
                ? 'bg-gray-300 text-gray-700 cursor-not-allowed'
                : 'bg-teal-500 text-white'
            } rounded`}
          >
            Previous
          </button>
          <button
            onClick={handleNextPage}
            disabled={isNextInactiveDisabled}
            className={`py-1 px-2 ${
              isNextInactiveDisabled
                ? 'bg-gray-300 text-gray-700 cursor-not-allowed'
                : 'bg-teal-500 text-white'
            } rounded`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
