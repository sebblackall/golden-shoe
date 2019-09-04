import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import './Promotions.css';

class Promotions extends Component {
    render() {
        return (
            <div>
                <div className="promotions-header">
                    <h1>Promotions</h1>
                </div>
                <Container>
                    <div className="promotion-heading">
                        <h1>We've got some amazing deals...</h1>
                    </div>
                    <Row>
                        <Col xs={12} sm={8} className="promotion-main">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida in fermentum et sollicitudin ac. Nunc sed id semper risus. Commodo odio aenean sed adipiscing diam donec adipiscing tristique risus. Vel turpis nunc eget lorem dolor sed viverra ipsum. Cursus mattis molestie a iaculis at erat. Integer feugiat scelerisque varius morbi enim nunc. Mauris ultrices eros in cursus turpis massa tincidunt. Cursus vitae congue mauris rhoncus. Varius duis at consectetur lorem donec massa sapien faucibus et. Imperdiet sed euismod nisi porta lorem. Nec ullamcorper sit amet risus nullam eget felis eget nunc.</p>
                        <p>Dictum sit amet justo donec enim. Auctor elit sed vulputate mi sit. Rutrum quisque non tellus orci ac. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Viverra orci sagittis eu volutpat odio facilisis mauris. Quis vel eros donec ac odio tempor orci dapibus. Ut tellus elementum sagittis vitae et leo duis ut. Massa sed elementum tempus egestas. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Lobortis scelerisque fermentum dui faucibus. Lectus urna duis convallis convallis tellus id interdum velit. Ipsum consequat nisl vel pretium lectus quam id. Hac habitasse platea dictumst vestibulum rhoncus est. In dictum non consectetur a erat nam at. At volutpat diam ut venenatis tellus in. Orci a scelerisque purus semper. Lorem dolor sed viverra ipsum nunc.</p>
                        <p>Ac turpis egestas sed tempus. Nibh sit amet commodo nulla facilisi nullam vehicula. Enim blandit volutpat maecenas volutpat blandit. Dui ut ornare lectus sit amet. Enim sit amet venenatis urna cursus eget. Integer quis auctor elit sed vulputate mi sit amet. Viverra aliquet eget sit amet tellus. Condimentum mattis pellentesque id nibh tortor.</p>
                        </Col>
                        <Col xs={12} sm={4} className="promotions-side">
                            <h2>Get £10 off in-store</h2>
                            <p>In aliquam sem fringilla ut morbi tincidunt augue. Amet aliquam id diam maecenas ultricies mi eget mauris pharetra. Nisi lacus sed viverra tellus in hac habitasse platea. Sem nulla pharetra diam sit amet nisl suscipit. Praesent semper feugiat nibh sed pulvinar proin. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus. In est ante in nibh mauris cursus.</p>
                            <h2>Student Discount</h2>
                            <p>A cras semper auctor neque vitae tempus quam pellentesque nec. Velit egestas dui id ornare arcu odio ut sem. Ipsum dolor sit amet consectetur adipiscing elit. Suspendisse faucibus interdum posuere lorem ipsum dolor sit. Non sodales neque sodales ut etiam sit amet. Mauris sit amet massa vitae tortor.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Promotions;