import React, {useState} from 'react';
import Room from "./Room";
import Link from "next/link";


const Rooms = ({rooms}) => {
    const [current, setCurrent] = useState(0);
    const length = rooms.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(rooms) || rooms.length <= 0) {
        return null;
    }


    return (
        <div id='rooms' className='max-w-[1240px] mx-auto'>

            <Link href="/roomsList">
            <h1 className='text-2xl font-bold text-center p-6 cursor-pointer'>Rooms</h1>
            </Link>

            <ul className="text-center justify-center p-6">


                {rooms.map(room => (
                <Room key={room.name} room={room}/>
                ))}


            </ul>



        </div>
    );
}

export default Rooms;





