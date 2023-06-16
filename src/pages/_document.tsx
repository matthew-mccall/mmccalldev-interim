import {Html, Head, Main, NextScript} from 'next/document'

export default function Document() {
    return (
        <Html lang="en" data-bs-theme="dark">
            <Head>
                <title>Matthew McCall</title>
                <meta name="description" content="Matthew McCall's personal website, blog, and portfolio." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <body style={{background: 'black'}}>
                <Main/>
                <NextScript/>
            </body>
        </Html>
    )
}
