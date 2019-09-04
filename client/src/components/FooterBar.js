import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button, Image, Row, Col } from 'react-bootstrap';

import './FooterBar.css'

class FooterBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      post: '',
    }
  }

  submitHandler = async e => {
    e.preventDefault(); 
    console.log(this.state);
    fetch('/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.post })
    });
  }

  render() {
    return (
      <div className="footer-buffer">
        <Navbar fixed="bottom" variant="light" bg="dark">
          <Navbar.Collapse>
            <Nav className="mr-auto">
              <b>Join the conversation on social media</b>
              <Button variant="link" size="sm"><Image src="assets/twitter_icon.png" className="social-icon"></Image></Button>
              <Button variant="link" size="sm"><Image src="assets/fb_icon.png" className="social-icon"></Image></Button>
              <Button variant="link" size="sm"><Image src="assets/instagram_icon.png" className="social-icon"></Image></Button>
            </Nav>
            <Form inline onSubmit={this.submitHandler}>
              <FormControl type="email" onChange = {(event) => this.setState({post: event.target.value })} placeholder="Sign up for latest news" className="mr-sm-2"/>
              <Button variant="light" type="submit">Sign up</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default FooterBar;