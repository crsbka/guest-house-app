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

export default function Home() {
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
            <Rooms/>
            <Photogallery/>
            <Gallery slides={GalleryData}/>
            <Services/>
            <ContactUs/>
            <Footer/>

        </div>
    )
}
