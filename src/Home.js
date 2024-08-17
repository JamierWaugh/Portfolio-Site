import './Home.css';
import "./Control.css"
import "./Cards.js";
import "./imgCard.js";
import ImgCard from "./imgCard.js";
import Card from './Cards.js';
import google from "./assets/googlepng.png"
import gitImg from "./assets/mygithub.png"
import sand from "./assets/SandSimIMG.png"

function MainPage() {
  return (
    <div className = "Page">

        <div className = "control">
            <a className = "active" href = "./Home.js">Home</a>
            <a href = "#">Portfolio</a>
            <a href = "#">Contact</a>
        </div>
                {/* Mail link <a href = "mailto:jamierwaugh@gmail.com"><img src= {google} alt= "Google link"></img></a>*/}

        
      <div className="container">
        <div className = "textStyle"> 
          <Card
          title = "What do I know?"
          content = "JS,CSS, HTML, React, Python"
          />
        </div>
        <div className = "image">
          <ImgCard 
          source = {sand}
          />
        </div>
        <div className = "box">
          <Card
          title = "Student and Full Stack Developer"
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
          title="I love my dog"
          content=""
          />
        </div>
        <div className = "box">
          <Card
          title = "This a test"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          />
        </div>
        <div className = "box">
          <Card
          title = "Education"
          content="A level"
          />
        </div>

        
        
        
      </div>
    </div>

    
  );
}

export default MainPage;


