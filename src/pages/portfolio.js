import React from "react";
import "./portfolio.css";
import Jumbotron from "../components/Jumbotron";
import { Form, FormGroup, Label, Input, } from 'reactstrap';
import ModalExample from "../components/Modal/index"

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
        
        <Jumbotron className="jumbo-background">
        <img className="logo" src="/projectimage.jpg" alt="project1"/>
        <img className="logo" src="/maxresdefault.jpg" alt="trivia"/>
        <img className="logo" src="/free-easy-gifs.gif" alt="gify"/>
        <img className="logo" src="/banner_big_tpg.jpg" alt="banner"/>
        <img className="logo" src="/project2.jpg" alt="project2"/>
        <img className="logo" src="/unit-4-game.jpg" alt="unit-4-game"/>
        <img className="logo" src="/clickygame.jpg" alt="clickygame"/>
        <img className="logo" src="/project3.jpg" alt="project3"/>
        
        </Jumbotron>
      </div>
    );
  }
}
export default Portfolio;