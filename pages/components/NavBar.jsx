import React, {useEffect, useState} from "react";
import Link from "next/link";
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

export default function NavBar() {
    const [nav, setNav] = useState(false)
    const [color, setColor] = useState("transparent")
    const [textColor, setTextColor] = useState("white")

    function handleNav() {
        setNav(!nav)
    };

    useEffect(() => {
            const changeColor = () => {
                if (window.scrollY >= 90) {
                    setColor("rgba(166,160,160,0.45)")
                    setTextColor("#000000");
                } else {
                    setColor("transparent")
                    setTextColor("#ffffff");
                }
            };
            window.addEventListener("scroll", changeColor);
        },
        []
    );


    return (
        <div style={{backgroundColor: `${color}`}}
             className="fixed left-0 top-0 w-full shadow-xl z-10 ease-in duration-300">
            <div className="max-w-[1240px] m-auto flex items-center p-4 text-white text-lg">

                <Link href="/">
                    <h1 style={{color: `${textColor}`}} className="font-bold p-5">Home</h1></Link>
                <ul style={{color: `${textColor}`}} className="hidden sm:flex">
                    <li className="p-4">
                        <Link href="/about">About</Link>
                    </li>
                    <li className="p-4">
                        <Link href="/rooms">Rooms</Link>
                    </li>
                    <li className="p-4">
                        <Link href="/#gallery">Gallery</Link>
                    </li>
                    <li className="p-4">
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>

                {/*Mobile Button*/}
                <div className="block sm:hidden z-10" onClick={handleNav}>
                    {nav ? <AiOutlineClose size={20} style={{color: `${textColor}`}}/>
                        : <AiOutlineMenu size={20} style={{color: `${textColor}`}}/>}
                </div>
                {/*Mobile Menu*/}
                <div className={
                    nav ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
                        : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
                }>

                    <ul>
                        <li className="p-4 text-2xl hover:text-gray-500">
                            <Link href="/about">About</Link>
                        </li>
                        <li className="p-4 text-2xl hover:text-gray-500">
                            <Link href="/rooms">Rooms</Link>
                        </li>
                        <li className="p-4 text-2xl hover:text-gray-500">
                            <Link href="/#gallery">Gallery</Link>
                        </li>
                        <li className="p-4 text-2xl hover:text-gray-500">
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>

            </div>
        </div>

    )
        ;
};