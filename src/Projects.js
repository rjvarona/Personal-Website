import React from 'react'
import ReactDOM from 'react-dom'
import { useSpring, animated } from 'react-spring'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import './Projects.css' // // Icons made by Freepik from www.flaticon.com
import { Container, Col, Row, Image, Figure, Badge } from 'react-bootstrap'
import { Spring } from 'react-spring'
import profileImage from '../src/FLEX.jpg'
import Typical from 'react-typical'
import YeetPost from './components/food/YeetPost.pdf'
import ScrollAnimation from 'react-animate-on-scroll';


function App() {
    return (
        <div >

            <Container style={{ maxWidth: "initial" }}>
                <Row>
                 
                    <Col md={12} style={{textAlign:"center"}}>
                 
                    <ScrollAnimation animateIn="pulse" delay={500} animateOnce="true">
                        <h1 class="notableProjects">Notable Projects</h1>
                        <br />
                      </ScrollAnimation>
                    </Col>
                    
                     

                   <Col md={3}>
                   <ScrollAnimation animateIn="fadeInDown" delay={500} animateOnce="true" >
                        <div class="meme_soundboard allImages">
                            <br />
                            <br />
                            <br/>
                            <br/>
                            <a class="cardWord card allImages" style={{ backgroundColor: "black" }} href="https://youtu.be/4_4Qy8zlrQk" target="_blank">
                                <h1 style={{ color: "white" }} > Meme Soundboard</h1>
                                <p style={{ color: "white" }}>
                                Developed a multi-connect soundboard using WPF Forms and implemented 
                                my own http server that connected multiple soundboards to play memes across clients asynchronously.
                                     </p>
                            </a>

                        </div>
                        </ScrollAnimation>

                    </Col>

                    <Col md={3}>
                    <ScrollAnimation animateIn="fadeInDown" delay={500} animateOnce="true">
                        <div class="rjavacado allImages">
                            <br />
                            <br/>
                            <br/>
                            <br />
                            <a class="cardWord card allImages" style={{ backgroundColor: "black" }} href="https://youtu.be/aHvqi0t7nbI" target="_blank">
                                <h1 style={{ color: "white" }}>File Tracker</h1>
                                <p style={{ color: "white" }}>
                                Designed a personal file tracker web application for my videos, images, and music. Developed with mssql, 
                                .NET Framework (MVC), Dapper ORM, C#, jQuery, and JavaScript.
        
                                 </p>
                            </a>
                        </div>
                    </ScrollAnimation>
                    </Col>

                    <Col md={3}>
                    <ScrollAnimation animateIn="fadeInDown" delay={500} animateOnce="true">
                        <div class="hireadams allImages">
                            <br />
                            <br />
                            <br/>
                            <br/>
                            <a class="cardWord card allImages" style={{ backgroundColor: "black" }}  href="http://www.hireadams.com/" target="_blank">
                                <h1 style={{ color: "white" }}>Hire Adams</h1>
                                <p style={{ color: "white" }}>
                                Developed and published a static parody-resume website for a friend using Vue.js,
                                 Node.js, and Vuetify.    
                                </p>
                            </a>
                        </div>
                    </ScrollAnimation>
                    </Col>
                    <Col md={3} >
                     <ScrollAnimation animateIn="fadeInDown" delay={500} animateOnce="true" >
                        <div class="inventory allImages">
                            <br />
                            <br />
                            <br/>
                            <br/>
                            <a class="cardWord card allImages" style={{ backgroundColor: "black" }} href="https://youtu.be/LFlfeeMVN0I" target="_blank">
                                <h1 style={{ color: "white" }}>Lab Tracker</h1>
                                <p style={{ color: "white" }}>Created a lab tracking web application using .NETMVC, Google Firestore, NOSQL, and Vue.js.
                                     The application allowed users to create labs, assign equipment to labs, and keep track of the inventory of the lab. </p>
                            </a>
                        </div>
                        </ScrollAnimation>

                    </Col>

                    <Col md={3}>
                    <ScrollAnimation animateIn="fadeInUp" delay={500} animateOnce="true"  target="_blank">
                        <div class="yeetPost allImages">
                            <br />
                            <br />
                            <br/>
                            <br/>
                            <a class="cardWord card allImages" style={{ backgroundColor: "black" }}  href={YeetPost}>
                                <h1 style={{ color: "white" }}>YeetPost</h1>
                                <p style={{ color: "white" }}> YeetPost is a scalable, location-based forum web application. The application is a spinoff/homage to Yik-Yak and was developed
                                 with .NET Core, Firestore, and Vue.js.
                                 </p>
                            </a>
                        </div>
                        </ScrollAnimation>

                    </Col>

                    <Col md={3}>
                    <ScrollAnimation animateIn="fadeInUp" delay={500} animateOnce="true">
                        <div class="e_joker allImages">
                            <br />
                            <br />
                            <br/>
                            <br/>
                            <a class="cardWord card allImages" style={{ backgroundColor: "black" }} href="http://www.gingercreek.org/wp-content/uploads/2015/08/video-coming-soon.jpg" target="_blank">
                                <h1 style={{ color: "white" }}>E Joker</h1>
                                <p style={{ color: "white" }}>

                                Updated and maintained Southern Adventist University's profile directory application.
                                Some updates include the campus-wide index.
                                This allowed users to combine search parameters such as students, faculty, first letter of last name, and first letter of first name.  
                                
                                </p>
                            </a>
                        </div>
</ScrollAnimation>
                    </Col>

                    <Col md={3}>
                    <ScrollAnimation animateIn="fadeInUp" delay={500} animateOnce="true">
                        <div class="we_haul allImages">
                            <br />
                            <br/>
                            <br/>
                            <br />
                            <a class="cardWord card allImages" style={{ backgroundColor: "black" }} href="https://myaccess.southern.edu/mvc/wehaul" target="_blank">
                                <h1 style={{ color: "white" }}>We Haul</h1>
                                <p style={{ color: "white" }}>
                                Created a Move-in help Registration application with .NET (MVC), C#, MSSQL, and jQuery.
                                 This application allowed users to register times they can help other students move into their new rooms. 
                                </p>
                            </a>
                        </div>
</ScrollAnimation>
                    </Col>

                    <Col md={3}>
                    <ScrollAnimation animateIn="fadeInUp" delay={500} animateOnce="true">
                        <div class="mur_stationery allImages" >
                            <br />
                            <br/>
                            <br/>
                            <br />
                            <a class="cardWord card allImages" style={{ backgroundColor: "black" }} href="http://www.gingercreek.org/wp-content/uploads/2015/08/video-coming-soon.jpg" target="_blank">
                                <h1 style={{ color: "white" }}>MUR-Stationery</h1>
                                <p style={{ color: "white" }}>
                                Redeveloped the Front-End and controllers of an existing Stationery application that was using Angular.js with Vue.js. 
                                 </p>
                            </a>
                        </div>
</ScrollAnimation>
                    </Col> 
                    

                </Row>

            </Container>

        </div>

    )
}

export default App;
