import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
// import LogIn from './Login.js';
import Home from './home.js';
// import Practice from './practice.js'
// import SignUp from './SignUp.js';
import Graduation from './Graduation.js';
import PostGraduation from './PostGraduation.js';
import GraduationCountry from './GraduationCountries.js';
import PostGraduationCountry from './PostGraduationCountries'
// import GCountryNames from './GCountryNames.js';
import Parent from './h';
import reportWebVitals from './reportWebVitals';


const GraduationCollegePages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/GCountryNames" element={<Graduation />} />
        <Route path="/GCountryNames/:name" element={<GraduationCountry />} />
        <Route path="/PGCountryNames" element={<PostGraduation />} />
        <Route path="/PGCountryNames/:name" element={<PostGraduationCountry />} />
      </Routes>
    </BrowserRouter>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <LogIn /> */}
    {/* <SignUp /> */}
    {/* <Graduation /> */}
    {/* <Canada /> */}
    {/* <Practice /> */}
    {/* <GraduationCollegePages /> */}
    <Parent/>
    {/* <GraduationCountry /> */}
    {/* <PostGraduation /> */}
    {/* <Home /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

