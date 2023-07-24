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
                <section className="flex flex-col md:flex-row justify-around">
                    <div className="flex flex-col md:flex-row h-auto space-x-4 md:space-x-44">
                        <div className="w-full h-auto mt-auto mb-auto text-center md:w-[50%]">
                            <h2 className="m-4 md:m-8 font-bold text-3xl md:text-6xl">Hello Students</h2>
                            <p className="m-2 md:m-4 font-serif text-lg md:text-3xl">Welcome to Study Abroad</p>
                            <p className="m-2 md:m-4 font-medium text-base md:text-xl">Studying abroad not only offers a new country to learn from every day but also unique academic opportunities. The classes you take at a university abroad will satisfy some of your major requirements, but will offer you a different learning experience than your home university. Studying abroad can increase self-confidence, impact maturity, influence one's world view, heighten foreign language skills, develop an open mind, encourage diversity, and influence one's entire life for the better. One of the most valuable reasons to study abroad is the opportunity for students to gain a competitive edge in the job market.</p>
                        </div>
                        <div className="flex flex-row ">
                            <img className="w-[250px] h-[300px] md:w-[450px] md:h-[600px] m-auto rounded-xl" src={HomeP} alt="office content 1"></img>
                            <img
                                src={Ellipse}
                                className="z-20 brightness-200 animate-ping w-8 md:w-12 absolute left-8 md:left-20 top-16 md:top-40"
                                alt=""
                            />
                            <img
                                src={Ellipse}
                                className="z-20 brightness-200 animate-ping w-8 md:w-12 absolute right-40 md:right-80 top-12 md:top-32"
                                alt=""
                            />
                            <img
                                src={Ellipse}
                                className="z-20 brightness-200 animate-ping w-8 md:w-12 absolute left-12 md:left-40 bottom-6 md:bottom-12"
                                alt=""
                            />
                            <img
                                src={Ellipse}
                                className="z-20 brightness-200 animate-ping w-8 md:w-12 absolute right-4 md:right-16 bottom-8 md:bottom-16"
                                alt=""
                            />
                        </div>
                    </div>
                </section>
            </div>
            {/* Why to Study */}
            <section className="dark:bg-gray-900">
                <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">We don't reinvent the wheel</h2>
                        <p className="mb-4">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
                        <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                        <img className="w-full rounded-lg" src="https://img.freepik.com/free-vector/female-character-scientist-design_23-2148399876.jpg?w=2000" alt="office content 1"></img>
                        <img className="mt-4 w-full md:mt-10 rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDCNdquE8G5w-Cxy1G5Zh770LMwNlnvfNMxw&usqp=CAU" alt="office content 2"></img>
                    </div>
                </div>
            </section>
            {/* Graduation */}
            <section>
                <div className="flex flex-col-reverse md:flex-row bg-gradient-to-bl from-purple-200 via-purple-400 to-purple-800 h-auto md:h-screen space-y-4 md:space-y-0 md:space-x-44">
                    <div className="w-full h-auto mt-4 mb-4 text-center md:mt-auto md:mb-auto md:w-[50%] md:h-[400px] lg:w-[700px]">
                        <div className="w-full h-auto mt-4 mb-4 md:mt-auto md:mb-auto md:text-center">
                            <h2 className="m-4 text-2xl md:m-8 font-bold md:text-6xl">Hello Students</h2>
                            <p className="m-2 text-lg md:m-4 font-serif md:text-3xl">Graduate</p>
                            <p className="m-2 text-base md:m-4 font-medium md:text-xl">Studying for a bachelor's degree abroad also offers a perfect opportunity. Every year students travel across countries, continents, and seas to embark on a life-changing educational experience. They will face unique challenges but the benefits are enormous. If you choose to study abroad you will be guaranteed the experience of a different culture, lifestyle, and climate. You will make new friends and possibly learn a new language.</p>
                            <Link
                                to="/GCountryNames"
                                className="inline-block px-6 py-2.5 bg-purple-400 text-white font-serif text-lg leading-tight rounded-full shadow-md hover:bg-purple-700 hover:scale-125 hover:duration-500 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                            >
                                Know More
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row space-x-4 md:space-x-28">
                        <img
                            className="w-[200px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] m-auto rounded-xl"
                            src="https://www.southernliving.com/thmb/osQ0-qCdyJmTELa8n7OnCE1cwz4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/graduates-throwing-caps-1066324992-2000-c66181da679b46dab1f62f4b2fbe3e84.jpg"
                            alt="office content 1"
                        ></img>
                    </div>
                </div>
            </section>


            {/* Logo Graduation */}
            <section>
                <div className="h-auto bg-gray-400">
                    <h1 className="font-bold text-2xl text-center p-4 font-serif">Graduation Universities</h1>
                    <div className="flex flex-wrap justify-center gap-4 md:gap-x-8 lg:gap-x-16 xl:gap-x-32 mt-6 md:mt-10">
                        <img src={Logo1} alt="" className="w-24 h-20 md:w-40 md:h-32 lg:w-56 lg:h-40 aspect-square object-contain mix-blend-color-burn"></img>
                        <img src={Logo2} alt="" className="w-24 h-20 md:w-40 md:h-32 lg:w-56 lg:h-40 aspect-square object-contain mix-blend-color-burn"></img>
                        <img src={Logo3} alt="" className="w-24 h-20 md:w-40 md:h-32 lg:w-56 lg:h-40 aspect-square object-contain mix-blend-color-burn"></img>
                        <img src={Logo4} alt="" className="w-24 h-20 md:w-40 md:h-32 lg:w-56 lg:h-40 aspect-square object-contain mix-blend-color-burn"></img>
                    </div>
                </div>
            </section>

            {/* Post Graduation */}

            <section>
                <div className="flex flex-col-reverse md:flex-row bg-gradient-to-bl from-purple-200 via-purple-400 to-purple-800 h-auto md:h-screen space-y-4 md:space-y-0 md:space-x-44">
                    <div className="w-full h-auto mt-4 mb-4 text-center md:mt-auto md:mb-auto md:w-[50%] md:h-[400px] lg:w-[700px]">
                        <div className="w-full h-auto mt-4 mb-4 md:mt-auto md:mb-auto md:text-center">
                            <h2 className="m-4 text-2xl md:m-8 font-bold md:text-6xl">Hello Students</h2>
                            <p className="m-2 text-lg md:m-4 font-serif md:text-3xl">Post Graduate</p>
                            <p className="m-2 text-base md:m-4 font-medium md:text-xl">The journey from first considering a program to actually stepping foot on campus may appear to be full of hurdles, but good planning and a positive mindset can go a long way. If you’re ready to go abroad for a master’s degree or a PhD, this may be an easy decision.</p>
                            <Link
                                to="/PGCountryNames"
                                type="button"
                                className="inline-block px-6 py-2.5 bg-purple-400 text-white font-serif text-lg leading-tight rounded-full shadow-md hover:bg-purple-700 hover:scale-125 hover:duration-500 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                            >
                                Know More
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row space-x-4 md:space-x-28">
                        <img
                            className="w-[200px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] m-auto rounded-xl"
                            src="https://images1.content-hcs.com/commimg/myhotcourses/blog/post/myhc_76870.jpg"
                            alt="office content 1"
                        ></img>
                    </div>
                </div>
            </section>

            {/* Country best */}
            <section className="flex flex-col md:flex-row justify-evenly items-center gap-8 md:gap-12 text-white m-20">

  <div className="w-64 h-64 md:w-72 md:h-72 bg-transparent cursor-pointer group perspective">
    <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
      <div className="absolute backface-hidden border-2 w-full h-full">
        <img
          src={USA}
          alt="USA"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden">
        <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-4 md:px-8 pb-24">
          <h1 className="text-2xl md:text-3xl font-semibold mb-4">USA</h1>
          <p className="font-serif text-sm md:text-base m-8">
            The United States of America (USA) hosts the most number of international students in the world. Quality education, unique curriculum, multicultural environment, and abundant opportunities are just some of the reasons why many students want to study in the USA.
          </p>
          <button className="bg-teal-500 px-6 py-2 font-semibold text-white rounded-full absolute -bottom-10 md:-bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125">
            Know More
          </button>
        </div>
      </div>
    </div>
  </div>

  <div className="w-64 h-64 md:w-72 md:h-72 bg-transparent cursor-pointer group perspective">
    <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
      <div className="absolute backface-hidden border-2 w-full h-full">
        <img
          src={Canada}
          alt="USA"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden">
        <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-4 md:px-8 pb-24">
          <h1 className="text-2xl md:text-3xl font-semibold mb-4">Canada</h1>
          <p className="font-serif text-sm md:text-base m-8">
          You'll find a high standard of living in Canada. International students benefit from the same rights and freedoms that protect all Canadians: respect for human rights, equality, diversity and a stable, peaceful society. Canada ranks in third place globally for the best quality of life.
          </p>
          <button className="bg-teal-500 px-6 py-2 font-semibold text-white rounded-full absolute -bottom-10 md:-bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125">
            Know More
          </button>
        </div>
      </div>
    </div>
  </div>
  <div className="w-64 h-64 md:w-72 md:h-72 bg-transparent cursor-pointer group perspective">
    <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
      <div className="absolute backface-hidden border-2 w-full h-full">
      <img
    src={Germany}
    alt="Germany"
    className="w-64 h-64 md:w-72 md:h-72 object-cover"
  />
      </div>
      <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden">
        <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-4 md:px-8 pb-24">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">USA</h1>
          <p className="font-serif text-sm md:text-base lg:text-lg mb-8">
            The United States of America (USA) hosts the most number of international students in the world. Quality education, unique curriculum, multicultural environment, and abundant opportunities are just some of the reasons why many students want to study in the USA.
          </p>
          <button className="bg-teal-500 px-6 py-2 font-semibold text-white rounded-full absolute -bottom-10 md:-bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125">
            Know More
          </button>
        </div>
      </div>
    </div>
  </div>

</section>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default Home;
