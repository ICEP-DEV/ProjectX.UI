import React, { useEffect, useState } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation here
import { Link as ScrollLink } from 'react-scroll'; // For smooth scrolling
import './navbarLog.css';
import tutLogo from '../images/tut logo.png'; // Update path as needed

function NavbarLogged() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
  const [activeSection, setActiveSection] = useState('section_1'); // Track active section
  const [selectedAboutOption, setSelectedAboutOption] = useState('About Us'); // Track selected About Us option
  const location = useLocation(); // Get the current path

  // Fetch login status from localStorage
  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(loggedIn === 'true'); // Set login state based on storage value
  }, []);

  useEffect(() => {
    console.log("Login Status: ", isLoggedIn); // Debugging: check if the state is updating
  }, [isLoggedIn]);

  // Update active section on scroll
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

  // Function to determine if the link is active
  const isActive = (section) => (activeSection === section ? 'active' : '');

  // Function to handle option selection in the About Us dropdown
  const handleAboutOptionSelect = (option) => {
    setSelectedAboutOption(option);
  };

  // Options for the About Us dropdown
  const aboutOptions = [
    { label: 'What Is Alumni Space?', section: 'section_2' },
    { label: 'FAQs', section: 'section_4' },
    { label: 'Contact Us', section: 'section_5' },
  ];

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
            <ScrollLink to="section_1" smooth={true} duration={200} offset={-100} className={`nav-link mx-3 ${isActive('section_1')}`}>
              Home
            </ScrollLink>

            <NavDropdown title={selectedAboutOption} id="about-dropdown" className="spacing">
              {aboutOptions.map((option) => (
                <NavDropdown.Item
                  key={option.label}
                  onClick={() => handleAboutOptionSelect(option.label)}
                  className={selectedAboutOption === option.label ? 'active' : ''}
                >
                  <ScrollLink
                    to={option.section}
                    smooth={true}
                    duration={200}
                    offset={-50}
                    onClick={() => handleAboutOptionSelect(option.label)} // Change title on click
                  >
                    {option.label}
                  </ScrollLink>
                </NavDropdown.Item>
              ))}
            </NavDropdown>

            <ScrollLink to="section_3" smooth={true} duration={200} offset={-190} className={`nav-link mx-3 ${isActive('section_3')}`}>
              Donate
            </ScrollLink>

            <Nav.Link className={`nav-link-spacing ${isActive('/alumni')}`} as={Link} to="/alumni">Alumni Community</Nav.Link>

            <NavDropdown title="Career Development" id="career-development-dropdown" className="spacing">
              <NavDropdown title={<span className="custom-faculty-title">Faculties</span>} id="faculties-dropdown" drop="end">
                <NavDropdown.Item as={Link} to="/arts" className={isActive('/arts')}>FACULTY OF ARTS AND DESIGN</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/economics" className={isActive('/economics')}>FACULTY OF ECONOMICS AND FINANCE</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/engineering" className={isActive('/engineering')}>FACULTY OF ENGINEERING AND THE BUILT ENVIRONMENT</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/humanities" className={isActive('/humanities')}>FACULTY OF HUMANITIES</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ict" className={isActive('/ict')}>FACULTY OF INFORMATION AND COMMUNICATION TECHNOLOGY</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/management" className={isActive('/management')}>FACULTY OF MANAGEMENT SCIENCES</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown.Item className={isActive('/job-opportunities')}>Job Opportunities</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link className={`nav-link-spacing1 ${isActive('/news')}`} as={Link} to="/news">News</Nav.Link>
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
