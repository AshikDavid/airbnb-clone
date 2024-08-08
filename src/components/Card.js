import "./Card.css"
import Star from "../images/Star.png"
export default function Card(props) {
    console.log(props.img)
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
   
    let imagePath;
    try {
        imagePath = require(`../images/${props.img}`);
    } catch (err) {
        console.error("Image not found:", err);
        imagePath = null; // You can set a fallback image here if needed
    }

    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            {imagePath && <img src={imagePath} className="card--image" alt="Card" />}
            <div className="card--stats">
                <img src={Star} className="card--star" alt="star" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}