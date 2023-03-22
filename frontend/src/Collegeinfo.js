import React from "react";
import "./PostGraduation.css";
import { getCollegeList } from "./All_Data/CollegeList";
// import { Link } from "react-router-dom";
import Navigation from "./Navigation.js";
// import Footer from "./Footer";
import { useParams } from "react-router-dom";
// import { Col } from "react-bootstrap";


function CollegeInfo()
{
    const { collegename } = useParams();
    const college = getCollegeList(collegename)
  return (
    <>
    <Navigation />
      <section className="flex flex-row justify-around">
        <div className=" flex flex-row h-screen space-x-44">
          <div className="w-[600px] h-[400px] mt-auto mb-auto text-center">
            <h2 className="m-6 font-bold text-6xl">{college.Names}</h2>
            <p className="m-auto text-red-600 font-medium text-xl leading-9">{college.Details}</p>
          </div>
          <div className="flex flex-row ">
            <img className="w-[550px] h-[450px] m-auto rounded-xl" src={college.img} alt="office content 1"></img>
          </div>
        </div>
      </section>

    </>
)
}

export default CollegeInfo;
