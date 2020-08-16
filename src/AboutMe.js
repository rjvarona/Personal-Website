import React from "react";
import "./aboutMe.scss"; // // Icons made by Freepik from www.flaticon.com
import { Container, Col, Row } from "react-bootstrap";

import Typical from "react-typical";

import ScrollAnimation from "react-animate-on-scroll";

function App() {
  return (
    <section className="About">
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
              <Col md={2}></Col>

              <Col md={2} style={{ textAlign: "center" }}>
                <ScrollAnimation
                  animateIn="fadeInLeft"
                  delay={500}
                  animateOnce="true"
                >
                  <h1></h1>
                  <h1 style={{ color: "white" }}>Creative</h1>

                  <p style={{ color: "#aca2a2" }}>
                    I strive to create ideas and projects that centralize around originality and authenticity
                  </p>
                </ScrollAnimation>
              </Col>

              <Col md={2} style={{ textAlign: "center" }}>
                <ScrollAnimation
                  animateIn="fadeInLeft"
                  delay={500}
                  animateOnce="true"
                >
                  <h1></h1>
                  <h1 style={{ color: "white" }}>Unorthodox</h1>
                  <p style={{ color: "#aca2a2" }}>
                    I offer ways of thinking and ideology I strongly believe others do not posess
                  </p>
                </ScrollAnimation>
              </Col>

              <Col md={2} style={{ textAlign: "center" }}>
                <ScrollAnimation
                  animateIn="fadeInRight"
                  delay={500}
                  animateOnce="true"
                >
                  <h1></h1>
                  <h1 style={{ color: "white" }}>Adaptive</h1>
                  <p style={{ color: "#aca2a2" }}>
                    I learn and adapt quickly and my pace only increases the more I learn
                  </p>
                </ScrollAnimation>
              </Col>

              <Col md={2} style={{ textAlign: "center" }}>
                <ScrollAnimation
                  animateIn="fadeInRight"
                  delay={500}
                  animateOnce="true"
                >
                  <h1></h1>
                  <h1 style={{ color: "white" }}>Oriented</h1>
                  <p style={{ color: "#aca2a2" }}>
                    I recognize the necessary goals I must take and dominate them
                  </p>
                </ScrollAnimation>
              </Col>

              <Col md={2}></Col>

              <Col md={12} style={{ textAlign: "center" }}>
                <br />
                {/* <h1 style={{ color: "white", fontSize: 65 }}> About Me
                            </h1> */}

                <br />
              </Col>

              <Col md={7}>
                <Row>
                  <Col md={5}></Col>
                  <Col md={6}>
                    <ScrollAnimation
                      animateIn="fadeInLeft"
                      delay={500}
                      animateOnce="true"
                    >
                      <div id="box2" style={{ textAlign: "center" }}>
                        <h1 style={{ fontSize: "30px", color: "white" }}>
                          {" "}
                          <Typical
                            steps={[
                              "Learn About Me",
                              4000,
                              "Contact Me",
                              4000,
                              "Let's Collaborate",
                              4000
                            ]}
                            loop={Infinity}
                            wrapper="p"
                          />{" "}
                        </h1>

                        <p class="ABOUTAB">
                          I am a young student attending a university based in Indiana, USA. I am obsessed
                          with virtual reality systems and the potential of haptic feedback. 
                          I hope to meet more excited developers in the field of spatial computing
                          and collaborate on projects that cause impact. Many categories of VR development 
                          interest me from intensely immersive gaming to fitness program integration into simulated environments.
                        </p>
                        <Row>
                          <Col
                            md={12}
                            style={{
                              textAlign: "center",
                              color: "white",
                              fontSize: 10
                            }}
                          >
                            <h1 style={{ fontSize: 30 }}>Tools I Use</h1>
                          </Col>
                          <Col md={1}></Col>
                          <Col md={5}>
                            <ol class="ABOUTAB">
                              <li>C#</li>
                              <li>Javascript</li>
                              <li>Python</li>
                              <li>HTML</li>
                              <li>CSS</li>
                              <li>Blender</li>
                            </ol>
                          </Col>
                          <Col md={6}>
                            <ol class="ABOUTAB">
                              <li>Unity</li>
                              <li>Unity XR</li>
                              <li>GIT</li>
                              <li>Unreal Engine</li>
                            </ol>
                          </Col>
                        </Row>
                      </div>
                    </ScrollAnimation>
                  </Col>
                  <Col md={1}></Col>
                </Row>
              </Col>
              <Col md={5}>
                <ScrollAnimation
                  animateIn="fadeInRight"
                  delay={500}
                  animateOnce="true"
                >
                  <div id="Box1">
                    <div class="Flex"></div>
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
  );
}

export default App;
