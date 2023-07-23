import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
function handleLogout() {
  // Remove the token from local storage
  localStorage.removeItem("token");
  // sessionStorage.clear();
  // Redirect the user to the desired location
  window.location = "/";
}
function Navigation() {
    return (
      <>
        <div className="bg-gradient-to-bl from-purple-200 via-purple-400 to-purple-800 ">
          <nav className="flex flex-row h-16 ">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3313/3313498.png"
              className="h-14 pl-4 pt-3 animate-bounce"
              alt=""
            ></img>

            <div className="group inline-block">
              <button className="outline-none focus:outline-none px-4 py-1 text-white font-semibold p-2 rounded flex items-center min-w-32">
                <span className="pr-1 font-semibold flex-1 py-4 pl-2">
                  Courses
                </span>
                <span>
                  <svg
                    className="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </span>
              </button>
              <ul className="bg-purple-400 text-white rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32">
                <li className="rounded-lg relative text-white px-4 py-2 hover:bg-purple-500">
                  <button className="w-full text-left flex items-center outline-none focus:outline-none">
                    <span className="flex-1">Graduation</span>
                    <span className="mr-auto">
                      <svg
                        className="fill-current h-4 w-4 transition duration-150 ease-in-out"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </span>
                  </button>
                  <ul className="rounded-sm absolute top-0 right-0 transition duration-150 ease-in-out origin-top-left min-w-32">
                    <Link
                      to={`/GCountryNames/USA`}
                      className="bg-purple-400 text-white hover:bg-purple-500 py-2 px-4 hover:rounded-lg block whitespace-no-wrap"
                    >
                      USA
                    </Link>
                    <Link
                      to={`/GCountryNames/Germany`}
                      className="bg-purple-400 text-white hover:bg-purple-500 py-2 px-4 hover:rounded-lg block whitespace-no-wrap"
                    >
                      Germany
                    </Link>
                    <Link
                      to={`/GCountryNames/Canada`}
                      className="bg-purple-400 text-white hover:bg-purple-500 py-2 px-4 hover:rounded-lg block whitespace-no-wrap"
                    >
                      Canada
                    </Link>
                  </ul>
                </li>
                <li className="rounded-lg relative text-white px-4 py-2 hover:bg-purple-500">
                  <button className="w-full text-left flex items-center outline-none focus:outline-none">
                    <span className="flex-1">Post Graduation</span>
                    <span className="mr-auto">
                      <svg
                        className="fill-current h-4 w-4 transition duration-150 ease-in-out"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </span>
                  </button>
                  <ul className="rounded-sm absolute top-0 right-0 transition duration-150 ease-in-out origin-top-left min-w-32">
                    <Link
                      to={`/PGCountryNames/Australia`}
                      className="bg-purple-400 text-white hover:bg-purple-500 py-2 px-4 hover:rounded-lg block whitespace-no-wrap"
                    >
                      Australia
                    </Link>
                    <Link
                      to={`/PGCountryNames/UK`}
                      className="bg-purple-400 text-white hover:bg-purple-500 py-2 px-4 hover:rounded-lg block whitespace-no-wrap"
                    >
                      UK
                    </Link>
                    <Link
                      to={`/PGCountryNames/Canada`}
                      className="bg-purple-400 text-white hover:bg-purple-500 py-2 px-4 hover:rounded-lg block whitespace-no-wrap"
                    >
                      Canada
                    </Link>
                  </ul>
                </li>
                <li className="rounded-lg relative text-white px-4 py-2 hover:bg-purple-500">
                  <button className="w-full text-left flex items-center outline-none focus:outline-none">
                    <Link to="/accomodation">Accommodation</Link>
                  </button>
                </li>
                <Link
                  to="/scholarship"
                  className="bg-purple-400 text-white hover:bg-purple-500 py-2 px-4 hover:rounded-lg block whitespace-no-wrap"
                >
                  Scholarship
                </Link>
              </ul>
            </div>
            {/* SearchBar */}
            <div className="flex list-none my-auto ml-[38rem] space-x-36">
              <Link
                to={`/Search`}
                className="text-black p-2 font-semibold hover:bg-purple-500 hover:text-white rounded-lg"
              >
                Search College
              </Link>
              <Link
                to={`/home`}
                className="text-black p-2 font-semibold hover:bg-purple-500 hover:text-white rounded-lg"
              >
                Home Page
              </Link>
              <button
                className="text-black font-semibold hover:dark:bg-gray-900 hover:text-white rounded-lg px-4 py-2 animate-fadein"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </nav>
        </div>
      </>
    );
}



export default Navigation;