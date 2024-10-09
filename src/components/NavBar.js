import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link as ScrollLink } from 'react-scroll'; // For smooth scrolling on same-page sections
import { Link, useLocation, useNavigate } from 'react-router-dom'; // For page navigation
import './navbar.css';
import tutLogo from '../images/tut logo.png'; // Update path as needed

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
  const location = useLocation(); // Check the current location
  const navigate = useNavigate();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Trigger the scrolled state after 50px of scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); // Clean up listener
    };
  }, []);

  // Function to handle Donate navigation and force the scroll to the top
  const handleDonateNavigation = () => {
    navigate('/donate');
    window.scrollTo(0, 0); // Scroll to top after navigation
  };

  // Fetch login status from localStorage
  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(loggedIn === 'true'); // Set login state based on storage value
  }, []);

  useEffect(() => {
    console.log("Login Status: ", isLoggedIn); // Debugging: check if the state is updating
  }, [isLoggedIn]);

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
            {/* For scrolling within the same page (use ScrollLink) */}
            {location.pathname !== '/Donate' && location.pathname !== '/DonationForm' && (
              <>
                <ScrollLink to="section_1" smooth={true} duration={200} className="nav-link">
                  Home
                </ScrollLink>
                <ScrollLink to="section_2" smooth={true} duration={200} className="nav-link">
                  What Is Alumini Space?
                </ScrollLink>
                <ScrollLink to="section_3" smooth={true} duration={200} className="nav-link">
                  FAQs
                </ScrollLink>
                <ScrollLink to="section_4" smooth={true} duration={200} className="nav-link">
                  Contact Us
                </ScrollLink>
              </>
            )}

            {/* Link for external page routing (use Link) */}
            <Nav.Link onClick={handleDonateNavigation}>Donate</Nav.Link>
          </Nav>

          {/* For routing to other pages (use Link) */}
          <div className="d-none d-lg-block">
            <Link to="/login" className="navbar-icon bi-person" title="Click here to login"></Link>
          </div>
          <div className="login-add-space">
            <Link to="/login">
              <p>Login</p>
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
