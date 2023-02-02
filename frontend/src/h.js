import Navigation from './Navigation';
import Footer from './Footer';
import College from './College/Queensland University Of Technology.json';


export default function Parent() {
    return (
        <div>
            <Navigation />
            <section className="BGGI flex flex-row justify-around">
                <div className=" flex flex-row h-screen space-x-44">
                    <div className="w-[600px] h-[400px] mt-auto mb-auto text-center">
                        <h2 className="m-8 font-bold text-6xl">Queensland University Of Technology</h2>
                        <p className="m-4 font-medium text-xl leading-10">Queensland University of Technology is a public research university located in the urban coastal city of Brisbane, Queensland, Australia. QUT is located on two campuses in the Brisbane area viz. Gardens Point and Kelvin Grove.</p>
                    </div>
                    <div className="flex flex-row ">
                        <img className="w-[550px] h-[450px] m-auto rounded-xl" src="https://media.licdn.com/dms/image/C511BAQHUT0uVvvRqIQ/company-background_10000/0/1541562402991?e=1675116000&v=beta&t=9Mz4som_-w02dpvjxb81uH7WdzbiDSbOxY2CJ09sVB4" alt="office content 1"></img>
                    </div>
                </div>
            </section>
            <div className='flex flex-col justify-center items-center bg-gray-300 space-y-10 p-5'>
                <p className='font-bold text-black text-5xl'>Courses</p>
                {College.map((list) => {
                    return (
                        <div className=' bg-white p-5 h-auto w-[1400px] space-y-5'>
                            <p className="text-red-600 font-bold text-xl">{list.title}</p>
                            <p className="flex font-bold text-xl text-red-600">Course Details<img className='w-8 h-8' src="https://www.svgrepo.com/show/454126/education-learning-8.svg" alt="" />: </p>
                            <p className='font-bold text-xl'>{list.info}</p>
                            <p className="flex font-bold text-xl text-red-600">Academic Eligibility<img className='w-8 h-8 px-1' src="https://www.svgrepo.com/show/368295/people-group.svg" alt="" />: </p>
                            <p className='font-bold text-xl'>{list.exams}</p>
                        </div>
                    )
                })}
                <p>{College[0].Names}</p>
            </div>
            <Footer />
        </div>
    );
}