import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem } from "react-bootstrap";

 class CustomNavbar extends Component {
  render() {
    return (
      <Navbar default collapseOnSelect>
         <Navbar.Header>
          <Navbar.Brand>
              <Link to ="/">Iheanyi</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
                  <Nav pullRight>
                  <NavItem eventKey = {1}>
                  <Link to ="/">Home</Link>
                  </NavItem>
                   <NavItem eventKey = {2}>
                  <Link to ="/About">About</Link>
                  </NavItem>
                   <NavItem eventKey = {3}>
                  <Link to ="/News">News</Link>
                  </NavItem>
                  </Nav>
                  </Navbar.Collapse>
      </Navbar>
               
    );
  }
}
export default CustomNavbar;

