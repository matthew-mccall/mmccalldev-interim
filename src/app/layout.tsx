import localFont from "next/font/local";

import {Metadata} from "next";
import NavigationBar from "@mmccalldev/components/NavigationBar";
import DynamicBackground from "@mmccalldev/components/DynamicBackground";

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
        <html lang={"en"} data-bs-theme={"dark"}>
        <body style={{
            ...inter.style,
            fontFeatureSettings: "'ss01', 'cv11'",
            backgroundColor: "black",
        }}>
        <NavigationBar/>
        <DynamicBackground>
            {children}
        </DynamicBackground>
        </body>
        </html>
    )
}