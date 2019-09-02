import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

// The home page for the website, will consist of a jumbotron

function Home() {
  return (
    // Creating a container to hold components
    <Container>
        <Jumbotron>
            <h2>Welcome</h2>
            <p>This is a test, hello world</p>
            <Link to="/products">
                <Button variant="dark">Products</Button>
            </Link>
        </Jumbotron>
    </Container>
  );
}

export default Home;