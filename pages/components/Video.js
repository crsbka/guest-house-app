import React from "react";
import YouTube from "react-youtube";

export default function Video() {

    const opts = {
        // height: "580",
        // width: "1010",
        position: "absolute",
        width: "1010",
        height: "580",
        top: 0,
        left: 0,

    };

    return (
        <div className='mx-auto'>
            <h1 className='text-2xl font-bold text-center p-6'>Video</h1>
            <div className='relative flex justify-center p-6'>
                <YouTube videoId="pCdSsWSXpLE"
                         opts={opts}/>

            </div>
        </div>
    );
}

