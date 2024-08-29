import './Home.css';
import "./Control.css"
import "./Cards.js";
import {NavLink} from "react-router-dom";

function Portfolio() {
    return (
        <div className = "Page">
            <div className = "control">
                <NavLink to ="/Home" activeclassname="active">Home</NavLink> {/* Individual link which changes the url, used for url */}
                <NavLink to="/Portfolio" activeclassname="active" >Portfolio</NavLink>
                <NavLink to =  "/Contact" activeclassname="active">Contact</NavLink>
            </div>
        </div>
    )
}
    

export default Portfolio;