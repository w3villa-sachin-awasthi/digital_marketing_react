import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    if (!username || !password) {
      alert("Please fill in all the fields");
    } else {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      alert("User registered successfully!");
      navigate("/");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-orange-200 via-orange-300 to-orange-400">
      <div className="w-[360px] p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center text-orange-600 mb-6">
          Sign Up
        </h2>
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <button
          onClick={handleClick}
          className="w-full py-2 mt-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition duration-300"
        >
          Sign Up
        </button>
        <div className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/" className="text-orange-600 font-medium hover:underline">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
