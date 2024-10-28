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
    <Navbar id="navbarr" className="navbarr navbar-expand-lg navbar-light homepage-bgg">
      <Container>
        {/* Only TUT Logo appears */}
        <Navbar.Brand href="#section_1">
          <img src={tutLogo} alt="Tut Logo" style={{ width: '250px', height: 'auto' }} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-lg-5 me-lg-auto">
            {/* Navigation links */}
            <Nav.Link className="nav-link-spacing" as={Link} to="/home">Home</Nav.Link>

            <NavDropdown title="About Us" id="about-dropdown"  className="spacing">
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
            <Nav.Link className="nav-link-spacing" as={Link} to="/alumni">Alumni Community</Nav.Link>

            <NavDropdown title="Career Development" id="career-development-dropdown"  className="spacing">
              
              <NavDropdown title={<span className="custom-faculty-title">Faculties</span>} id="faculties-dropdown" drop="end" >
                <NavDropdown.Item as={Link} to="/arts">FACULTY OF ARTS AND DESIGN</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/economics">FACULTY OF ECONOMICS AND FINANCE</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/engineering">FACULTY OF ENGINEERING AND THE BUILT ENVIRONMENT</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/humanities">FACULTY OF HUMANITIES</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ict">FACULTY OF INFORMATION AND COMMUNICATION TECHNOLOGY</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/management">FACULTY OF MANAGEMENT SCIENCES</NavDropdown.Item>
              </NavDropdown>
              
              <NavDropdown.Item>Job Opportunities</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link className="nav-link-spacing" as={Link} to="/news">News</Nav.Link>
            <Nav.Link className="nav-link-spacing" as={Link} to="/donate">Donate</Nav.Link>
          </Nav>

          <span className="heading-colorr">
            <i className="bi bi-mortarboard-fill graduation-iconn"></i>&nbsp; Alumni
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarLogged;
