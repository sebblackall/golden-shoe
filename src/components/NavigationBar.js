import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

function NavigationBar() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
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
        <Nav pullRight>
          <Nav.Link as={Link} to="/contact">My Account</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;