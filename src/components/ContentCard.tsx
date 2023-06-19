import {Content} from "@mmccalldev/lib/Content";
import React from "react";
import AcrylicStyle from "@mmccalldev/styles/Acrylic.module.css";
import {Card} from "react-bootstrap";

export default function ContentCard({image, overlay, title, description, link, date}: Content) {

    const cardContent = (<>
        {
            link && !overlay ? <a href={link} className={"stretched-link text-decoration-none"}>
                <Card.Title>{title}</Card.Title>
            </a> : <Card.Title>{title}</Card.Title>
        }
        {description && <Card.Text className={"text-truncate"}>{description}</Card.Text>}
        <Card.Text><small className={"text-muted"}>{(new Date(date)).toDateString()}</small></Card.Text>
    </>)

    return (<Card className={`border-0 shadow bg-body bg-opacity-75 ${AcrylicStyle.saturated}`}>
            {image && <Card.Img src={image} alt={title} variant={!overlay ? "top" : undefined} />}
            {overlay ? <Card.ImgOverlay className={"d-flex flex-column justify-content-end"}>
                {cardContent}
            </Card.ImgOverlay> : <Card.Body>
                {cardContent}
            </Card.Body>}
        </Card>)
}