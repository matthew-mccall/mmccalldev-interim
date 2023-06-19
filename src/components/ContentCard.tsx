import {Content} from "@mmccalldev/lib/Content";
import React from "react";
import AcrylicStyle from "@mmccalldev/styles/Acrylic.module.css";
import {Card} from "react-bootstrap";
import Color from "colorjs.io"

export default async function ContentCard({image, overlay, color, title, description, link, date}: Content) {

    const descriptionContent = description ? <Card.Text className={"text-truncate"}>{description}</Card.Text> : null;
    const cardContent = (<>
        {link
            ? <a href={link} className={"stretched-link text-reset text-decoration-none"}><Card.Title>{title}</Card.Title></a>
        : <Card.Title>{title}</Card.Title> }
        {descriptionContent}
        <Card.Text>
            <small className={"text-muted"}>{(new Date(date)).toDateString()}</small>
        </Card.Text>
    </>)

    if (overlay && image && color) {
        const backgroundColor = new Color(color);
        const lightForeground = new Color("white");
        const darkForeground = new Color("black");

        const theme = backgroundColor.contrastWCAG21(lightForeground) > backgroundColor.contrastWCAG21(darkForeground) ? "dark" : "light";

        return (<Card className={"border-0 shadow"} data-bs-theme={theme}>
            <Card.Img src={image} alt={title} />
            <Card.ImgOverlay className={"d-flex flex-column justify-content-end"} style={{backgroundImage: `linear-gradient(transparent 33%, ${color})`}}>
                {cardContent}
            </Card.ImgOverlay>
        </Card>)
    } else if (image && color) {
        const backgroundColor = new Color(color);
        const lightForeground = new Color("white");
        const darkForeground = new Color("black");

        const theme = backgroundColor.contrastWCAG21(lightForeground) > backgroundColor.contrastWCAG21(darkForeground) ? "dark" : "light";

        return (<Card className={`border-0 shadow`} data-bs-theme={theme} style={{background: color}}>
            <Card.Img src={image} alt={title} variant={"top"} />
            <Card.Body>
                {cardContent}
            </Card.Body>
        </Card>)
    }

    return (<Card className={`border-0 shadow bg-body bg-opacity-75 ${AcrylicStyle.saturated}`}>
        {image && <Card.Img src={image} alt={title} variant={"top"} />}
        <Card.Body>
            {cardContent}
        </Card.Body>
    </Card>)
}