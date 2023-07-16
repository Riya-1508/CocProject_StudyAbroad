import React from "react";
import "./ForgotPassword.css";
import Photo_Login from './image/Photo_LoginPage.png';
import { useState } from "react";
import axios from "axios";
function ForgotPassword() {
    const [email, setEmail] = useState("");
	const [msg, setMsg] = useState("");
	const [error, setError] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:5000/api/passwordReset/reset";
			const { data } = await axios.post(url, { email });
			setMsg(data.message);
			setError("");
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
				setMsg("");
			}
            console.log(error)
		}
	};
     return (
        <div className="bg-gradient-to-r from-indigo-100 via-pink-300 to-purple-900 h-screen" >
        <div className="flex space-x-48 md:flex-shrink-0">
            <div className="mt-20" >
                <p className="ml-40 text-3xl font-bold font-serif">Forgot Password</p>
                    <img className="w-[500px] h-[500px] ml-36"src={Photo_Login} alt=""/>
            </div>
                    <div className="border-4 border-white h-screen "></div>
            <div className="flex justify-end py-36 pr-40">
                <div className="bg-purple-pink w-96 h-96 rounded-3xl flex flex-col justify-center items-center">
                    
                   
                    <form onSubmit={handleSubmit}>
                        <div className="my-4">
                            <label htmlFor="email" className="text-xl text-purple-violent font-bold"  >Email: </label>
                            <div><input type="email" name="title" className="my-2 shadow appearance border rounded-2xl w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-indigo-100 focus:shadow-outline"  onChange = {(e) => setEmail(e.target.value)} value = {email} ></input>
                    
                    </div>
                        </div>
                       
                        
                        <button type="submit" className="inline-block px-6 py-2.5 bg-purple-100 text-pink-violent font-medium text-lg leading-tight uppercase rounded-full shadow-md hover:bg-white hover:shadow-lg focus:bg-pink-violent focus:text-white focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-violent active:text-white active:shadow-lg transition duration-150 ease-in-out" >Submit</button>
                    </form>
                    
                </div>
            </div>
        </div >
        </div >
    );
}
export default ForgotPassword;
