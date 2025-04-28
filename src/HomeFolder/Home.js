import '../Universal/Main.css';
import "../Universal/Control.css"
import "../Universal/Cards.js";
import "../Universal/imgCard.js";
import "../Universal/textCard.js";
import "../Universal/longTextCard.js";
import "./repeatImgCard.js";
import "./Card.css";
import RepeatImgCard from "./repeatImgCard.js"
import LongTextCard from '../Universal/longTextCard.js';
import TextCard from "../Universal/textCard.js";
import ImgCard from "../Universal/imgCard.js";
import Card from '../Universal/Cards.js';
import gitImg from "../assets/mygithub.png";
import sand from "../assets/SandSimIMG.png";
import cssimg from "../assets/css-logo.png";
import pythonimg from "../assets/python-logo.png";
import reactimg from "../assets/reactpng.png";
import htmlimg from "../assets/htmlpng.png";
import jsimg from "../assets/javascript-logo.png";
import  {NavLink} from "react-router-dom"


function MainPage() {
  return (
    <div className = "Page">

        <div className = "control">
          <NavLink to ="/" activeclassname="active">Home</NavLink> {/* Would like to change url to start on /Home which would fix "active" issue with just / */}
          <NavLink to="/Portfolio" activeclassname="active" >Portfolio</NavLink>
          <NavLink to =  "/Contact" activeclassname="active">Contact</NavLink>
        </div>
                {/* Mail link <a href = "mailto:jamierwaugh@gmail.com"><img src= {google} alt= "Google link"></img></a>*/}
      <div className="container">
        <div className = "textStyle"> 
          <TextCard
          title = "Who am I?"
          content = "Hello! My name is Jamie Waugh, a student at Newcastle University studying Computer Science. I am passionate about Software Development and always looking for new challenges. Feel free to get in touch."
          />
        </div>
        <div className = "image">
          <ImgCard 
          linkTo = "/Portfolio-Site/Portfolio"
          source = {sand}
          width = {"150px"}
          height = {"150px"}
          altText = {"Sand Simulation"}
          />
        </div>
        <div className = "box">
          <Card
          title = "Student & Full Stack Developer"
          />
        </div>
        <div className = "central">
          <Card
          title = {<img src={gitImg}  width = "50px" height = "50px" ></img>}
          content = "Jamie Waugh"
          />
        </div>
        <div className = "box">
          <Card 
          title='"From one thing, know ten thousand things"'
          content=""
          />
        </div>
        <div className = "box">
          <RepeatImgCard
          title = "Technologies I have worked with:"
          img1={pythonimg}
          alt1={"Image of Python logo"}
          img2={jsimg}
          alt2={"Image of Javascript logo"}
          img3={reactimg}
          alt3={"Image of React logo"}
          img4={cssimg}
          alt4={"Image of CSS logo"}
          img5={htmlimg}
          alt5={"Image of HTML logo"}
          />
        </div>
        <div className = "box">
          <LongTextCard
          maintitle = "Education"
          sub1="A level"
          date1="(2022 - 2024)"
          content1="Business: A*, Computer Science: A, Maths: A ."
          sub2="Computer Science Degree "
          date2="(2024 - Present)"
          content2="I am currently in my first year of study at Newcastle University."
          sub3=""
          date3 = ""
          content3=""
          />
        </div>

        
        
        
      </div>
    </div>

    
  );
}

export default MainPage;


