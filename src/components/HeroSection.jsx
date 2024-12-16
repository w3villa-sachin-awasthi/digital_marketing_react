import React from 'react'
import img1 from '../images/photo1.png';
import { AiFillCaretDown } from "react-icons/ai";
function HeroSection() {
    return (
        <div className='flex lg:flex-row flex-col  mt-[70px]'>
            <div className="w-[50%]">
                <div className='text-[50px] l'>We create</div>
                <div className='text-[50px]'><span >solution</span> for </div>
                <div className='text-[50px]'>your business</div>
                <p className='text-slate-500 text-[30px]'>Our team keeps a keen eye on emerging trends and technologies to ensure your marketing campaigns remains cutting-edge. </p>
                <button className='bg-orange-600 py-2 px-7 shadow-md rounded-[5px] shadow-slate-500 mt-[30px]'>Get Started</button>
                <h3 className='flex text-[30px] mt-[20px]'> <AiFillCaretDown className='text-orange-700 rounded-[50%] text-[50px] shadow-lg shadow-slate-500 px-[10px] py-[7px] mr-7'/> Explore more</h3>
            </div>

            <div className='   max-w-[60%] w-[80%] lg:w-[50%] bg-cover'>
                <img src={img1} alt="" className=' w-[100%] lg:w-[80%] lg:mx-0 md:mx-[100px] ' />

            </div>
        </div>
    )
}

export default HeroSection