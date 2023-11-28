import React from 'react'
import Spinner from '../Components/Spinner';

import { LuSave } from "react-icons/lu";
import { AiOutlineClose } from "react-icons/ai";
import { IoMdAttach } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import { FiPlus } from "react-icons/fi";

export default function Profile() {
    
  return (
    <div className='mt-2'>
    <Spinner />
        <div className='w-[60%] mx-auto'>
            <div className=''>
                <div>Update Profile</div>
            </div>
            <div className='mb-3 mt-7'>
                <label htmlFor="id">Name </label>
                <input 
                type="text" 
                name="name" 
                id="name" 
                placeholder='Task Name'
                className='border-2 rounded py-2 px-4 focus:border-gray-500 w-full' />
            </div>
            <div className='mb-3 mt-7'>
                <label htmlFor="id">Phone Number </label>
                <input 
                type="text" 
                name="phone" 
                id="phone" 
                placeholder='Phone'
                className='border-2 rounded py-2 px-4 focus:border-gray-500 w-full' />
            </div>
            <div className='mb-3 mt-7'>
                <label htmlFor="id">Password </label>
                <input 
                type="password" 
                name="password" 
                id="password" 
                placeholder='Password'
                className='border-2 rounded py-2 px-4 focus:border-gray-500 w-full' />
            </div>
           
            <div className='mb-3 mt-7'>
                <button type="button" className='bg-blue-500 rounded text-white px-5 py-1'>Submit</button>
            </div>
        </div>
    </div>
  )
}
