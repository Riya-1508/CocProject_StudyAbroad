import React from "react";
import "./ResetPassword.css";
import Photo_Login from "./image/Photo_LoginPage.png";
import { useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function PasswordReset() {
    const [validUrl, setValidUrl] = useState(false);
	const [password, setPassword] = useState("");
	const [msg, setMsg] = useState("");
	const [error, setError] = useState("");
	const param = useParams();
	const url = `http://localhost:5000/api/passwordReset/${param.id}/${param.token}`;
const diffToast = (message, type) => {
   toast[type](message, {
     position: "top-center",
     theme: "dark",
   });
}
	useEffect(() => {
		const verifyUrl = async () => {
			try {
				await axios.get(url);
				setValidUrl(true);
			} catch (error) {
				setValidUrl(false);
			}
		};
		verifyUrl();
	}, [param, url]);
	
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const { data } = await axios.post(url, { password });
			setMsg(data.message);
			setError("");
			window.location = "/login";
			console.log("Password Reset Success")
			
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
				console.log(error)
				setMsg("");
			}
			diffToast("Reset Unsuccessfull", "error");
		}
	};
     return (
       <div className="bg-gradient-to-r from-indigo-100 via-pink-300 to-purple-900 h-screen">
         <div className="flex space-x-48 md:flex-shrink-0">
           <div className="mt-20">
             <p className="ml-40 text-3xl font-bold font-serif">
               Reset your Password
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
               <form>
                 <div className="my-4">
                   <label
                     htmlFor="password"
                     className="text-xl text-purple-violent font-bold"
                   >
                     New Password:{" "}
                   </label>
                   <div>
                     <input
                       type="password"
                       name="title"
                       className="my-2 shadow appearance border rounded-2xl w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-indigo-100 focus:shadow-outline"
                       onChange={(e) => setPassword(e.target.value)}
                       value={password}
                     ></input>
                   </div>
                 </div>

                 <button
                   type="submit"
                   className="inline-block px-6 py-2.5 bg-purple-100 text-pink-violent font-medium text-lg leading-tight uppercase rounded-full shadow-md hover:bg-white hover:shadow-lg focus:bg-pink-violent focus:text-white focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-violent active:text-white active:shadow-lg transition duration-150 ease-in-out"
                   onClick={handleSubmit}
                 >
                   Submit
                 </button>
                 <ToastContainer />
               </form>
             </div>
           </div>
         </div>
       </div>
     );
}
export default PasswordReset;
