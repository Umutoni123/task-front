import React from 'react'
import { Link } from 'react-router-dom';
import { AiFillEye } from 'react-icons/ai';
const NotFound = () => {
  return (
    <div class="flex items-center justify-center h-screen bg-[#0a0a12]">
        <div class="text-center text-white">
            <div class="font-bold text-[230px] flex justify-center gap-2">
                <div>4</div>
                <div className='border-[#d8f401] border-[20px] px-2 mt-[90px] rounded-t-full rounded-b-full text-[#d8f401] pt-8 h-[175px]'>
                    <AiFillEye className='text-[68px]' />
                </div>
                <div>4!</div>
            </div>
            <h2 class="text-2xl mt-4 text-[80px] font-quicksand">Oops, Page <span className='text-[#d8f401]'>not found</span></h2>
            <Link to="/">
                <div class="text-2xl mt-20 inline-block px-6 py-3 rounded bg-[#d8f401] text-black font-quicksand">GO HOME</div>
            </Link>
        </div>
    </div>

  )
}

export default NotFound