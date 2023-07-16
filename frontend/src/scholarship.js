import React from "react";
import { useState } from "react";
import './scholarship.css';
import Navigation from "./Navigation.js";
import Footer from "./Footer";
import scholarshipdata from "./All_Data/Scholarship";

function Scholarship() {
    return (
        <div className="" >
            <Navigation />
            <h1 className="font-bold text-center text-3xl py-6">Select Countries to display list of Scholarship</h1>
            <ButtonCourse />
        </div>


    );
}

const ButtonCourse = () => {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);
    const Slist = () => {
        setShow(!show);
        setShow2(false);
        setShow3(false);
        setShow4(false);
        setShow5(false);

    }
    const Slist2 = () => {
        setShow2(!show2);
        setShow(false);
        setShow3(false);
        setShow4(false);
        setShow5(false);
    }
    const Slist3 = () => {
        setShow3(!show3);
        setShow(false);
        setShow2(false);
        setShow4(false);
        setShow5(false);
    }
    const Slist4 = () => {
        setShow3(false);
        setShow(false);
        setShow2(false);
        setShow4(!show4);
        setShow5(false);
    }
    const Slist5 = () => {
        setShow3(false);
        setShow(false);
        setShow2(false);
        setShow4(false);
        setShow5(!show5);
    }

    return (
        <>
            <div className="h-full" >
                <div className="flex justify-evenly mt-8">
                    <button className="inline-block p-4 bg-red-600 text-white font-serif text-lg leading-tight rounded-full shadow-md hover:bg-red-700 hover:scale-125 hover:duration-500 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out" onClick={Slist}>Canada</button>
                    <button className="inline-block p-4 bg-red-600 text-white font-serif text-lg leading-tight rounded-full shadow-md hover:bg-red-700 hover:scale-125 hover:duration-500 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-outp-4" onClick={Slist2}>Germany</button>
                    <button className="inline-block p-4 bg-red-600 text-white font-serif text-lg leading-tight rounded-full shadow-md hover:bg-red-700 hover:scale-125 hover:duration-500 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out" onClick={Slist3}>UK</button>
                    <button className="inline-block p-4 bg-red-600 text-white font-serif text-lg leading-tight rounded-full shadow-md hover:bg-red-700 hover:scale-125 hover:duration-500 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-outp-4" onClick={Slist4}>Australia</button>
                    <button className="inline-block p-4 bg-red-600 text-white font-serif text-lg leading-tight rounded-full shadow-md hover:bg-red-700 hover:scale-125 hover:duration-500 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out" onClick={Slist5}>USA</button>

                </div>
                <div className="flex justify-evenly items-center mt-14">
                    {show && <UniversitiesInfo />}
                    {show2 && <UniversitiesInfo2 />}
                    {show3 && <UniversitiesInfo3 />}
                    {show4 && <UniversitiesInfo4 />}
                    {show5 && <UniversitiesInfo5 />}
                </div>
            </div >
        </>
    )
}



const UniversitiesInfo = () => {
    const [show, setShow] = useState(null);
    const showclick = (id) => {
        (id === show) ? setShow(null) : setShow(id);
    };
    return (
        <div className="flex-col">
            {
                scholarshipdata[0].scholarship.map((lists, index) => {
                    return (
                        <>
                            <div className="flex justify-between w-[1000px] h-auto bg-gray-300 rounded-lg">
                                <p className="p-2 m-1 h-10 font-bold text-lg ">{lists.heading}</p>

                                <button className="inline-block w-20 h-10 m-1 bg-red-600 text-white font-serif text-lg leading-tight rounded-xl shadow-md hover:bg-red-900 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-600 active:shadow-lg" onClick={() => showclick(lists._id.$oid)}>View</button>
                            </div >
                            <div className="flex justify-center items-center w-[1000px] h-auto m-14">

                                <>
                                    <div class="relative overflow-x-auto">
                                        {show=== lists._id.$oid ?
                                            <table class=" table w-full text-sm text-left text-gray-500 dark:text-gray-400 m-10">
                                                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                                    <tr>
                                                        <th class="px-6 py-3">
                                                            Scholarship Names
                                                        </th>
                                                        <th class="px-6 py-3">
                                                            Benfits
                                                        </th>
                                                        <th class="px-6 py-3">
                                                            Eligibility
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr class="bg-white table-cell border-b dark:bg-gray-800 dark:border-gray-700">
                                                        {lists.Scholarship.map((list) => {
                                                            return (
                                                                <>
                                                                    <th class="block px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                        {list}</th>
                                                                </>
                                                            )
                                                        })}
                                                    </tr>
                                                    <tr class="bg-white table-cell border-b dark:bg-gray-800 dark:border-gray-700">
                                                        {lists.Benefits.map((list) => {
                                                            return (
                                                                <>
                                                                    <th class="block px-6 py-3">
                                                                        {list}</th>
                                                                </>
                                                            )
                                                        })}
                                                    </tr>
                                                    <tr class="bg-white table-cell border-b dark:bg-gray-800 dark:border-gray-700">
                                                        {lists.Eligibility.map((list) => {
                                                            return (
                                                                <>
                                                                    <th class="block px-6 py-3">
                                                                        {list}</th>
                                                                </>
                                                            )
                                                        })}
                                                    </tr>
                                                </tbody>
                                            </table>
                                            : ""
                                        }
                                    </div>
                                </>

                            </div>
                        </>

                    )
                })
            }
        </div>
    )
}


const UniversitiesInfo2 = () => {
    const [show, setShow] = useState(null);
    const showclick = (id) => {
        (id === show) ? setShow(null) : setShow(id);
    };
    return (
        <div className="flex-col">
            {
                scholarshipdata[1].scholarship.map((lists, index) => {
                    return (
                        <>
                            <div className="flex justify-between w-[1000px] h-auto bg-gray-300 rounded-lg">
                                <p className="p-2 m-1 h-10 font-bold text-lg ">{lists.heading}</p>

                                <button className="inline-block w-20 h-10 m-1 bg-red-600 text-white font-serif text-lg leading-tight rounded-xl shadow-md hover:bg-red-900 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-600 active:shadow-lg" onClick={() => showclick(lists._id.$oid)}>View</button>
                            </div >
                            <div className="flex justify-center items-center w-[1000px] h-auto m-14">

                                <>
                                    <div class="relative overflow-x-auto">
                                        {show=== lists._id.$oid ?
                                            <table class=" table w-full text-sm text-left text-gray-500 dark:text-gray-400 m-10">
                                                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                                    <tr>
                                                        <th class="px-6 py-3">
                                                            Scholarship Names
                                                        </th>
                                                        <th class="px-6 py-3">
                                                            {lists.HeadingColumn2}
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr class="bg-white table-cell border-b dark:bg-gray-800 dark:border-gray-700">
                                                        {lists.Scholarship.map((list) => {
                                                            return (
                                                                <>
                                                                    <th class="block px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                        {list}</th>
                                                                </>
                                                            )
                                                        })}
                                                    </tr>
                                                    <tr class="bg-white table-cell border-b dark:bg-gray-800 dark:border-gray-700">
                                                        {lists.column2.map((list) => {
                                                            return (
                                                                <>
                                                                    <th class="block px-6 py-3">
                                                                        {list}</th>
                                                                </>
                                                            )
                                                        })}
                                                    </tr>
                                                </tbody>
                                            </table>
                                            : ""
                                        }
                                    </div>
                                </>

                            </div>
                        </>

                    )
                })
            }
        </div>
    )
}


const UniversitiesInfo3 = () => {
    const [show, setShow] = useState(null);
    const showclick = (id) => {
        (id === show) ? setShow(null) : setShow(id);
    };
    return (
        <div className="flex-col">
            {
                scholarshipdata[2].scholarship.map((lists, index) => {
                    return (
                        <>
                            <div className="flex justify-between w-[1000px] h-auto bg-gray-300 rounded-lg">
                                <p className="p-2 m-1 h-10 font-bold text-lg ">{lists.heading}</p>

                                <button className="inline-block w-20 h-10 m-1 bg-red-600 text-white font-serif text-lg leading-tight rounded-xl shadow-md hover:bg-red-900 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-600 active:shadow-lg" onClick={() => showclick(lists._id.$oid)}>View</button>
                            </div >
                            <div className="flex justify-center items-center w-[1000px] h-auto m-14">

                                <>
                                    <div class="relative overflow-x-auto">
                                        {show=== lists._id.$oid ?
                                            <table class=" table w-full text-sm text-left text-gray-500 dark:text-gray-400 m-10">
                                                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                                    <tr>
                                                        <th class="px-6 py-3">
                                                            Scholarship Names
                                                        </th>
                                                        <th class="px-6 py-3">
                                                            Benfits
                                                        </th>
                                                        <th class="px-6 py-3">
                                                            Eligibility
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr class="bg-white table-cell border-b dark:bg-gray-800 dark:border-gray-700">
                                                        {lists.Scholarship.map((list) => {
                                                            return (
                                                                <>
                                                                    <th class="block px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                        {list}</th>
                                                                </>
                                                            )
                                                        })}
                                                    </tr>
                                                    <tr class="bg-white table-cell border-b dark:bg-gray-800 dark:border-gray-700">
                                                        {lists.Benefits.map((list) => {
                                                            return (
                                                                <>
                                                                    <th class="block px-6 py-3">
                                                                        {list}</th>
                                                                </>
                                                            )
                                                        })}
                                                    </tr>
                                                    <tr class="bg-white table-cell border-b dark:bg-gray-800 dark:border-gray-700">
                                                        {lists.Eligibility.map((list) => {
                                                            return (
                                                                <>
                                                                    <th class="block px-6 py-3">
                                                                        {list}</th>
                                                                </>
                                                            )
                                                        })}
                                                    </tr>
                                                </tbody>
                                            </table>
                                            : ""
                                        }
                                    </div>
                                </>

                            </div>
                        </>

                    )
                })
            }
        </div>
    )
}


const UniversitiesInfo4 = () => {
    const [show, setShow] = useState(null);
    const showclick = (id) => {
        (id === show) ? setShow(null) : setShow(id);
    };
    return (
        <div className="flex-col">
            {
                scholarshipdata[3].scholarship.map((lists, index) => {
                    return (
                        <>
                            <div className="flex justify-between w-[1000px] h-auto bg-gray-300 rounded-lg">
                                <p className="p-2 m-1 h-10 font-bold text-lg ">{lists.heading}</p>

                                <button className="inline-block w-20 h-10 m-1 bg-red-600 text-white font-serif text-lg leading-tight rounded-xl shadow-md hover:bg-red-900 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-600 active:shadow-lg" onClick={() => showclick(lists._id.$oid)}>View</button>
                            </div >
                            <div className="flex justify-center items-center w-[1000px] h-auto m-14">

                                <>
                                    <div class="relative overflow-x-auto">
                                        {show=== lists._id.$oid ?
                                            <table class=" table w-full text-sm text-left text-gray-500 dark:text-gray-400 m-10">
                                                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                                    <tr>
                                                        <th class="px-6 py-3">
                                                            Scholarship Names
                                                        </th>
                                                        <th class="px-6 py-3">
                                                            Benfits
                                                        </th>
                                                        <th class="px-6 py-3">
                                                            Eligibility
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr class="bg-white table-cell border-b dark:bg-gray-800 dark:border-gray-700">
                                                        {lists.Scholarship.map((list) => {
                                                            return (
                                                                <>
                                                                    <th class="block px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                        {list}</th>
                                                                </>
                                                            )
                                                        })}
                                                    </tr>
                                                    <tr class="bg-white table-cell border-b dark:bg-gray-800 dark:border-gray-700">
                                                        {lists.Benefits.map((list) => {
                                                            return (
                                                                <>
                                                                    <th class="block px-6 py-3">
                                                                        {list}</th>
                                                                </>
                                                            )
                                                        })}
                                                    </tr>
                                                    <tr class="bg-white table-cell border-b dark:bg-gray-800 dark:border-gray-700">
                                                        {lists.Eligibility.map((list) => {
                                                            return (
                                                                <>
                                                                    <th class="block px-6 py-3">
                                                                        {list}</th>
                                                                </>
                                                            )
                                                        })}
                                                    </tr>
                                                </tbody>
                                            </table>
                                            : ""
                                        }
                                    </div>
                                </>

                            </div>
                        </>

                    )
                })
            }
        </div>
    )
}


const UniversitiesInfo5 = () => {
    const [show, setShow] = useState(null);
    const showclick = (id) => {
        (id === show) ? setShow(null) : setShow(id);
    };
    return (
        <div className="flex-col">
            {
                scholarshipdata[4].scholarship.map((lists, index) => {
                    return (
                        <>
                            <div className="flex justify-between w-[1000px] h-auto bg-gray-300 rounded-lg">
                                <p className="p-2 m-1 h-10 font-bold text-lg ">{lists.heading}</p>

                                <button className="inline-block w-20 h-10 m-1 bg-red-600 text-white font-serif text-lg leading-tight rounded-xl shadow-md hover:bg-red-900 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-600 active:shadow-lg" onClick={() => showclick(lists._id.$oid)}>View</button>
                            </div >
                            <div className="flex justify-center items-center w-[1000px] h-auto m-14">

                                <>
                                    <div class="relative overflow-x-auto">
                                        {show=== lists._id.$oid ?
                                            <table class=" table w-full text-sm text-left text-gray-500 dark:text-gray-400 m-10">
                                                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                                    <tr>
                                                        <th class="px-6 py-3">
                                                            Scholarship Names
                                                        </th>
                                                        <th class="px-6 py-3">
                                                            Benfits
                                                        </th>
                                                        <th class="px-6 py-3">
                                                            Eligibility
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr class="bg-white table-cell border-b dark:bg-gray-800 dark:border-gray-700">
                                                        {lists.Scholarship.map((list) => {
                                                            return (
                                                                <>
                                                                    <th class="block px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                        {list}</th>
                                                                </>
                                                            )
                                                        })}
                                                    </tr>
                                                    <tr class="bg-white table-cell border-b dark:bg-gray-800 dark:border-gray-700">
                                                        {lists.Benefits.map((list) => {
                                                            return (
                                                                <>
                                                                    <th class="block px-6 py-3">
                                                                        {list}</th>
                                                                </>
                                                            )
                                                        })}
                                                    </tr>
                                                    <tr class="bg-white table-cell border-b dark:bg-gray-800 dark:border-gray-700">
                                                        {lists.Eligibility.map((list) => {
                                                            return (
                                                                <>
                                                                    <th class="block px-6 py-3">
                                                                        {list}</th>
                                                                </>
                                                            )
                                                        })}
                                                    </tr>
                                                </tbody>
                                            </table>
                                            : ""
                                        }
                                    </div>
                                </>

                            </div>
                        </>

                    )
                })
            }
        </div>
    )
}

export default Scholarship;