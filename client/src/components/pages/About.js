import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import './About.css';

class About extends Component {
    render() {
        return (
            <div>
                <div className="about-header">
                    <h1>About Us</h1>
                </div>
                <Container>
                    <Row>
                        <Col sm={{ span: 6, offset: 3 }}>
                            <div className="heading">
                                <h1>We hold a great passion for shoes...</h1>
                                <div className="about-intro">
                                    <p>At Golden Shoe, our passion is to provide only the highest quality shoes to our wonderful customers. For many years we have been around, seeking to offer high quality shoes for affordable prices and our goal is to revolutionise the shoe industry.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={3}>
                            <div className="heading">
                                <h2>Our Story</h2>
                            </div>
                        </Col>
                        <Col sm={12} md={6}>
                            <div className="about-intro">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default About;