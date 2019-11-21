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

        <div className="desk">
       <p>GameHunt is a website that is meant to allow users to search games, find the most popular streamers of those games and be given a like to purchase them on the best buy store.<br></br> Technologies: HTML/CSS, BootStrap, JavaScript, JQuery, AJAX and VS CODE. </p> 
        </div>


        <br></br>
        <div className="div2">
        <a href="https://gab-chan.github.io/TriviaGame/">
        <img className="logo" src="/maxresdefault.jpg" alt="trivia"/>
        </a>
        <a href="https://github.com/Gab-chan/TriviaGame"> <p className="TriviaGame">TriviaGame</p></a>
        </div>

        <div className="desk">
       <p>Anime trivia is a quiz which displays multiple choice questions about different animes. After answering the questions the score will display, but you need to know that there is a timer, if you do not finished before the time is up then you will failed the quiz.<br></br>Technologies: HTML/CSS, JavaScript, JQuery, BootStrap and VS CODE.</p> 
        </div>


        <br></br>
        <div className="div4">
        <a href="https://gab-chan.github.io/Unit-4-Game/">
        <img className="logo" src="/unit-4-game.jpg" alt="unit-4-game"/>
        </a>
        <a href="https://github.com/Gab-chan/Unit-4-Game"> <p className="unit4">Unit-4-Game</p></a>
        </div>

        <div className="desk">
        <p>Magical girl collector is a unit-4-game that consists of trying to get to the target score by clicking on the magical girls images, but if the player score goes over the target score then the game reset and the player loses, otherwise the player gets a win. Each magical girl has a different value which is unknown to the player and the value changes each time the game resets.<br></br>Technologies: HTML/CSS, JavaScript, JQuery, BootStrap and VS CODE.</p> 
        </div>


        <br></br>
        <div className="div5">
        <a href="https://gab-chan.github.io/GifTastic/">
        <img className="logo" src="/free-easy-gifs.gif" alt="gify"/>
        </a>
        <a href="https://github.com/Gab-chan/GifTastic"> <p className="gif">GifTastic</p></a>
        </div>

        <div className="desk">
        <p>GifTastic is a website that uses JQuery and AJAX calls to get anime images from giphy.com and displays them on the GifTastic website. GifTastic has already buttons with the different animes you can click to get images, but you can add any anime you want via the text box that is already on the site.<br></br> Technologies: HTML/CSS, BootStrap, JavaScript, JQuery, AJAX and VS CODE. </p> 
        </div>


        <br></br>
        <div className="div6">
        <a href="https://rocky-earth-06157.herokuapp.com/">
        <img className="logo" src="/project2.jpg" alt="project2"/>
        </a>
        <a href="https://github.com/KPJBuchik/Project2"> <p className="project2">Project-2</p></a>
        </div>

        <div className="desk">
        <p>An interactive website for a sushi restaurant that allows multiple users to place orders that are stored in a MySQL database. The website will also feature a manager view where the manager can view all user orders and the order queue.<br></br>Technologies: HTML/CSS, JavaScript, JQuery, BootStrap, Node.JS, NPM packages, MySQL database, Passport Authentication and VS CODE.</p> 
        </div>


        <br></br>
        <div className="div7">
        <a href="https://morning-bayou-09465.herokuapp.com/">
        <img className="logo" src="/clickygame.jpg" alt="clickygame"/>
        </a>
        <a href="https://github.com/Gab-chan/ClickyGame"> <p className="clicky">ClickyGame</p></a>
        </div>

        <div className="desk">
        <p>My hero clicky game is a game in which to score the player needs to click on a different character every time. If the player manages to click all the character without failing then he scores a win, but if he fails he scores a lost. The game keeps going even if the player scores a win or a lost, it only resets when the page is refreshed.<br></br>Technologies: HTML/CSS, JavaScript, React.JS, BootStrap, Node.JS, NPM packages, and VS CODE.</p> 
        </div>


        <br></br>
        <div className="div8">
        <a href="https://protected-shelf-46012.herokuapp.com">
        <img className="logo" src="/project3.jpg" alt="project3"/>
        </a>
        <a href="https://github.com/tannerbodrero/project-3"> <p className="project3">Project-3</p></a>
        </div>

        <div className="desk">
        <p>A mobile-centric app designed to supplement a community organized barter/swap event. This will allow the member to post items they want to trade, view other available items, and provide location information for the meetup.<br></br>Technologies: HTML/CSS, JavaScript, React.JS, BootStrap, ReactStrap, Node.JS, NPM packages, MongoDB database, Passport Authentication and VS CODE.</p> 
        </div>

        
        </Jumbotron>

        <h3 className="note">Note: Please press the images to watch the launch projects and the text to see the GitHub repo's.</h3>
      </div>
    );
  }
}
export default Portfolio;