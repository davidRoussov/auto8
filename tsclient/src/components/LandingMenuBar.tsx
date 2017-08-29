import React, { Component  } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
var Radium = require('radium');

@Radium
class LandingMenuBar extends Component {
  render() {
    return (
      <Navbar style={[style.navbar]}>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Autom8</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#">About</NavItem>
          <NavItem eventKey={2} href="#">Pricing</NavItem>
          <NavItem eventKey={3} href="#">Blog</NavItem>
          <NavItem eventKey={3} href="#">Contact</NavItem>
        </Nav>
        <Nav pullRight={true}>
          <NavItem eventKey={4} href="#">Sign up</NavItem>
          <NavItem eventKey={5} href="/login">Login</NavItem>
        </Nav>
      </Navbar>
    );
  }
}

const style = {
  navbar: {
    position: 'absolute',
    width: '100%',
    borderRadius: '0px'
  }
};

export default LandingMenuBar;