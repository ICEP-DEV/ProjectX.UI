import React, { useEffect, useState } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // For page navigation
import { Link as ScrollLink } from 'react-scroll'; // For smooth scrolling
import './navbarLog.css';
import tutLogo from '../images/tut logo.png'; // Update path as needed

function NavbarLogged() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
 
  // Fetch login status from localStorage
  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(loggedIn === 'true'); // Set login state based on storage value
  }, []);

  useEffect(() => {
    console.log("Login Status: ", isLoggedIn); // Debugging: check if the state is updating
  }, [isLoggedIn]);



  return (
    <Navbar id="navbarr" className="navbarr navbar-expand-lgg navbar-light homepage-bgg">
      <Container>
        {/* Only TUT Logo appears */}
        <Navbar.Brand href="#section_1">
           <img src={tutLogo} alt="Tut Logo" style={{ width: '250px', height: 'auto' }} />
        </Navbar.Brand>


        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
        <Nav className="ms-lg-5 me-lg-auto">
            {/* Navigation links */}
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <NavDropdown title="About Us" id="about-dropdown"> {/* Dropdown for About Us */}
              <NavDropdown.Item>
                <ScrollLink to="section_2" smooth={true} duration={200}>
                  What Is Alumni Space?
                </ScrollLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <ScrollLink to="section_3" smooth={true} duration={200}>
                  FAQs
                </ScrollLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <ScrollLink to="section_4" smooth={true} duration={200}>
                  Contact Us
                </ScrollLink>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/alumni">Alumni Community</Nav.Link>
            <NavDropdown title="Career Development" id="about-dropdown">
            <NavDropdown.Item>
               Falcuties
            </NavDropdown.Item> 
            <NavDropdown.Item>
               Job Opportunies
            </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/news">News</Nav.Link>
            <Nav.Link as={Link} to="/donate">Donate</Nav.Link>
          </Nav>

          <span className="heading-colorr">
          <i className="bi bi-mortarboard-fill graduation-iconn"></i>&nbsp; Alumni
          </span>

          {/* Login Link */}
          {/*<div className="d-none d-lg-block">
            <Link to="/login" className="navbar-icon bi-person" title="Click here to login"></Link>
          </div>
          <div className="login-add-space">
            <Link to="/login">
              <p>Login</p>
            </Link>
          </div> */}

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarLogged;
