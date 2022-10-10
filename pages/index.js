import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Banner from "./components/Banner";
import ContactUs from "./components/ContactUs";
import About from "./components/About";
import Rooms from "./components/Rooms";
import PhotoGallery from "./components/PhotoGallery";
import Services from "./components/Services";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Shepit Pruta</title>
                <meta name="description" content="Shepit Pruta"/>
                <link rel="icon" href="../public/assets/logo.JPG"/>
            </Head>

            <Navbar/>
            <Banner/>
            <About/>
            <Rooms/>
            <PhotoGallery/>
            <Services/>
            <ContactUs/>
            <Footer/>

        </div>
    )
}
