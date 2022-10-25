import {EMAIL_ADDRESS} from "../pages/_app.js";

const Contact = () => {
    return (
        <div id="contact" className='m-auto p-60 h-screen custom-img items-center justify-center text-white'>
            <h1 className='text-2xl font-bold text-center p-4'>Ukraine, Yaremche city, Svobody 183 st. </h1>
            <p className='text-xl text-center p-4'>Phone/Viber: +38 (068) 188-90-66</p>
            <button
                className="py-2 px-8 border bg-white-500 text-white rounded-md justify-self-center shadow-md
                focus:ring-2 focus:ring-opacity-25"
                onClick={() => window.location = 'mailto:' + EMAIL_ADDRESS}>Email
                Us
            </button>

        </div>
    )
}

export default Contact

