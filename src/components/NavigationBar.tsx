import AcrylicStyle from "@mmccalldev/styles/Acrylic.module.css";
import {useEffect, useState} from "react";
import {Container, Nav, Navbar, Offcanvas} from "react-bootstrap";

export default function NavigationBar() {

    const [show, setShow] = useState(false);
    const [offcanvasAcrylic, setOffcanvasAcrylic] = useState<string | null>(null)

    useEffect(() => {
        if (typeof document === 'undefined') return;

        const Hammer = require('hammerjs');

        let hammer = new Hammer(document.body);
        hammer.on('swipeleft', () => {
            if (window.innerWidth >= 992) return;
            handleShow()
        })

        hammer.on('swiperight', () => {
            if (window.innerWidth >= 992) return;
            handleClose()
        })
    })

    const handleShow = () => {
        setShow(true)
        setOffcanvasAcrylic(AcrylicStyle.acrylic)
    };
    const handleClose = () => {
        setShow(false)
        setOffcanvasAcrylic(null)
    };

    return (
        <Navbar bg={'body'} expand={'lg'} fixed={'top'} className={`bg-opacity-75 ${AcrylicStyle.acrylic}`}>
            <Container>
                <Navbar.Brand href={"/"}>mmccall.dev</Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShow} >
                    <i className={"bi-list fs-2"} />
                </Navbar.Toggle>
                <Navbar.Offcanvas
                    id={"offcanvasNavbar"}
                    className={offcanvasAcrylic}
                    aria-labelledby={"offcanvasNavbarLabel"}
                    placement={'end'}
                    show={show}
                    onHide={handleClose}
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">mmccall.dev</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className={"justify-content-end flex-grow-1 pe-3"}>
                            <Nav.Link href={"/"}>home</Nav.Link>
                            <Nav.Link disabled href={"/blog"}>blog</Nav.Link>
                            <Nav.Link disabled href={"/gallery"}>gallery</Nav.Link>
                            <Nav.Link disabled href={"/resume"}>resume</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}