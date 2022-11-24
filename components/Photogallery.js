import React, {useState} from "react";
import Image from 'next/image'
import img1 from '../public/assets/gallery/fireplace.JPG'
import img2 from '../public/assets/gallery/window.JPG'
import img3 from '../public/assets/gallery/river.jpeg'

const Photogallery = () => {

    const [showModal, setShowModal] = useState(false);

    return (
        <div id='gallery' className='max-w-[1520px] mx-auto bg-[#152323FF]'>
            <div className='max-w-[1200px] mx-auto'>
                <h1 className='text-2xl font-bold text-center p-4 text-white'>Photogallery</h1>
                <div className="grid grid-flow-col gap-4 mt-6 relative flex justify-center text-lg text-white">Our house is located
                    1.5 km from the
                    city center on the banks of the Prut River.
                </div>
                <div className="grid grid-flow-col mt-4 gap-4 mb-6 relative flex justify-center text-lg text-white">On the
                    territory there are various
                    recreation areas, gazebos, barbecues, darts.
                </div>
                <div className='max-w-[1240px] mx-auto'>


                    {/*Modals*/}

                    <div className="grid grid-cols-3 gap-4 pt-6">

                        <div>
                            <Image
                                className="hover:animate-pulse rounded"
                                src={img1}
                                alt="fireplace"
                                width="550px"
                                height="450px"
                                onClick={() => setShowModal(true)}
                            />
                        </div>

                        <div>
                            <Image
                                className="hover:animate-pulse rounded"
                                src={img3}
                                alt="fireplace"
                                width="550px"
                                height="450px"
                                onClick={() => setShowModal(true)}
                            />
                        </div>
                        <div>
                            <Image
                                className="hover:animate-pulse rounded"
                                src={img2}
                                alt="fireplace"
                                width="550px"
                                height="450px"
                                onClick={() => setShowModal(true)}
                            />
                        </div>
                    </div>

                    {showModal ? (

                        <div
                            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0
                            z-50 outline-none focus:outline-none bg-zinc-900/80">
                            <Image src={img1} width={1400} height={700} objectFit="contain"
                                   onClick={() => setShowModal(false)}/>
                        </div>


                    ) : null}

                </div>
            </div>
        </div>

    );
};

export default Photogallery;
