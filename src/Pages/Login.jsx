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
      
      <div className='w-full md:w-[1540px] mx-auto mt-[80px] md:mt-[122px] px-4 md:px-0 justify-between'>
                <div className='flex flex-col w-[500px] mx-auto'>
                    <h1 className='w-full text-[54px] text-[#565656] font-bold text-center'>Hello <span className='text-teal-500 font-nunito tracking-[0.02em] leading-[70.75px]'>Again</span></h1>
                    <p className=' text-lg font-normal font-nunito leading-[32.44px] tracking-[0.02em] text-[#7e7f88] text-center'>Welcome back!</p>
                    <input value={data.phone} onChange={(e) => setData({ ...data, phone: e.target.value })} className='w-full border h-[72px] bg-white rounded-[20px] px-[20px] font-nunito text-[20px] leading-[0.02em] placeholder:text-[#9092B0] font-normal mt-[50px]' placeholder='Enter phone number' type='text' />
                    <input value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} className='w-full border h-[72px] bg-white rounded-[20px] px-[20px] font-nunito text-[20px] leading-[0.02em] placeholder:text-[#9092B0] font-normal mt-[20px] mb-[20px]' placeholder='Password' type='password' />
                    <Link className='text-[#757575] self-end text-[20px] font-normal font-nunito hover:text-[#4B4AEF]' to='/forgot-password'>Recover password</Link>
                    <button disabled={data.loading} onClick={handleLogin} className={`${data.loading ? 'bg-[#b4a575]' : 'bg-teal-500'}  w-full h-[70px] rounded-[10px] mt-[20px]`}>{ data.loading ? 'Loading...' : <span className='text-[26px] font-medium leading-[32.99px] font-nunito'>Sign In</span> }</button>
                    {
                        data?.errorMessage?.length > 0 && <div className='w-full h-[72px] bg-[#eba4a4] mt-[20px] flex items-center justify-center'>
                            <h1 className='text-white text-[20px]'>{data.errorMessage?.charAt(0)?.toUpperCase() + data?.errorMessage?.slice(1) }</h1>
                        </div>
                    }

<p class="text-md font-light text-gray-500 ">
                      Don’t have an account yet? <Link to="signup" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                  </p>
                    
                </div>
            </div>
    </div>
  )
}
