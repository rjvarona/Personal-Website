import React from 'react'
import ReactDOM from 'react-dom'
import { useSpring, animated } from 'react-spring'
// import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import './styles.css' // // Icons made by Freepik from www.flaticon.com
import AboutMe from './AboutMe.js'
import { Container, Row, Col } from 'react-bootstrap';

import { Parallax, Background } from 'react-parallax';

import { Image } from 'react-bootstrap'

import ScrollAnimation from 'react-animate-on-scroll';



const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
const trans2 = (x, y) => `translate3d(${x / 3.5}px,${y / 8 - 250}px,0)`
const trans2_1 = (x, y) => `translate3d(${x / 4.0}px,${y / 8 - 250}px,0)`
const trans2_2 = (x, y) => `translate3d(${x / 4.5}px,${y / 8 - 250}px,0)`
const trans2_3 = (x, y) => `translate3d(${x / 5.0}px,${y / 8 - 250}px,0)`



const trans3 = (x, y) => `translate3d(${x / 3.5}px,${y / 6 - 150}px,0)`
const trans3_1 = (x, y) => `translate3d(${x / 4.0}px,${y / 6 - 150}px,0)`
const trans3_2 = (x, y) => `translate3d(${x / 4.5}px,${y / 6 - 150}px,0)`
const trans3_3 = (x, y) => `translate3d(${x / 5.0}px,${y / 6 - 150}px,0)`



const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`
const trans4_5 = (x, y) => `translate3d(${x / 3.7}px,${y / 3.7}px,0)`
const trans5 = (x, y) => `translate3d(${x / 4.0}px,${y / 4.0}px,0)`
const trans6 = (x, y) => `translate3d(${x / 4.5}px,${y / 4.5}px,0)`


const insideStyles = {
    background: "white",
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
};

function App() {
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
    return (

        <div>
            <Container style={{ maxWidth: "initial" }} onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
                <Parallax
                    class="bgImageMobile"
                    bgImage={require('../src/pewdiepie2.jpg')}

                >
                </Parallax>

                <Parallax
                    class="bgImage"
                    bgImage={require('../src/rjjj.jpg')}

                >
                    <div

                        style={{ opacity: "0%" }}>ddddddddd
                        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                </div>
                    <div style={{ height: 800 }} class="container">

                        <animated.div class="card0" style={{ transform: props.xy.interpolate(trans1) }} />


                        <animated.div class="card5" style={{ transform: props.xy.interpolate(trans2) }} >
                        <br/>
                        <br/>
                        <br/>
                            <p style={{ fontSize: "100px", color: "black" }} class="mobileText">Hi I am RJ 😊</p>
                        </animated.div>


                        <animated.div class="card4" style={{ transform: props.xy.interpolate(trans2) }} >
                            <p style={{ fontSize: "100px", color: "blue", opacity: "80%" }}>Hello</p>
                        </animated.div>


                        <animated.div class="card4" style={{ transform: props.xy.interpolate(trans2_1) }} >
                            <p style={{ fontSize: "100px", color: "green", opacity: "80%" }}>Hello</p>
                        </animated.div>
                        <animated.div class="card4" style={{ transform: props.xy.interpolate(trans2_2) }} >
                            <p style={{ fontSize: "100px", color: "red", opacity: "80%" }}>Hello</p>
                        </animated.div>
                        <animated.div class="card4" style={{ transform: props.xy.interpolate(trans2_3) }} >
                            <p style={{ fontSize: "100px", color: "black" }}>Hello</p>
                        </animated.div>


                        <animated.div class="card4" style={{ transform: props.xy.interpolate(trans3) }} >
                            <p style={{ fontSize: "100px", color: "blue", opacity: "80%" }}>My Name is</p>
                        </animated.div>
                        <animated.div class="card4" style={{ transform: props.xy.interpolate(trans3_1) }} >
                            <p style={{ fontSize: "100px", color: "green", opacity: "80%" }}>My Name is</p>
                        </animated.div>
                        <animated.div class="card4" style={{ transform: props.xy.interpolate(trans3_2) }} >
                            <p style={{ fontSize: "100px", color: "red", opacity: "80%" }}>My Name is</p>
                        </animated.div>
                        <animated.div class="card4" style={{ transform: props.xy.interpolate(trans3_3) }} >
                            <p style={{ fontSize: "100px", color: "black" }}>My Name is</p>
                        </animated.div>




                        <animated.div class="card4" style={{ transform: props.xy.interpolate(trans4) }} >
                            <p style={{ fontSize: "100px", color: "blue", opacity: "80%" }}>RJ Varona</p>
                        </animated.div>
                        <animated.div class="card4" style={{ transform: props.xy.interpolate(trans4_5) }} >
                            <p style={{ fontSize: "100px", color: "green", opacity: "80%" }}>RJ Varona</p>
                        </animated.div>
                        <animated.div class="card4" style={{ transform: props.xy.interpolate(trans5) }} >
                            <p style={{ fontSize: "100px", color: "red", opacity: "80%" }}>RJ Varona</p>
                        </animated.div>
                        <animated.div class="card4" style={{ transform: props.xy.interpolate(trans6) }} >
                            <p style={{ fontSize: "100px", color: "black" }}>RJ Varona</p>
                        </animated.div>


                    </div>
                </Parallax>










            </Container>


        </div>
    )
}

export default App;
