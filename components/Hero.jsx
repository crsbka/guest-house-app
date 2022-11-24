import NavLogo from "../public/assets/logo.png";
import Image from "next/image";
import {EMAIL_ADDRESS} from "../pages/_app.js";

export default function Hero(props) {


    return (

        <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">

            {/* Overlay */}
            <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[2]'/>
            <div className="p-5 text-white z-[2] mt-[-5rem]">
                <Image className='rounded-full' src={NavLogo} width={110} height={110} alt="/"/>

                <div className="heading text-5xl font-extrabold">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-lime-50 to-teal-600">
                    {props.heading}
                  </span>
                </div>

                <p className="py-5 text-xl max-w-[750px]">{props.message}</p>


            </div>

        </div>
    )
}
