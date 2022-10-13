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

            <div className="grid grid-cols-2 gap-1">
                <AiOutlineWifi size={50}/>
                <RiParkingLine size={50}/>
                <TbMapPin size={50}/>
                <MdPets size={50}/>
            </div>

        </div>
    )
}


