import Image from "next/image";
import React, {useState} from "react";
import {FaArrowCircleLeft, FaArrowCircleRight} from "react-icons/fa";


const Room = ({ room }) => {

    const [current, setCurrent] = useState(0);
    const length = room.images.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(room.images) || length <= 0) {
        return null;
    }



    return (


        <li key={room.id}>
            <h1>{room.name}</h1>
            <h2>{room.description}</h2>


            <div className='max-w-[740px] mx-auto'>
                <div className='relative flex justify-left pt-4'>

                    {room.images.map((image, index) => {
                        return (
                            <div
                                key={index}
                                className={
                                    index === current
                                        ? 'opacity-[1] ease-in duration-100'
                                        : 'opacity-0'
                                }
                            >
                                <FaArrowCircleLeft
                                    onClick={prevSlide}
                                    className='absolute top-[50%] left-[30px] text-white/70 cursor-pointer select-none z-[2]'
                                    size={50}
                                />
                                {index === current && (
                                    <Image
                                        src={image}
                                        alt='/'
                                        width='1440'
                                        height='600'
                                        objectFit='cover'
                                    />
                                )}
                                <FaArrowCircleRight
                                    onClick={nextSlide}
                                    className='absolute top-[50%] right-[30px] text-white/70 cursor-pointer select-none z-[2]'
                                    size={50}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </li>
    )
};

export default Room;