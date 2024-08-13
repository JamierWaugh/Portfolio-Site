import './Home.css';
import "./Control.css"
import "./Cards.js";
import Card from './Cards.js';
import google from "./assets/googlepng.png"
import gitImg from "./assets/mygithub.png"

function MainPage() {
  return (
    <div className = "Page">

        <div className = "control">
            <a className = "active" href = "./Home.js">Home</a>
            <a href = "#">Portfolio</a>
            <a href = "#">Contact</a>
        </div>
        <div className = "card">
            <h1> Jamie Waugh</h1>
            <h2> Software Development <br></br> Portfolio</h2>
        </div>
        <div className = "contact"> {/*Add gradient fade around contact and make it a box similar to current design to contrast grayscale*/}
              <p> contact me</p>
              <a href = "mailto:jamierwaugh@gmail.com"><img src= {google} alt= "Google link"></img></a>
        </div>

        
      <div className="container">
        <div className = "grow"> 
          <Card
          title = "What do I know?"
          content = "JS,CSS, HTML, React, Python"
          />
        </div>
        <div className = "box">
          <Card
          title = "Jamie Waugh"
          content="Github"
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
          title=""
          content="I love my dog"
          />
        </div>
        <div className = "central">
          <Card
          title = {<img src={gitImg}  width = "50" height = "50" ></img>}
          content = "Jamie Waugh"
          />
        </div>
      </div>
    </div>

    
  );
}

export default MainPage;


