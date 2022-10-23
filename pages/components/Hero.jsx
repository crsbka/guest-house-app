import NavLogo from "../../public/assets/navLogo.JPG";
import Image from "next/image";

export default function Hero(props) {

    function handleClick() {
        console.log("Clicked")
    }

    return (


        <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">

            {/* Overlay */}
            <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[2]'/>
            <div className="p-5 text-white z-[2] mt-[-5rem]">
                <Image className='rounded-full' src={NavLogo} width={110} height={110} alt="/"/>

                <div className="text-5xl font-extrabold ...">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-lime-50 to-teal-200">
                    {props.heading}
                  </span>
                </div>


                <p className="py-5 text-xl max-w-[750px]">{props.message}</p>
                <button onClick={handleClick}
                        className="py-2 px-4 border bg-white-500 text-white rounded-md shadow-md focus:ring-2 focus:ring-opacity-25">Book
                    room
                </button>
            </div>

        </div>
    )
}
