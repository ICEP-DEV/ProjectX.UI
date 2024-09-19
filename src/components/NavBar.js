import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link as ScrollLink } from 'react-scroll'; // Import from react-scroll
import './navbar.css';
import { Link } from 'react-router-dom';
import tutLogo from '../images/tut logo.png'; // Update path as needed

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50); // Trigger the scrolled state after 50px of scroll
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar
      id="navbar"
      className={`navbar navbar-expand-lg navbar-light ${isScrolled ? 'navbar-scrolled' : 'homepage-bg'}`}
    >
      <Container>
        <Navbar.Brand href="#section_1">
          <i className="bi bi-mortarboard"></i>
          <span className="heading-color">
            Alumini<sup className="aspace"> Space</sup>
          </span>
          <img src={tutLogo} alt="Tut Logo" className="tut-logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-lg-5 me-lg-auto">
            <ScrollLink to="section_1" smooth={true} duration={200} className="nav-link">
              Home
            </ScrollLink>
            <ScrollLink to="section_2" smooth={true} duration={200} className="nav-link">
              What Is Alumni Space?
            </ScrollLink>
            <ScrollLink to="section_3" smooth={true} duration={200} className="nav-link">
              FAQs
            </ScrollLink>
            <ScrollLink to="section_4" smooth={true} duration={200} className="nav-link">
              Contact Us
            </ScrollLink>
            <Nav.Link as={Link} to="/Donate.js">Donate</Nav.Link>
           
          </Nav>
          {/* Custom Login Link */}
          <div className="d-none d-lg-block">
            <Link to="/login" className="navbar-icon bi-person" title="Click here to login"></Link>
          </div>
          <div className="login-add-space">
            <p>Login</p>
          </div>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
