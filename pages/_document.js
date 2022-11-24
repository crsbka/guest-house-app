import {Html, Head, Main, NextScript} from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head>

                <link rel="shortcut icon" href="/favicon/favicon.ico"/>
                <link
                    rel="preconnect"
                    href="https://fonts.googleapis.com"/>
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin='true'
                />


                <link href="https://fonts.googleapis.com/css2?family=Pacifico&family=Permanent+Marker&family=Prosto+One&family=Roboto:ital,wght@0,100;0,400;1,400&family=Sedgwick+Ave&display=swap"
                      rel="stylesheet"/>


            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    );
}

