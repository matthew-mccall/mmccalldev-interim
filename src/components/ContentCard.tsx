import {Content} from "@mmccalldev/lib/Content";
import React from "react";
import {AcrylicMaterial} from "@mmccalldev/components/AcrylicMaterial";

export default function ContentCard({image, title, description, link, date}: Content) {
    return (
        <div className={"card border-0 shadow bg-body bg-opacity-75"} style={AcrylicMaterial}>
            {image && <img src={image} className={"card-img-top"} alt={title}/>}
            <div className={"card-body"}>
                <a href={link} className={"stretched-link text-decoration-none"}><h5 className={"card-title"}>{title}</h5></a>
                {description && <p className={"card-text text-truncate"}>{description}</p>}
                <p className={"card-text"}><small className={"text-muted"}>{(new Date(date)).toDateString()}</small></p>
            </div>
        </div>
    )
}