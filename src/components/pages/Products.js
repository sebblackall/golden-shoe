import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button, Form } from 'react-bootstrap';

import './Products.css';

class Products extends Component {

    componentDidMount() {

        const $ = window.$;

        if ($(window).width() < 767) {
            $('#collapsible').removeClass('show');
            $('#collapsible').addClass('hide');
        } else {
            $('#collapsible').removeClass('hide');
            $('#collapsible').addClass('show');
        }

        $(window).bind('resize load', function() {
            if ($(this).width() < 767) {
                $('#collapsible').removeClass('show');
                $('#collapsible').addClass('hide');
            } else {
                $('#collapsible').removeClass('hide');
                $('#collapsible').addClass('show');
            }
        });
    }

    render() {
        return (
            <Container>
                <Jumbotron>
                    <div className="jumbo-heading">
                        <h5>Exclusive deals available!</h5>
                        <Link to="/promotions">
                            <Button variant="light">Learn more</Button>
                        </Link>
                    </div>
                </Jumbotron>

                <Row>
                    <Col xs={12} sm={12} md={3} lg={3} className="filter-list">
                        <button class="btn btn-dark btn-block" type="button" data-toggle="collapse" data-target="#collapsible" aria-expanded="false" aria-controls="collapsible">
                            Filter
                        </button>

                        <div class="collapse" id="collapsible">
                            <div class="card card-body">
                                <h3>Brand</h3>
                                <Form>
                                    <Form.Check label="Nike" id="brand1" />
                                    <Form.Check label="Adidas" id="brand2" />
                                    <Form.Check label="Converse" id="brand3" />
                                    <Form.Check label="PUMA" id="brand4" />
                                    <Form.Check label="Reebok" id="brand5" />
                                    <Form.Check label="FILA" id="brand6" />
                                </Form>
                                <h3>Size</h3>
                                <Form>
                                    <Form.Check label="1.5" id="Size1.5" />
                                    <Form.Check label="2" id="Size2" />
                                    <Form.Check label="2.5" id="Size2.5" />
                                    <Form.Check label="3" id="Size3" />
                                    <Form.Check label="3.5" id="Size3.5" />
                                    <Form.Check label="4" id="Size4" />
                                    <Form.Check label="4.5" id="Size4.5" />
                                    <Form.Check label="5" id="Size5" />
                                    <Form.Check label="5.5" id="Size5.5" />
                                    <Form.Check label="6" id="Size6" />
                                    <Form.Check label="6.5" id="Size6.5" />
                                    <Form.Check label="7" id="Size7" />
                                    <Form.Check label="7.5" id="Size7.5" />
                                    <Form.Check label="8" id="Size8" />
                                    <Form.Check label="8.5" id="Size8.5" />
                                    <Form.Check label="9" id="Size9" />
                                    <Form.Check label="9.5" id="Size9.5" />
                                    <Form.Check label="10" id="Size10" />
                                    <Form.Check label="10.5" id="Size10.5" />
                                    <Form.Check label="11" id="Size11" />
                                    <Form.Check label="11.5" id="Size11.5" />
                                    <Form.Check label="12" id="Size12" />
                                    <Form.Check label="12.5" id="Size12.5" />
                                    <Form.Check label="13" id="Size13" />
                                    <Form.Check label="14" id="Size14" />
                                    <Form.Check label="15" id="Size15" />
                                </Form>
                                <h3>Colour</h3>
                                <Form>
                                    <Form.Check label="Black" id="black" />
                                    <Form.Check label="White" id="white" />
                                    <Form.Check label="Blue" id="blue" />
                                    <Form.Check label="Grey" id="grey" />
                                    <Form.Check label="Green" id="green" />
                                    <Form.Check label="Red" id="red" />
                                    <Form.Check label="Yellow" id="yellow" />
                                    <Form.Check label="Orange" id="orange" />
                                    <Form.Check label="Pink" id="pink" />
                                </Form>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={9} className="products-section">
                        <Row className="show-grid text-center">
                            <Col xs={6} sm={4} className="products-page-body">
                                <Link to="/products">
                                    <Button variant="link"><Image src="assets/115692.png" className="products-page-icon"></Image></Button>
                                </Link>
                                <div className="name-bar">
                                    <h5>Shoe Name</h5>
                                </div>
                                <h3>£79.99</h3>
                            </Col>
                            <Col xs={6} sm={4} className="products-page-body">
                                <Link to="/products">
                                    <Button variant="link"><Image src="assets/111998.png" className="products-page-icon"></Image></Button>
                                </Link>
                                <div className="name-bar">
                                    <h5>Shoe Name</h5>
                                </div>
                                <h3>£59.99</h3>
                            </Col>
                            <Col xs={6} sm={4} className="products-page-body">
                                <Link to="/products">
                                    <Button variant="link"><Image src="assets/77274.png" className="products-page-icon"></Image></Button>
                                </Link>
                                <div className="name-bar">
                                    <h5>Shoe Name</h5>
                                </div>
                                <h3>£49.99</h3>
                            </Col>
                            <Col xs={6} sm={4} className="products-page-body">
                                <Link to="/products">
                                    <Button variant="link"><Image src="assets/115692.png" className="products-page-icon"></Image></Button>
                                </Link>
                                <div className="name-bar">
                                    <h5>Shoe Name</h5>
                                </div>
                                <h3>£79.99</h3>
                            </Col>
                            <Col xs={6} sm={4} className="products-page-body">
                                <Link to="/products">
                                    <Button variant="link"><Image src="assets/111998.png" className="products-page-icon"></Image></Button>
                                </Link>
                                <div className="name-bar">
                                    <h5>Shoe Name</h5>
                                </div>
                                <h3>£59.99</h3>
                            </Col>
                            <Col xs={6} sm={4} className="products-page-body">
                                <Link to="/products">
                                    <Button variant="link"><Image src="assets/77274.png" className="products-page-icon"></Image></Button>
                                </Link>
                                <div className="name-bar">
                                    <h5>Shoe Name</h5>
                                </div>
                                <h3>£49.99</h3>
                            </Col>
                            <Col xs={6} sm={4} className="products-page-body">
                                <Link to="/products">
                                    <Button variant="link"><Image src="assets/115692.png" className="products-page-icon"></Image></Button>
                                </Link>
                                <div className="name-bar">
                                    <h5>Shoe Name</h5>
                                </div>
                                <h3>£79.99</h3>
                            </Col>
                            <Col xs={6} sm={4} className="products-page-body">
                                <Link to="/products">
                                    <Button variant="link"><Image src="assets/111998.png" className="products-page-icon"></Image></Button>
                                </Link>
                                <div className="name-bar">
                                    <h5>Shoe Name</h5>
                                </div>
                                <h3>£59.99</h3>
                            </Col>
                            <Col xs={6} sm={4} className="products-page-body">
                                <Link to="/products">
                                    <Button variant="link"><Image src="assets/77274.png" className="products-page-icon"></Image></Button>
                                </Link>
                                <div className="name-bar">
                                    <h5>Shoe Name</h5>
                                </div>
                                <h3>£49.99</h3>
                            </Col>
                            <Col xs={6} sm={4} className="products-page-body">
                                <Link to="/products">
                                    <Button variant="link"><Image src="assets/115692.png" className="products-page-icon"></Image></Button>
                                </Link>
                                <div className="name-bar">
                                    <h5>Shoe Name</h5>
                                </div>
                                <h3>£79.99</h3>
                            </Col>
                            <Col xs={6} sm={4} className="products-page-body">
                                <Link to="/products">
                                    <Button variant="link"><Image src="assets/111998.png" className="products-page-icon"></Image></Button>
                                </Link>
                                <div className="name-bar">
                                    <h5>Shoe Name</h5>
                                </div>
                                <h3>£59.99</h3>
                            </Col>
                            <Col xs={6} sm={4} className="products-page-body">
                                <Link to="/products">
                                    <Button variant="link"><Image src="assets/77274.png" className="products-page-icon"></Image></Button>
                                </Link>
                                <div className="name-bar">
                                    <h5>Shoe Name</h5>
                                </div>
                                <h3>£49.99</h3>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Products;