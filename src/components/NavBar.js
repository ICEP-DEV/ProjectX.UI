import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'; // For smooth scroll on homepage
import { Link, useLocation, useNavigate } from 'react-router-dom'; // Import useLocation for route check
import './navbar.css';
import tutLogo from '../images/tut logo.png'; // Update path as needed

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation(); // Check the current location
  const navigate = useNavigate();  // Use navigate to handle route changes

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50); // Trigger the scrolled state after 50px of scroll
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to handle navigation and scrolling to the section
  const handleNavigation = (sectionId) => {
    if (location.pathname !== '/') {
      // If not on the homepage, navigate to it and scroll to the section
      navigate('/');
      setTimeout(() => {
        scroll.scrollTo(document.getElementById(sectionId).offsetTop);
      }, 10); // Delay to allow for the page to load
    } else {
      // If already on the homepage, use smooth scroll directly
      scroll.scrollTo(document.getElementById(sectionId).offsetTop);
    }
  };

  
  // Function to handle Donate navigation and force the scroll to the top
  const handleDonateNavigation = () => {
    navigate('/Donate');
      window.scrollTo(0, 0); // Scroll to top after navigation
    
  };

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
            
            {/* If on Donate or DonationForm page, navigate back to homepage */}
            {location.pathname === '/Donate' || location.pathname === '/DonationForm' ? (
              <>
                <Nav.Link onClick={() => handleNavigation('section_1')}>
                  Home
                </Nav.Link>
                <Nav.Link onClick={() => handleNavigation('section_2')}>
                  What Is Alumni Space?
                </Nav.Link>
                <Nav.Link onClick={() => handleNavigation('section_3')}>
                  FAQs
                </Nav.Link>
                <Nav.Link onClick={() => handleNavigation('section_4')}>
                  Contact Us
                </Nav.Link>
              </>
            ) : (
              <>
                {/* Smooth scroll on homepage */}
                <ScrollLink to="section_1" smooth={true} duration={50} className="nav-link">
                  Home
                </ScrollLink>
                <ScrollLink to="section_2" smooth={true} duration={50} className="nav-link">
                  What Is Alumni Space?
                </ScrollLink>
                <ScrollLink to="section_3" smooth={true} duration={50} className="nav-link">
                  FAQs
                </ScrollLink>
                <ScrollLink to="section_4" smooth={true} duration={50} className="nav-link">
                  Contact Us
                </ScrollLink>
              </>
            )}
             <Nav.Link onClick={handleDonateNavigation}>Donate</Nav.Link>
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
