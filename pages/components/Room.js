import Image from "next/image";
import React, {useState} from "react";
import {FaArrowCircleLeft, FaArrowCircleRight} from "react-icons/fa";


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

        <div key={room.id} className="grid grid-cols-2 gap-4">



            <div className='grid grid-col'>
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
                                        width='1140'
                                        height='700'
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
                <h1 className="font-bold">{room.name}</h1>
                <p className="content-center">{room.description}</p>
            </div>
        </div>
    )
};

export default Room;