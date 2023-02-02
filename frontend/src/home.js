import React from "react";
import HomeP from './image/homephoto.png';
import Ellipse from './image/Ellipse.png';
import USA from './image/USA.jpg';
import Canada from './image/Canada.jpg';
import Germany from './image/Germany.jpg';
import Logo1 from './image/Logo1.png';
import Logo2 from './image/Logo2.jpg';
import Logo3 from './image/Logo3.png';
import Logo4 from './image/Logo4.png';
import "./home.css";
import { Link } from "react-router-dom";
import Navigation from "./Navigation.js";
import Footer from "./Footer.js";

function Home() {
    return (
        <div>
            <div className="bg-gradient-to-bl from-purple-200 via-purple-400 to-purple-800 ">
                <Navigation />

                {/* Container */}
                <section className="flex flex-row justify-around">
                    <div className="flex flex-row h-screen space-x-44">
                        <div className="w-[600px] h-[400px] mt-auto mb-auto text-center">
                            <h2 className="m-8 font-bold text-6xl">Hello Students</h2>
                            <p className="m-4 font-serif text-3xl">Welcome to Study Abroad</p>
                            <p className="m-4 font-medium text-xl">Studying abroad not only offers a new country to learn from everyday but also unique academic opportunities. The classes you take at a university abroad will satisfy some of your major requirements, but will offer you a different learning experience than your home university. </p>
                        </div>
                        <div className="flex flex-row ">
                            <img className="w-[450px] h-[650px] m-auto rounded-xl" src={HomeP} alt="office content 1"></img>
                            <img
                                src={Ellipse}
                                className="z-20 brightness-200 animate-ping w-16 absolute left-40 top-56"
                                alt=""
                            />
                            <img
                                src={Ellipse}
                                className="z-20 brightness-200 animate-ping w-16 absolute right-120 top-36"
                                alt=""
                            />
                            <img
                                src={Ellipse}
                                className="z-20 brightness-200 animate-ping w-16 absolute left-64 bottom-24"
                                alt=""
                            />
                            <img
                                src={Ellipse}
                                className="z-20 brightness-200 animate-ping w-16 absolute right-20 bottom-32"
                                alt=""
                            />
                        </div>
                    </div>
                </section>
            </div >
            {/* Why to Study */}
            <section className="dark:bg-gray-900">
                <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">We didn't reinvent the wheel</h2>
                        <p className="mb-4">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
                        <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>

                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <img className="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1"></img>
                        <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2"></img>
                    </div>
                </div>
            </section>
            {/* Graduation */}
            <section>
                <div className="flex flex-row bg-gradient-to-bl from-purple-200 via-purple-400 to-purple-800  h-screen space-x-32">
                    <div className="flex flex-row space-x-28">
                        <img className="w-[500px] h-[700px] ml-20 m-auto rounded-xl" src="https://5.imimg.com/data5/SELLER/Default/2021/6/XK/EP/GI/107204694/study-abroad-consultant-500x500.jpg" alt="office content 1"></img>
                    </div>
                    <div className="w-[700px] h-[400px] m-auto text-center">
                        <div className="w-[600px] h-[400px] mt-auto mb-auto text-center">
                            <h2 className="m-8 font-bold text-6xl">Hello Students</h2>
                            <p className="m-4 font-serif text-3xl">Welcome to Study Abroad</p>
                            <p className="m-4 font-medium text-xl">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
                            <Link to="/GCountryNames" className="inline-block px-6 py-2.5 bg-purple-400 text-white font-serif text-lg leading-tight rounded-full shadow-md hover:bg-purple-700 hover:scale-125 hover:duration-500 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out">Know More</Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* Logo Graduation */}
            <section>
                <div className="h-auto bg-gray-400">
                    <h1 className="font-bold text-2xl text-center p-4 font-serif">Graduation Universites</h1>
                    <div className="flex flex-row flex-wrap justify-center space-x-40 mt-10">
                        <img src={Logo1} alt="" className="w-56 h-36 aspect-square object-contain mix-blend-color-burn"></img>
                        <img src={Logo2} alt="" className="w-56 h-40 aspect-square object-contain mix-blend-color-burn"></img>
                        <img src={Logo3} alt="" className="w-56 h-36 aspect-square object-contain mix-blend-color-burn"></img>
                        <img src={Logo4} alt="" className="w-56 h-36 aspect-square object-contain mix-blend-color-burn"></img>
                    </div>
                </div>
            </section>
            {/* Post Graduation */}
            <section>
                <div className="flex flex-row bg-gradient-to-bl from-purple-200 via-purple-400 to-purple-800 h-screen space-x-44">
                    <div className="w-[700px] h-[400px] mt-auto mb-auto text-center">
                        <div className="w-[600px] h-[400px] ml-20 mt-auto mb-auto text-center">
                            <h2 className="m-8 font-bold text-6xl">Hello Students</h2>
                            <p className="m-4 font-serif text-3xl">Welcome to Study Abroad</p>
                            <p className="m-4 font-medium text-xl">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
                            <Link to="/PGCountryNames" type="button" className="inline-block px-6 py-2.5 bg-purple-400 text-white font-serif text-lg leading-tight rounded-full shadow-md hover:bg-purple-700 hover:scale-125 hover:duration-500 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out">Know More</Link>
                        </div>
                    </div>
                    <div className="flex flex-row space-x-28">
                        <img className="w-[500px] h-[700px] m-auto rounded-xl" src="https://5.imimg.com/data5/SELLER/Default/2021/6/XK/EP/GI/107204694/study-abroad-consultant-500x500.jpg" alt="office content 1"></img>
                    </div>
                </div>
            </section>

            {/* Country best */}

            <section className="h-screen flex justify-evenly items-center gap-x-28 text-white">
                <img src="https://img.icons8.com/nolan/512/chevron-left.png" className="h-36 w-36 rotate-180" alt=""></img>
                <div className="w-[400px] h-[420px] bg-transparent cursor-pointer group perspective">
                    <div
                        className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000"
                    >
                        <div className="absolute backface-hidden-2 w-full h-full">
                            <img src={USA} alt="" className="w-full h-full" />
                        </div>
                        <div
                            className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden"
                        >
                            <div
                                className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24"
                            >
                                <h1 className="text-3xl font-semibold">USA</h1>
                                <p className="font-serif m-[6px]">
                                    The United States of America (USA) hosts the most number of international students in the world. Quality education, unique curriculum, multicultural environment, and abundant opportunities are just some of the reasons why many Indian students want to study in the USA.
                                </p>
                                <button
                                    className="bg-teal-500 px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125"
                                >
                                    Know More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="w-[400px] h-[420px] bg-transparent cursor-pointer group perspective"
                >
                    <div
                        className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000"
                    >
                        <div className="absolute backface-hidden-2 w-full h-full">
                            <img src={Canada} alt="" className="w-full h-full" />
                        </div>
                        <div
                            className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden"
                        >
                            <div
                                className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24"
                            >
                                <h1 className="text-3xl font-semibold">Canada</h1>

                                <p className="font-serif m-[6px]">
                                    You'll find a high standard of living in Canada. International students benefit from the same rights and freedoms that protect all Canadians: respect for human rights, equality, diversity and a stable, peaceful society. Canada ranks in third place globally for the best quality of life.
                                </p>
                                <button
                                    className="bg-teal-500 px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125"
                                >
                                    Know More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="w-[400px] h-[420px] bg-transparent cursor-pointer group perspective"
                >
                    <div
                        className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000"
                    >
                        <div className="absolute backface-hidden-2 w-full h-full">
                            <img src={Germany} alt="" className="w-full h-full" />
                        </div>
                        <div
                            className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden"
                        >
                            <div
                                className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24"
                            >
                                <h1 className="text-3xl font-semibold">Germany</h1>
                                <p className="font-serif m-[6px]">
                                    International students, in general, agree that Germany is a good study destination. Living in Germany is relatively affordable compared to other European countries. In addition, the country offers a wide range of programs in English. In fact, you don't need to speak German to study at a German university.
                                </p>
                                <button
                                    className="bg-teal-500 px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125"
                                >
                                    Know More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <img src="https://img.icons8.com/nolan/512/chevron-left.png" className="h-36 w-36" alt=""></img>
            </section>
            {/* Footer */}
            <Footer />
        </div>
    );
}

export default Home;