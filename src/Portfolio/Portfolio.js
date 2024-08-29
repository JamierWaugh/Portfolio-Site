import '../Universal/Main.css';
import "../Universal/Control.css"
import "../Universal/Cards.js";
import {NavLink} from "react-router-dom";

function Portfolio() {
    return (
        <div className = "Page">
            <div className = "control">
                <NavLink to ="/" activeclassname="active">Home</NavLink> {/* Individual link which changes the url, used for url */}
                <NavLink to="/Portfolio" activeclassname="active" >Portfolio</NavLink>
                <NavLink to =  "/Contact" activeclassname="active">Contact</NavLink>
            </div>
            <div className = "Container">

            </div>
        </div>
    )
}
    

export default Portfolio;