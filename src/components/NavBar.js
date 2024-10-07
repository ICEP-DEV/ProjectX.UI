import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link as ScrollLink,animateScroll as scroll } from 'react-scroll'; // For smooth scroll on homepage
import { Link, useLocation,useNavigate } from 'react-router-dom'; // Import useLocation for route check
import './navbar.css';
import tutLogo from '../images/tut logo.png'; // Update path as needed
import axios from "axios";

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
  const location = useLocation(); // Check the current location
  const [userDetails, setUserDetails] = useState(null);
  const navigate = useNavigate();

  // Handle scroll effect
  const handleScroll = () => {
    console.log("Window scrollY:", window.scrollY); // Check scroll position
    setIsScrolled(window.scrollY > 50); // Trigger the scrolled state after 50px of scroll
  };

  useEffect(() => {
    const handleScroll = () => {
        setIsScrolled(window.scrollY > 50); // Check when scroll exceeds 50px
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
        window.removeEventListener('scroll', handleScroll); // Clean up listener
    };
}, []);

  

  // Function to handle Donate navigation and force the scroll to the top
  const handleDonateNavigation = () => {
    navigate('/Donate');
      window.scrollTo(0, 0); // Scroll to top after navigation
    
  };

  // Fetch login status from local storage

  
  // const handleLogout = async () => {
  //   try {
  //     await axios.post('/Alumnus/Logout');
  //     setIsLoggedIn(false);
  //     setUserDetails(null);
  //     navigate('/login');
  //   } catch (error) {
  //     console.error('Logout Error:', error);
  //   }
  // };

  return (
    <Navbar
      id="navbar"
      className={`navbar navbar-expand-lg navbar-light ${isScrolled ? 'navbar-scrolled' : 'homepage-bg'}`}
    >
      <Container>
        <Navbar.Brand href="#section_1">
          <i className="bi bi-mortarboard"></i>
          <span className="heading-color">
            Alumni<sup className="aspace"> Space</sup>
          </span>
          <img src={tutLogo} alt="Tut Logo" className="tut-logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-lg-5 me-lg-auto">
            {isLoggedIn ? (
              <>
                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                <Nav.Link as={Link} to="/about-us">About Us</Nav.Link>
                <Nav.Link as={Link} to="/alumni-community">Alumni Community</Nav.Link>
                <Nav.Link as={Link} to="/career-development">Career Development</Nav.Link>
                <Nav.Link as={Link} to="/news">News</Nav.Link>
                <Nav.Link as={Link} to="/donate">Donate</Nav.Link>
                <Nav.Link as={Link} to="/connect">Connect</Nav.Link>
              </>
            ) : (
              <>
                {/* Default links for non-logged-in users */}
                {location.pathname === '/Donate' || location.pathname === '/DonationForm' ? (
                  <>
                    <Nav.Link as={Link} to="/#section_1">Home</Nav.Link>
                    <Nav.Link as={Link} to="/#section_2">What Is Alumni Space?</Nav.Link>
                    <Nav.Link as={Link} to="/#section_3">FAQs</Nav.Link>
                    <Nav.Link as={Link} to="/#section_4">Contact Us</Nav.Link>
                  </>
                ) : (
                  <>
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
             <Nav.Link onClick={handleDonateNavigation}>Donate</Nav.Link>
              </>
            )}
          </Nav>

          {/* Custom Login/Logout Link */}
          <div className="d-none d-lg-block">
            {isLoggedIn ? (
              <Link to="/logout" className="navbar-icon bi-person" title="Logout"></Link>
            ) : (
              <Link to="/login" className="navbar-icon bi-person" title="Click here to login"></Link>
            )}
          </div>
          <div className="login-add-space">
            <p>{isLoggedIn ? 'Logout' : 'Login'}</p>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
