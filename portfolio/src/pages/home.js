import React from "react";
import "./home.css";
import ItemJumbotron from "../components/ItemJumbotron";
import { Form, FormGroup, Label, Input, } from 'reactstrap';
import ModalExample from "../components/Modal/index"

function searchingFor(term) {
    return function(x){
      return x.name.toLowerCase().includes(term.toLowerCase()) || x.postedBy.toLowerCase().includes(term.toLowerCase()) || false;
    }
  }

class Home extends React.Component {
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
      <div>

        <h3 className="heading">
          Here are the most recent listings of tradeable items!
        </h3>
        <Form className="searchbar-wrap">
        <FormGroup>
          <Label className="text1" for="exampleSearch">Looking for something in specific?</Label>
          <Input
            className="search-bar"
            type="text"
            name="search"
            id="exampleSearch"
            placeholder="Search by item name or username"
            onChange={this.searchHandler}
            value={term}
          />
        </FormGroup>
      </Form>
        <ModalExample items={this.state.items} item={this.state.itemClicked} sendEmailToHome={this.handleDataFromModal} handleClicked={this.handleClicked} newModal={this.state.modal} newToggle={this.toggle}></ModalExample>
        
        <ItemJumbotron className="jumbo-background">
          <h1 className="preview-text"> Click An Item For More Info </h1> 
        </ItemJumbotron>
      </div>
    );
  }
}
export default Home;
