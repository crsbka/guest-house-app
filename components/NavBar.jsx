import React, {useEffect, useState} from "react";
import Link from "next/link";
import {AiOutlineMenu, AiOutlineClose, AiFillFacebook, AiFillYoutube, AiOutlineInstagram} from 'react-icons/ai'
import {EMAIL_ADDRESS} from "../pages/_app";
import NavLogo from "../public/assets/logo.png";
import Image from "next/image";


export default function NavBar() {
    const [nav, setNav] = useState(false)
    const [color, setColor] = useState("transparent")
    const [textColor, setTextColor] = useState("white")


    function handleNav() {
        setNav(!nav)
    };

    useEffect(() => {
            const changeColor = () => {
                if (window.scrollY >= 700) {
                    setColor("rgba(250,247,247,0.07)")
                    setTextColor("rgba(0,0,0,0.83)");
                } else {
                    setColor("rgba(12,23,23,0.04)")
                    setTextColor("#ffffff");
                }
            };
            window.addEventListener("scroll", changeColor);
        },
        []
    );


    return (


        <div style={{backgroundColor: `${color}`}}
             className="fixed left-0 top-0 w-full shadow-sm z-10 ease-in duration-300 backdrop-blur-sm bg-white/30">

            <div className="max-w-[1400px] m-auto flex justify-between items-center p-2 text-white text-md">

                <ul style={{color: `${textColor}`}} className="hidden sm:flex uppercase">

                    <li className="mr-6 font-bold cursor-pointer">
                        <Link href="/">
                            <Image className='rounded-full' src={NavLogo} width={60} height={60} alt="/"/>
                        </Link>
                    </li>
                    <li className="p-5 smooth-scrolling">
                        <Link href="/#rooms">Rooms</Link>
                    </li>
                    <li className="p-5">
                        <Link href="/#gallery">Gallery</Link>
                    </li>
                    <li className="p-5">
                        <Link href="/#testimonials">Reviews</Link>
                    </li>
                    <li className="p-5">
                        <Link href="/#contact">Contact</Link>
                    </li>

                </ul>

                <span>
                <ul className="justify-end "
                    style={{color: `${textColor}`}}>
                    <span className="flex float-right">

<span className="flex float-right px-10">
                       <li className="p-4 cursor-pointer scale-150">
                        <Link href="https://www.instagram.com/shepitpruta/"><AiOutlineInstagram/></Link>
                    </li>
                    <li className="p-4 cursor-pointer scale-150">
                        <Link href="https://www.youtube.com/@shepitpruta558"><AiFillYoutube/></Link>
                    </li>
                     <li className="p-4 cursor-pointer scale-150">
                        <Link href="https://www.facebook.com/ShepitPruta"><AiFillFacebook/></Link>
                    </li>
</span>

                     <li>
                    <button
                        className="group relative px-14 py-1 rounded-md shadow-md overflow-hidden text-lg shadow-md border-2"
                        style={{color: `${textColor}`, borderColor: `${textColor}`}}

                        onClick={() => window.location = 'mailto:' + EMAIL_ADDRESS}>
                    <div className="absolute inset-0 w-1 bg-teal-700 transition-all duration-[250ms] ease-out
                        group-hover:w-full"/>
                    <span className="relative text-white group-hover:text-white"
                          style={{color: `${textColor}`}}>
                        Book</span>
                    </button>
                      </li>

                    </span>
            </ul>


        </span>


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
                            <Link href="/#rooms">Rooms</Link>
                        </li>
                        <li onClick={handleNav} className="p-4 text-2xl hover:text-gray-500">
                            <Link href="/#gallery">Gallery</Link>
                        </li>
                        <li onClick={handleNav} className="p-4 text-2xl hover:text-gray-500">
                            <Link href="/#testimonials">Reviews</Link>
                        </li>
                        <li onClick={handleNav} className="p-4 text-2xl hover:text-gray-500">
                            <Link href="/#contact">Contact</Link>
                        </li>
                    </ul>
                </div>

            </div>
        </div>

    )
        ;
};