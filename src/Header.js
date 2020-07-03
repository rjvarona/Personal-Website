import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import scrollToComponent from "react-scroll-to-component";

class App extends React.Component {
  componentDidMount() {
    scrollToComponent(this.Blue, {
      offset: 0,
      align: "middle",
      duration: 500,
      ease: "inCirc"
    });
  }

  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg" fixed="top">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link
                href="#home"
                onClick={() =>
                  scrollToComponent(this.About, {
                    offset: 0,
                    align: "top",
                    duration: 1500
                  })
                }
              >
                About
              </Nav.Link>
              <Nav.Link href="#link">Projects</Nav.Link>
              <Nav.Link href="#link">Food</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <section cllassName="about">ddd</section>
      </div>
    );
  }
}

export default App;
