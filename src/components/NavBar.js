import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link as ScrollLink } from 'react-scroll'; // For smooth scroll on homepage
import { Link, useLocation } from 'react-router-dom'; // Import useLocation for route check
import './navbar.css';
import tutLogo from '../images/tut logo.png'; // Update path as needed

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation(); // Check the current location

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
            
            {/* If we're on the donate page, link back to the homepage */}
            {location.pathname === '/Donate' ? (
              <>
                <Nav.Link as={Link} to="/#section_1">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/#section_2">
                  What Is Alumni Space?
                </Nav.Link>
                <Nav.Link as={Link} to="/#section_3">
                  FAQs
                </Nav.Link>
                <Nav.Link as={Link} to="/#section_4">
                  Contact Us
                </Nav.Link>
              </>
            ) : (
              <>
                {/* If we're already on the homepage, use smooth scroll */}
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
              </>
            )}
            <Nav.Link as={Link} to="/Donate">Donate</Nav.Link>
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
