import "./Hero.css"
import PhotoGrid from "../images/photo_grid.png"

export default function Hero(){
    return(
    <section className="hero">
        <img src={PhotoGrid} className="hero--photo" alt="photogrid"/>
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
    </section>
)}