import React, { useState } from 'react'
import { LuSave } from "react-icons/lu";
import { AiOutlineClose } from "react-icons/ai";
import { IoMdAttach } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import { addTaskAction } from '../redux/actions/tasksAction';
import { useNavigate } from 'react-router-dom';

export default function CreateNewTasks() {
    const dispatch = useDispatch();
    const { userInfo } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const [data, setData] = useState({
        name: '',
        endDate: '',
        startDate: '',
        assignee: [{ name: userInfo?.name, _id: userInfo?._id  }],
        projectName: '',
        projectDescription: '',
        priority: '',
    })

    const handleAddTask = () => {
        const payload = {
            name: data.name,
            startDate: data.startDate,
            endDate: data.endDate,
            assignee: data.assignee,
            projectName: data.projectName,
            projectDescription: data.projectDescription,
            priority: data.priority,
        }
        dispatch(addTaskAction(payload, navigate));
    }

  return (
    <div className='mt-2'>
        <div className='w-[60%] mx-auto'>
            <div className='flex justify-between'>
                <div>Create Task</div>
                <div className='flex gap-3'>
                    <div className='pl-8 pt-[3px] text-[14px]'><LuSave /></div>
                    <div className='text-[14px]'>Save Draft</div>
                    <div className='pl-8 pt-[3px] text-[14px]'><AiOutlineClose /></div>
                </div>
            </div>
            <div className='mb-3 mt-7'>
                <label htmlFor="id">Name </label>
                <input 
                 value={data.name}
                 onChange={(e) => setData({ ...data, name: e.target.value})}
                type="text" 
                name="name" 
                id="name" 
                placeholder='Task Name'
                className='border-2 rounded py-2 px-4 focus:border-gray-500 w-full' />
            </div>
            <div className='mb-3 mt-4 flex gap-12'>
                <div className='w-full'>
                    <label htmlFor="id">Start Date </label>
                    <input 
                    value={data.startDate}
                    onChange={(e) => setData({ ...data, startDate: e.target.value})}
                    type="date" 
                    name="startdate" 
                    id="namstartdatee" 
                    placeholder='Start Date'
                    className='border-2 rounded py-2 px-4 focus:border-gray-500 w-full' />
                </div>
                <div className='w-full'>
                    <label htmlFor="id">End Date </label>
                    <input 
                    type="date" 
                    value={data.endDate}
                    onChange={(e) => setData({ ...data, endDate: e.target.value})}
                    name="enddate" 
                    id="namenddatee" 
                    placeholder='End Date'
                    className='border-2 rounded py-2 px-4 focus:border-gray-500 w-full' />
                </div>
            </div>
            <div className='mb-3 mt-4'>
            <label htmlFor="id">Assignee </label>
                    <div className='py-[23px] flex gap-4'>
                        <div>{data.assignee[0].name}</div>
                        <div className='text-[25px] '><IoIosClose className='text-red-500' /></div>
                        <div className='text-[18px] pt-1'><FiPlus  /></div>
                    </div>
                    <label htmlFor="id">Add collabrators </label>
            </div>

            <div className='mb-3 mt-4'>
                <label htmlFor="id">Projects </label>
                <input 
                type="text" 
                value={data.projectName}
                onChange={(e) => setData({ ...data, projectName: e.target.value})}
                name="projects" 
                id="projects" 
                placeholder='Project Name'
                className='border-2 rounded-xl py-2 px-4 focus:border-gray-500 w-full' />
            </div>
            <div className='mb-3'>
                <label htmlFor="names">Description</label>

                <textarea 
                 value={data.projectDescription}
                 onChange={(e) => setData({ ...data, projectDescription: e.target.value})}
                name="description" 
                id="description" 
                placeholder='Add more details to this task'
                cols="20" rows="5" className='border-2 rounded-xl py-2 px-4 focus:border-gray-500 w-full'>
                </textarea>
            </div>

            <div className='mb-3'>
                <label htmlFor="names">Priority</label>

                <div className='flex gap-14 pt-4'>
                    <div className='flex gap-2'>
                        <div>
                            <input type="radio" onClick={() => setData({...data, priority: 'low'})} name="priority" id="" />
                        </div>
                        <div>Low</div>
                    </div>
                    <div className='flex gap-2'>
                        <div>
                            <input onClick={() => setData({...data, priority: 'normal'})} type="radio" name="priority" id="" />
                        </div>
                        <div>Normal</div>
                    </div>
                    <div className='flex gap-2'>
                        <div>
                            <input onClick={() => setData({...data, priority: 'high'})} type="radio" name="priority" id="" />
                        </div>
                        <div>High</div>
                    </div>
                </div>
            </div>
            <div className='my-10 flex justify-between'>
                <div className='flex'>
                    <div><IoMdAttach /></div>
                    <div>
                        <input type="file" name="attach" className='hidden' id="" />
                    </div>
                </div>
                <div className='flex gap-7'>
                    <div>
                        <button type="button" className='border-2 focus:border-gray-500 rounded text-black px-5 py-1'>Cancel</button>
                    </div>
                    <div>
                        <button onClick={() => handleAddTask()} type="button" className='bg-blue-500 rounded text-white px-5 py-1'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
