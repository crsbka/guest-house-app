import Image from 'next/image';
import React, { useState } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import {GalleryData} from "./GalleryData";

const Slider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (

        <div className='max-w-[1520px] mx-auto bg-[#101212]'>
        <div id='gallery' className='max-w-[1200px] mx-auto'>
            <div className='relative flex justify-center pt-2 pb-4'>

                {GalleryData.map((slide, index) => {
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
                                    src={slide.image}
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
        </div>
    );
};

export default Slider;