'use client'

import localFont from "next/font/local";

import Disclaimer from "@mmccalldev/components/Disclaimer";

import '@mmccalldev/styles/globals.scss'
import React, {useEffect, useState} from "react";

const inter = localFont({
    src: "fonts/Inter.var.woff2",
})


export default function RootLayout({children}: {children: React.ReactNode}) {
    const [theme, setTheme] = useState<"light" | "dark">("light")

    useEffect(() => {
        if (window && window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("dark")
        }
    })

    return (
        <html lang={"en"}>
        <body style={{
            ...inter.style,
            fontFeatureSettings: "'ss01', 'cv11'",
        }} data-bs-theme={theme}>
        <Disclaimer />
        {children}
        </body>
        </html>
    )
}