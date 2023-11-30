import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { loginAction } from '../redux/actions/authActions';

export default function Login() {
    const [data, setData] = useState({
        phone: '',
        password: '',
        loading: false,
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = () => {
        setData({ ...data, loading: true });
        const payload = {
            phone: data.phone,
            password: data.password,
        }
        dispatch(loginAction(payload, navigate));
        setData({ ...data, loading: false });
    }
  return (
    <div>
      
      <div className='w-full md:w-[48rem] mt-[3rem]  px-1rem md:px-0 m-auto flex items-center justify-center border rounded'>
    <div className='flex flex-col w-[35rem] mx-auto px-2 py-2 gap-2'>
        <h1 className='w-full text-[3.375rem] text-[#565656] font-bold text-center'>
            Hello <span className='text-teal-500 font-nunito tracking-[0.02em] leading-[4.421875rem]'>Again</span>
        </h1>
        <p className='text-1.125rem font-normal mb-6 font-nunito leading-[2.0275rem] tracking-[0.02em] text-[#7e7f88] text-center'>
            Welcome Back To The Log in Page!
        </p>
        <div className='flex justify-center p-2'>
        <input
            value={data.phone}
            onChange={(e) => setData({ ...data, phone: e.target.value })}
            className='w-[70%] p-2 border bg-white rounded-[0.50rem]  font-nunito  leading-[0.02em] placeholder:text-[#9092B0] placeholder:p-2 font-normal'
            placeholder='Enter phone number'
            type='text'
        />
        </div>
        <div className='flex justify-center p-2'>
        <input
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
            className='w-[70%] p-2 border bg-white rounded-[0.50rem]  font-nunito leading-[0.02em] placeholder:text-[#9092B0] placeholder:p-2 font-normal'
            placeholder='Password'
            type='password'
        />
        </div>
        <div className='flex justify-center mb-4'>
        <Link
            className='text-[#757575] underline text-1rem font-normal font-nunito hover:text-[#4B4AEF]'
            to='/forgot-password'
        >
            Forgot password
        </Link>
        </div>
        <div className='flex justify-center'>
        <button
            disabled={data.loading}
            onClick={handleLogin}
            className={`${data.loading ? 'bg-[#b4a575]' : 'bg-teal-500'} w-[30%] rounded-[0.625rem]`}
        >
            {data.loading ? 'Loading...' : <span className='text-1.625rem font-medium leading-[2.061875rem] font-nunito'>Sign In</span>}
        </button>
        </div>
        {data?.errorMessage?.length > 0 && (
            <div className='w-full h-[4.5rem] bg-[#eba4a4] mt-[1.25rem] flex items-center justify-center'>
                <h1 className='text-white text-1.25rem'>
                    {data.errorMessage?.charAt(0)?.toUpperCase() + data?.errorMessage?.slice(1)}
                </h1>
            </div>
        )}

        <div className='flex justify-center mb-4'>
        <p className="p-[1rem] text-1.125rem font-light text-gray-500">
            Don’t have an account yet? <Link to="signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
        </p>
        </div>
    </div>
</div>

    </div>
  )
}
