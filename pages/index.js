import Head from 'next/head'
import Hero from "./components/Hero";
import ContactUs from "./components/ContactUs";
import Video from "./components/Video";
import Rooms from "./components/Rooms";
import Gallery from "./components/Gallery";
import Services from "./components/Services";
import Footer from "./components/Footer";
import {GalleryData} from "./components/GalleryData";
import Photogallery from "./components/Photogallery";


export const getStaticProps = async () => {
    const response = await fetch(`http://localhost:3000/api/rooms/`);
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


export default function Home({rooms}) {
    return (
        <div>
            <Head>
                <title>Shepit Pruta</title>
                <meta name="description" content="Shepit Pruta Guest House"/>
                <link rel="icon" href="../public/assets/logo.JPG"/>
            </Head>


            <Hero heading='Shepit Pruta' message='Quiet apartments by the river for couples, companies and families. An incredible place in the heart of the Carpathian Mountains where you will want to return! Make yourself the best gift on vacation —  accommodation in a modern and cozy hotel in Bukovel. The heart freezes and stops for a moment from the beauty,  and rich nature around. Discover something new and special, fall in love with this place that will definitely impress you.'/>


            {/*for roomsData use API*/}
            <Rooms rooms={rooms}/>

            <Photogallery/>

            <Gallery slides={GalleryData}/>
            <Services/>
            <ContactUs/>
            <Video/>
            <Footer/>

        </div>
    )
}
