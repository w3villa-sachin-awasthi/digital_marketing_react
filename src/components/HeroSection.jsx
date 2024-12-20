import React from 'react'
import img1 from '../images/photo1.png';
import { AiFillCaretDown } from "react-icons/ai";
function HeroSection() {
    return (
        <div className='flex lg:flex-row flex-col  md:mt-[140px] mt-[50px]  w-[100%] font-medium bg-slate-50 px-[20px]'>
            <div className="md:w-[50%] sm:w-[70%] w-[90%] mt-10">
                <div className='leading-none font-medium'>
                    <div className='md:text-[57px] text-[40px] '>We create</div>
                    <div className='md:text-[57px] text-[40px]'><span className='text-orange-600'>solution</span> for </div>
                    <div className='md:text-[57px] text-[40px]'>your business</div>
                </div>
                <p className='md:text-[23px] mt-[23px] font-light text-[17px] leading-none md:w-[80%]  w-full'>Our team keeps a keen eye on emerging trends and technologies to ensure your marketing campaigns remains cutting-edge. </p>
                <button className='bg-orange-600 py-2 px-7 text-slate-50 shadow-sm rounded-[5px] shadow-slate-500 mt-[30px]'>Get Started</button>
                <h3 className='flex text-[28px] mt-[20px] font-normal '> <AiFillCaretDown className='text-orange-700 rounded-[50%] text-[50px] shadow-md shadow-slate-300 px-[10px] py-[7px] mr-6' /> Explore more</h3>
            </div>

            <div className='    w-[100%] sm:w-[80%] lg:w-[50%] bg-cover '>
                <img src={img1} alt="" className=' w-[100%] lg:w-[80%] lg:mx-0 md:mx-[100px] ' />

            </div>
        </div>
    )
}

export default HeroSection