import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './home.js';
import LogIn from './Login.js';
// import Practice from './practice.js'
import SignUp from './SignUp.js';
// import G from './h.js';
import Accomodation from './Accomodation';
// import Navigation from './Navigation';
import Graduation from './Graduation.js';
import PostGraduation from './PostGraduation.js';
import GraduationCountry from './GraduationCountries.js';
import PostGraduationCountry from './PostGraduationCountries'
// import GCountryNames from './GCountryNames.js';
import CollegeGraduation from './College_Graduation';
import CollegePGraduation from './College_PGraduation';
import Searchbar from './New_search';
import CollegeInfo from './Collegeinfo';
import Scholarship from './scholarship';
import reportWebVitals from './reportWebVitals';


const GraduationCollegePages = () => {
  document.title = "Study Abroad";
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Search" element={<Searchbar />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/scholarship" element={<Scholarship />} />
        <Route path="/accomodation" element={<Accomodation />} />
        <Route path="/Search/:collegename" element={<CollegeInfo />} />
        <Route path="/GCountryNames" element={<Graduation />} />
        <Route path="/GCountryNames/:name" element={<GraduationCountry />} />
        <Route path="/GCountryNames/:name/:Courses" element={< GraduationCountry />}/>
        <Route path="/GCountryNames/:name/:Courses/:CNames" element={<CollegeGraduation />} />
        <Route path="/PGCountryNames" element={<PostGraduation />} />
        <Route path="/PGCountryNames/:name" element={<PostGraduationCountry />} />
        <Route path="/PGCountryNames/:name/:Courses" element={< PostGraduationCountry />}/>
        <Route path="/PGCountryNames/:name/:Courses/:CNames" element={<CollegePGraduation />} />
      </Routes>
    </BrowserRouter>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <LogIn /> */}
    {/* <SignUp /> */}
    {/* {<Navigation />} */}
    {/* <G /> */}
    {/* <Graduation /> */}
    {/* <Canada /> */}
    {/* <Practice /> */}
    {/* <Accomodation /> */}
    <GraduationCollegePages />
    {/* <Parent/> */}
    {/* <GraduationCountry /> */}
    {/* <PostGraduation /> */}
    {/* <Home /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

