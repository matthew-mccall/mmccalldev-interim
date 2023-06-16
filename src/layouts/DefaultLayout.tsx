import DynamicBackground from "@mmccalldev/components/DynamicBackground";
import NavigationBar from "@mmccalldev/components/NavigationBar";
import React from "react";

export default function DefaultLayout({children}: {children: React.ReactNode}) {
    return (
        <>
            <main>
                <NavigationBar/>
                <DynamicBackground>
                    {children}
                </DynamicBackground>
            </main>
        </>
    )
}