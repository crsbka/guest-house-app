import NavLogo from "../../public/assets/navLogo.JPG";
import Image from "next/image";

export default function Hero(props) {

    function handleClick() {
        console.log("Clicked")
    }

    return (


        <div className="flex items-center justify-center h-screen mb-15 bg-fixed bg-center bg-cover custom-img">
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-white/5 z-[2]"/>


            <div className="p-5 text-white z-[2] mt-[-10rem]">
                <Image className='rounded-full items-center' src={NavLogo} width={110} height={110} alt="/"/>
                <h1 className="text-5xl font-bold">{props.heading}</h1>
                <p className="py-5 text-xl">{props.message}</p>
                <button onClick={handleClick}
                        className="py-2 px-4 border bg-white-500 text-white rounded-md shadow-md focus:ring-2 focus:ring-opacity-25">Book
                    apartment
                </button>
            </div>

        </div>
    )
}

// "px-8 py-2 border"