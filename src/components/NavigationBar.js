import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

import './NavigationBar.css'

function NavigationBar() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" bg="light">
        <Navbar.Brand
          as={Link} to="/">Golden Shoe
        </Navbar.Brand>
      <Navbar.Toggle/>
      <Navbar.Collapse>
        <Nav className="mr-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/about">About</Nav.Link>
        <Nav.Link as={Link} to="/products">Products</Nav.Link>
        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link as={Link} to="/contact">My Account</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;