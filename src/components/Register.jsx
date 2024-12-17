import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
function Register() {
    const navigate = useNavigate();
   
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    
 
    const handleClick = () => {
      if(!username||!password){
        alert('fill all the field')
      }else{
        let user=localStorage.setItem("username",username);
        let pass=localStorage.setItem("password",password);
          alert('user register succcessfully!');
          navigate('/');
      } 
      };
  
    return (
      <div className="w-screen h-screen flex justify-center items-center bg-orange-100">
        <div className="h-[50%] flex flex-col bg-orange-600 w-[320px] rounded-xl p-4 border-2 border-slate-100 text-slate-50  text-slate-150  ">
          <div className="text-center my-2 text-[30px]">Signup</div>
  
        
  
          <div className="py-2">
            <div className="text-yellow-200">Username</div>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              name="username"
              className="w-full py-[2px] rounded-md px-2 bg-slate-50 text-slate-950"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
  
          <div className="py-2">
            <div className="text-yellow-200">Password</div>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              name="password"
              className="w-full py-[2px] rounded-md px-2 bg-slate-50 text-slate-900"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
  
          <div className="text-yellow-200 py-3">
            Already have an Account?{" "}
            <button className="">
              <Link to={"/"}>Signin</Link>
            </button>
            <button
              className="w-full mt-3 py-2 rounded-xl bg-slate-500"
              onClick={handleClick}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  

export default Register