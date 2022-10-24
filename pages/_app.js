import '../styles/globals.css'
import NavBar from "./components/NavBar";

export const EMAIL_ADDRESS = "shepitpruta@gmail.com";

function MyApp({Component, pageProps}) {
    return (
        <>
            <NavBar/>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp
