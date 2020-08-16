import React from "react";
import "./ContactMe.css"; // // Icons made by Freepik from www.flaticon.com
import { Container, Col, Row } from "react-bootstrap";

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
            <Col md={7} xs={7}>
              <p>
                <small>&copy; Copyright 2020, Spencer King</small>
              </p>
            </Col>

            
            <Col md={1} xs={2}>
              {" "}
              <a href="https://github.com/SpencerKingUnity" target="_blank">
                {" "}
                <i
                  class="fa fa-github fa-7x"
                  style={{ fontSize: "30px", color: "black" }}
                ></i>
              </a>
            </Col>
            
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
