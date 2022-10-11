export default function Hero() {
    return (
        <div className="flex items-center justify-center h-screen mb-15 bg-fixed bg-center bg-cover custom-img">
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/20 z-[2]"/>


            <div className="p-5 text-white z-[2] ml-[-10rem] mt-[-10rem]">
                <h1 className="text-5xl font-bold">Shepit Pruta</h1>
                <p className="py-5 text-xl">Quiet apartments by the river for couples, companies and families.</p>
                <button className="py-2 px-4 border bg-white-500 text-white rounded-md shadow-xl hover:bg-blue-500  focus:ring-2 focus:ring-opacity-25">Book apartment</button>
            </div>
        </div>
    )
}

// "px-8 py-2 border"