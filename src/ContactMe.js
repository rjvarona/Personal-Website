import React from "react";
import "./ContactMe.css"; // // Icons made by Freepik from www.flaticon.com
import { Container, Col, Row, Button } from "react-bootstrap";

import ScrollAnimation from "react-animate-on-scroll";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    window.location.href = "mailto:rudsonvarona@gmail.com";
  }

  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Container style={{ maxWidth: "initial" }}>
          <Row>
            <Col md={3}></Col>
            <Col md={6}>
              <ScrollAnimation
                animateIn="bounceIn"
                delay={500}
                animateOnce="true"
              >
                <h1 class="inTouch">Let's Get In Touch</h1>
              </ScrollAnimation>
            </Col>
            <Col md={3}></Col>
            <Col md={3}></Col>

            <Col md={6}>
              <ScrollAnimation
                animateIn="fadeInRight"
                delay={500}
                animateOnce="true"
              >
                <p class="aboutMe">
                  My name is Spencer King.  I am currently working on my major in Informatics at Indiana University. 
                  I am always looking for new people to work with and meet in the 
                  spatial computing realm. Contact me!<span></span>.
                </p>
              </ScrollAnimation>
            </Col>
            <Col md={3}></Col>

            <Col md={3}></Col>

            <Col md={6} style={{ textAlign: "center" }}>
              <ScrollAnimation
                animateIn="fadeInLeft"
                delay={500}
                animateOnce="true"
              >
                <Button variant="dark" onClick={this.handleClick}>
                  Contact Me
                </Button>
              </ScrollAnimation>
            </Col>
            <Col md={3}></Col>
          </Row>
        </Container>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default App;
