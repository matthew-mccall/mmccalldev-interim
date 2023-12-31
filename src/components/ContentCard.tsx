import {Content} from "@mmccalldev/lib/Content";
import React, {CSSProperties} from "react";
import {Card} from "react-bootstrap";
import Color from "colorjs.io"
import Link from "next/link";

export default function ContentCard({image, overlay, icon, color, title, description, link, date}: Content) {

    const descriptionContent = description ? <Card.Text className={"text-truncate"}>{description}</Card.Text> : null;

    const cardTitleStyle: CSSProperties = {
        fontFeatureSettings: "'ss01', 'cv11', 'zero'",
    }

    let linkElement = null;

    if (link) {
        // check if link is external
        if (link.startsWith("http")) {
            linkElement = <a href={link} className={"stretched-link text-reset text-decoration-none"}><Card.Title style={cardTitleStyle}>{title}</Card.Title></a>
        } else {
            linkElement = <Link href={link} className={"stretched-link text-reset text-decoration-none"}><Card.Title style={cardTitleStyle}>{title}</Card.Title></Link>
        }
    }

    const cardContent = (<>
        {link ? linkElement : <Card.Title style={cardTitleStyle}>{title}</Card.Title> }
        {descriptionContent}
        <Card.Text>
            <div className={"d-flex flex-row justify-content-between text-muted"}>
            <small>{(new Date(date)).toDateString()}</small>
            <i className={`bi-${icon}`}></i>
            </div>
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

    return (<Card className={`shadow`}>
        {image && <Card.Img src={image} alt={title} variant={"top"} />}
        <Card.Body>
            {cardContent}
        </Card.Body>
    </Card>)
}