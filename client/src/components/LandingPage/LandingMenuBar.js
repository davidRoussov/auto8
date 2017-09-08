import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class LandingMenuBar extends Component {
  render() {
    const style = {
      navbar: {
        position: 'absolute',
        width: '100%',
        borderRadius: '0px'
      }
    };

    return (
      <Navbar style={style.navbar}>
        <Navbar.Header>
          <Navbar.Brand>
            <a>Civin</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#">About</NavItem>
          <NavItem eventKey={2} href="/pricing">Pricing</NavItem>
          <NavItem eventKey={3} href="/blog">Blog</NavItem>
          <NavItem eventKey={4} href="/contact">Contact</NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={5} href="/signup">Sign up</NavItem>
          <NavItem eventKey={6} href="/login">Login</NavItem>
        </Nav>
      </Navbar>
    )
  }
}

export default LandingMenuBar;