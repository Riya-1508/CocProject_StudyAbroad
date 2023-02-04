import Navigation from './Navigation';
import Footer from './Footer';
import './College_Graduation.css';
import { getGMapping } from './All_Data/GMapping';
import { useParams } from "react-router-dom"


export default function College() {
    const {CNames,Courses,name} = useParams();
    const a = getGMapping(CNames,Courses,name)
    // console.log(Universities);
    return (
        <div>
            <Navigation />
            <section className="flex flex-row justify-around">
                <div className=" flex flex-row h-screen space-x-44">
                    <div className="w-[600px] h-[600px] m-auto  text-center">
                        <h2 className="m-8 font-bold text-6xl">{a.Names}</h2>
                        <p className="m-auto font-medium text-xl  ">{a.Details}</p>
                    </div>
                    <div className="flex flex-row ">
                        <img className="w-[550px] h-[450px] m-auto rounded-xl" src={a.img} alt="office content 1"></img>
                    </div>
                </div>
            </section>
            <div className='flex flex-col justify-center items-center bg-gray-300 space-y-10 p-5'>
                <p className='font-bold text-black text-5xl'>Courses</p>
                {a && a.College.map((list,index) => {
                    return (
                        <div className='rounded-xl bg-white p-5 h-auto w-[1400px] space-y-5' key={index}>
                            <p className="text-red-600 font-bold text-xl">{list.title}</p>
                            <p className="flex font-bold text-xl text-red-600">Course Details<img className='w-8 h-8' src="https://www.svgrepo.com/show/454126/education-learning-8.svg" alt="" />: </p>
                            <p className='font-bold text-xl'>{list.info ? list.info : "Details Not Found"}</p>
                            <p className="flex font-bold text-xl text-red-600">Academic Eligibility<img className='w-8 h-8 px-1' src="https://www.svgrepo.com/show/368295/people-group.svg" alt="" />: </p>
                            <p className='font-bold text-xl'>{list.exams ? list.exams : "Information Not Found"}</p>
                        </div>
                    )
                })}
                
            
            </div>
            <Footer />
        </div>
    );
}