import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { signupAction } from '../redux/actions/authActions';
import { Link } from 'react-router-dom';

export default function Signup() {
    const [data, setData] = useState({
        names: '',
        password: '',
        phone: '',
        loading: false,
    });
    const dispatch = useDispatch();

    const handleSignup = () => {
        setData({ ...data, loading: true });
        const payload = {
            name: data.names,
            password: data.password,
            phone: data.phone,
        }
        console.log(payload);
        dispatch(signupAction(payload));
        setData({ ...data, loading: false });
    }

  return (
    <div className='w-full md:w-[48rem] mt-[3rem]  px-1rem md:px-0 m-auto flex items-center justify-center border rounded'>
        <div className='flex flex-col w-[35rem] mx-auto px-2 py-2 gap-2'>
            <h1 className='w-full text-[54px] text-[#565656] font-bold text-center'>Hello <span className='text-teal-500 font-nunito tracking-[0.02em] leading-[70.75px]'>There</span></h1>
            <p className='text-[23.19px] font-normal font-nunito leading-[32.44px] tracking-[0.02em] text-[#7e7f88] text-center'>We are happy to have you here!</p>
           <div className='flex justify-center p-2'>
           <input value={data.names} className='w-[70%] p-2 border bg-white rounded-[0.50rem]  font-nunito leading-[0.02em] placeholder:text-[#9092B0] placeholder:p-2 font-normal' onChange={(e) => { setData({ ...data, names: e.target.value }) }} placeholder='Enter full name' type='text' />
           </div>
            <div className='flex justify-center p-2'>
                <input value={data.phone} maxLength={10} className='w-[70%] p-2 border bg-white rounded-[0.50rem]  font-nunito leading-[0.02em] placeholder:text-[#9092B0] placeholder:p-2 font-normal' onChange={(e) => setData({ ...data, phone: e.target.value })} placeholder='Enter phone number' type='text' />
            </div>
            <div className='flex justify-center p-2'>
            <input value={data.password} className='w-[70%] p-2 border bg-white rounded-[0.50rem]  font-nunito leading-[0.02em] placeholder:text-[#9092B0] placeholder:p-2 font-normal' onChange={(e) => setData({ ...data, password: e.target.value })} placeholder='Password' type='password' />
            </div>
            <div className='flex justify-center'>
                <button disabled={data.loading} onClick={handleSignup} className={`${data.loading ? 'bg-[#b4a575]' : 'bg-teal-500'}  w-[30%] rounded-[0.625rem]`}>{ data.loading ? 'Loading...' : <span className=' font-medium leading-[32.99px] font-nunito'>Sign Up</span> }</button>
            </div>
            {
                data?.errorMessage?.length > 0 && <div className='w-full h-[72px] bg-[#eba4a4] mt-[20px] flex items-center justify-center'>
                    <h1 className='text-white text-[20px]'>{data.errorMessage?.charAt(0)?.toUpperCase() + data?.errorMessage?.slice(1) }</h1>
                </div>
            }
            <div className='flex justify-center mb-4'>
        <p className="p-[1rem] text-1.125rem font-light text-gray-500">
            Have an account yet? <Link to="/" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login</Link>
        </p>
        </div>
        </div>
    </div>
  )
}
