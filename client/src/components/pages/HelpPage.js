import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Accordion, Card, Button } from 'react-bootstrap';

import './HelpPage.css';

class HelpPage extends Component {
    render() {
        return (
            <div>
                <div className="mini-header">
                    <h4>How can we help?</h4>
                    <h2>Find answers here</h2>
                </div>
                <Container>
                    <Col xs={12} className="faq-body">
                        <div className="faq-heading">
                            <h3>Frequently Asked Questions</h3>
                        </div>
                        <div className="accordion-body">
                            <Accordion>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="0">
                                        How do I return/exchange my order?
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida in fermentum et sollicitudin ac. Nunc sed id semper risus. Commodo odio aenean sed adipiscing diam donec adipiscing tristique risus. Vel turpis nunc eget lorem dolor sed viverra ipsum.</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="1">
                                        Can I change or cancel my order?
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida in fermentum et sollicitudin ac. Nunc sed id semper risus. Commodo odio aenean sed adipiscing diam donec adipiscing tristique risus. Vel turpis nunc eget lorem dolor sed viverra ipsum.</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="2">
                                        Can I track my order?
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="2">
                                        <Card.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida in fermentum et sollicitudin ac. Nunc sed id semper risus. Commodo odio aenean sed adipiscing diam donec adipiscing tristique risus. Vel turpis nunc eget lorem dolor sed viverra ipsum.</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="3">
                                        How long will my order take to arrive?
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="3">
                                        <Card.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida in fermentum et sollicitudin ac. Nunc sed id semper risus. Commodo odio aenean sed adipiscing diam donec adipiscing tristique risus. Vel turpis nunc eget lorem dolor sed viverra ipsum.</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="4">
                                        How long will it take to get my refund?
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="4">
                                        <Card.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida in fermentum et sollicitudin ac. Nunc sed id semper risus. Commodo odio aenean sed adipiscing diam donec adipiscing tristique risus. Vel turpis nunc eget lorem dolor sed viverra ipsum.</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="5">
                                        What should I do if my order arrived faulty or damaged?
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="5">
                                        <Card.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida in fermentum et sollicitudin ac. Nunc sed id semper risus. Commodo odio aenean sed adipiscing diam donec adipiscing tristique risus. Vel turpis nunc eget lorem dolor sed viverra ipsum.</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="6">
                                        What should I do if I've received the wrong item?
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="6">
                                        <Card.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida in fermentum et sollicitudin ac. Nunc sed id semper risus. Commodo odio aenean sed adipiscing diam donec adipiscing tristique risus. Vel turpis nunc eget lorem dolor sed viverra ipsum.</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </div>
                    </Col>
                </Container>
                <div className="mini-footer">
                    <h4>Do you still need help?</h4>
                    <h2>Get into contact with us!</h2>
                    <Link to="/contact">
                        <Button variant="dark" size="lg">Contact Page</Button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default HelpPage;