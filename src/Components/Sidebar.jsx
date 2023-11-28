import React from 'react'
import { AiFillCodepenCircle } from 'react-icons/ai'
import { BiLogOutCircle } from 'react-icons/bi'
import { SidebarData } from '../Data/SidebarData'
import { Link, useLocation } from 'react-router-dom'
import SSP_7251 from '../Assets/images/SSP_7251.jpeg'
import { useSelector } from 'react-redux'
export default function Sidebar() {
    const { userInfo } = useSelector((state) => state.auth);
    const location = useLocation();
    const active = location.pathname
    
  return (
    <div className='bg-[#1c2537] top-0 z-10 left-0 text-[#e3e4e6] h-screen w-[250px] px-3 pt-10 font-quicksand relative'>
       <div>
            <Link to='/'>
                    <div className='flex gap-3'>
                        <div><AiFillCodepenCircle className='text-[50px]' /></div>
                        <div className='mt-3'>TM</div>
                    </div>
                </Link>
            <div className='py-6 text-[#9ea1a7]'>Menu</div>
            <div>
                {
                    SidebarData.map((item) => {
                        return(
                            <Link to={item.path}>
                                <div className={`${active === item.path ? "bg-[#293751]" : null} flex gap-4 hover:bg-[#293751] p-4 rounded-xl`}>
                                    <div className='text-[22px]'>{item.icons}</div>
                                    <div>{item.name}</div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
       </div>
       <div className='absolute bottom-4 flex gap-3 w-[250px]'>
            <div>
                <img className='h-[60px] rounded-full' src={SSP_7251 } alt="SSP_7251" srcset="" />   
            </div>
            <div className='flex gap-8 mt-5'>
                <div>
                    <div>{userInfo?.name}</div>
                </div>
                <div><BiLogOutCircle className='text-[25px]' /></div>
            </div>
       </div>
    </div>
  )
}
