import React from "react";
import "./portfolio.css";
import Jumbotron from "../components/Jumbotron";



class Portfolio extends React.Component {
  render() {
    return (
      <div className="main">

        <div className="heading">
          <h3 className="heading-text">Pedro G Murillo</h3>
        </div>
      
        
        <Jumbotron className="jumbo-background">

        <div className="div1">
        <br></br>
        <a href="https://gab-chan.github.io/Project-1/"><img className="logo" src="/projectimage.jpg" alt="project1"/>
        </a>
        <a href="https://github.com/Gab-chan/Project-1"><p className="project1">Project-1</p></a>
        </div>


        <br></br>
        <div className="div2">
        <a href="https://gab-chan.github.io/TriviaGame/">
        <img className="logo" src="/maxresdefault.jpg" alt="trivia"/>
        </a>
        <a href="https://github.com/Gab-chan/TriviaGame"> <p className="TriviaGame">TriviaGame</p></a>
        </div>


        <br></br>
        <div className="div3">
        <a href="https://gab-chan.github.io/Psychic-Game/">
        <img className="logo" src="/banner_big_tpg.jpg" alt="banner"/>
        </a>
        <a href="https://github.com/Gab-chan/Psychic-Game"> <p className="psychic">PsychicGame</p></a>
        </div>


        <br></br>
        <div className="div4">
        <a href="https://gab-chan.github.io/Unit-4-Game/">
        <img className="logo" src="/unit-4-game.jpg" alt="unit-4-game"/>
        </a>
        <a href="https://github.com/Gab-chan/Unit-4-Game"> <p className="unit4">Unit-4-Game</p></a>
        </div>


        <br></br>
        <div className="div5">
        <a href="https://gab-chan.github.io/GifTastic/">
        <img className="logo" src="/free-easy-gifs.gif" alt="gify"/>
        </a>
        <a href="https://github.com/Gab-chan/GifTastic"> <p className="gif">GifTastic</p></a>
        </div>


        <br></br>
        <div className="div6">
        <a href="https://rocky-earth-06157.herokuapp.com/">
        <img className="logo" src="/project2.jpg" alt="project2"/>
        </a>
        <a href="https://github.com/KPJBuchik/Project2"> <p className="project2">Project-2</p></a>
        </div>


        <br></br>
        <div className="div7">
        <a href="https://morning-bayou-09465.herokuapp.com/">
        <img className="logo" src="/clickygame.jpg" alt="clickygame"/>
        </a>
        <a href="https://github.com/Gab-chan/ClickyGame"> <p className="clicky">ClickyGame</p></a>
        </div>

        
        <br></br>
        <div className="div8">
        <a href="https://protected-shelf-46012.herokuapp.com">
        <img className="logo" src="/project3.jpg" alt="project3"/>
        </a>
        <a href="https://github.com/tannerbodrero/project-3"> <p className="project3">Project-3</p></a>
        </div>
        
        </Jumbotron>

        <h3 className="note">Note: Please press the images to watch the launch projects and the text to see the GitHub repo's.</h3>
      </div>
    );
  }
}
export default Portfolio;