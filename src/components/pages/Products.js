import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';

import './Products.css';

function Products() {
    
  return (
    <Container>
        <Jumbotron>
            <div className="jumbo-heading">
                <h5>Exclusive deals available!</h5>
                <Button variant="light">Learn more</Button>
            </div>
        </Jumbotron>

        <Row>
            <Col xs={12} sm={3} className="filter-list">
                <p>Filter</p>
                
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
                </Row>
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
                </Row>
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
                </Row>
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
                </Row>
            </Col>
        </Row>
    </Container>
  );
}

export default Products;