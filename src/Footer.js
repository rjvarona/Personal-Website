import React from 'react'
import ReactDOM from 'react-dom'
import { useSpring, animated } from 'react-spring'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import './ContactMe.css' // // Icons made by Freepik from www.flaticon.com
import { Container, Col, Row, Image, Figure, Badge, Button } from 'react-bootstrap'
import { Spring } from 'react-spring'
import profileImage from '../src/FLEX.jpg'
import Typical from 'react-typical'

class App extends React.Component {
    constructor(props) {
        super(props);
    }




    render() {
        return (

            <div style={{ backgroundColor: "white" }}>



                <br />




                <Container style={{ maxWidth: "initial" }}>

                    <Row>
                        <Col md={7} xs={7} ><p><small>&copy; Copyright 2020, RJ Varona</small></p></Col>
                      
                        <Col md={1}  xs={1}>
                        <Col md={2} xs={2}></Col>
                        <a href="https://www.linkedin.com/in/rj-varona/" target="_blank"> <i class="fa fa-linkedin fa-7x" style={{ fontSize: "30px", color: "black" }}></i></a>
                    
                        </Col>
                        <Col md={1} xs={2}>   <a href="https://github.com/rjvarona" target="_blank"> <i class="fa fa-github fa-7x" style={{ fontSize: "30px", color: "black" }}></i></a>

                            
                        </Col>
                        <Col md={1} xs={1}>
                        <a href="https://www.instagram.com/potato_chip_rj/?hl=en" target="_blank"> <i class="fa fa-instagram fa-7x" style={{ fontSize: "30px", color: "black" }}></i></a>


                        </Col>





                    </Row>


                </Container>

            </div>

        )
    }
}

export default App;
