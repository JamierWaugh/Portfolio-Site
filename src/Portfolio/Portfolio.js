import '../Universal/Main.css';
import "../Universal/Control.css"
import "../Universal/Cards.js";
import "./PortfolioCard.css";
import Card from "../Universal/Cards.js";
import ImgCard from "../Universal/imgCard.js";
import ImgLink from "../Universal/imgLink.js";
import gitLogo from "../assets/githublogo.png"
import sand from "../assets/SandSimIMG.png";
import checkers from "../assets/Checkerswithpieces.png";
import {NavLink} from "react-router-dom";


function Portfolio() {
    return (
        <div className = "Page">
            <div className = "control">
                <NavLink to ="/" activeclassname="active">Home</NavLink> {/* Individual link which changes the url, used for url */}
                <NavLink to="/Portfolio" activeclassname="active" >Portfolio</NavLink>
                <NavLink to =  "/Contact" activeclassname="active">Contact</NavLink>
            </div>
            <div className = "containerP">
                <div className = "mainImageP">
                    <ImgCard 
                    linkTo = ""
                    width = "310px"
                    height = "335px"
                    source = {sand}
                    altText = "Sand Simulation"
                    />
                </div>

                <div className = "boxP">
                    <Card
                    title = "Sand Physics Simulation"
                    content = "My most recent project - a falling sand physics simulation, works using a large array to simulate each sand positon, the program continually checks below each sand particle and if there is room, it falls into the space in the array below or to the side of it, thus simulating gravity. I initially used a binary approach of 0s and 1s to simulate empty array indexs and indexs containing sand. Howvever, I later changed this to incorporate the multicoloured sand in an attempt to add more life to the project. "
                    />
                </div>

                <div className = "centralP">
                    <ImgLink
                    refer = "https://github.com/JamierWaugh/Sand-Simulation"
                    source = {gitLogo}
                    width = "50px"
                    height = "50px"
                    alt = "Link to sand simulation git repository"
                    />
                </div>

                <div className = "accentP">
                    <Card
                    title=""
                    content=""
                    />
                </div>

                <div className = "mainImageP">
                    <ImgCard 
                    linkTo = ""
                    width = "310px"
                    height = "335px"
                    source = {checkers}
                    altText = "Sand Simulation"
                    />
                </div>

                <div className = "boxP">
                    <Card
                    title = "Checkers AI algorithm"
                    content = "For my first project in sixth form, I developed a Checkers algorithm to accurately predict future board states and play accordingly. This AI relies on the Minimax algorithm to view all future states of the game and evaluate which state is to its advantage - assuming the opposition takes the mathmatically perfect move. This algorithm provides the AI with a preferred position later into the game, helping it to win games. This program scored x/y in the Computer Science A level project section."
                    />
                </div>

                <div className = "centralP">
                <ImgLink
                    refer = "https://github.com/JamierWaugh/NEA-CompSci"
                    source = {gitLogo}
                    width = "50px"
                    height = "50px"
                    alt = "Link to Checkers AI repository"
                    />
                </div>

                <div className = "accentP">
                    <Card
                    title=""
                    content=""
                    />
                </div>
            </div>
        </div>
    )
}
    

export default Portfolio;