import React, { useState, useEffect, useRef } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './navbar.css';
import '../LoggedPages/navbarLog.css';
import tutLogo from '../images/tut logo.png';

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();
  const sections = useRef({}); // Initialize sections with useRef


  useEffect(() => {
    // Assign the correct DOM elements to the sections
    sections.current = {
      home: document.getElementById('section_1'),
      about: document.getElementById('section_2'),
      news: document.getElementById('section_3'),
      faqs: document.getElementById('section_4'),
    };
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine the active section
      Object.entries(sections.current).forEach(([key, section]) => {
        if (section) {
          const { top, height } = section.getBoundingClientRect();
          const middleOfSection = top + height / 2;
          const viewportMiddle = window.innerHeight / 2;

          if (middleOfSection > 0 && middleOfSection <= viewportMiddle) {
            setActiveTab(key);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(loggedIn === 'true');
  }, []);


  
  const handleTabClick = (tabName, sectionId) => {
    setActiveTab(tabName);
  
    // Scroll adjustment to account for the fixed navbar height
    const section = document.getElementById(sectionId);
    const navbarHeight = document.getElementById('navbar').offsetHeight;
  
    if (section) {
      const sectionTop = section.offsetTop;
  
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          window.scrollTo({ top: sectionTop - navbarHeight, behavior: 'smooth' });
        }, 200);
      } else {
        window.scrollTo({ top: sectionTop - navbarHeight, behavior: 'smooth' });
      }
    }
  };
  

  

  return (
    <Navbar
      id="navbar"
      expand="lg"
      className={`navbar navbar-expand-lg navbar-light ${isScrolled ? 'navbar-scrolled' : 'homepage-bg'}`}
    >
      <Container>
        <Navbar.Brand onClick={() => handleTabClick('home', 'section_1')} style={{ cursor: 'pointer' }}>
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
              className={`nav-link mx-3 ${activeTab === 'news' ? 'active' : ''}`}
              onClick={() => handleTabClick('news', 'section_3')}
            >
              News
            </span>
            <span
              className={`nav-link mx-3 ${activeTab === 'faqs' ? 'active' : ''}`}
              onClick={() => handleTabClick('faqs', 'section_4')}
            >
              FAQs
            </span>
            <Link
              to="/donateUnLogged"
              className={`nav-link mx-3 donate-pulse ${activeTab === 'donate' ? 'active' : ''}`}
              onClick={() => setActiveTab('donate')}
            >
              <span className="fix-donate-color">Donate</span>
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