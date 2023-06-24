'use client'

import ContentCard from "@mmccalldev/components/ContentCard";
import {Content} from "@mmccalldev/lib/Content";
import {useEffect, useRef} from "react";
import {Fade} from "react-awesome-reveal";
import {Col, Container, Row} from "react-bootstrap";

interface ContentGridProps {
    content: Content[]
}

export default function ContentGrid({content}: ContentGridProps) {

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
        <Container>
            <Row xs={1} md={2} lg={3} xl={4} ref={rowRef} className={"g-4"}>
                {
                    content.map((content, index) => {
                        return (
                            <Col key={index}>
                                <Fade delay={500} triggerOnce>
                                    <ContentCard {...content}/>
                                </Fade>
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    )
}
