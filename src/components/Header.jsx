import React from 'react'
import { FaBars } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
function Header() {
    // const navigate=useNavigate();
    function handleClick(){
        // localStorage.removeItem('username')
        // localStorage.removeItem('password');
        // navigate('/');
        
    }
    return (
        <div className="flex justify-between items-center  w-[100%] md:bg-slate-50 bg-orange-600 md:mt-5 mt-0 px-[20px]">
            <div className="text-[32px] md:text-[40px] font-semibold">
                BrandBuzz
            </div>
            <div className='w-[40%] hidden md:flex justify-between font-semibold' >
              <button className='text-orange-600'>Home</button>
              <button>About us</button>
              <button>Contact</button>
              <button>Services</button>
              <button>Blog</button>
            </div>
            <div  className='bg-orange-600  shadow-sm rounded-[5px] shadow-orange-200 text-white h-[45px] px-8 md:flex hidden h- justify-center items-center'>
               <div> SignUp</div>
            </div>
            <div className="flex-none gap-2 md:hidden">
              
                <div className="dropdown dropdown-end">
                <button className='p-0 p-5 '> <FaBars className='text-[20px]'/> </button>
                   
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                            <a className="justify-between">
                                Home
                               
                            </a>
                        </li>
                        <li><a>About us</a></li>
                        <li><a>Contact us</a></li>
                        <li><a>Services</a></li>
                        <li><a>Blogs</a></li>
                        <li onClick={handleClick}><a>Sign Out</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header