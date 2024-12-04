import React, { useEffect, useState, useRef } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link, useLocation} from 'react-router-dom';
import './navbarLog.css';
import tutLogo from '../images/tut logo.png';

function NavbarLogged() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeSection, setActiveSection] = useState('section_1');
  const [selectedAboutOption, setSelectedAboutOption] = useState('About Us');
  const [displayText, setDisplayText] = useState('Logout');
  const [isFading, setIsFading] = useState(false);
  const [iconPosition, setIconPosition] = useState(0);
  const location = useLocation();
  const textRef = useRef(null);
 
  
   // Scroll to the specified section
   const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(loggedIn === 'true');
  }, []);

  useEffect(() => {
    console.log("Login Status: ", isLoggedIn);
  }, [isLoggedIn]);

  const fadeDuration = 1000; // 1 second fade duration

  // Define texts and their corresponding display durations
  const texts = [
    { text: 'Logout', duration: 5000 },       // 5 seconds
    { text: 'Welcome back', duration: 5000 }, // 5 seconds
    { text: 'T Matiza', duration: 10000 },     // 10 seconds
  ];

  useEffect(() => {
    let currentIndex = 0;

    const cycleText = () => {
      setIsFading(true); // Start fading out

      setTimeout(() => {
        currentIndex = (currentIndex + 1) % texts.length; // Cycle through texts
        setDisplayText(texts[currentIndex].text);
        setIsFading(false); // Start fading in
      }, fadeDuration); // Wait for fade-out to finish

      // Adjust timing based on the displayed text
      const displayDuration = texts[currentIndex].duration; // Get duration for current text

      setTimeout(() => {
        setIsFading(true); // Start fading out again
      }, fadeDuration + displayDuration); // Wait for the display duration plus fade out
    };

    // Start cycling text on mount
    cycleText();

    // Interval for cycling text
    const interval = setInterval(cycleText, fadeDuration + texts[currentIndex].duration);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const updateIconPosition = () => {
      if (textRef.current) {
        const textWidth = textRef.current.offsetWidth;
        const logoutIconWidth = 50; // Adjust this to the actual width of the icon if necessary
        const newPosition = textWidth + logoutIconWidth + 10; // Add some spacing
        setIconPosition(newPosition);
      }
    };

    updateIconPosition();
    window.addEventListener('resize', updateIconPosition);

    return () => {
      window.removeEventListener('resize', updateIconPosition);
    };
  }, [displayText]);

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
                <NavDropdown.Item as={Link} to="/science" className={location.pathname === '/science' ? 'active' : ''}>FACULTY OF SCIENCE</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown.Item as={Link} to="/job" className={location.pathname === '/job-opportunities' ? 'active' : ''}>Job Opportunities</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/radiopage" className={location.pathname === '/radiopage' ? 'active' : ''}>Podcasts</NavDropdown.Item>
            </NavDropdown>


              {/* News Dropdown */}
            <NavDropdown title="News" id="news-dropdown" className="spacing">
            <NavDropdown.Item as={Link} to="/news" className={location.pathname === '/news' ? 'active' : ''}>News</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/events" className={location.pathname === '/events' ? 'active' : ''}>Events</NavDropdown.Item>
            
            {/* <NavDropdown.Item 
  as="a" 
  href="https://kismettakk.github.io/Responsive-Radio-HTML/" 
  target="_blank" 
  rel="noopener noreferrer"
>
  Radio Page
</NavDropdown.Item> */}

            </NavDropdown>

          {/* End News Dropdown */}
           
              <Nav.Link className={`nav-link-spacing ${location.pathname === '/donate' ? 'active donate-pulse-log' : ''}`} as={Link} to="/donate">Donate</Nav.Link>
          </Nav>

          <div className="d-none d-lg-block">
            <Link to="/" className="navbar-icon bi-box-arrow-right logout-icon" title="Click here to logout" style={{ transform: `translateX(${iconPosition}px)`, transition: 'transform 1s ease', color: '#005596' }}></Link>
          </div>
          <div className="login-add-space">
            <Link to="/">
              <p>
                <span
                  ref={textRef} // Attach ref here to measure text width
                  className={`toggle-text ${isFading ? 'fade-out' : 'fade-in'}`}
                  style={{ transition: `opacity ${fadeDuration}ms`, opacity: isFading ? 0 : 1 }}
                >
                  {displayText}
                </span>
              </p>
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarLogged;