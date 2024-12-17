import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import Btn from './Btn';
function Footer() {
  return (
    <footer className="footer relative text-base-content p-10 bg-orange-100 pt-[80px]">
    <aside>
      <div className='md:text-[35px] text-[30px] lg:text-[40px] text- '>Brandbuzz</div>
      <p className='flex text-[25px] mt-4 px-6'>
        <FaFacebookF className='bg-blue-400 rounded-[50%] text-[31px] mr-3'/> 
        <FaInstagram className='bg-red-500 text-white  rounded-[31%] text-[31px] mr-3'/> 
        <FaTwitter className='bg-blue-400 rounded-[25%] text-[31px] text-white mr-3'/>
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
   <div className=' bg-orange-600 text-white w-[70%] flex justify-between  h-[50px] items-center rounded-md px-[20px]'>
   <div>Ready to get started</div>
   <Btn value="Contacts Us"></Btn>
    </div>
   </div>
  </footer>
  )
}

export default Footer;