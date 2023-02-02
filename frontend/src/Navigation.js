import React from "react";
// import Searchbar from "./New_search";
// import { useState } from "react";
import "./Navigation.css";

function Navigation() {

    return (
        <>
            <div className="bg-gradient-to-bl from-purple-200 via-purple-400 to-purple-800 ">
                <nav className="flex flex-row h-16 ">
                    <img src="https://cdn-icons-png.flaticon.com/512/3313/3313498.png" className="h-14 pl-4 pt-3 animate-bounce" alt=""></img>

                    <div className="group inline-block">
                        <button
                            className="outline-none focus:outline-none px-4 py-1 text-white font-semibold p-2 rounded flex items-center min-w-32"
                        >
                            <span className="pr-1 font-semibold flex-1 py-4 pl-2">Courses</span>
                            <span>
                                <svg
                                    className="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                    />
                                </svg>
                            </span>
                        </button>
                        <ul className="bg-purple-400 text-white rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32">
                            <li className="rounded-lg relative text-white px-4 py-2 hover:bg-purple-500">
                                <button
                                    className="w-full text-left flex items-center outline-none focus:outline-none"
                                >
                                    <span className="flex-1">Graduation</span>
                                    <span className="mr-auto">
                                        <svg
                                            className="fill-current h-4 w-4 transition duration-150 ease-in-out"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                            />
                                        </svg>
                                    </span>
                                </button>
                                <ul className="rounded-sm absolute top-0 right-0 transition duration-150 ease-in-out origin-top-left min-w-32">
                                    <li className=""><a className="bg-purple-400 text-white hover:bg-purple-500 py-2 px-4 hover:rounded-lg block whitespace-no-wrap" href="/">USA</a></li>
                                    <li className=""><a className="bg-purple-400 text-white hover:bg-purple-500 py-2 px-4 hover:rounded-lg block whitespace-no-wrap" href="/">Germany</a></li>
                                    <li className=""><a className="bg-purple-400 text-white hover:bg-purple-500 py-2 px-4 hover:rounded-lg block whitespace-no-wrap" href="/">Canada</a></li>                                
                                </ul>
                            </li>
                            <li className="rounded-lg relative text-white px-4 py-2 hover:bg-purple-500">
                                <button
                                    className="w-full text-left flex items-center outline-none focus:outline-none"
                                >
                                    <span className="flex-1">Post Graduation</span>
                                    <span className="mr-auto">
                                        <svg
                                            className="fill-current h-4 w-4 transition duration-150 ease-in-out"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                            />
                                        </svg>
                                    </span>
                                </button>
                                <ul className="rounded-sm absolute top-0 right-0 transition duration-150 ease-in-out origin-top-left min-w-32">
                                    <li className=""><a className="bg-purple-400 text-white hover:bg-purple-500 py-2 px-4 hover:rounded-lg block whitespace-no-wrap" href="/">Canada</a></li>
                                    <li className=""><a className="bg-purple-400 text-white hover:bg-purple-500 py-2 px-4 hover:rounded-lg block whitespace-no-wrap" href="/">Germany</a></li>
                                    <li className=""><a className="bg-purple-400 text-white hover:bg-purple-500 py-2 px-4 hover:rounded-lg block whitespace-no-wrap" href="/">USA</a></li>                                
                                </ul>
                            </li>
                            <li className="rounded-lg relative text-white px-4 py-2 hover:bg-purple-500">
                                <button
                                    className="w-full text-left flex items-center outline-none focus:outline-none"
                                >
                                    <span className="flex-1">Exams</span>
                                    <span className="mr-auto">
                                        <svg
                                            className="fill-current h-4 w-4 transition duration-150 ease-in-out"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                            />
                                        </svg>
                                    </span>
                                </button>
                                <ul className="rounded-sm absolute top-0 right-0 transition duration-150 ease-in-out origin-top-left min-w-32">

                                    <li className=""><a className="bg-purple-400 text-white hover:bg-purple-500 py-2 px-4 hover:rounded-lg block whitespace-no-wrap" href="/">1</a></li>
                                    <li className=""><a className="bg-purple-400 text-white hover:bg-purple-500 py-2 px-4 hover:rounded-lg block whitespace-no-wrap" href="/">2</a></li>
                                    <li className=""><a className="bg-purple-400 text-white hover:bg-purple-500 py-2 px-4 hover:rounded-lg block whitespace-no-wrap" href="/">3</a></li>
                                    <li className=""><a className="bg-purple-400 text-white hover:bg-purple-500 py-2 px-4 hover:rounded-lg block whitespace-no-wrap" href="/">4</a></li>
                                </ul>
                            </li>
                            <li className=""><a className="bg-purple-400 text-white hover:bg-purple-500 py-2 px-4 hover:rounded-lg block whitespace-no-wrap" href="/">Scholarship</a></li>
                        </ul>
                    </div>
                    <div className="flex list-none my-auto ml-[800px] space-x-32">
                        <button className='text-black p-2 font-semibold hover:bg-purple-500 hover:text-white rounded-lg'>Search College</button>
                        <li className='text-black p-2 font-semibold hover:bg-purple-500 hover:text-white rounded-lg'>Contact</li>
                        <li className='text-black p-2 font-semibold hover:bg-purple-500 hover:text-white rounded-lg'>Sign In</li>
                    </div>
                </nav >
            </div >
        </>
    );
}



export default Navigation;