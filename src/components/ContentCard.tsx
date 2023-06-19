import {Content} from "@mmccalldev/lib/Content";
import React from "react";
import AcrylicStyle from "@mmccalldev/styles/Acrylic.module.css";
import {Card} from "react-bootstrap";

export default function ContentCard({image, title, description, link, date}: Content) {
    return (
        <Card className={`border-0 shadow bg-body bg-opacity-75 ${AcrylicStyle.saturated}`}>
            {image && <Card.Img src={image} alt={title}/>}
            <Card.Body>
                {link
                    ? <a href={link} className={"stretched-link text-decoration-none"}><Card.Title>{title}</Card.Title></a>
                    : <Card.Title className={"card-title"}>{title}</Card.Title>}
                {description && <Card.Text className={"text-truncate"}>{description}</Card.Text>}
                <Card.Text><small className={"text-muted"}>{(new Date(date)).toDateString()}</small></Card.Text>
            </Card.Body>
        </Card>
    )
}