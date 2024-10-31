import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import tutLogo from '../images/tut logo.png';
import './navbarLog.css';

function NavbarLogged() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(loggedIn === 'true');
  }, []);

  useEffect(() => {
    if (location.pathname === '/alumni') {
      setActiveSection('/alumni');
    } else if (location.pathname === '/logged') {
      setActiveSection('/logged');
    } else {
      setActiveSection('');
    }
  }, [location]);

  const isActive = (section) => (activeSection === section ? 'active' : '');

  return (
    <Navbar id="navbarr" className="navbarr navbar-expand-lg navbar-light homepage-bgg">
      <Container className="justify-content-center">
        <Navbar.Brand href="#section_1" className="me-auto">
          <img src={tutLogo} alt="Tut Logo" style={{ width: '250px', height: 'auto' }} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="mx-auto justify-content-center"> {/* Center the nav items */}
            <Nav.Link className={`nav-link-spacing mx-2 ${isActive('/logged')}`} as={Link} to="/logged">Home</Nav.Link>
            <Nav.Link className={`nav-link-spacing mx-2 ${isActive('/alumni')}`} as={Link} to="/alumni">Alumni Community</Nav.Link>            
          </Nav>

          <span className="heading-colorr ms-auto">
            <i className="bi bi-mortarboard-fill graduation-iconn"></i>&nbsp; Alumni
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarLogged;
