import {Content} from "@mmccalldev/lib/Content";

export default function ContentCard({image, title, description, link, date}: Content) {
    return (
        <div className={"card"}>
            {image && <img src={image} className={"card-img-top"} alt={title}/>}
            <div className={"card-body"}>
                <a href={link} className={"stretched-link text-decoration-none"}><h5 className={"card-title"}>{title}</h5></a>
                {description && <p className={"card-text"}>{description}</p>}
                <small className={"text-body-secondary"}>{date}</small>
            </div>
        </div>
    )
}