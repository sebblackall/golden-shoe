import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Carousel, Container, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

// The home page for the website, will consist of a jumbotron

class Home extends Component {
    render() {
        return (
            // Creating a container to hold components
            <Container>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="assets/carousel-image-1.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h2>Experience greatness..</h2>
                            <div id="carousel-button">
                                <Link to="/products">
                                    <Button variant="light">Shop now</Button>
                                </Link>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="assets/carousel-image-2.jpg"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h2>High quality..</h2>
                            <div id="carousel-button">
                                <Link to="/products">
                                    <Button variant="light">Shop now</Button>
                                </Link>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="assets/carousel-image-3.jpg"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h2>Great deals..</h2>
                            <div id="carousel-button">
                                <Link to="/promotions">
                                    <Button variant="light">Learn more</Button>
                                </Link>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <Row className="show-grid text-center">
                    <Col xs={12} sm={4} className="product-body">
                        <Link to="/products">
                            <Button variant="link"><Image src="assets/115692.png" className="product-icon"></Image></Button>
                        </Link>
                        <h3>Men's Footwear</h3>
                        <div className="product-button">
                            <Link to="/products">
                                <Button variant="dark" size="lg">Shop now</Button>
                            </Link>
                        </div>
                    </Col>
                    <Col xs={6} sm={4} className="product-body">
                        <Link to="/products">
                            <Button variant="link"><Image src="assets/111998.png" className="product-icon"></Image></Button>
                        </Link>
                        <h3>Women's Footwear</h3>
                        <div className="product-button">
                            <Link to="/products">
                                <Button variant="dark" size="lg">Shop now</Button>
                            </Link>
                        </div>
                    </Col>
                    <Col xs={6} sm={4} className="product-body">
                        <Link to="/products">
                            <Button variant="link"><Image src="assets/77274.png" className="product-icon"></Image></Button>
                        </Link>
                        <h3>Child's Footwear</h3>
                        <div className="product-button">
                            <Link to="/products">
                                <Button variant="dark" size="lg">Shop now</Button>
                            </Link>
                        </div>
                    </Col>
                </Row>
                <Row className="show-grid text-center">
                    <Col xs={12} sm={4} className="service-body">
                        <Image src="assets/quality.png" className="service-icon"></Image>
                        <h3>Quality Assured</h3>
                        <p>All shoes sold in-store or delivered will be in excellent quality.</p>
                    </Col>
                    <Col xs={12} sm={4} className="service-body">
                        <Image src="assets/shipping.png" className="service-icon"></Image>
                        <h3>Free Delivery</h3>
                        <p>All products sold include free standard delivery. The estimated time of standard delivery is one week.</p>
                    </Col>
                    <Col xs={12} sm={4} className="service-body">
                        <Image src="assets/gift.png" className="service-icon"></Image>
                        <h3>Gift Wrapping</h3>
                        <p>All shoes have the option to be gift wrapped at checkout.</p>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;