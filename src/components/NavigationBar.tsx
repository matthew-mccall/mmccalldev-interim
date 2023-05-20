import AcrylicStyle from "@mmccalldev/styles/Acrylic.module.css";
import {useEffect, useRef} from "react";

export default function NavigationBar() {

    const offcanvasRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof document === 'undefined') return;
        if (!offcanvasRef.current) return;

        const bootstrap = require('bootstrap');
        const offcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvasRef.current);

        if (!offcanvas) return;

        const Hammer = require('hammerjs');

        let hammer = new Hammer(document.body);
        hammer.on('swipeleft', () => {
            if (window.innerWidth >= 992) return;
            offcanvas.show();
        })

        hammer.on('swiperight', () => {
            if (window.innerWidth >= 992) return;
            offcanvas.hide();
        })

        offcanvas._element.addEventListener('shown.bs.offcanvas', () => {
            // Add acrylic class to offcanvas
            offcanvas._element.classList.add(AcrylicStyle.acrylic);
        });

        offcanvas._element.addEventListener('hidden.bs.offcanvas', () => {
            // Remove acrylic material from offcanvas
            offcanvas._element.classList.remove(AcrylicStyle.acrylic);
        });
    })

    return (
        <nav className={`navbar navbar-expand-lg bg-body bg-opacity-75 fixed-top ${AcrylicStyle.acrylic}`}>
            <div className={"container"}>
                <a className={"navbar-brand"} href={"/"}>mmccall.dev</a>
                <button className={"navbar-toggler"} type={"button"} data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" >
                    <span className={"navbar-toggler-icon"}></span>
                </button>
                <div className={"offcanvas offcanvas-end bg-body bg-opacity-75 vh-100"} tabIndex={-1} id={"offcanvasNavbar"} aria-labelledby={"offcanvasNavbarLabel"} ref={offcanvasRef}>
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">mmccall.dev</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className={"offcanvas-body"}>
                        <ul className={"navbar-nav justify-content-end flex-grow-1 pe-3"}>
                            <li className={"nav-item"}>
                                <a className={"nav-link"} href={"/"}>home</a>
                            </li>
                            <li className={"nav-item"}>
                                <a className={"nav-link"} href={"/blog"}>blog</a>
                            </li>
                            <li className={"nav-item"}>
                                <a className={"nav-link"} href={"/gallery"}>gallery</a>
                            </li>
                            <li className={"nav-item"}>
                                <a className={"nav-link"} href={"/resume"}>resume</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}