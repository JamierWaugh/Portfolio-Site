import '../Universal/Main.css';
import "../Universal/Control.css"
import "../Universal/Cards.js";
import "./ContactCard.css";
import Card from "../Universal/Cards.js";
import ImgCard from "../Universal/imgCard.js";
import ImgLink from "../Universal/imgLink.js";
import gitLogo from "../assets/github-mark-white.png"
import inLogo from "../assets/In-White.png"
import TextLink from './textLink.js';
import {NavLink} from "react-router-dom";

function Contact() {
    return (
        <div className = "Page">
            <div className = "control">
                <NavLink to ="/" activeclassname="active">Home</NavLink>
                <NavLink to="/Portfolio" activeclassname="active" >Portfolio</NavLink>
                <NavLink to =  "/Contact" activeclassname="active">Contact</NavLink>
            </div>
            <div className = "containerC">
                <div className = "boxC">
                    <Card 
                        title = ""
                        content = ""
                    />
                </div>

                <div className = "buttonClass">
                    <TextLink
                        email = "jamierwaugh@gmail.com"
                    />
                </div>

                <div className = "centralC">
                    <ImgLink
                       refer = "https://github.com/JamierWaugh"
                       source = {gitLogo} 
                       width = "50px"
                       height = "50px"
                       alt = "Link to Github account"
                       title = "Github Profile"
                       main = "Find more of my repositories"
                    />
                </div>

                <div className = "centralC">
                    <ImgLink
                        refer = "https://linkedin.com/in/jamierwaugh"
                        source = {inLogo}
                        width = "60px"
                        height = "60px"
                        alt = "Link to LinkedIn account"
                        title = "LinkedIn Profile"
                        main = "Feel free to reach out for work"
                    />
                </div>

                
            </div>
        </div>
    )
}
    

export default Contact;