import '@mmccalldev/styles/globals.scss'
import React from "react";

import localFont from "next/font/local";

import Disclaimer from "@mmccalldev/components/Disclaimer";
import ThemeProvider from "@mmccalldev/components/ThemeProvider";
import {Metadata} from "next";

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
        <ThemeProvider style={{
            ...inter.style,
            fontFeatureSettings: "'ss01', 'cv11'",
        }}>
            {children}
            <Disclaimer/>
        </ThemeProvider>
        </html>
    )
}