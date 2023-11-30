import React, { useState } from 'react'

export default function ForgotPassword() {
    const [phone, setPhone] = useState('');
    const [loading, setLoading] = useState(false);

  return (
    <div className=''>
      <div className='w-full md:w-[48rem] mt-[3rem]  px-1rem md:px-0 m-auto flex items-center justify-center border rounded'>
        <div className='flex flex-col w-[35rem] mx-auto px-2 py-2 gap-6'>
            <h1 className='w-full text-[54px] text-[#565656] font-bold text-center'>Forgot <span className='text-teal-500 font-nunito tracking-[0.02em] leading-[70.75px]'>Password?</span></h1>
            <p className='text-[23.19px] font-normal font-nunito leading-[32.44px] tracking-[0.02em] text-[#7e7f88] text-center'>Enter you phone number for recovery</p>
            <div className='flex justify-center'>
            <input value={phone} onChange={(e) => setPhone(e.target.value)} className='w-[70%] p-2 border bg-white rounded-[0.50rem]  font-nunito  leading-[0.02em] placeholder:text-[#9092B0] placeholder:p-2 font-normal' placeholder='Enter phone number' type='text' />
            </div>
            <div className='flex justify-center mt-6 mb-6'>
            <button className=' bg-teal-500 w-[30%] rounded-[0.625rem] hover:bg-teal-700'>{ loading ? 'Loading...' : <span className=' font-medium leading-[32.99px] font-nunito '>Recover</span> }</button>
            </div>
        </div>
    </div>
    </div>
  )
}
