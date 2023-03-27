import {Content} from "@mmccalldev/lib/Content";

export default function ContentCard({image, title, description, link, date}: Content) {
    return (
        <div className={"card"}>
            <img src={image} alt={title} className={"card-img-top"}/>
            <div className={"card-body"}>
                <a href={link} className={"stretched-link text-decoration-none"}><h5 className={"card-title"}>{title}</h5></a>
                <p className={"card-text"}>{description}</p>
            </div>
            <div className={"card-footer"}>
                <small className={"text-body-secondary"}>{date}</small>
            </div>
        </div>
    )
}