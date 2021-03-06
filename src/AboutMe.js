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
                  <h1>💡</h1>
                  <h1 style={{ color: "white" }}>Creative</h1>

                  <p style={{ color: "#aca2a2" }}>
                    Creative designs that make websites come to life
                  </p>
                </ScrollAnimation>
              </Col>

              <Col md={2} style={{ textAlign: "center" }}>
                <ScrollAnimation
                  animateIn="fadeInLeft"
                  delay={500}
                  animateOnce="true"
                >
                  <h1>🧹</h1>
                  <h1 style={{ color: "white" }}>Clean</h1>
                  <p style={{ color: "#aca2a2" }}>
                    Strong believer in writing clean code for better development
                  </p>
                </ScrollAnimation>
              </Col>

              <Col md={2} style={{ textAlign: "center" }}>
                <ScrollAnimation
                  animateIn="fadeInRight"
                  delay={500}
                  animateOnce="true"
                >
                  <h1>💗</h1>
                  <h1 style={{ color: "white" }}>Passionate</h1>
                  <p style={{ color: "#aca2a2" }}>
                    Every project built with passion and love
                  </p>
                </ScrollAnimation>
              </Col>

              <Col md={2} style={{ textAlign: "center" }}>
                <ScrollAnimation
                  animateIn="fadeInRight"
                  delay={500}
                  animateOnce="true"
                >
                  <h1>💻 📱</h1>
                  <h1 style={{ color: "white" }}>Responsive</h1>
                  <p style={{ color: "#aca2a2" }}>
                    Responsive designs that make webpages work on any device
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
                              "WHO AM I?",
                              4000,
                              "I 💖 YOU",
                              4000,
                              "HIRE ME!!",
                              4000
                            ]}
                            loop={Infinity}
                            wrapper="p"
                          />{" "}
                        </h1>

                        <p class="ABOUTAB">
                          I am a passionate web developer based in Los Angeles,
                          who loves creating fun and interactive software, and I
                          enjoy all aspects of software development from start
                          to finish. I also love looking at memes and cooking
                          food.
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
