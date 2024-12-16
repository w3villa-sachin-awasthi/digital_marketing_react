import React from 'react'

function Header() {
    return (
        <div className="flex justify-between items-center md:px-[50px] px-[50px] lg:px[70px] xl:px-[100px] w-screen">
            <div className="">
                <a className="btn btn-ghost text-xl ">Brandbuzz</a>
            </div>
            <div className='w-[40%] hidden md:flex justify-between ' >
              <button>Home</button>
              <button>About us</button>
              <button>Contact</button>
              <button>Services</button>
              <button>Blog</button>
            </div>
            <div  className='bg-orange-600 py-2 px-7 shadow-md rounded-[5px] shadow-slate-500 h-[35px]'>
                SignUp
            </div>
            <div className="flex-none gap-2 md:hidden">
              
                <div className="dropdown dropdown-end">
                <button className='p-0 p-5 '>SignUp</button>
                   
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
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header