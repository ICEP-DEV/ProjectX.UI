import React, { useEffect, useState, useRef } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navbarLog.css';
import tutLogo from '../images/tut logo.png';

function NavbarLogged() {
  const [displayText, setDisplayText] = useState('Logout');
  const [isFading, setIsFading] = useState(false);
  const textRef = useRef(null);

  const fadeDuration = 1000;
  const texts = [
    { text: 'Welcome back', duration: 5000 },
    { text: 'Mr. Chauke', duration: 5000 },
    { text: 'Logout', duration: 10000 },
  ];

  useEffect(() => {
    let currentIndex = 0;

    const cycleText = () => {
      setIsFading(true);
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % texts.length;
        setDisplayText(texts[currentIndex].text);
        setIsFading(false);
      }, fadeDuration);
    };

    const interval = setInterval(cycleText, fadeDuration + texts[currentIndex].duration);
    return () => clearInterval(interval);
  }, []);

  return (
    <Navbar id="navbarr" className="navbarr navbar-expand-lg navbar-light homepage-bgg">
      <Container className="d-flex justify-content-between align-items-left">
      <Navbar.Brand >
          <img src={tutLogo} alt="Tut Logo"  style={{ width: '250px', height: 'auto' }} />
      </Navbar.Brand>
        <div className="logout-section d-flex align-items-center">
          <Link to="/" className="d-flex align-items-center">
            <span
              ref={textRef}
              className={`toggle-text ${isFading ? 'fade-out' : 'fade-in'}`}
              style={{ transition: `opacity ${fadeDuration}ms`, opacity: isFading ? 0 : 1 }}
            >
              {displayText}
            </span>
            <i className="bi bi-box-arrow-right logout-icon" title="Click here to logout"></i>
          </Link>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavbarLogged;
