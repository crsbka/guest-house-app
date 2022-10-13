import Image from 'next/image'

import img1 from '../../public/assets/gallery/fireplace.JPG'
import img2 from '../../public/assets/gallery/window.JPG'
import img3 from '../../public/assets/gallery/book.JPG'


export default function Photogallery() {
    return (
        <div className='max-w-[1240px] mx-auto'>
            <h1 className='text-2xl font-bold text-center p-4'>Photogallery</h1>


            <div className="grid grid-rows-3 grid-flow-col gap-4 relative flex justify-center p-4">

                <div className="row-span-3 ... ">
                    <Image
                        src={img1}
                        alt="Alt text for the picture"
                        width="800px"
                        height="650px"
                    />
                </div>

                <div className="col-span-2 ...">
                    <Image
                        src={img2}
                        alt="Alt te picture"
                        width="350px"
                        height="314px"
                    />
                </div>

                <div className=" object-fill row-span-2 col-span-2 ...">
                    <Image
                        src={img3}
                        alt="Alt "
                        width="350px"
                        height="314px"
                    />
                </div>
            </div>

        </div>
    )
}

