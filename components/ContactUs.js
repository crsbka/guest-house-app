import {EMAIL_ADDRESS} from "../pages/_app.js";
import Iframe from 'react-iframe';
import NavLogo from "../public/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import {AiFillFacebook, AiFillYoutube, AiOutlineInstagram} from "react-icons/ai";


const Contact = () => {
    return (
        <div id="contact" className='m-auto p-8 max-h-[480px] custom-img justify-left text-black grid md:grid-cols-4'>


            <div className="grid place-items-center p-16">
                <Image className='rounded-full bg-white object-bottom' src={NavLogo} width={120} height={120} alt="/"/>
                <p className="brand bg-clip-text font-bold text-transparent bg-gradient-to-r from-lime-50 to-teal-600">Shepit Pruta</p>

                <ul className='inline-flex'>

                    <li className="p-4 cursor-pointer scale-150 text-white">
                        <Link href="https://www.instagram.com/shepitpruta/"><AiOutlineInstagram/></Link>
                    </li>

                    <li className="p-4 cursor-pointer scale-150 text-white">
                        <Link href="https://www.youtube.com/@shepitpruta558"><AiFillYoutube/></Link>
                    </li>

                    <li className="p-4 cursor-pointer scale-150 text-white">
                        <Link href="https://www.facebook.com/ShepitPruta"><AiFillFacebook/></Link>
                    </li>

                </ul>

            </div>


            <div className='p-2'>

                <div className='pb-4'>
                    <h1 className='text-l font-bold p-2'>ADDRESS:</h1>
                    <p className='text-l p-2'>Svobody St, 183, Yaremche, Ivano-Frankivsk Oblast, Ukraine, 78500</p>
                </div>
                <h1 className='text-l font-bold p-2'>BOOKING DEPARTMENT:</h1>
                <p className='text-l p-2'>+38 (068) 188-90-66</p>
                <p className='text-l p-2'>{EMAIL_ADDRESS}</p>


                <div className="place-items-center p-2 pt-6">
                    <button className="group relative h-10 w-40 overflow-hidden rounded-lg  text-lg shadow-md border-2"

                            onClick={() => window.location = 'mailto:' + EMAIL_ADDRESS}>

                        <div className="absolute inset-0 w-1 bg-teal-700 transition-all duration-[250ms] ease-out
                        group-hover:w-full"/>
                        <span className="relative text-black group-hover:text-white">Email Us</span>
                    </button>
                </div>


            </div>

            {/*Embedded map*/
            }

            <Iframe
                url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1322.8717107347995!2d24.565046799999998!3d48.4614523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473725ccf53c2049%3A0x202f1034d124d37d!2sShepit%20Pruta!5e0!3m2!1sen!2sca!4v1669757752114!5m2!1sen!2sca"
                width="650"
                height="350"
                style="border:1"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"/>

        </div>

    )
}

export default Contact

