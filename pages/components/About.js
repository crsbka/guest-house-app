import React from "react";
import YouTube from "react-youtube";

export default function About() {

    const opts = {
        height: "580",
        width: "1030",

    };

    return (
        <div className='mx-auto'>
            <h1 className='text-2xl font-bold text-center p-6'>About Us</h1>
            <div className='relative flex justify-center p-6'>
                <YouTube videoId="pCdSsWSXpLE"
                         opts={opts}/>

            </div>
        </div>
    );
}

