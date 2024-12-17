import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const navigate=useNavigate();
 
  const handleClick = () => {
       if(!username||!password){
        alert('fill all the fields')
       }else{
        let uname=localStorage.getItem('username');
        let upass=localStorage.getItem('password');
        if(uname===username&&upass===password){
               alert("login succcessfully done");
               navigate('/home')
        }else{
            alert('invalid username and password')
        }
       }
  };
  return (
    <div className=" w-screen h-screen flex justify-center items-center bg-orange-100">
      <div className="h-[50%]  flex flex-col bg-orange-600 w-[320px]  rounded-xl p-4    opacity-95 text-slate-150   border border-cyan-600">
        <div className="text-center my-2 text-[30px] ">Signin</div>

        <div className="py-2">
          <div className="text-yellow-200">Username</div>
          <input
            type="text"
            placeholder="enter your username "
            value={username}
            name="username"
            className="w-full py-[2px] rounded-md px-2 bg-slate-50 text-slate-950"
            onChange={(e) => setusername(e.target.value)}
          />
        </div>

        <div className="py-2">
          <div className="text-yellow-200">password</div>
          <input
            type="password"
            placeholder="enter your password "
            value={password}
            name="name"
            className="w-full py-[2px] rounded-md px-2 bg-slate-50 text-slate-900"
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>
        <div className="text-yellow-200 py-3">
          <div className="text-center">
            Don't have an Account?{" "}
            <button>
              <Link to={"/register"}>Signup</Link>
            </button>
          </div>
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

export default Login;