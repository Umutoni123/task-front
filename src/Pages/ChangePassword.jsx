import React from 'react'

export default function ChangePassword() {
  return (
    <div className='w-full md:w-[1540px] mx-auto mt-[80px] md:mt-[122px] px-4 md:px-0 justify-between'>
        <div className='flex flex-col w-[500px] mx-auto'>
            <h1 className='w-full text-[54px] text-[#565656] font-bold text-center'>Change <span className='text-[#FFCA1D] font-nunito tracking-[0.02em] leading-[70.75px]'>Password</span></h1>
            <p className='text-[23.19px] font-normal font-nunito leading-[32.44px] tracking-[0.02em] text-[#7e7f88] text-center'>Create a new password.</p>
            <input value={password} onChange={(e) => setPassword(e.target.value)} className='w-full h-[72px] bg-white rounded-[20px] px-[20px] font-nunito text-[20px] leading-[0.02em] placeholder:text-[#9092B0] font-normal mt-[50px]' placeholder='New Password' type='password' />
            <input value={confirmPassword} onChange={(e) => {
                setConfirmPassword(e.target.value);
            }} className='w-full h-[72px] bg-white rounded-[20px] px-[20px] font-nunito text-[20px] leading-[0.02em] placeholder:text-[#9092B0] font-normal mt-[20px] mb-[20px]' placeholder='Confirm Password' type='password' />
            { confirmPassword.length > 0 && confirmPassword !== password ? <span className='text-[#a12] font-nunito'>Passwords must match.</span> : null }
            <button disabled={confirmPassword.length > 0 && confirmPassword !== password ? true : false} onClick={handleChangePassword} className='bg-[#FFCA1D] w-full h-[70px] rounded-[10px] text-[26px] font-medium leading-[32.99px] font-nunito mt-[20px]'>{ loading ? <Lottie animationData={LoadingLottieAnimation} loop={true} className='self-center w-[100%] h-[100%]' /> : <span className='text-[26px] font-medium leading-[32.99px] font-nunito'>Change Password</span> }</button>
        </div>
    </div>
  )
}
