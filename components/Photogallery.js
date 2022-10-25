import Image from 'next/image'
import img1 from '../public/assets/gallery/fireplace.JPG'
import img2 from '../public/assets/gallery/window.JPG'
import img4 from '../public/assets/gallery/river.jpeg'

export default function Photogallery() {
    return (
        <div id='gallery' className='max-w-[1520px] mx-auto bg-slate-200'>
        <div className='max-w-[1200px] mx-auto'>
            <h1 className='text-2xl font-bold text-center p-4'>Photogallery</h1>


            <div className="grid grid-flow-col gap-4 mt-6 relative flex justify-center text-lg">Our house is located 1.5 km from the
                city center on the banks of the Prut River.
            </div>
            <div className="grid grid-flow-col mt-4 gap-4 mb-6 relative flex justify-center text-lg">On the territory there are various
                recreation areas, gazebos, barbecues, darts.
            </div>

            <div className='max-w-[1240px] mx-auto'>

                <div className="grid grid-cols-3 gap-4 pt-6">
                    <div>
                        <Image
                            src={img1}
                            alt="fireplace"
                            width="550px"
                            height="450px"
                        />
                    </div>

                    <div>
                        <Image
                            src={img4}
                            alt="fireplace"
                            width="550px"
                            height="450px"
                        />
                    </div>
                    <div>
                        <Image
                            src={img2}
                            alt="fireplace"
                            width="550px"
                            height="450px"
                        />
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
