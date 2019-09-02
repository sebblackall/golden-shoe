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
                <Button variant="dark">Learn more</Button>
            </Link>
        </Jumbotron>
        <Row className="show-grid text-center">
            <Col xs={6} sm={4} className="service-body">
                <Image src="assets/quality.png" className="service-icon"></Image>
                <h3>Quality Assured</h3>
                <p>All shoes sold in-store or delivered will be in excellent quality.</p>
            </Col>
            <Col xs={6} sm={4} className="service-body">
            <Image src="assets/shipping.png" className="service-icon"></Image>
                <h3>Free Delivery</h3>
                <p>All products sold include free standard delivery. The estimated time of standard delivery is one week.</p>
            </Col>
            <Col xs={6} sm={4} className="service-body">
            <Image src="assets/gift.png" className="service-icon"></Image>
                <h3>Gift Wrapping</h3>
                <p>All shoes have the option to be gift wrapped at checkout.</p>
            </Col>
        </Row>
    </Container>
  );
}

export default Home;