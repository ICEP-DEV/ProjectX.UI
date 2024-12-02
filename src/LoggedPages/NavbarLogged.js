import React, { useEffect, useState, useRef } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import './navbarLog.css';
import tutLogo from '../images/tut logo.png';

function NavbarLogged() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeSection, setActiveSection] = useState('section_1');
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 992); // Tracks if the screen is less than 992px
  const location = useLocation();

  // Check screen width and update state
  useEffect(() => {
    const handleResize = () => setIsMobileView(window.innerWidth < 992);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(loggedIn === 'true');
  }, []);

  const isActive = (section) => (activeSection === section ? 'active' : '');

  return (
    <Navbar id="navbarr" expand="lg" className="navbar navbar-expand-lg navbar-light homepage-bgg">
      <Container>
        <Navbar.Brand href="#section_1">
          <img src={tutLogo} alt="Tut Logo" style={{ width: '250px', height: 'auto' }} />
        </Navbar.Brand>

        {/* Toggle for mobile menu */}
        <Navbar.Toggle aria-controls="navbarNav" />

        {/* Navbar links */}
        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-lg-5 me-lg-auto">
            <Nav.Link
              className={`nav-link-spacing1 ${location.pathname === '/news' ? 'active' : ''}`}
              as={Link}
              to="/logged"
            >
              Home
            </Nav.Link>
            <Nav.Link
              className={`nav-link-spacing ${location.pathname === '/alumni' ? 'active' : ''}`}
              as={Link}
              to="/alumni"
            >
              Alumni Community
            </Nav.Link>

            <NavDropdown title="Career Development" id="career-development-dropdown" className="spacing">
              <NavDropdown.Item as={Link} to="/arts">FACULTY OF ARTS AND DESIGN</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/economics">FACULTY OF ECONOMICS AND FINANCE</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/engineering">FACULTY OF ENGINEERING</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/ict">FACULTY OF INFORMATION AND COMMUNICATION TECHNOLOGY</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="News" id="news-dropdown" className="spacing">
              <NavDropdown.Item as={Link} to="/news">News</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/events">Events</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link
              className={`nav-link-spacing ${location.pathname === '/donate' ? 'active donate-pulse-log' : ''}`}
              as={Link}
              to="/donate"
            >
              Donate
            </Nav.Link>
          </Nav>

          {/* Conditionally render Logout button */}
          {isMobileView ? (
            <Nav.Link as={Link} to="/" className="logout-icon-mobile">
              Logout
            </Nav.Link>
          ) : (
            <div className="d-none d-lg-block">
              <Link
                to="/"
                className="navbar-icon bi-box-arrow-right logout-icon"
                title="Click here to logout"
                style={{ color: '#005596' }}
              ></Link>
            </div>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarLogged;
