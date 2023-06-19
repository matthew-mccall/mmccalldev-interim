'use client'

import ContentCard from "@mmccalldev/components/ContentCard";
import {Content} from "@mmccalldev/lib/Content";
import {useEffect} from "react";
import {Fade} from "react-awesome-reveal";
import {Container, Row} from "react-bootstrap";

interface ContentGridProps {
    content: Content[]
}

export default function ContentGrid({content}: ContentGridProps) {

    useEffect(() => {
        if (typeof document !== 'undefined') {
            require('jquery/dist/jquery.min.js')
            require('masonry-layout/dist/masonry.pkgd.min.js')
        }
    })

    return (
        <Container>
            <Row xs={1} md={2} lg={3} xl={4}
                 data-masonry='{"percentPosition": true }'>
                <Fade cascade damping={0.1} triggerOnce>
                    {
                        content.map((content, index) => {
                            return (
                                <div className={"col mb-3"} key={index}>
                                    <ContentCard {...content}/>
                                </div>
                            )
                        })
                    }
                </Fade>
            </Row>
        </Container>
    )
}
