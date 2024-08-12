import './Home.css';
import "./Control.css"
import "./Cards.js";
import Card from './Cards.js';
import google from "./assets/googlepng.png"

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
        <Card
        title = "What do I know?"
        content = "JS,CSS, HTML, React, Python"
        />
        <Card
        title = "This a test"
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        />
        <div className = "shorten">
        <Card 
        title=""
        content="I love my dog"
        />
        </div>
      </div>
    </div>

    
  );
}

export default MainPage;


