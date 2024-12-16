import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
function Register() {
    const navigate = useNavigate();
   
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    
 
    const handleClick = () => {
      
        let storedUser = localStorage.getItem('userinfo');
    
        if (storedUser) {
        
          let parsedUser = JSON.parse(storedUser);
    
      
          if (username === parsedUser.username && password === parsedUser.password) {
            console.log("Login successful:", parsedUser.username);
            alert('Login successful!');
            navigate('/home'); // Redirect to home page
          } else {
            console.log("Incorrect credentials");
            alert('Incorrect username or password!');
            navigate('/register'); // Redirect to register page
          }
        } else {
          // If no user is found, register the new user
          let obj = { username, password };
          localStorage.setItem("userinfo", JSON.stringify(obj));
          console.log("User registered:", obj.username);
          alert('User not found. Registered successfully.');
          navigate('/home'); // Redirect to home page
        }
      };
  
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="h-[60%] flex flex-col bg-slate-800 w-[320px] rounded-xl p-4 border-fuchsia-600 text-slate-50 opacity-95 text-slate-150 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border">
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