import React from 'react'
import ReactPlayer from 'react-player'

export default function About(){
    return (
        <div className="flex items-center justify-center h-screen mb-15 bg-fixed bg-center bg-cover">
            <h2>About Us</h2>
            <ReactPlayer url='https://www.youtube.com/watch?v=pCdSsWSXpLE' />
        </div>
    )
}
