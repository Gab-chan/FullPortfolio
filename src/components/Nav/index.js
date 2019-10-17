import React from 'react';
import "./Nav.css"

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="nav-bar">
        <Navbar  light expand="md">
        <NavLink href="/"><img className="logo" src="https://cdn1.iconfinder.com/data/icons/portfolio-an-icon-1/164/4-512.png" alt="logo"/></NavLink>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="nav-link" href="/"> About </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" href="/portfolio"> Portfolio</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  };
};
