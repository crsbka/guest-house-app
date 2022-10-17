import Image from 'next/image'

import img1 from '../../public/assets/gallery/fireplace.JPG'
import img2 from '../../public/assets/gallery/window.JPG'
import img3 from '../../public/assets/gallery/chair.JPG'
import img4 from '../../public/assets/gallery/river.jpeg'

export default function Photogallery() {
    return (
        // <div className='max-w-[1240px] mx-auto'>
        //     <h1 className='text-2xl font-bold text-center p-4'>Photogallery</h1>
        //
        //
        //     <div className="grid grid-flow-col gap-4 relative flex justify-center">
        //
        //
        //         </div>
        //     </div>
        //
        // </div>


        <div className='max-w-[1140px] mx-auto'>

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
    )
}
