import React from "react";
import "./Login.css"

import Photo_Login from './image/Photo_LoginPage.png';
//import {useNavigate} from 'react-router-dom'
import {useState,useEffect} from "react";
import axios from "axios"
import ErrorMessage from "./ErrorMesssge";
import { Link } from "react-router-dom";
import { json } from "react-router-dom";
  import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
  

function LogIn() {
    
    const [email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    const[error,setError] = useState(false)
    const[loading,setLoading] = useState(false)
  
  const diffToast = (message, type) => {
    toast[type](message, {
      position: "top-center",
      theme: "dark",
    });
  };
 
    const submitHandler = async (e) => {
        e.preventDefault()
       try {
        const config = {
            headers: {
            "Content-type": "application/json"
        }
       }
       setLoading(true)
        const { data } = await axios.post("http://localhost:5000/api/auth/login",
        {
                email,
                password,
        },
        config
        )
console.log(data)
localStorage.setItem('userInfo',JSON.stringify(data))
setLoading(false)
diffToast("Login Successful", "success");
window.location = "/home";
    }
    catch(error)
    {
        setError(error.response.data.message)
        setLoading(false)
    //    alert("Invalid Credentials")
      diffToast("Invalid Credentials", "error");
    }
 
}
    return (
      <div className="bg-gradient-to-r from-indigo-100 via-pink-300 to-purple-900 h-screen">
        <div className="flex space-x-48 md:flex-shrink-0">
          <div className="mt-20">
            <p className="ml-40 text-3xl font-bold font-serif">
              Sign in to access our content
            </p>
            <img
              className="w-[500px] h-[500px] ml-36"
              src={Photo_Login}
              alt=""
            />
          </div>
          <div className="border-4 border-white h-screen "></div>
          <div className="flex justify-end py-36 pr-40">
            <div className="bg-purple-pink w-96 h-96 rounded-3xl flex flex-col justify-center items-center">
              <h1 className="text-2xl text-white font-serif">Log In</h1>
              <form>
                <div className="my-4">
                  <label
                    htmlFor="email"
                    className="text-xl text-purple-violent font-bold"
                  >
                    Email:{" "}
                  </label>
                  <div>
                    <input
                      type="email"
                      name="title"
                      className="my-2 shadow appearance border rounded-2xl w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-indigo-100 focus:shadow-outline"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    ></input>
                  </div>
                </div>
                <div className="my-4">
                  <label
                    htmlFor="password"
                    className="text-xl text-purple-violent font-bold"
                  >
                    Password:{" "}
                  </label>
                  <div>
                    <input
                      type="password"
                      name="password"
                      className="my-2 shadow appearance-none border rounded-2xl w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-indigo-100 focus:shadow-outline"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                    ></input>
                  </div>
                </div>
                {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
                <button
                  type="submit"
                  className="inline-block px-6 py-2.5 bg-purple-100 text-pink-violent font-medium text-lg leading-tight uppercase rounded-full shadow-md hover:bg-white hover:shadow-lg focus:bg-pink-violent focus:text-white focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-violent active:text-white active:shadow-lg transition duration-150 ease-in-out"
                  onClick={submitHandler}
                >
                  Submit
                </button>
                <ToastContainer />
              </form>
              <div className="my-2 text-white">
                <p>Don't have account?</p>
                <Link
                  to="/SignUp"
                  className="text-center underline cursor-pointer"
                >
                  Create Account
                </Link>
              </div>
              <div className="my-2 text-white">
                <Link
                  to="/forgot-password"
                  className="text-center underline cursor-pointer"
                >
                  Forgot Password
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default LogIn;
