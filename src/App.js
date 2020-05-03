import React, { Suspense, lazy } from 'react'
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
import mobilReplacement from './mobileReplacement.js'

import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import scrollToComponent from 'react-scroll-to-component';
import PacmanLoader from "react-spinners/PacmanLoader";
import ScrollAnimation from 'react-animate-on-scroll';

import Resume from './components/food/resume.pdf'



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      render: true //Set render state to false
    }
  }



  state = {
    isMobile: false
  }

  handleWindowResize = () => {
    this.setState({ isMobile: window.innerWidth < 800 });
  }



  componentDidMount() {
    window.addEventListener('resize', this.onWindowResize);
    scrollToComponent(this.Blue, { offset: 0, align: 'middle', duration: 500, ease: 'inCirc' });

    setTimeout(function () { //Start the timer
      this.setState({ render: false }) //After 1 second, set render to true
    }.bind(this), 3000)


  }


  componentWillUnmount() {
    window.removeEventListener('resize', this.onWindowResize);
  }

  
  handleSearch() {
    window.location.assign(Resume);
  }

  render() {
    const { items } = this.props;
    const isMobile = window.innerWidth < 600;
    const showItems = isMobile ? <mobilReplacement /> : <ParallaxName />;
    
    if (this.state.render) {
      return (
        <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>

          <PacmanLoader
            size={50}
            color={"#123abc"}
            loading={this.state.render}

          />
        </div>)
    }
    else {
      return (

        <div>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />


          <Navbar style={{ backgroundColor: "blue"}} expand="lg" fixed="top" >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link style={{ color: "white" }} onClick={() => scrollToComponent(this.About, { offset: 0, align: 'top', duration: 1500 })}>About</Nav.Link>
                <Nav.Link style={{ color: "white" }} onClick={() => scrollToComponent(this.Projects, { offset: 0, align: 'top', duration: 1500 })}>Projects</Nav.Link>
                <Nav.Link style={{ color: "white" }} onClick={() => scrollToComponent(this.Food, { offset: 0, align: 'top', duration: 1500 })}>Food</Nav.Link>
                <Nav.Link style={{ color: "white" }} onClick={() => scrollToComponent(this.ContactMe, { offset: 0, align: 'top', duration: 1500 })}>Contact</Nav.Link>
                <Nav.Link style={{ color: "white" }} onClick={() => this.handleSearch()}> Resume</Nav.Link>
              
              </Nav>

            </Navbar.Collapse>
          </Navbar>

          {/* <Header /> */}


          <ScrollAnimation animateIn="fadeIn" delay={500} animateOnce="true">
            <section className="Parallax" ref={(section) => { this.Parallax = section; }} showItems={showItems}>
              {showItems}
            </section>

          </ScrollAnimation>
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
}

export default App;
