import React from 'react'
import img1 from '../images/photo1.png';
import { AiFillCaretDown } from "react-icons/ai";
function HeroSection() {
    return (
        <div className='flex lg:flex-row flex-col  md:mt-[70px] mt-[50px] md:px-[50px] px-[50px] lg:px[70px] xl:px-[100px] w-screen font-medium'>
            <div className="md:w-[50%] sm:w-[70%] w-[90%]">
                <div className='md:text-[50px] text-[40px]'>We create</div>
                <div className='md:text-[50px] text-[40px]'><span >solution</span> for </div>
                <div className='md:text-[50px] text-[40px]'>your business</div>
                <p className='text-slate-500 md:text-[30px] font-normal text-[23px]'>Our team keeps a keen eye on emerging trends and technologies to ensure your marketing campaigns remains cutting-edge. </p>
                <button className='bg-orange-600 py-2 px-7 shadow-md rounded-[5px] shadow-slate-500 mt-[30px]'>Get Started</button>
                <h3 className='flex text-[30px] mt-[20px]'> <AiFillCaretDown className='text-orange-700 rounded-[50%] text-[50px] shadow-lg shadow-slate-500 px-[10px] py-[7px] mr-7'/> Explore more</h3>
            </div>

            <div className='    w-[100%] sm:w-[80%] lg:w-[50%] bg-cover '>
                <img src={img1} alt="" className=' w-[100%] lg:w-[80%] lg:mx-0 md:mx-[100px] ' />

            </div>
        </div>
    )
}

export default HeroSection