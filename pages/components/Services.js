import {AiOutlineWifi} from 'react-icons/ai';
import {RiParkingLine} from 'react-icons/ri';
import {TbMapPin} from 'react-icons/tb';
import {MdPets} from 'react-icons/md';

export default function Services() {
    return (
        <div className='max-w-[1040px] mx-auto justify-center'>
            <h1 className='text-2xl font-bold text-center p-6'>
                Our services
            </h1>
            <h2 className='text-2xl text-center pb-6'>
                Our goal is that everyone can feel free in our space.
            </h2>


            <div className="grid grid-cols-2 gap-4 p-20">

                <div className="grid grid-cols-3 gap-4 p-6">
                    <AiOutlineWifi size={65} />
                    <div className="grid grid-col col-span-2">
                        <h5 className='text-l font-bold float-left'>Wi-Fi</h5>
                        <p className='text-m float-left'>Free and fast internet available in all rooms throughout the whole territory</p>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-4 p-6">
                    <RiParkingLine size={65}/>
                    <div className="grid grid-col col-span-2">
                        <h5 className='text-l font-bold float-left'>Parking</h5>
                        <p className='text-m float-left'>All guests can use the on-site parking free of charge</p>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-4 p-6">
                    <TbMapPin size={65}/>
                    <div className="grid grid-col col-span-2">
                        <h5 className='text-l font-bold float-left'>Convenient location</h5>
                        <p className='text-m float-left'>We are located at a distance of 1.5 km from the Downtown with good access</p>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-4 p-6">
                    <MdPets size={65}/>
                    <div className="grid grid-col col-span-2">
                        <h5 className='text-l font-bold float-left'>Pets allowed</h5>
                        <p className='text-m float-left '>You can stay with your pets</p>
                    </div>
                </div>

            </div>

        </div>
    )
}


