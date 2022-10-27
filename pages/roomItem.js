import Rooms from "../components/Rooms";
import NavBar from "../components/NavBar";


export const getStaticProps = async () => {


    const response = await fetch(`http://localhost:3000/api/rooms`);
    const data = await response.json();

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: {rooms: data},
    }

};

const roomsList = ({roomName}) => {


    return (
        <div>
            <NavBar/>

        </div>
    )
}

export default roomsList;