import NavigationBar from "@mmccalldev/components/NavigationBar";
import React from "react";
import Footer from "@mmccalldev/components/Footer";

export default function Page({ children }: { children: React.ReactNode }) {

    return (
            <div className={"min-vh-100 d-flex flex-column"}>
                <NavigationBar position={"sticky"} />
                <div className={"flex-grow-1 d-flex flex-column"}>
                    {children}
                </div>
                <Footer/>
            </div>
    )
}