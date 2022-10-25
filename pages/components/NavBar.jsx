import React, {useEffect, useState} from "react";
import Link from "next/link";
import {AiOutlineMenu, AiOutlineClose, AiFillFacebook, AiFillYoutube, AiOutlineInstagram} from 'react-icons/ai'
import {EMAIL_ADDRESS} from "../_app";


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
                    setColor("rgba(250,247,247,0.07)")
                    setTextColor("rgba(0,0,0,0.83)");
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
             className="fixed left-0 top-0 w-full shadow-md z-10 ease-in duration-300 backdrop-blur-sm bg-white/30">

            <div className="max-w-[1240px] m-auto flex justify-between items-center p-2 text-white text-md">

                <ul style={{color: `${textColor}`}} className="hidden sm:flex uppercase">

                    <li className="p-4 font-bold cursor-pointer">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="p-4 smooth-scrolling">
                        <Link href="/#rooms">Rooms</Link>
                    </li>
                    <li className="p-4">
                        <Link href="/#gallery">Gallery</Link>
                    </li>
                    <li className="p-4">
                        <Link href="/#contact">Contact</Link>
                    </li>

                </ul>

                <ul className="justify-end">
                    <span className="flex float-right">
                    <li className="p-4">
                        <Link href="/"><AiFillFacebook/></Link>
                    </li>
                    <li className="p-4">
                        <Link href="/"><AiFillYoutube/></Link>
                    </li>
                    <li className="p-4">
                        <Link href="/"><AiOutlineInstagram/></Link>
                    </li>
                </span>
                </ul>

                <button className='px-10 py-2 border rounded-md shadow-md focus:ring-2 focus:ring-opacity-25'
                        style={{color: `${textColor}`}}
                        onClick={() => window.location = 'mailto:' + EMAIL_ADDRESS}>Book
                </button>

                {/*Right side*/}

                {/*<div className="">*/}
                {/*    <ul style={{color: `${textColor}`}} className="hidden sm:flex max-w-[540px] flex  p-2 float-right">*/}

                {/*    </ul>*/}


                {/*</div>*/}


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
                        <li onClick={handleNav} className="p-4 text-2xl hover:text-gray-500">
                            <Link href="/about">About</Link>
                        </li>
                        <li onClick={handleNav} className="p-4 text-2xl hover:text-gray-500">
                            <Link href="/rooms">Rooms</Link>
                        </li>
                        <li onClick={handleNav} className="p-4 text-2xl hover:text-gray-500">
                            <Link href="/#gallery">Gallery</Link>
                        </li>
                        <li onClick={handleNav} className="p-4 text-2xl hover:text-gray-500">
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>

            </div>
        </div>

    )
        ;
};