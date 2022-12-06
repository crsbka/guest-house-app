import React, {useState} from "react";
import Image from 'next/image'
import {GalleryData} from "./GalleryData";
import {GallerySliderData} from "./GallerySliderData";

const Photogallery = () => {

    const [modalImg, setModalImg] = useState(null);

    return (
        <div id='gallery' className='max-w-[1520px] mx-auto bg-[#101212]'>
            <div className='max-w-[1200px] mx-auto'>
                <h1 className='text-2xl font-bold text-center p-4 text-white'>Photogallery</h1>
                <div className="grid grid-flow-col gap-4 mt-2 relative flex justify-center text-lg text-white">Our house
                    is located
                    1.5 km from the
                    city center on the banks of the Prut River.
                </div>
                <div className="grid grid-flow-col gap-4 mb-4 relative flex justify-center text-lg text-white">On the
                    territory there are various
                    recreation areas, gazebos, barbecues, darts.
                </div>
                <div className='max-w-[1240px] mx-auto'>


                    {/*Modals*/}

                    <div className="grid grid-cols-3 gap-4 pt-6">

                        {GalleryData.map((it, index) => {
                            return (
                                <div key={index}>

                                    <Image
                                        className="hover:animate-pulse rounded"
                                        src={it.image}
                                        alt=""
                                        width="550px"
                                        height="450px"
                                        onClick={() => setModalImg(it.image)}
                                    />


                                    {modalImg ? (

                                        <div
                                            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0
                            z-50 outline-none focus:outline-none bg-zinc-900/80">
                                            <Image src={modalImg} width={1400} height={700} objectFit="contain"
                                                   alt=""
                                                   onClick={() => setModalImg(null)}/>
                                        </div>

                                    ) : null
                                    }


                                </div>
                            );
                        })}


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Photogallery;
