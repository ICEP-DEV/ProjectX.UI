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
         {/* Only TUT Logo appears */}
         <Navbar.Brand href="#section_1">
           <img src={tutLogo} alt="Tut Logo" style={{ width: '250px', height: 'auto' }} />
        </Navbar.Brand>

      {/* Hamburger Toggle for mobile */}
          <Navbar.Toggle aria-controls="navbarNav" />

        <Navbar.Toggle aria-controls="navbarNav" />
       
         {/* Collapsible Nav content */}
         <Navbar.Collapse id="navbarNav">
          
          <Nav className="ms-lg-5 me-lg-auto">
             {/* If we're on the donate page, link back to the homepage */}
             {location.pathname === '/donate'  || location.pathname === '/donationForm' ?  (
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
