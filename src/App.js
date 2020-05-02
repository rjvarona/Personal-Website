import React from 'react'
import ReactDOM from 'react-dom'
// import { useSpring, animated } from 'react-spring'
// import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
// import './styles.css' // // Icons made by Freepik from www.flaticon.com
import ParallaxName from './ParrallaxName.js'
import AboutMe from './AboutMe.js'
import Projects from './Projects.js'
import ContactMe from './ContactMe.js'
import Footer from './Footer.js'
import Food from './Food.js'
import Header from './Header.js'


import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import scrollToComponent from 'react-scroll-to-component';

class App extends React.Component {


  componentDidMount() {
    scrollToComponent(this.Blue, { offset: 0, align: 'middle', duration: 500, ease: 'inCirc' });
  }

  render() {
    return (
      <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />


        <Navbar bg="dark" expand="lg" fixed="top" >
          <Navbar.Brand onClick={() => scrollToComponent(this.Parallax, { offset: 0, align: 'top', duration: 1500 })} style={{color:"white"}}>RJV</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link style={{color:"white"}} onClick={() => scrollToComponent(this.About, { offset: 0, align: 'top', duration: 1500 })}>About</Nav.Link>
              <Nav.Link  style={{color:"white"}} onClick={() => scrollToComponent(this.Projects, { offset: 0, align: 'top', duration: 1500 })}>Projects</Nav.Link>
              <Nav.Link  style={{color:"white"}} onClick={() => scrollToComponent(this.Food, { offset: 0, align: 'top', duration: 1500 })}>Food</Nav.Link>
              <Nav.Link style={{color:"white"}}  onClick={() => scrollToComponent(this.ContactMe, { offset: 0, align: 'top', duration: 1500 })}>Contact</Nav.Link>

            </Nav>

          </Navbar.Collapse>
        </Navbar>

        {/* <Header /> */}


        <section className="Parallax" ref={(section) => { this.Parallax = section; }}>
          <ParallaxName />
        </section>

        <section className="About" ref={(section) => { this.About = section; }}>
          <AboutMe />
        </section>


        <section className="Projects" ref={(section) => { this.Projects = section; }}>
          <Projects />
        </section>

        <section className="Food" ref={(section) => { this.Food = section; }}>
          <Food />
        </section>

        <section className="ContactMe" ref={(section) => { this.ContactMe = section; }}>
          <ContactMe />
        </section>
        <Footer />


      </div>



    )
  }
}

export default App;
