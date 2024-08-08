import "./Navbar.css"
import  Logo from "../images/airbnb.png"

export default function Navbar(){
    return(
        <nav className="nav">
            <img src={Logo} className="nav--logo" alt="logo"/>
        </nav>
    )
}