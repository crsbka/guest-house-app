import Head from 'next/head'
import Hero from "../components/Hero";
import ContactUs from "../components/ContactUs";
import Video from "../components/Video";
import Rooms from "../components/Rooms";
import Gallery from "../components/Gallery";
import Services from "../components/Services";
import Footer from "../components/Footer";
import {GalleryData} from "../components/GalleryData";
import Photogallery from "../components/Photogallery";
import Link from "next/link";
import React from "react";
import Testimonials from "../components/Testimonials";


export const getStaticProps = async () => {

    const response = await fetch(`http://localhost:3000/api/rooms?limit=3`);
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


            <Hero heading='Shepit Pruta'
                  message='Quiet apartments by the river for couples, companies and families. An incredible place in the heart of the Carpathian Mountains where you will want to return!'/>


            {/*for roomsData use API*/}
            <Rooms rooms={rooms}/>

            <Link href="/roomsList">


                <div className="grid place-items-center mb-8">
                    <button className="group relative h-14 w-52 overflow-hidden rounded-lg bg-white text-lg shadow-md border-2">
                    <div className="absolute inset-0 w-1 bg-teal-700 transition-all duration-[250ms] ease-out
                        group-hover:w-full"></div>
                    <span className="relative text-black group-hover:text-white">Show more rooms</span>

                </button>
                </div>


                    {/*<button className="text-white bg-gradient-to-r from-teal-400 via-teal-600 to-teal-700 hover:bg-gradient-to-br*/}
                    {/*     focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-900 shadow-sm shadow-teal-500/50*/}
                    {/*     dark:shadow-md dark:shadow-teal-800/70 font-medium rounded-md text-md px-7 py-3.5 text-center mr-2 mb-8*/}
                    {/*     uppercase">Show more rooms*/}
                    {/*</button>*/}


                {/*<button className='text-2xl font-bold text-center justify-items-center p-6 mb-8 cursor-pointer uppercase border'>Show*/}
                {/*    more rooms</button>*/}
            </Link>

            <Photogallery/>
            <Gallery slides={GalleryData}/>

            <Services/>
            <Video/>
            <Testimonials/>
            <ContactUs/>
            <Footer/>

        </div>
    )
}
