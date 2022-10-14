import Head from 'next/head'
import Hero from "./components/Hero";
import ContactUs from "./components/ContactUs";
import About from "./components/About";
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


            <Hero heading='Shepit Pruta' message='Quiet apartments by the river for couples, companies and families.'/>
            <About/>

            {/*for rooms use API*/}
            <Rooms rooms={rooms}/>

            <Photogallery/>
            <Gallery slides={GalleryData}/>
            <Services/>
            <ContactUs/>
            <Footer/>

        </div>
    )
}
