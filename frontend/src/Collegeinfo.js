import React from "react";
import "./PostGraduation.css";
import { getCollegeList } from "./All_Data/CollegeList";
import { Link } from "react-router-dom";
import Navigation from "./Navigation.js";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import { Col } from "react-bootstrap";


function CollegeInfo()
{
    const { collegename } = useParams();
    const college = getCollegeList(collegename)
  return (
    <>
    <h1>{college.Names}</h1>
    <h1>{college.Details}</h1>
    <img src={college.img} alt="" />

    </>
)
}

export default CollegeInfo;
