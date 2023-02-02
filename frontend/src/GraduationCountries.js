import React from "react";
import { useState } from "react";
import './GraduationCountries.css';
import Navigation from "./Navigation.js";
import Footer from "./Footer";
import redarrow from './image/red arrow.png';
import { Link } from "react-router-dom";
import { getCountries } from "./GCountriesDetails";
// import { getListofCollege } from "./ListofCollege";
// import GCountries from "./CountriesDetails";
import { useParams } from "react-router-dom"
// import GCountryNames from "./GCountryNames";

function GraduationCountry() 
{
  const { name } = useParams();
  const Countries = getCountries(name)
  return (
    <div className="" >
      <Navigation />
      <section className="flex flex-row justify-around">
        <div className=" flex flex-row h-screen space-x-44">
          <div className="w-[600px] h-[400px] mt-auto mb-auto text-center">
            <h2 className="m-6 font-bold text-6xl">{Countries.CNames}</h2>
            <p className="m-auto text-red-600 font-medium text-xl leading-9">{Countries.CDetails}</p>
          </div>
          <div className="flex flex-row ">
            <img className="w-[550px] h-[450px] m-auto rounded-xl" src={Countries.img} alt="office content 1"></img>
          </div>
        </div>
      </section>
      <div className="bg-gray-100">
        <div className="p-10">
          <h1 className="font-bold text-center text-3xl pb-6">Top reasons to study in {Countries.CNames}</h1>
          <ul className="flex flex-col justify-start items-center space-y-4">
            {Countries.Benefit.map((list) => {
              return (
                <li className="flex space-x-1 font-bold text-xl"><img src={redarrow} alt="" className="w-4 h-3 my-auto" /><p>{list.Points}</p></li>
              )
            })}
          </ul>
        </div>
      </div >
      <Courses />
      <div className="bg-gray-300 h-1 w-full"></div>
      <h1 className="font-bold text-center text-3xl py-6">Select Courses to display list of Universities</h1>
      <ButtonCourse />
      <Footer />
    </div>


  );
}

const Courses = () => {
  const { name } = useParams();
  const Countries = getCountries(name)
  return (
    <>

      <div class="h-96 flex justify-center items-center relative overflow-x-auto">
        <table class="w-auto text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="text-red-600 px-6 py-3">
                Top Courses
              </th>
              <th scope="col" class="text-red-600 px-6 py-3">
                University
              </th>
            </tr>
          </thead>
          <tbody>
            {
              Countries.CoursesTable.map((coloumn) => {
                return (
                  <>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {coloumn.TopCourses}
                      </th>
                      <td class="px-6 py-4">
                        {coloumn.University}
                      </td>
                    </tr>
                  </>
                )
              })}
          </tbody>
        </table>
      </div>

    </>
  )
}


const ButtonCourse = () => {
  const { name } = useParams();
  const Countries = getCountries(name)
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const Slist = () => {
    setShow(!show);
    setShow2(false);
    setShow3(false);

  }
  const Slist2 = () => {
    setShow2(!show2);
    setShow(false);
    setShow3(false);
  }
  const Slist3 = () => {
    setShow3(!show3);
    setShow(false);
    setShow2(false);
  }

  return (
    <>
      <div className="h-full" >
        <div className="flex justify-evenly mt-8">
          <Link to={`/GCountryNames/${Countries.CNames}/${Countries.Courses[0]}`} className="inline-block p-4 bg-red-600 text-white font-serif text-lg leading-tight rounded-full shadow-md hover:bg-red-700 hover:scale-125 hover:duration-500 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out" onClick={Slist}>{Countries.Courses[0]}</Link>
          <Link to={`/GCountryNames/${Countries.CNames}/${Countries.Courses[1]}`}  className="inline-block p-4 bg-red-600 text-white font-serif text-lg leading-tight rounded-full shadow-md hover:bg-red-700 hover:scale-125 hover:duration-500 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-outp-4" onClick={Slist2}>{Countries.Courses[1]}</Link>
          <Link to={`/GCountryNames/${Countries.CNames}/${Countries.Courses[2]}`}  className="inline-block p-4 bg-red-600 text-white font-serif text-lg leading-tight rounded-full shadow-md hover:bg-red-700 hover:scale-125 hover:duration-500 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out" onClick={Slist3}>{Countries.Courses[2]}</Link>
          {/* {ListofCollege.map((list) => {
              return (
                <button className="inline-block p-4 bg-red-600 text-white font-serif text-lg leading-tight rounded-full shadow-md hover:bg-red-700 hover:scale-125 hover:duration-500 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out" onClick={Slist3}>MBBS</button>
                )
            })} */}
        </div>
        <div className="flex justify-center items-center mt-14">
          {show && <UniversitiesInfo />}
          {show2 && <UniversitiesInfo2 />}
          {show3 && <UniversitiesInfo3 />}
        </div>
      </div >
    </>
  )
}


const UniversitiesInfo = () => {
  const { name } = useParams();
  const Countries = getCountries(name)
  return (
    <>

      <div className="w-[1000px] h-auto bg-gray-300 rounded-lg mb-16">
        <div className="flex justify-center items-center">
          <h1 className="text-center p-2 w-96 h-10 font-bold text-sm ">S.No</h1>
          <p className="text-center p-2 w-96 h-10 font-bold text-sm ">University</p>
          <p className="text-center p-2 w-96 h-10 font-bold text-sm ">Info</p>
        </div>
        {Countries.Courses1.map((list) => {
          return (
            <>
              <div className="flex justify-center items-center m-2">
                <h1 className="text-center p-2 border-2 border-gray-300 w-96 h-10 font-bold text-sm ">{list.SNo}</h1>
                <p className="text-center p-2  border-y-2 border-gray-300 w-96 h-10 center text-sm">{list.College}</p>
                <Link to={`/GCountryNames/${list.CNames}/${Countries.Courses[0]}/${list.College}`} className="text-center p-2  border-2 border-gray-300 w-96 h-10 center text-sm hover:bg-gray-800 hover:text-white ">Know More</Link>
              </div>
            </>
          )
        })}

      </div>

    </>
  )
}

const UniversitiesInfo2 = () => {
  const { name } = useParams();
  const Countries = getCountries(name)
  return (
    <>
      <div className="w-[1000px] h-auto bg-gray-300 rounded-lg mb-16">
        <div className="flex justify-center items-center">
          <h1 className="text-center p-2 w-96 h-10 font-bold text-sm ">S.No</h1>
          <p className="text-center p-2 w-96 h-10 font-bold text-sm ">University</p>
          <p className="text-center p-2 w-96 h-10 font-bold text-sm ">Info</p>
        </div>
        {Countries.Courses2.map((list) => {
          return (
            <>
              <div className="flex justify-center items-center m-2">
                <h1 className="text-center p-2 border-2 border-gray-300 w-96 h-10 font-bold text-sm ">{list.SNo}</h1>
                <p className="text-center p-2  border-y-2 border-gray-300 w-96 h-10 center text-sm">{list.College}</p>
                <Link to={`/GCountryNames/${list.CNames}/${Countries.Courses[1]}/${list.College}`} className="text-center p-2  border-2 border-gray-300 w-96 h-10 center text-sm hover:bg-gray-800 hover:text-white ">Know More</Link>
              </div>
            </>
          )
        })}

      </div>

    </>
  )
}

const UniversitiesInfo3 = () => {
  const { name } = useParams();
  const Countries = getCountries(name)
  return (
    <>
      <div className="w-[1000px] h-auto bg-gray-300 rounded-lg mb-16">
        <div className="flex justify-center items-center">
          <h1 className="text-center p-2 w-96 h-10 font-bold text-sm ">S.No</h1>
          <p className="text-center p-2 w-96 h-10 font-bold text-sm ">University</p>
          <p className="text-center p-2 w-96 h-10 font-bold text-sm ">Info</p>
        </div>
        {Countries.Courses3.map((list) => {
          return (
            <>
              <div className="flex justify-center items-center m-2">
                <h1 className="text-center p-2 border-2 border-gray-300 w-96 h-10 font-bold text-sm ">{list.SNo}</h1>
                <p className="text-center p-2  border-y-2 border-gray-300 w-96 h-10 center text-sm">{list.College}</p>
                <Link to={`/GCountryNames/${list.CNames}/${Countries.Courses[2]}/${list.College}`} className="text-center p-2  border-2 border-gray-300 w-96 h-10 center text-sm hover:bg-gray-800 hover:text-white ">Know More</Link>                        </div>
            </>
          )
        })}

      </div>

    </>
  )
}

export default GraduationCountry;