import React from "react";
import "./aboutMe.scss";
import { Container, Col, Row } from "react-bootstrap";

import Gallery from "react-grid-gallery";

import Bibingka from "./components/food/Bibingka.jpg";
import chocoTart from "./components/food/chocoTart.jpg";
import chocoTart2 from "./components/food/chocotart2.jpg";

import chocoTart3 from "./components/food/chocoTart3.JPG";
import flan from "./components/food/flan.jpg";
import flan2 from "./components/food/flan3.jpg";
import lemonKiwi from "./components/food/lemonKiwi.jpg";

import lemonKiwi2 from "./components/food/lemonKiwi2.jpg";
import pioouuss from "./components/food/pioouuss.jpg";
import pious from "./components/food/pious.jpg";
import roseApple from "./components/food/roseApple.jpg";
import roseApple2 from "./components/food/roseApple2.jpg";
import shakShuka from "./components/food/shakShuka.jpg";
import strawberryLemon from "./components/food/StrawberryLemon.jpg";
import strawberryLemon2 from "./components/food/strawberryLemon2.jpg";

import dumplings from "./components/food/dumplings.jpg";

import cassavacake from "./components/food/cassavacake.jpg";

import bluerberry from "./components/food/bluerberrypie.jpg";

import tartkiwi2 from "./components/food/tartkiwi2.jpg";

import poachedeggs from "./components/food/poached eggs.jpg";

import TSeries from "./components/food/TSeries.jpg";

import ScrollAnimation from "react-animate-on-scroll";

const IMAGES = [
  {
    src: Bibingka,
    thumbnail: Bibingka,
    thumbnailWidth: 320,
    thumbnailHeight: 174,

    caption: "Filipino coconut Cake"
  },
  {
    src: chocoTart,
    thumbnail: chocoTart,
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "Me very own chocolate tart"
  },
  {
    src: chocoTart2,
    thumbnail: chocoTart2,
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "Me very own chocolate tart again"
  },
  {
    src: chocoTart3,
    thumbnail: chocoTart3,
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "Me very own chocolate tart again"
  },
  {
    src: flan,
    thumbnail: flan,
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "Me very own flan"
  },
  {
    src: lemonKiwi,
    thumbnail: lemonKiwi,
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "I maketh lemonKiwi"
  },
  {
    src: lemonKiwi2,
    thumbnail: lemonKiwi2,
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "lemonKiwi AGAAIIN"
  },
  {
    src: pioouuss,
    thumbnail: pioouuss,
    thumbnailWidth: 250,
    thumbnailHeight: 212,
    caption: "its pie timme"
  },
  {
    src: pious,
    thumbnail: pious,
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "its pie timme once again"
  },
  {
    src: roseApple,
    thumbnail: roseApple,
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "rose me apple"
  },
  {
    src: roseApple2,
    thumbnail: roseApple2,
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "its rpse pie timme"
  },

  {
    src: strawberryLemon,
    thumbnail: strawberryLemon,
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "strawberry lemon tart"
  },
  {
    src: strawberryLemon2,
    thumbnail: strawberryLemon2,
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "strawberry lemon tart"
  },
  {
    src: dumplings,
    thumbnail: dumplings,
    thumbnailWidth: 270,
    thumbnailHeight: 250,
    caption: "Dumplings"
  },
  {
    src: cassavacake,
    thumbnail: cassavacake,
    thumbnailWidth: 250,
    thumbnailHeight: 250,
    caption: "Cassava Cake"
  },
  {
    src: bluerberry,
    thumbnail: bluerberry,
    thumbnailWidth: 250,
    thumbnailHeight: 250,
    caption: "Blue berry Pie"
  },
  {
    src: tartkiwi2,
    thumbnail: tartkiwi2,
    thumbnailWidth: 250,
    thumbnailHeight: 250,
    caption: "Cranberry Kiwi Tart"
  },
  {
    src: poachedeggs,
    thumbnail: poachedeggs,
    thumbnailWidth: 250,
    thumbnailHeight: 250,
    caption: "Avacado Toast"
  }
];
function App() {
  return (
    <div class="slanted2">
      <br />

      <br />
      <br />

      <Container style={{ maxWidth: "initial" }}>
        <div>
          <Row>
            <Col md={12} style={{ textAlign: "center" }}>
              <ScrollAnimation
                animateIn="fadeInLeft"
                delay={500}
                animateOnce="true"
              >
                <br />

                <h1 style={{ color: "white", fontSize: 45 }}> Home Cook 😊</h1>
              </ScrollAnimation>

              <ScrollAnimation
                animateIn="fadeInRight"
                delay={500}
                animateOnce="true"
              >
                <p style={{ color: "white", fontSize: 25 }}>
                  “All you need is love. But a little chocolate now and then
                  doesn't hurt.” ~ Charles M. Schulz
                </p>
              </ScrollAnimation>

              <br />
            </Col>

            <Col md={1}></Col>

            <Col md={12} style={{ textAlign: "center" }}>
              <ScrollAnimation
                animateIn="fadeInUp"
                delay={500}
                animateOnce="true"
              >
                <Gallery images={IMAGES} />
              </ScrollAnimation>
            </Col>

            <Col md={1}></Col>

            {/* <Col md={5}>

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

                        </Col> */}
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
  );
}

export default App;
