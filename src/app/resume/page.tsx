'use client'

import DynamicBackground from "@mmccalldev/components/DynamicBackground";
import {Card, Col, Row} from "react-bootstrap";
import {useEffect, useRef} from "react";

export default function Page() {

    const rowRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (typeof document !== 'undefined' && rowRef.current) {
            Promise.all([
                import('jquery'),
                import('masonry-layout')
            ]).then(([, masonry]) => {
                new masonry.default(rowRef.current!, {
                    itemSelector: '.col',
                    percentPosition: true
                })
            })
        }
    })

    return (
        <>
        <DynamicBackground>
            <div className={"py-5"}>
                <div className={"container text-light"}>
                    <h1 className={"display-3 fw-semibold"}>Resume</h1>
                </div>
            </div>
        </DynamicBackground>
        <div className={"bg-body flex-grow-1 d-flex align-items-center"}>
            <div className={"container py-5"}>
                <Row xs={1} md={2} ref={rowRef} className={"g-4"}>
                <Col>
                    <Card className={"shadow"}>
                        <Card.Body>
                    <h1>Education</h1>
                    <h2>Rensselaer Polytechnic Institute</h2>
                    <h3>Bachelor of Science - Computer Science</h3>
                    <ul>
                        <li>
                            Participating in undergraduate research with RPI’s SCOREC
                            <ul>
                                <li>Developed a feature to allow researchers upload their findings from the Plasma Science Virtual Laboratory to an external data storage website. Currently integrating a GPU-bound</li>
                                <li>Integrated a GPU-bound memory pool in Omega_h, a C++ library for triangle mesh adaptivity to improve performance on new systems such as OLCF Frontier.</li>
                            </ul>
                        </li>
                        <li>
                            Contributed to open-source software through RCOS.
                            <li>Added functionality to load triangle meshes from common 3D file formats for a C++ computational geometry library.</li>
                        </li>
                    </ul>
                    <h2>Benjamin N. Cardozo High School</h2>
                    <h3>High School Diploma with Regents Advanced Designation</h3>
                    <ul>
                        <li>3.8 GPA</li>
                        <li>Regents Advanced Designation with Mastery in Mathematics</li>
                        <li>Member of the National Honors Society (ARISTA)</li>
                        <li>Member of the Gateway Institute for Pre-College Education</li>
                    </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className={"shadow"}>
                        <Card.Body>
                    <h1>Relevant Activities</h1>
                    <h2>FIRST Robotics Competition Team</h2>
                    <ul>
                        <li>Senior Board Member on the team</li>
                        <li>Head for the Programming Division</li>
                        <li>Lead the development and integration of new software that made use of sensor data for safety and navigation. (Java)</li>
                        <li>Responsible for the safety, instruction, and training of new members in the Programming Division</li>
                    </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className={"shadow"}>
                        <Card.Body>
                    <h1>Certificates and Experience</h1>
                    <ul>
                        <li>AWS Certified Cloud Practitioner</li>
                        <li>Experience developing software with C++ and working on Linux and *BSD systems.</li>
                        <li>Experience programming web applications using HTML, CSS, JavaScript, MongoDB, Express, React, and Node.JS</li>
                        <li>Proficient in using Microsoft Office applications.</li>
                    </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className={"shadow"}>
                        <Card.Body>
                    <h1>Hobbies and Interests</h1>
                    <ul>
                        <li>Managed and executed weekly live streams of mass for St Mary’s Church of Branford.</li>
                        <li>Worked in a team to aid in the construction of two New Haven homes with Habitat for Humanity.</li>
                    </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            </div>
        </div>
        </>
    )
}