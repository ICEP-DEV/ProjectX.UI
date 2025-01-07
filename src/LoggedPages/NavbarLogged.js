import React, { useEffect, useState, useRef } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { BsPersonCircle } from 'react-icons/bs';
import './navbarLog.css';
import tutLogo from '../images/tut logo.png';

function NavbarLogged() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeSection, setActiveSection] = useState('section_1');
  const [isProfileVisible, setIsProfileVisible] = useState(false);
  // const [isMobileView, setIsMobileView] = useState(window.innerWidth < 992);
  const location = useLocation();

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(loggedIn === 'true');
  }, []);

  // useEffect(() => {
  //   const handleResize = () => setIsMobileView(window.innerWidth < 992);
  //   window.addEventListener('resize', handleResize);
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

  const toggleProfileBox = () => setIsProfileVisible(!isProfileVisible);

  const handleLogout = () => {
    console.log('User logged out');
  };

  return (
    <Navbar id="navbarr" expand="lg" className="navbar navbar-light homepage-bgg">
      <Container>
        {/* Logo */}
        <Navbar.Brand href="#section_1">
          <img src={tutLogo} alt="Tut Logo" style={{ width: '250px', height: 'auto' }} />
        </Navbar.Brand>

        {/* Mobile menu toggle */}
        <Navbar.Toggle aria-controls="navbarNav" />

        {/* Navbar links */}
        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-lg-5 me-lg-auto">
            <Nav.Link
              className={`nav-link-spacing1 ${location.pathname === '/logged' ? 'active' : ''}`}
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

            {/* Career Development Dropdown */}
            <NavDropdown title="Career Development" id="career-development-dropdown" className="spacing">
              <NavDropdown title={<span className="custom-faculty-title">Faculties</span>} id="faculties-dropdown" drop="end">
                <NavDropdown.Item as={Link} to="/arts" className={location.pathname === '/arts' ? 'active' : ''}>FACULTY OF ARTS AND DESIGN</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/economics" className={location.pathname === '/economics' ? 'active' : ''}>FACULTY OF ECONOMICS AND FINANCE</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/engineering" className={location.pathname === '/engineering' ? 'active' : ''}>FACULTY OF ENGINEERING AND THE BUILT ENVIRONMENT</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/humanities" className={location.pathname === '/humanities' ? 'active' : ''}>FACULTY OF HUMANITIES</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/ict" className={location.pathname === '/ict' ? 'active' : ''}>FACULTY OF INFORMATION AND COMMUNICATION TECHNOLOGY</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/management" className={location.pathname === '/management' ? 'active' : ''}>FACULTY OF MANAGEMENT SCIENCES</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/science" className={location.pathname === '/science' ? 'active' : ''}>FACULTY OF SCIENCE</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown.Item as={Link} to="/job" className={location.pathname === '/job-opportunities' ? 'active' : ''}>Job Opportunities</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/radiopage" className={location.pathname === '/radiopage' ? 'active' : ''}>Podcasts</NavDropdown.Item>
            </NavDropdown>


              {/* News Dropdown */}
            <NavDropdown title="News" id="news-dropdown" className="spacing">
            <NavDropdown.Item as={Link} to="/news" className={location.pathname === '/news' ? 'active' : ''}>News</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/events" className={location.pathname === '/events' ? 'active' : ''}>Events</NavDropdown.Item>
            </NavDropdown>
            {/* <NavDropdown.Item 

            {/* Donate Link */}
            <Nav.Link
              className={`nav-link-spacing ${location.pathname === '/donate' ? 'active donate-pulse-log' : ''}`}
              as={Link}
              to="/donate"
            >
              Donate
            </Nav.Link>
          </Nav>

          {/* Display profile icon for mobile view */}
          {/* {isMobileView && ( */}
            <BsPersonCircle
              className="navbar-icon person-icon"
              title="Profile"
              style={{ color: '#003883', fontSize: '1.5rem', cursor: 'pointer' }}
              onClick={toggleProfileBox}
            />
          {/* )} */}

          {/* Profile box */}
          {isProfileVisible && (
            <div className="profile-box">
              <BsPersonCircle className="profile-box-icon" size={50} />
              <h3 className="profile-box-title">Profile</h3>
              <ul className="profile-box-links">
                <li><Link to="/resetpassword">Change Password</Link></li>
                <li><Link to="/edit-profile">Edit Profile</Link></li>
              </ul>
              <button className="logout-button" onClick={handleLogout}>
                Logout
              </button>
            </div>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarLogged;
