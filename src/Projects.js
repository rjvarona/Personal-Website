import React from "react";
import "./Projects.css"; // // Icons made by Freepik from www.flaticon.com
import { Container, Col, Row } from "react-bootstrap";

import YeetPost from "./components/food/YeetPost.pdf";
import ScrollAnimation from "react-animate-on-scroll";

import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { useState } from "react";

import Maps from "./projectMapHelper";

import { FaGithub } from "react-icons/fa";
debugger;

function App() {
  const [modalTest, setModal] = useState(false);
  const [keyString, setKey] = useState("yeet");
  const [psMap, setPMap] = useState(Maps.getpsMap());
  const [vidMap, setvidMap] = useState(Maps.getvidMap());
  const [gitMap, setgitMap] = useState(Maps.getgitMap());

  const updateBoard = key => {
    setModal(!modalTest);
    setKey(key);
  };

  return (
    <div>
      <Container style={{ maxWidth: "initial" }}>
        <Row>
          <Col md={12} style={{ textAlign: "center" }}>
            <ScrollAnimation animateIn="pulse" delay={500} animateOnce="true">
              <h1 class="notableProjects">Notable Projects</h1>
              <br />
            </ScrollAnimation>
          </Col>

          <Col md={3}>
            <ScrollAnimation
              animateIn="fadeInDown"
              delay={500}
              animateOnce="true"
            >
              <div class="meme_soundboard allImages">
                <br />
                <br />
                <br />
                <br />
                <p
                  class="cardWord card allImages"
                  style={{ backgroundColor: "black" }}
                  onClick={() => updateBoard("memeboard")}
                >
                  <h1 style={{ color: "white" }}> Meme Soundboard</h1>
                  <p style={{ color: "white" }}>
                    Developed a multi-connect soundboard using WPF Forms and
                    implemented my own http server that connected multiple
                    soundboards to play memes across clients asynchronously.
                  </p>
                </p>
              </div>
            </ScrollAnimation>
          </Col>

          <Col md={3}>
            <ScrollAnimation
              animateIn="fadeInDown"
              delay={500}
              animateOnce="true"
            >
              <div class="rjavacado allImages">
                <br />
                <br />
                <br />
                <br />
                <p
                  class="cardWord card allImages"
                  style={{ backgroundColor: "black" }}
                  onClick={() => updateBoard("rjavacado")}
                >
                  <h1 style={{ color: "white" }}>RJ Avacado</h1>
                  <p style={{ color: "white" }}>
                    Designed a personal file tracker web application for my
                    videos, images, and music. Developed with mssql, .NET
                    Framework (MVC), Dapper ORM, C#, jQuery, and JavaScript.
                  </p>
                </p>
              </div>
            </ScrollAnimation>
          </Col>

          <Col md={3}>
            <ScrollAnimation
              animateIn="fadeInDown"
              delay={500}
              animateOnce="true"
            >
              <div class="hireadams allImages">
                <br />
                <br />
                <br />
                <br />
                <p
                  class="cardWord card allImages"
                  style={{ backgroundColor: "black" }}
                  onClick={() => updateBoard("hireadams")}
                >
                  <h1 style={{ color: "white" }}>Hire Adams</h1>
                  <p style={{ color: "white" }}>
                    Developed and published a static parody-resume website for a
                    friend using Vue.js, Node.js, and Vuetify.
                  </p>
                </p>
              </div>
            </ScrollAnimation>
          </Col>
          <Col md={3}>
            <ScrollAnimation
              animateIn="fadeInDown"
              delay={500}
              animateOnce="true"
            >
              <div class="inventory allImages">
                <br />
                <br />
                <br />
                <br />
                <p
                  class="cardWord card allImages"
                  style={{ backgroundColor: "black" }}
                  onClick={() => updateBoard("inventory")}
                >
                  <h1 style={{ color: "white" }}>Lab Tracker</h1>
                  <p style={{ color: "white" }}>
                    Created a lab tracking web application using .NETMVC, Google
                    Firestore, NOSQL, and Vue.js. The application allowed users
                    to create labs, assign equipment to labs, and keep track of
                    the inventory of the lab.{" "}
                  </p>
                </p>
              </div>
            </ScrollAnimation>
          </Col>

          <Col md={3}>
            <ScrollAnimation
              animateIn="fadeInUp"
              delay={500}
              animateOnce="true"
              target="_blank"
            >
              <div class="yeetPost allImages">
                <br />
                <br />
                <br />
                <br />
                <p
                  class="cardWord card allImages"
                  style={{ backgroundColor: "black" }}
                  onClick={() => updateBoard("yeetpost")}
                >
                  <h1 style={{ color: "white" }}>YeetPost</h1>
                  <p style={{ color: "white" }}>
                    {" "}
                    YeetPost is a scalable, location-based forum web
                    application. The application is a spinoff/homage to Yik-Yak
                    and was developed with .NET Core, Firestore, and Vue.js.
                  </p>
                </p>
              </div>
            </ScrollAnimation>
          </Col>

          <Col md={3}>
            <ScrollAnimation
              animateIn="fadeInUp"
              delay={500}
              animateOnce="true"
            >
              <div class="e_joker allImages">
                <br />
                <br />
                <br />
                <br />
                <a
                  class="cardWord card allImages"
                  style={{ backgroundColor: "black" }}
                  href="http://www.gingercreek.org/wp-content/uploads/2015/08/video-coming-soon.jpg"
                  target="_blank"
                >
                  <h1 style={{ color: "white" }}>E Joker</h1>
                  <p style={{ color: "white" }}>
                    Updated and maintained Southern Adventist University's
                    profile directory application. Some updates include the
                    campus-wide index. This allowed users to combine search
                    parameters such as students, faculty, first letter of last
                    name, and first letter of first name.
                  </p>
                </a>
              </div>
            </ScrollAnimation>
          </Col>

          <Col md={3}>
            <ScrollAnimation
              animateIn="fadeInUp"
              delay={500}
              animateOnce="true"
            >
              <div class="we_haul allImages">
                <br />
                <br />
                <br />
                <br />
                <a
                  class="cardWord card allImages"
                  style={{ backgroundColor: "black" }}
                  href="https://myaccess.southern.edu/mvc/wehaul"
                  target="_blank"
                >
                  <h1 style={{ color: "white" }}>We Haul</h1>
                  <p style={{ color: "white" }}>
                    Created a Move-in help Registration application with .NET
                    (MVC), C#, MSSQL, and jQuery. This application allowed users
                    to register times they can help other students move into
                    their new rooms.
                  </p>
                </a>
              </div>
            </ScrollAnimation>
          </Col>

          <Col md={3}>
            <ScrollAnimation
              animateIn="fadeInUp"
              delay={500}
              animateOnce="true"
            >
              <div class="mur_stationery allImages">
                <br />
                <br />
                <br />
                <br />
                <a
                  class="cardWord card allImages"
                  style={{ backgroundColor: "black" }}
                  href="http://www.gingercreek.org/wp-content/uploads/2015/08/video-coming-soon.jpg"
                  target="_blank"
                >
                  <h1 style={{ color: "white" }}>MUR-Stationery</h1>
                  <p style={{ color: "white" }}>
                    Redeveloped the Front-End and controllers of an existing
                    Stationery application that was using Angular.js with
                    Vue.js.
                  </p>
                </a>
              </div>
            </ScrollAnimation>
          </Col>
        </Row>
      </Container>
      <SlidingPane
        className="panelClass"
        overlayClassName="some-custom-overlay-class"
        isOpen={modalTest}
        title="Meme Soundboard!!"
        subtitle="So Cool"
        onRequestClose={() => {
          // triggered on "<" on left top click or on outside click
          setModal(false);
        }}
      >
        <div style={{ color: "white" }}>
          <Row>
            <Col md={4}>
              <Row>
                <Col md={1}></Col>

                <Col md={11}>
                  <h1 style={{ justifyContent: "center", marginLeft: "10%" }}>
                    What is it?
                  </h1>
                </Col>
              </Row>

              <Row>
                <Col md={1}></Col>

                <Col md={11}>
                  <p>{psMap.get(keyString)}</p>
                </Col>
              </Row>

              <Row>
                <Col md={1}></Col>

                <Col md={11}>
                  <a
                    className="viewGit"
                    href={gitMap.get(keyString)}
                    target="_blank"
                  >
                    View on Github <FaGithub />
                  </a>
                </Col>
              </Row>
            </Col>
            <Col md={8}>
              <iframe
                width="80%"
                height="100%"
                src={vidMap.get(keyString)}
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </Col>
          </Row>
        </div>
        <br />
      </SlidingPane>
    </div>
  );
}

export default App;
