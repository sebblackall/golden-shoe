import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

import './NavigationBar.css'

class NavigationBar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" variant="dark" bg="light">
        <Navbar.Brand
          as={Link} href="/" to="/">Golden Shoe
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} href="/" to="/">Home</Nav.Link>
            <Nav.Link as={Link} href="/" to="/about">About</Nav.Link>
            <Nav.Link as={Link} href="/" to="/products">Products</Nav.Link>
            <Nav.Link as={Link} href="/" to="/promotions">Promotions</Nav.Link>
            <Nav.Link as={Link} href="/" to="/faqs">Help</Nav.Link>
            <Nav.Link as={Link} href="/" to="/contact">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} href="/" to="/contact">My Account</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavigationBar;