import React from "react";
import "./Graduation.css";
import Navigation from "./Navigation.js";
import Footer from "./Footer";
import GCountryNames from "./GCountryNames.js";

function Graduation() {
  return (
    <>
      <Navigation />
      <section className="BGGI flex flex-row justify-around">
        <div className=" flex flex-row h-screen space-x-44">
          <div className="w-[600px] h-[400px] mt-auto mb-auto text-center">
            <h2 className="m-8 font-bold text-6xl">Graduation</h2>
            <p className="font-serif text-3xl text-red-600"> "Degree" and "graduate" come from gradus, meaning "step". </p>
            <p className="m-4 font-medium text-xl leading-10">Graduation is the awarding of a diploma to a student by an educational institution. It may also refer to the ceremony that is associated with it. The date of the graduation ceremony is often called graduation day. The graduation ceremony is also sometimes called: commencement, convocation or invocation.</p>
          </div>
          <div className="flex flex-row ">
            <img className="w-[550px] h-[450px] m-auto rounded-xl" src="https://blogs.nottingham.ac.uk/studentlife/files/2017/08/pexels-photo-267885.jpeg" alt="office content 1"></img>
          </div>
        </div>
      </section>
      <h1 className=" py-10 text-center text-5xl font-bold ">Countries</h1>
      <div className="grid grid-cols-3 gap-5 ml-16">
        <Countries />
      </div>
      <div className="flex justify-evenly h-screen bg-gray-100 space-x-24 mt-2 ">
        <div >
          <h1 className="font-bold text-center text-3xl py-4">Exams</h1>
          <p className="w-[500px] font-serif text-2xl">A considerable number of students head towards appearing for various competitive and government exams after their graduation. These entrance exams after graduation open the door to a prosperous career for students. There are numerous competitive examinations; hence, students often find it difficult to make their choice. They get puzzled about which one to appear for and whether it would be the right decision for them.There are numerous competitive examinations; hence, students often find it difficult to make their choice. They get puzzled about which one to appear for and whether it would be the right decision for them.</p>
          <button
            type="button"
            class=" inline-block px-6 py-3 ml-28 mt-3 bg-red-600 text-white font-serif text-lg leading-tight rounded-full shadow-md hover:bg-red-700 hover:scale-125 hover:duration-500 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Check Out
          </button>
        </div>
        <div className="h-screen border-4 border-white"></div>
        <div >
          <h1 className="font-bold text-center text-3xl py-4">Scholarship</h1>
          <p className="w-[500px] font-serif text-2xl">Scholarships in India 2023 - Indian Government offers a gamut of scholarships to its meritorious students. These scholarships play an important role in the education sector. Many students are unable to pursue higher studies due to financial problems. These scholarships help students to continue their higher studies by providing financial assistance.These scholarships will help to reduce mental pressure by paying an amount of money. This is a great help for deserving students. Scholarship can be either merit-based or exam based. To get success in these scholarship exams, students need training and proper guidance. </p>
          <button
            type="button"
            class=" inline-block px-6 py-3 ml-28 mt-3 bg-red-600 text-white font-serif text-lg leading-tight rounded-full shadow-md hover:bg-red-700 hover:scale-125 hover:duration-500 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Check Out
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

const Countries = () => {
  return (
    <>
      {
        GCountryNames.map((CountryData, index) => {
          return <CountryImage key={index} CountryData={CountryData}></CountryImage>
        }
        )}
    </>
  )
}


const CountryImage = (data) => {
  const { Names, img } = data.CountryData
  return (
    <div class="h-auto">
      <div class="rounded-lg shadow-lg bg-white max-w-sm border-2 border-gray-300">
        <div class="p-6">
          <h5 class="text-gray-900 text-4xl font-medium mb-4 text-center">{Names}</h5>
          <a href="#!">
            <img
              class="rounded-t-lg py-3"
              src={img}
              alt=""
            />
          </a>
          <button
            type="button"
            class=" inline-block px-6 py-3 ml-24 bg-purple-500 text-white font-serif text-lg leading-tight rounded-full shadow-md hover:bg-purple-700 hover:scale-125 hover:duration-500 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
}


export default Graduation;