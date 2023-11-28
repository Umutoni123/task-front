import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { signupAction } from '../redux/actions/authActions';

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
    <div className='w-full md:w-[1540px] h-[800px] mx-auto mt-[80px] md:mt-[122px] px-4 md:px-0 justify-between'>
        <div className='flex flex-col w-[500px] mx-auto'>
            <h1 className='w-full text-[54px] text-[#565656] font-bold text-center'>Hello <span className='text-teal-500 font-nunito tracking-[0.02em] leading-[70.75px]'>There</span></h1>
            <p className='text-[23.19px] font-normal font-nunito leading-[32.44px] tracking-[0.02em] text-[#7e7f88] text-center'>We are happy to have you here!</p>
            <input value={data.names} className='w-full h-[72px] bg-white rounded-[20px] px-[20px] font-nunito text-[20px] leading-[0.02em] placeholder:text-[#9092B0] border font-normal mt-[50px]' onChange={(e) => { setData({ ...data, names: e.target.value }) }} placeholder='Enter full name' type='text' />
            <input value={data.phone} maxLength={10} className='w-full h-[72px] bg-white rounded-[20px] px-[20px] font-nunito text-[20px] leading-[0.02em] border placeholder:text-[#9092B0] font-normal mt-[25px]' onChange={(e) => setData({ ...data, phone: e.target.value })} placeholder='Enter phone number' type='text' />
            <input value={data.password} className='w-full h-[72px] bg-white rounded-[20px] px-[20px] font-nunito text-[20px] leading-[0.02em] border placeholder:text-[#9092B0] font-normal mt-[20px] mb-[20px]' onChange={(e) => setData({ ...data, password: e.target.value })} placeholder='Password' type='password' />
            <button disabled={data.loading} onClick={handleSignup} className={`${data.loading ? 'bg-[#b4a575]' : 'bg-teal-500'}  w-full h-[70px] rounded-[10px] mt-[20px]`}>{ data.loading ? 'Loading...' : <span className='text-[26px] font-medium leading-[32.99px] font-nunito'>Sign Up</span> }</button>
            {
                data?.errorMessage?.length > 0 && <div className='w-full h-[72px] bg-[#eba4a4] mt-[20px] flex items-center justify-center'>
                    <h1 className='text-white text-[20px]'>{data.errorMessage?.charAt(0)?.toUpperCase() + data?.errorMessage?.slice(1) }</h1>
                </div>
            }
        </div>
    </div>
  )
}
