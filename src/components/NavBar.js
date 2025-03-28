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
      // news: document.getElementById('News.js'),
      // faqs: document.getElementById('section_4'),
    };
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
  
      let currentTab = activeTab; // Store the previous tab to avoid rapid switching
  
      Object.entries(sections.current).forEach(([key, section]) => {
        if (section) {
          const { top } = section.getBoundingClientRect();
          const navbarHeight = document.getElementById('navbar').offsetHeight;
  
          if (top <= navbarHeight + 50 && top >= -section.offsetHeight / 2) {
            currentTab = key;
          }
        }
      });
  
      setActiveTab(currentTab);
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeTab]);
  
  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(loggedIn === 'true');
  }, []);


  useEffect(() => {
    // Update the active tab based on the current pathname
    if (location.pathname === '/radiopage') {
      setActiveTab('podcasts');
    } else if (location.pathname === '/') {
      // If on the home page, update the tab based on scroll position or clicked tab
      Object.entries(sections.current).forEach(([key, section]) => {
        if (section) {
          const { top } = section.getBoundingClientRect();
          const navbarHeight = document.getElementById('navbar').offsetHeight;
          if (top <= navbarHeight + 50 && top >= -section.offsetHeight / 2) {
            setActiveTab(key);
          }
        }
      });
    }
  }, [location.pathname]);
  
  const handleTabClick = (tabName, sectionId) => {
  
    const section = document.getElementById(sectionId);
    const navbarHeight = document.getElementById('navbar').offsetHeight;

    setActiveTab(tabName); // Immediately highlight the clicked tab
  if(tabName === 'news'){

    navigate('/news') //Reidrect to news page
  }
    else if (section) {
      // If section exists, scroll to it directly
      const sectionTop = section.offsetTop;
      window.scrollTo({ top: sectionTop - navbarHeight, behavior: 'smooth' });
    } else {
      // If section does not exist, check which page the user is on
      if (location.pathname !== '/') {
        // On a different page, navigate to home and scroll to the section
        navigate('/');  
        setTimeout(() => {
          const sectionOnHome = document.getElementById(sectionId);
          if (sectionOnHome) {
            const sectionTop = sectionOnHome.offsetTop;
            window.scrollTo({ top: sectionTop - navbarHeight, behavior: 'smooth' });
          }
        }, 200);
      } else {
        // If on the home page, just navigate or scroll to the section
        const sectionOnHome = document.getElementById(sectionId);
        if (sectionOnHome) {
          const sectionTop = sectionOnHome.offsetTop;
          window.scrollTo({ top: sectionTop - navbarHeight, behavior: 'smooth' });
        }
      }
    }
  };
  
  const handlePodcastClick = () => {
    navigate('/radiopage');
    setTimeout(() => {
      setActiveTab('podcasts'); // Ensure the podcast tab is set after navigation
    }, 200);
  };

  useEffect(() => {
    if (location.pathname === '/radiopage') {
      setActiveTab('podcasts');
    }
  }, [location.pathname]);
  
  const handleNewsClick = () => {
    setActiveTab('news'); // Set it as active immediately
    navigate('/news'); // Redirect to the news page
  };
  
  useEffect(() => {
    if (location.pathname === '/news') {
      setActiveTab('news'); // Ensure the active tab is 'news' when on the news page
    }
  }, [location.pathname]);

  
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
  onClick={handleNewsClick}
>
  News
</span>

            {/* <span
              className={`nav-link mx-3 ${activeTab === 'faqs' ? 'active' : ''}`}
              onClick={() => handleTabClick('faqs', '/news')}
            >
              FAQs
            </span> */}
            <span
              className={`nav-link mx-3 ${activeTab === 'podcasts' ? 'active' : ''}`}
              onClick={() => handlePodcastClick()}
            >
              Podcasts
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
