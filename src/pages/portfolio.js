import React from "react";
import "./portfolio.css";
import ItemJumbotron from "../components/ItemJumbotron";
import { Form, FormGroup, Label, Input, } from 'reactstrap';
import ModalExample from "../components/Modal/index"

function searchingFor(term) {
    return function(x){
      return x.name.toLowerCase().includes(term.toLowerCase()) || x.postedBy.toLowerCase().includes(term.toLowerCase()) || false;
    }
  }

class Portfolio extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    items: [],
    term: "",
    idClicked: "",
    itemClicked: "",
    modal: false,
  }
  this.searchHandler = this.searchHandler.bind(this);
};

  searchHandler(event){
      this.setState({ term : event.target.value })
      console.log(event.target.value);
  };

handleClicked = id => {
    // console.log("You click id " + id);
    this.setState({idClicked: id});
    for (let i = 0; i < this.state.items.length; i++){
      if(this.state.items[i]._id === id){
        this.setState({itemClicked: this.state.items[i]});
        console.log(this.state.itemClicked);
      }
    }
    this.setState({
      modal: !this.state.modal
    });
    // console.log(this.state.modal)
};

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const {term, items} = this.state;
    return (
      <div className="main">

        <div className="heading">
          <h3 className="heading-text">Pedro G Murillo</h3>
        </div>
      
        <ModalExample items={this.state.items} item={this.state.itemClicked} sendEmailToHome={this.handleDataFromModal} handleClicked={this.handleClicked} newModal={this.state.modal} newToggle={this.toggle}></ModalExample>
        
        <ItemJumbotron className="jumbo-background">
        <Label className="text1" for="exampleSearch">About Me</Label>
        <img className="logo" src="/box3.png" alt="logo"/>
        <p className="statement">Front-End Web Developer with customer service background that makes for great communications skills and outstanding teamwork abilities. Recently earned a certificate in Full Stack Development from the ,University of Arizona, with newly developed skills in JavaScript, CSS, React.js, and responsive web design. Capable of critical thinking, original problem solving skills and multi-task. My objective on each project is to produce an experience that can be fun for anyone interacting with my work. On my last project, I worked on the design of a website made with React.js and using mainly CSS for the visuals. Excited to learn new languages and tools that will help in the development of a long and fun carrier. Fluent and capable of writing in both english and spanish.</p>
        </ItemJumbotron>
      </div>
    );
  }
}
export default Portfolio;