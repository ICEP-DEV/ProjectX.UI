// NavbarLogged.js

import React, { useEffect, useState } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import './navbarLog.css';
import tutLogo from '../images/tut logo.png';

function NavbarLogged() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeSection, setActiveSection] = useState('section_1');
  const [selectedAboutOption, setSelectedAboutOption] = useState('About Us');
  const location = useLocation();

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(loggedIn === 'true');
  }, []);

  useEffect(() => {
    console.log("Login Status: ", isLoggedIn);
  }, [isLoggedIn]);

  const handleScroll = () => {
    const sections = ['section_1', 'section_2', 'section_3', 'section_4', 'section_5'];
    let currentSection = '';

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const top = element.getBoundingClientRect().top;
        if (top <= window.innerHeight / 2 && top >= -element.clientHeight / 2) {
          currentSection = section;
        }
      }
    });

    if (currentSection) {
      setActiveSection(currentSection);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isActive = (section) => (activeSection === section ? 'active' : '');

  const handleAboutOptionSelect = (option) => {
    setSelectedAboutOption(option);
  };

  const aboutOptions = [
    { label: 'What Is Alumni Space?', section: 'section_2' },
    { label: 'FAQs', section: 'section_4' },
    { label: 'Contact Us', section: 'section_5' },
  ];

  return (
    <Navbar id="navbarr" className="navbarr navbar-expand-lg navbar-light homepage-bgg">
      <Container>
        <Navbar.Brand href="#section_1">
          <img src={tutLogo} alt="Tut Logo" style={{ width: '250px', height: 'auto' }} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-lg-5 me-lg-auto">

          <Nav.Link className={`nav-link-spacing1 ${location.pathname === '/news' ? 'active' : ''}`} as={Link} to="/logged">Home</Nav.Link>     


            <Nav.Link className={`nav-link-spacing ${location.pathname === '/alumni' ? 'active' : ''}`} as={Link} to="/alumni">Alumni Community</Nav.Link>

            <NavDropdown title="Career Development" id="career-development-dropdown" className="spacing">
              <NavDropdown title={<span className="custom-faculty-title">Faculties</span>} id="faculties-dropdown" drop="end">
                <NavDropdown.Item as={Link} to="/arts" className={location.pathname === '/arts' ? 'active' : ''}>FACULTY OF ARTS AND DESIGN</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/economics" className={location.pathname === '/economics' ? 'active' : ''}>FACULTY OF ECONOMICS AND FINANCE</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/engineering" className={location.pathname === '/engineering' ? 'active' : ''}>FACULTY OF ENGINEERING AND THE BUILT ENVIRONMENT</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/humanities" className={location.pathname === '/humanities' ? 'active' : ''}>FACULTY OF HUMANITIES</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ict" className={location.pathname === '/ict' ? 'active' : ''}>FACULTY OF INFORMATION AND COMMUNICATION TECHNOLOGY</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/management" className={location.pathname === '/management' ? 'active' : ''}>FACULTY OF MANAGEMENT SCIENCES</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown.Item as={Link} to="/job-opportunities" className={location.pathname === '/job-opportunities' ? 'active' : ''}>Job Opportunities</NavDropdown.Item>
            </NavDropdown>

            <span className='news-donate-add-space'>
                <Nav.Link className={`nav-link-spacing1 ${location.pathname === '/news' ? 'active' : ''}`} as={Link} to="/news">Events</Nav.Link>               
            </span>
            <Nav.Link className={`nav-link-spacing ${location.pathname === '/donate' ? 'active donate-pulse' : ''}`} as={Link} to="/donate">Donate</Nav.Link>
           
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
