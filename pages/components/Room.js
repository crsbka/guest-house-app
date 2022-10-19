import Image from "next/image";
import React, {useState} from "react";
import {FaArrowCircleLeft, FaArrowCircleRight} from "react-icons/fa";
import Link from "next/link";


const Room = ({room}) => {

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

        <div key={room.id} className="grid grid-cols-3 gap-4">



            <div className='grid col-span-2'>
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
                                        width='1040'
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

            <div className="grid grid-col">
                <h1 className="font-bold text-3xl">{room.name}</h1>
                <h2 className="font-bold text-2xl">{room.price}</h2>
                <p className="content-center">{room.description}</p>
                <p className="content-center">{room.generalInfo}</p>
                <button className="py-1 px-2 border bg-white-500 text-white rounded-md shadow-md focus:ring-2 focus:ring-opacity-25">Book
                    room
                </button>
            </div>




        </div>
    )
};

export default Room;