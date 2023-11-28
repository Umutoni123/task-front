import React, { useState } from 'react'

export default function Otp() {
    const [otp, setOtp] = useState('');
    const [loading, setLoading] = useState(false);

  return (
    <div className='w-full md:w-[1540px] mx-auto mt-[80px] md:mt-[122px] px-4 md:px-0 justify-between'>
        <div className='flex flex-col w-[500px] mx-auto'>
            <h1 className='w-full text-[54px] text-[#565656] font-bold text-center'>OTP <span className='text-teal-500 font-nunito tracking-[0.02em] leading-[70.75px]'>Verification</span></h1>
            <p className='text-[23.19px] font-normal font-nunito leading-[32.44px] tracking-[0.02em] text-[#7e7f88] text-center'>Enter your code for recovery</p>
            <input onChange={(e) => setOtp(e.target.value)} maxLength={6} nKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()} className='w-full h-[72px] bg-white rounded-[20px] px-[20px] font-nunito text-[30px] text-center  leading-[0.02em] placeholder:text-[#9092B0] font-normal mt-[50px]' placeholder='Enter your code' type='text' />
            <button  className='bg-teal-500 w-full h-[70px] rounded-[10px] text-[26px] font-medium leading-[32.99px] font-nunito mt-[40px]'>{ loading ? 'Loading...' : <span className='text-[26px] font-medium leading-[32.99px] font-nunito'>Verify</span> }</button>
        </div>
    </div>
  )
}
