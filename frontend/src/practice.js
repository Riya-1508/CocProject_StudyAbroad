import React from "react";
import './practice.css'
import { useState } from "react";

function Tp() {
    const [show,setShow]= useState(false);
    const [show2,setShow2]= useState(false);
    const [show3,setShow3]= useState(false);
    const Dlist = () =>
    {
        setShow(!show);
        setShow2(false);
        setShow3(false);

    }
    const Dlist2 = () =>
    {
        setShow2(!show2);
        setShow(false);
        setShow3(false);
    }
    const Dlist3 = () =>

    {
        setShow3(!show3);
        setShow(false);
        setShow2(false);
    }
    
    return (
        <div className="bg-gradient-to-r from-indigo-100 via-pink-300 to-purple-900 h-screen" >
            <button className="p-4 focus:bg-yellow-600" onClick={Dlist}>ABC</button>
            <button className="p-4 focus:bg-yellow-600" onClick={Dlist2}>EFG</button>
            <button className="p-4 focus:bg-yellow-600" onClick={Dlist3}>HJK</button>
            {show && <List />}
            {show2 && <List2 />}
            {show3 && <List3 />}
        </div >
    );
}

const List = () => {
    return (
        <>
            <ul>
                <li className="w-32 bg-white border-2 border-black">1</li>
                <li className="w-32 bg-white border-2 border-black">2</li>
                <li className="w-32 bg-white border-2 border-black">3</li>
                <li className="w-32 bg-white border-2 border-black">4</li>
                <li className="w-32 bg-white border-2 border-black">5</li>
            </ul>
        </>
    )
}

const List3 = () => {
    return (
        <>
            <ul>
                <li className="w-32 bg-white border-2 border-red-500">1</li>
                <li className="w-32 bg-white border-2 border-red-500">2</li>
                <li className="w-32 bg-white border-2 border-red-500">3</li>
                <li className="w-32 bg-white border-2 border-red-500">4</li>
                <li className="w-32 bg-white border-2 border-red-500">5</li>
            </ul>
        </>
    )
}
const List2 = () => {
    return (
        <>
            <ul>
                <li className="w-32 bg-white border-2 border-black">Hello</li>
                <li className="w-32 bg-white border-2 border-black">Hello</li>
                <li className="w-32 bg-white border-2 border-black">Hello</li>
                <li className="w-32 bg-white border-2 border-black">Hello</li>
                <li className="w-32 bg-white border-2 border-black">Hello</li>
            </ul>
        </>
    )
}

export default Tp;