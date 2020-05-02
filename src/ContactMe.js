import React from 'react'
import ReactDOM from 'react-dom'
import { useSpring, animated } from 'react-spring'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import './ContactMe.css' // // Icons made by Freepik from www.flaticon.com
import { Container, Col, Row, Image, Figure, Badge, Button } from 'react-bootstrap'
import { Spring } from 'react-spring'
import profileImage from '../src/FLEX.jpg'
import Typical from 'react-typical'

import ScrollAnimation from 'react-animate-on-scroll';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        window.location.href = "mailto:rudsonvarona@gmail.com"
    }



    render() {
        return (

            <div >
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
                            <ScrollAnimation animateIn="bounceIn" delay={500} animateOnce="true">
                                <h1 class="inTouch">Let's Get In Touch</h1>
                            </ScrollAnimation>
                        </Col>
                        <Col md={3}></Col>
                        <Col md={3}>

                        </Col>

                        <Col md={6}>
                            <ScrollAnimation animateIn="fadeInRight" delay={500} animateOnce="true">
                                <p class="aboutMe">I am graduating in May from Southern Adventist University with a B.S. in Computer Science, and I hope to continue to grow as a developer.
                                So feel free to contact me about any job opportunities :)
        
                    </p>
                            </ScrollAnimation>
                        </Col>
                        <Col md={3}>
                        </Col>


                        <Col md={3}>

                        </Col>

                        <Col md={6} style={{ textAlign: "center" }}>
                            <ScrollAnimation animateIn="fadeInLeft" delay={500} animateOnce="true">
                                <Button variant="dark" onClick={this.handleClick} >Contact Me</Button>
                            </ScrollAnimation>
                        </Col>
                        <Col md={3}>
                        </Col>


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

        )
    }
}

export default App;
