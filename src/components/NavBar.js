import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom'; // Added useLocation
import './navbar.css';
import '../LoggedPages/navbarLog.css';
import tutLogo from '../images/tut logo.png';

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const navigate = useNavigate();
  const location = useLocation(); // Tracks the current route

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTabClick = (tabName, section) => {
    setActiveTab(tabName);
    if (window.location.pathname !== '/') {
      navigate('/');
    }
    setTimeout(() => {
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100); // Delay to ensure navigation has completed
  };

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(loggedIn === 'true');
  }, []);

  // Determine active tab based on the current path
  useEffect(() => {
    switch (location.pathname) {
      case '/donateUnLogged':
        setActiveTab('donate');
        break;
      default:
        setActiveTab('home');
    }
  }, [location.pathname]);

  return (
    <Navbar
      id="navbar"
      expand="lg"
      className={`navbar navbar-expand-lg navbar-light ${isScrolled ? 'navbar-scrolled' : 'homepage-bg'}`}
    >
      <Container>
        <Navbar.Brand onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          <img src={tutLogo} alt="Tut Logo" style={{ width: '250px', height: 'auto' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-lg-5 me-lg-auto nav-links">
            <span
              className={`nav-link mx-3 ${activeTab === 'home' ? 'active' : ''}`}
              onClick={() => handleTabClick('home', 'section_1')}
            >
              Home
            </span>
            <span
              className={`nav-link mx-3 ${activeTab === 'about' ? 'active' : ''}`}
              onClick={() => handleTabClick('about', 'section_2')}
            >
              What Is Alumni Space?
            </span>
            <span
              className={`nav-link mx-3 ${activeTab === 'faqs' ? 'active' : ''}`}
              onClick={() => handleTabClick('faqs', 'section_4')}
            >
              FAQs
            </span>
            <span
              className={`nav-link mx-3 ${activeTab === 'contact' ? 'active' : ''}`}
              onClick={() => handleTabClick('contact', 'section_5')}
            >
              Contact Us
            </span>
            <Link
              to="/donateUnLogged"
              className={`nav-link mx-3 ${activeTab === 'donate' ? 'active donate-pulse' : ''}`}
            >
              Donate
            </Link>
          </Nav>

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
