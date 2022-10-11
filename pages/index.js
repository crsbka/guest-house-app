import Head from 'next/head'
import Hero from "./components/Hero";
import ContactUs from "./components/ContactUs";
import About from "./components/About";
import Rooms from "./components/Rooms";
import Gallery from "./components/Gallery";
import Services from "./components/Services";
import Footer from "./components/Footer";

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
            <Rooms/>
            <Gallery/>
            <Services/>
            <ContactUs/>
            <Footer/>

        </div>
    )
}
