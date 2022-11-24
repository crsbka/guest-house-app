import {EMAIL_ADDRESS} from "../pages/_app.js";

const Contact = () => {
    return (
        <div id="contact" className='m-auto p-40 max-h-[480px] custom-img justify-center text-black'>
            <h1 className='text-l font-bold text-center p-2'>Ukraine, Yaremche, Svobody 183 st. </h1>
            <p className='text-l text-center p-4'>Phone/Viber: +38 (068) 188-90-66</p>


            <div className="grid place-items-center">
            <button
                className="py-2 px-8 border bg-white-500 text-black rounded-md justify-self-center shadow-md
                focus:ring-2 focus:ring-opacity-25"
                onClick={() => window.location = 'mailto:' + EMAIL_ADDRESS}>Email
                Us
            </button>
            </div>
        </div>
    )
}

export default Contact

