import '@mmccalldev/styles/globals.scss'
import React from "react";

import localFont from "next/font/local";

import Disclaimer from "@mmccalldev/components/Disclaimer";
import ThemeProvider from "@mmccalldev/components/ThemeProvider";

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