import localFont from "next/font/local";

import {Metadata} from "next";
import Disclaimer from "@mmccalldev/components/Disclaimer";

import '@mmccalldev/styles/globals.scss'

export const metadata: Metadata = {
    title: "Matthew McCall",
    description: "Matthew McCall's personal website, blog, and portfolio.",
    viewport: "width=device-width, initial-scale=1",
}

const inter = localFont({
    src: "fonts/Inter.var.woff2",
})


export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang={"en"}>
        <body style={{
            ...inter.style,
            fontFeatureSettings: "'ss01', 'cv11'",
        }}>
        <Disclaimer />
        {children}
        </body>
        </html>
    )
}