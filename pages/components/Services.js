import {AiOutlineWifi} from 'react-icons/ai';
import {RiParkingLine} from 'react-icons/ri';
import {TbMapPin} from 'react-icons/tb';
import {MdPets} from 'react-icons/md';

export default function Services() {
    return (
        <div>
            <h1 className='text-2xl font-bold text-center p-6'>
                Our services
            </h1>


            <div className="grid grid-cols-2 gap-4">
                <div>
                    <AiOutlineWifi size={50}/>
                    <h5>Wifi</h5>
                </div>
                <div>
                    <RiParkingLine size={50}/>
                    <h5>Parking</h5>
                </div>
                <div>
                    <TbMapPin size={50}/>
                    <h5>Map</h5>
                </div>
                <div>
                    <MdPets size={50}/>
                    <h5>Pets</h5>
                </div>
            </div>

        </div>
    )
}


