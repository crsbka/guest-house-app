import Image from "next/image";
import NavLogo from '../../public/assets/navLogo.JPG'


export default function Navbar() {

    return (

            <div className="fixed w-full h-20 shadow-xl z-[100]">
                <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
                    <Image src={NavLogo} width={76} height={76} alt="/"/>
                    NAVBAR
                </div>
            </div>

    )
}