import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import Btn from './Btn';
function Footer() {
  return (
    <footer className="footer max-w-[1600px] mx-auto relative text-base-content p-10 bg-orange-100 pt-[80px] mt-[140px] bg-cover">
      <aside>
        <div className='md:text-[35px] text-[30px] lg:text-[40px] text-bold '>Brandbuzz</div>
        <p className='flex text-[12px] mt-4 '>
           <div className='bg-blue-600 rounded-[50%] text-[19px] text-white mr-3 w-[40px] h-[40px] flex justify-center items-center'> <FaFacebookF  /></div>
         <div className='bg-orange-600 text-white  rounded-[50%] text-[23px] w-[40px] h-[40px] mr-3 flex justify-center items-center'>  <FaInstagram  /> </div>
          <div className='bg-cyan-600 rounded-[50%] text-[23px] text-white w-[40px] h-[40px] mr-3 flex justify-center items-center' > <FaTwitter /></div>
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Careers</a>
        <a className="link link-hover">Team</a>
      </nav>
      <nav>
        <h6 className="footer-title">Designer</h6>
        <a className="link link-hover">Become a developer us</a>
        <a className="link link-hover">Blog</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav className=''>
        <h6 className="footer-title">Resource</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
      <div className='absolute flex justify-center w-full top-[-22px]'>
        <div className=' bg-orange-600 text-white w-[70%] flex justify-between h-[50px] lg:h-[70px] items-center rounded-md px-[20px] text-[17px]'>
          <div>Ready to get started</div>
          <button className='border-2 border-slate-50 px-[10px] py-[3px] rounded-md'>Contact us</button>
        </div>
      </div>
    </footer>
  )
}

export default Footer;