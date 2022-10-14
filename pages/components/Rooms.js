import Image from "next/image";


const Rooms = ({rooms}) => {

    if (!rooms) {
        return null;
    }


    return (
        <div>
            <h1 className='text-2xl font-bold text-center p-6'>Rooms</h1>
            <div className="grid grid-cols-2 gap-4">
                <ul>
                    {rooms && rooms.map(({id, name, description, img}) => (
                        <li key={id}>
                            <h1>{name}</h1>
                            <h2>{description}</h2>
                            <Image alt={name} width={150} height={70} src={img}/>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Rooms;