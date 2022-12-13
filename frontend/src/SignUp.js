import React from "react";
import "./SignUp.css"
//import Photo_Sign from './image/Photo_SignUp.png';

function SignUp() {
    return (
        <div className="bg-gradient-to-r from-indigo-100 via-pink-300 to-purple-900 h-screen" >
            <div className="flex space-x-48 md:flex-shrink-0">
                <div class="mt-20" >
                <p className="ml-[330px] text-4xl capitalize font-bold font-mono">Create</p>
                <span className="ml-80 text-4xl capitalize font-bold font-mono">Account</span>
                    <img className="w-[700px] h-[500px] ml-36"  alt="" />
                </div>
                <div className="border-4 border-white h-screen "></div>
                <div className="flex justify-end py-[22px] pr-40">
                    <div className="bg-purple-pink w-96 h-[700px] rounded-3xl flex flex-col justify-center items-center">
                        <h1 className="mb-6 text-2xl text-white font-serif">Sign Up</h1>
                        <form>
                            <div className="my-0.5">
                                <label htmlFor="name" className="text-xl text-purple-violent font-bold">First Name: </label>
                                <div><input type="text" name="name" className="my-2 shadow appearance border rounded-2xl w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-indigo-100 focus:shadow-outline"></input></div>
                            </div>
                            <div className="my-2">
                                <label htmlFor="Lname" className="text-xl text-purple-violent font-bold">Last Name: </label>
                                <div><input type="text" name="Lname" className="my-2 shadow appearance border rounded-2xl w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-indigo-100 focus:shadow-outline"></input></div>
                            </div>
                            <div className="my-2">
                                <label htmlFor="phone" className="text-xl text-purple-violent font-bold">Phone Number: </label>
                                <div><input type="tel" name="phone" className="my-2 shadow appearance border rounded-2xl w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-indigo-100 focus:shadow-outline"></input></div>
                            </div>
                            <div className="my-2">
                                <label htmlFor="email" className="text-xl text-purple-violent font-bold">Email: </label>
                                <div><input type="email" name="title" className="my-2 shadow appearance border rounded-2xl w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-indigo-100 focus:shadow-outline"></input></div>
                            </div>
                            <div className="my-2">
                                <label htmlFor="password" className="text-xl text-purple-violent font-bold">Password: </label>
                                <div><input type="password" name="password" className="my-2 shadow appearance-none border rounded-2xl w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-indigo-100 focus:shadow-outline"></input></div>
                            </div>
                            <button type="submit" className="inline-block px-6 py-2.5 bg-purple-100 text-pink-violent font-medium text-lg leading-tight uppercase rounded-full shadow-md hover:bg-white hover:shadow-lg focus:bg-pink-violent focus:text-white focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-violent active:text-white active:shadow-lg transition duration-150 ease-in-out">Submit</button>
                        </form>
                        {/* <div className="my-10 text-white"> */}
                            <p className="text-white text-md mt-4">Already have account?</p>
                            <button type="submit" className="inline-block mt-2 px-6 py-2 bg-purple-100 text-pink-violent font-medium text-lg leading-tight uppercase rounded-full shadow-md hover:bg-white hover:shadow-lg focus:bg-pink-violent focus:text-white focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-violent active:text-white active:shadow-lg transition duration-150 ease-in-out">Log In</button>
                        {/* </div> */}
                    </div>
                </div>
            </div >

        </div >
    );
}

export default SignUp;