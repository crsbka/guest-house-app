import React from "react";

export default function Video() {


    return (
        <div className='mx-auto max-w-[1010px]'>
            <h1 className='text-2xl font-bold text-center p-6'>Video</h1>


            <div className="aspect-w-16 aspect-h-9 mb-8">

                <iframe src="https://www.youtube.com/embed/pCdSsWSXpLE" frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>

            </div>

        </div>
    );
}


