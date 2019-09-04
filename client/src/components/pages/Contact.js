import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Row, Button, Form } from 'react-bootstrap';

import './Contact.css';

class Contact extends Component {

    render() {
        return (
            <div>
                <Container>
                    <div className="contact-holder">
                        <Row>
                            <Col md={3}>
                                <div>
                                    <h4>Can we answer your question?</h4>
                                </div>
                                <Link to="/faqs">
                                    <Button variant="dark" size="lg" block>FAQs</Button>
                                </Link>
                            </Col>
                            <Col sm={12} md={6}>
                                <div className="contact-body">
                                    <div>
                                        <h4>Contact Us</h4>
                                    </div>
                                    <div>
                                        <h5>Phone</h5>
                                        <p>Call us on 01234567890</p>
                                        <h5>Email</h5>
                                        <p>Email us at customerservice@goldenshoe.co.uk</p>
                                        <h5>Twitter</h5>
                                        <p>Contact us on Twitter using the handle @goldenshoe</p>
                                        <h5>Live Chat</h5>
                                        <p>Available soon</p>
                                    </div>
                                    <div>
                                        <h4>Customer Service Form</h4>
                                    </div>
                                    <div>
                                        <Form>
                                            <Form.Group as={Row} controlId="Name">
                                                <Form.Label column sm={3}>
                                                    <div className="required">
                                                        Full Name
                                                </div>
                                                </Form.Label>
                                                <Col sm={9}>
                                                    <Form.Control type="text" placeholder="Name" />
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={Row} controlId="Email">
                                                <Form.Label column sm={3}>
                                                    <div className="required">
                                                        Email
                                                </div>
                                                </Form.Label>
                                                <Col sm={9}>
                                                    <Form.Control type="email" placeholder="Email" />
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={Row} controlId="Subject">
                                                <Form.Label column sm={3}>
                                                    <div className="required">
                                                        Subject
                                                </div>
                                                </Form.Label>
                                                <Col sm={9}>
                                                    <Form.Control type="text" placeholder="Subject" />
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={Row} controlId="Description">
                                                <Form.Label column sm={3}>
                                                    <div className="required">
                                                        Description
                                                </div>
                                                </Form.Label>
                                                <Col sm={9}>
                                                    <Form.Control as="textarea" rows="3" type="text" placeholder="Description" />
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={Row} controlId="Order">
                                                <Form.Label column sm={3}>
                                                    Order Number
                                            </Form.Label>
                                                <Col sm={9}>
                                                    <Form.Control type="text" placeholder="Order Number" />
                                                </Col>
                                            </Form.Group>

                                            <Form.Group as={Row}>
                                                <Col sm={{ span: 9, offset: 3 }}>
                                                    <Button variant="dark" block type="submit">Submit</Button>
                                                </Col>
                                            </Form.Group>
                                        </Form>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        );
    }
}

export default Contact;