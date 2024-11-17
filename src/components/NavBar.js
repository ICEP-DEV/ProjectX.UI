import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link as ScrollLink } from 'react-scroll';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './navbar.css';
import '../LoggedPages/navbarLog.css';
import tutLogo from '../images/tut logo.png';

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('home'); // State for active tab
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDonateNavigation = () => {
    navigate('/donate');
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(loggedIn === 'true');
  }, []);

  // Function to set the active tab
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <Navbar
      id="navbar"
      expand="lg"
      className={`navbar navbar-expand-lg navbar-light ${isScrolled ? 'navbar-scrolled' : 'homepage-bg'}`}
    >
      <Container>
        <Navbar.Brand href="#section_1">
          <img src={tutLogo} alt="Tut Logo" style={{ width: '250px', height: 'auto' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-lg-5 me-lg-auto nav-links">
            <ScrollLink 
              to="section_1" 
              smooth={true} 
              duration={200} 
              offset={-100} 
              className={`nav-link mx-3 ${activeTab === 'home' ? 'active' : ''}`} 
              onClick={() => handleTabClick('home')}
            >
              Home
            </ScrollLink>
            <ScrollLink 
              to="section_2" 
              smooth={true} 
              duration={200} 
              offset={-50} 
              className={`nav-link mx-3 ${activeTab === 'about' ? 'active' : ''}`} 
              onClick={() => handleTabClick('about')}
            >
              What Is Alumni Space?
            </ScrollLink>
            <ScrollLink 
              to="section_4" 
              smooth={true} 
              duration={200} 
              offset={-50} 
              className={`nav-link mx-3 ${activeTab === 'faqs' ? 'active' : ''}`} 
              onClick={() => handleTabClick('faqs')}
            >
              FAQs
            </ScrollLink>
            <ScrollLink 
              to="section_5" 
              smooth={true} 
              duration={200} 
              offset={-70} 
              className={`nav-link mx-3 ${activeTab === 'contact' ? 'active' : ''}`} 
              onClick={() => handleTabClick('contact')}
            >
              Contact Us
            </ScrollLink>
            <a
              href="/DonateUnLogged"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link mx-3 donate-pulse"
            >
              <span className="fix-donate-color">Donate</span>
            </a>
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
