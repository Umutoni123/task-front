import React, { useEffect, useState } from 'react'
import Spinner from '../Components/Spinner';

import { LuSave } from "react-icons/lu";
import { AiOutlineClose } from "react-icons/ai";
import { IoMdAttach } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import { useDispatch } from 'react-redux';
import { profileAction, updateProfileAction } from '../redux/actions/authActions';

export default function Profile() {
    const [data, setData] = useState({
        name: '',
        phone: '',
        password: '',
    });
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(profileAction()).then((res) => {
            setData({ ...data, name: res.user.name, phone: res.user.phone })
        })
    }, [])

    const handleUpdate = () => {
        const payload = {
            name: data.name,
            phone: data.phone,
            password: data.password
        }   

        dispatch(updateProfileAction(payload))
    }

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
                value={data.name}
                onChange={(e) =>setData({...data, name:e.target.value})}
                type="text" 
                name="name" 
                id="name" 
                placeholder='Task Name'
                className='border-2 rounded py-2 px-4 focus:border-gray-500 w-full' />
            </div>
            <div className='mb-3 mt-7'>
                <label htmlFor="id">Phone Number </label>
                <input 
                value={data.phone}
                onChange={(e) =>setData({...data, phone: e.target.value})}
                type="text" 
                name="phone" 
                id="phone" 
                placeholder='Phone'
                className='border-2 rounded py-2 px-4 focus:border-gray-500 w-full' />
            </div>
            <div className='mb-3 mt-7'>
                <label htmlFor="id">Password </label>
                <input 
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
                type="password" 
                name="password" 
                id="password" 
                placeholder='Password'
                className='border-2 rounded py-2 px-4 focus:border-gray-500 w-full' />
            </div>
           
            <div className='mb-3 mt-7'>
                <button onClick={handleUpdate} type="button" className='bg-blue-500 rounded text-white px-5 py-1'>Submit</button>
            </div>
        </div>
    </div>
  )
}
