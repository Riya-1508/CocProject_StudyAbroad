import React, { useState } from "react";
import { Link } from "react-router-dom";

function handleLogout() {
  // Remove the token from local storage
  localStorage.removeItem("token");
  // Redirect the user to the desired location
  window.location = "/";
}

function Navigation() {
  const [graduationDropdownOpen, setGraduationDropdownOpen] = useState(false);
  const [postGraduationDropdownOpen, setPostGraduationDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <>
      <div className="bg-gradient-to-bl from-purple-200 via-purple-400 to-purple-800">
        <nav className="flex flex-col md:flex-row justify-between items-center h-auto md:h-16 px-4 md:px-8 lg:px-16">
          <div className="flex items-center md:flex-none">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3313/3313498.png"
              className="h-14 pt-3 animate-bounce"
              alt=""
            />
          </div>

          {/* Hamburger menu for small screens */}
          <div className="md:hidden flex items-center mb-2">
            <button
              className="outline-none focus:outline-none text-white"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg
                className={`h-6 w-6 ${menuOpen ? "hidden" : "block"}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 6a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 6a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                className={`h-6 w-6 ${menuOpen ? "block" : "hidden"}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 6a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 6a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {/* Menu for small screens */}
          <div
            className={`${
              menuOpen ? "block" : "hidden"
            } md:hidden absolute right-0 top-16 bg-purple-400 text-white w-full p-2 rounded-sm`}
          >
            <ul className="space-y-2">
              <li className="rounded-lg relative text-white px-4 py-2 hover:bg-purple-500">
                <button
                  className="w-full text-left flex items-center outline-none focus:outline-none"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <span className="flex-1">Courses</span>
                  <span className="mr-auto">
                    <svg
                      className={`fill-current h-4 w-4 transform ${
                        menuOpen ? "rotate-180" : ""
                      } transition duration-150 ease-in-out`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </span>
                </button>
                <ul
                  className={`bg-purple-400 text-white rounded-sm transform ${
                    menuOpen ? "scale-100" : "scale-0"
                  } absolute transition duration-150 ease-in-out origin-top-left min-w-32 mt-2`}
                >
                  <li className="rounded-lg relative text-white px-4 py-2 hover:bg-purple-500">
                    <button
                      className="w-full text-left flex items-center outline-none focus:outline-none"
                      onClick={() => setMenuOpen(!menuOpen)}
                    >
                      <span className="flex-1">Graduation</span>
                      <span className="mr-auto">
                        <svg
                          className={`fill-current h-4 w-4 transform ${
                            menuOpen ? "rotate-180" : ""
                          } transition duration-150 ease-in-out`}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </span>
                    </button>
                    <ul className="rounded-sm absolute top-0 right-0 transition duration-150 ease-in-out origin-top-left min-w-32">
                      <li>
                        <Link
                          to={`/GCountryNames/USA`}
                          className="bg-purple-400 text-white hover:bg-purple-500 py-2 px-4 hover:rounded-lg block whitespace-no-wrap"
                        >
                          USA
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`/GCountryNames/Germany`}
                          className="bg-purple-400 text-white hover:bg-purple-500 py-2 px-4 hover:rounded-lg block whitespace-no-wrap"
                        >
                          Germany
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`/GCountryNames/Canada`}
                          className="bg-purple-400 text-white hover:bg-purple-500 py-2 px-4 hover:rounded-lg block whitespace-no-wrap"
                        >
                          Canada
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="rounded-lg relative text-white px-4 py-2 hover:bg-purple-500">
                    <button
                      className="w-full text-left flex items-center outline-none focus:outline-none"
                      onClick={() => setMenuOpen(!menuOpen)}
                    >
                      <span className="flex-1">Post Graduation</span>
                      <span className="mr-auto">
                        <svg
                          className={`fill-current h-4 w-4 transform ${
                            menuOpen ? "rotate-180" : ""
                          } transition duration-150 ease-in-out`}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </span>
                    </button>
                    <ul className="rounded-sm absolute top-0 right-0 transition duration-150 ease-in-out origin-top-left min-w-32">
                      <li>
                        <Link
                          to={`/PGCountryNames/Australia`}
                          className="bg-purple-400 text-white hover:bg-purple-500 py-2 px-4 hover:rounded-lg block whitespace-no-wrap"
                        >
                          Australia
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`/PGCountryNames/UK`}
                          className="bg-purple-400 text-white hover:bg-purple-500 py-2 px-4 hover:rounded-lg block whitespace-no-wrap"
                        >
                          UK
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`/PGCountryNames/Canada`}
                          className="bg-purple-400 text-white hover:bg-purple-500 py-2 px-4 hover:rounded-lg block whitespace-no-wrap"
                        >
                          Canada
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="rounded-lg relative text-white px-4 py-2 hover:bg-purple-500">
                    <Link
                      to="/accommodation"
                      className="w-full text-left flex items-center outline-none focus:outline-none"
                    >
                      Accommodation
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/scholarship"
                      className="bg-purple-400 text-white hover:bg-purple-500 py-2 px-4 hover:rounded-lg block whitespace-no-wrap"
                    >
                      Scholarship
                    </Link>
                  </li>
                </ul>
              </li>
              {/* Add other menu items */}
            </ul>
          </div>

          {/* SearchBar and Home Page buttons for small screens */}
          <div className="md:hidden flex items-center justify-center w-full mt-4 mb-2 space-x-6">
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

          {/* SearchBar and Home Page buttons for larger screens */}
          <div className="hidden md:flex items-center space-x-36">
            <div className="group inline-block relative">
              <button
                className="outline-none focus:outline-none px-4 py-1 text-white font-semibold p-2 rounded flex items-center min-w-32"
                onMouseEnter={() => setGraduationDropdownOpen(true)}
                onMouseLeave={() => setGraduationDropdownOpen(false)}
              >
                <span className="pr-1 font-semibold flex-1 py-4 pl-2">
                  Courses
                </span>
                <span>
                  <svg
                    className={`fill-current h-4 w-4 transform ${
                      graduationDropdownOpen ? "rotate-180" : ""
                    } transition duration-150 ease-in-out`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </span>
              </button>
              <ul
                className={`${
                  graduationDropdownOpen ? "block" : "hidden"
                } bg-purple-400 text-white rounded-sm transform scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32`}
              >
                <li className="rounded-lg relative text-white px-4 py-2 hover:bg-purple-500">
                  <button
                    className="w-full text-left flex items-center outline-none focus:outline-none"
                    onClick={() => setGraduationDropdownOpen(false)}
                  >
                    <span className="flex-1">Graduation</span>
                    <span className="mr-auto">
                      <svg
                        className={`fill-current h-4 w-4 transform ${
                          graduationDropdownOpen ? "rotate-180" : ""
                        } transition duration-150 ease-in-out`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </span>
                  </button>
                  <ul className="rounded-sm absolute top-0 right-0 transition duration-150 ease-in-out origin-top-left min-w-32">
                    <li>
                      <Link
                        to={`/GCountryNames/USA`}
                        className="bg-purple-400 text-white hover:bg-purple-500 py-2 px-4 hover:rounded-lg block whitespace-no-wrap"
                      >
                        USA
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={`/GCountryNames/Germany`}
                        className="bg-purple-400 text-white hover:bg-purple-500 py-2 px-4 hover:rounded-lg block whitespace-no-wrap"
                      >
                        Germany
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={`/GCountryNames/Canada`}
                        className="bg-purple-400 text-white hover:bg-purple-500 py-2 px-4 hover:rounded-lg block whitespace-no-wrap"
                      >
                        Canada
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="group inline-block relative">
              <button
                className="outline-none focus:outline-none px-4 py-1 text-white font-semibold p-2 rounded flex items-center min-w-32"
                onMouseEnter={() => setPostGraduationDropdownOpen(true)}
                onMouseLeave={() => setPostGraduationDropdownOpen(false)}
              >
                <span className="pr-1 font-semibold flex-1 py-4 pl-2">
                  Post Graduation
                </span>
                <span>
                  <svg
                    className={`fill-current h-4 w-4 transform ${
                      postGraduationDropdownOpen ? "rotate-180" : ""
                    } transition duration-150 ease-in-out`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </span>
              </button>
              <ul
                className={`${
                  postGraduationDropdownOpen ? "block" : "hidden"
                } bg-purple-400 text-white rounded-sm transform scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32`}
              >
                <li className="rounded-lg relative text-white px-4 py-2 hover:bg-purple-500">
                  <button
                    className="w-full text-left flex items-center outline-none focus:outline-none"
                    onClick={() => setPostGraduationDropdownOpen(false)}
                  >
                    <span className="flex-1">Post Graduation</span>
                    <span className="mr-auto">
                      <svg
                        className={`fill-current h-4 w-4 transform ${
                          postGraduationDropdownOpen ? "rotate-180" : ""
                        } transition duration-150 ease-in-out`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </span>
                  </button>
                  <ul className="rounded-sm absolute top-0 right-0 transition duration-150 ease-in-out origin-top-left min-w-32">
                    <li>
                      <Link
                        to={`/PGCountryNames/Australia`}
                        className="bg-purple-400 text-white hover:bg-purple-500 py-2 px-4 hover:rounded-lg block whitespace-no-wrap"
                      >
                        Australia
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={`/PGCountryNames/UK`}
                        className="bg-purple-400 text-white hover:bg-purple-500 py-2 px-4 hover:rounded-lg block whitespace-no-wrap"
                      >
                        UK
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={`/PGCountryNames/Canada`}
                        className="bg-purple-400 text-white hover:bg-purple-500 py-2 px-4 hover:rounded-lg block whitespace-no-wrap"
                      >
                        Canada
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
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
            <Link
              to={`/home`}
              className="text-black p-2 font-semibold hover:bg-purple-500 hover:text-white rounded-lg"
            >
              Log In
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
