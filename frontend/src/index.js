import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './index.css';
 import App from './App';
import Login from './Login.js';
import SignUp from './SignUp';
import Home from './home.js';

import Graduation from './Graduation.js';
import PostGraduation from './PostGraduation.js';
import Navigation from './Navigation.js';
//import './Login.css';
import reportWebVitals from './reportWebVitals';
const WebPages = () => {
  document.title = "Study Abroad";
  return (
    <section className="listofwebpages">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Graduation" element={<Graduation />} />
          <Route path="PostGraduation" element={<PostGraduation />} />
          <Route path="SignUp" element={<SignUp />} />
          <Route path="Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </section>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Login /> */}
    {/* <SignUp/> */}
    {/* <Home/> */}
    <WebPages />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();