import '@mmccalldev/styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Matthew McCall</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Matthew McCall's personal website, blog, and portfolio." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}
