import React from 'react'
import ReactDOM from 'react-dom'
import { useSpring, animated } from 'react-spring'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import './aboutMe.scss' // // Icons made by Freepik from www.flaticon.com
import { Container, Col, Row, Image, Figure, Badge } from 'react-bootstrap'
import { Spring } from 'react-spring'
import profileImage from '../src/FLEX.jpg'
import Typical from 'react-typical'

import ScrollAnimation from 'react-animate-on-scroll';

// <Figure>
// <Figure.Image
//     width={"100%"}
//     height={400}
//     alt="171x180"
//     src={profileImage}
//     roundedCircle
// />

// </Figure>

function App() {
    return (
        <section className='About'>
            <div class="slanted">
                <br />

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />



                <Container style={{ maxWidth: "initial" }}>
                    <div>

                        <Row>
                            <Col md={2}>
                            </Col>




                            <Col md={2} style={{ textAlign: "center" }}>

                                <ScrollAnimation animateIn="fadeInLeft" delay={500} animateOnce="true">
                                    <h1>💡</h1>
                                    <h1 style={{ color: "white" }}>Creative</h1>

                                    <p style={{ color: "#aca2a2" }}>Creative designs that make websites come to life</p>
                                </ScrollAnimation>
                            </Col>



                            <Col md={2} style={{ textAlign: "center" }}>
                                <ScrollAnimation animateIn="fadeInLeft" delay={1000} animateOnce="true">
                                    <h1>🧹</h1>
                                    <h1 style={{ color: "white" }}>Clean</h1>
                                    <p style={{ color: "#aca2a2" }}>Strong believer in writing clean code for better development</p>
                                </ScrollAnimation>
                            </Col>

                            <Col md={2} style={{ textAlign: "center" }}>
                                <ScrollAnimation animateIn="fadeInRight" delay={1500} animateOnce="true">
                                    <h1>💗</h1>
                                    <h1 style={{ color: "white" }}>Passionate</h1>
                                    <p style={{ color: "#aca2a2" }}>Every project built with passion and love</p>
                                </ScrollAnimation>
                            </Col>

                            <Col md={2} style={{ textAlign: "center" }}>
                                <ScrollAnimation animateIn="fadeInRight" delay={2000} animateOnce="true">
                                    <h1>💻 📱</h1>
                                    <h1 style={{ color: "white" }}>Responsive</h1>
                                    <p style={{ color: "#aca2a2" }}>Responsive designs that make webpages work on any device</p>
                                </ScrollAnimation>
                            </Col>


                            <Col md={2}>
                            </Col>

                            <Col md={12} style={{ textAlign: "center" }} >
                                <br />
                                {/* <h1 style={{ color: "white", fontSize: 65 }}> About Me
                            </h1> */}

                                <br />
                            </Col>

                            <Col md={7}>

                                <Row>

                                    <Col md={5} >



                                    </Col>
                                    <Col md={6} >
                                        <ScrollAnimation animateIn="fadeInLeft" delay={1500} animateOnce="true">
                                            <div id="box2" style={{ textAlign: "center" }}>
                                                <h1 style={{ fontSize: "30px", color: "white" }}> <Typical
                                                    steps={['WHO AM I?', 4000, 'I 💖 YOU', 4000, 'HIRE ME!!', 4000]}
                                                    loop={Infinity}
                                                    wrapper="p"
                                                /> </h1>

                                                <p class="ABOUTAB">
                                                    I am a passionate web developer based in Chattanooga Tennessee, who
                                                    loves creating fun and interactive software, and
                                                    I enjoy all aspects of software development from start to finish.
                                                    I also love looking at memes and cooking food.


                                    </p>
                                                <Row>
                                                    <Col md={12} style={{ textAlign: "center", color: "white", fontSize: 10 }}>
                                                        <h1 style={{ fontSize: 30 }}>Tools I Use</h1>
                                                    </Col>
                                                    <Col md={1}></Col>
                                                    <Col md={5}>
                                                        <ol class="ABOUTAB">

                                                            <li>C#</li>
                                                            <li>Javascript#</li>
                                                            <li>Vue.js</li>
                                                            <li>SQL</li>
                                                            <li> HTML & CSS</li>
                                                            <li>React.js</li>
                                                        </ol>
                                                    </Col>
                                                    <Col md={6}>
                                                        <ol class="ABOUTAB">

                                                            <li>.NET MVC(Framework)</li>
                                                            <li>Express.js</li>
                                                            <li>Dapper ORM</li>
                                                            <li>Google Firestore</li>
                                                            <li>MSSQL</li>
                                                            <li>GIT</li>


                                                        </ol>
                                                    </Col>

                                                </Row>
                                            </div>

                                        </ScrollAnimation>
                                    </Col>
                                    <Col md={1}>
                                    </Col>
                                    {/* 
                        <Col md={12} id="box3">
                            <h1 style={{color: "rgb(69, 17, 255)", textAlign: "center"}}>
                                What I Work With
                                </h1>   
                            <p class="skillset">

                                <Badge pill  variant="light"> C# </Badge>
                                <Badge pill  variant="light">Javascript</Badge>
                                <Badge pill  variant="light">    Vue.js </Badge>
                                <Badge pill  variant="light">   SQL </Badge>
                                <Badge pill  variant="light">React.js </Badge>
                                <Badge pill  variant="light">React Native</Badge>
                                <Badge pill  variant="light"> .NET MVC</Badge>
                                <Badge pill  variant="light">  Dapper ORM</Badge>
                                <Badge pill  variant="light">  Entity Framework</Badge>
                                <Badge pill  variant="light">  Google FireStore</Badge>
                                <Badge pill  variant="light">  MSSQL</Badge>
                                <Badge pill  variant="light">    Node.js</Badge>
                                <Badge pill  variant="light">    GIT </Badge>
                                <Badge pill  variant="light">    Express.js </Badge>
                            </p>
                        </Col> */}

                                </Row>

                            </Col>
                            <Col md={5}>
                                <ScrollAnimation animateIn="fadeInRight" delay={2000} animateOnce="true" >
                                    <div id="Box1">
                                        <div class="Flex">

                                        </div>

                                    </div>
                                </ScrollAnimation>
                            </Col>
                        </Row>
                    </div>
                </Container>
                <br />

                <br />

                <br />


                <br />
                <br />
                <br />
            </div>
        </section>
    )
}

export default App;
