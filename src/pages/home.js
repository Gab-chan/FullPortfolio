import React from "react";
import "./home.css";
import ItemJumbotron from "../components/ItemJumbotron";
import { Form, FormGroup, Label, Input, } from 'reactstrap';

class Home extends React.Component {

  render() {
    return (
      <div className="main">

        <div className="heading">
          <h3 className="heading-text">Pedro G Murillo</h3>
        </div>
        
        <ItemJumbotron className="jumbo-background">
        <Label className="text1" for="exampleSearch">About Me</Label>
        <img className="logo" src="/box3.png" alt="logo"/>
        <p className="statement">Front-End Web Developer with customer service background that makes for great communications skills and outstanding teamwork abilities. Recently earned a certificate in Full Stack Development from the ,University of Arizona, with newly developed skills in JavaScript, CSS, React.js, and responsive web design. Capable of critical thinking, original problem solving skills and multi-task. My objective on each project is to produce an experience that can be fun for anyone interacting with my work. On my last project, I worked on the design of a website made with React.js and using mainly CSS for the visuals. Excited to learn new languages and tools that will help in the development of a long and fun carrier. Fluent and capable of writing in both english and spanish.</p>
        </ItemJumbotron>
      </div>
    );
  }
}
export default Home;
