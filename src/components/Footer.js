import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FLogo from '../images/elements/e5.png';
import './footer.css';
import e4 from '../images/elements/e4.png';

const Footer = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const logo = e.target.closest('.footer-logo-container');
    if (!logo) return;

    const { left, top, width, height } = logo.getBoundingClientRect();
    const offsetX = e.clientX - left;
    const offsetY = e.clientY - top;

    const tiltX = ((offsetY / height) - 0.5) * 20;
    const tiltY = ((offsetX / width) - 0.5) * -20;

    setTilt({ x: tiltX, y: tiltY });
  };

  return (
    <footer className="footer">
        <div
    className="footer-bg-layer"
    style={{ backgroundImage: `url(${e4})` }}
  >
      <div className="footer-container">
        <div className="footer-section logo-social">
          <div className="footer-logo-container" onMouseMove={handleMouseMove}>
            <img
              src={FLogo}
              alt="Footer Logo"
              className="footer-logo"
              style={{
                transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
              }}
            />
          </div>
          <div className="footer-social">
            <a href="https://www.facebook.com/TUTCommunications"><i className="fab fa-facebook-f"></i></a>
            <a href="https://x.com/official_tut"><i className="fab fa-x-twitter"></i></a>
            <a href="https://www.instagram.com/tut_official2/#"><i className="fab fa-instagram"></i></a>
            <a href="https://www.tiktok.com/@tut_official1?lang=en"><i className="fab fa-tiktok"></i></a>
            <a href="https://www.linkedin.com/company/official-tshwane-university-of-technology/posts/?feedView=all"><i className="fab fa-linkedin"></i></a>
            <a href="https://www.youtube.com/channel/UCD4jxDpRYTarILQjtsEQv9Q?view_as=subscriber"><i className="fab fa-youtube"></i></a>
          </div>
        </div>

        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/#section_2">About Us</Link></li>
            <li><Link to="/donateUnLogged">Donate</Link></li>
            <li><Link to="/FAQs">FAQs</Link></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h4>Find Us</h4>
          <p className='tzcc2'>Block K, 2 Aubrey Matlakala St, Soshanguve-K, Soshanguve, 0152</p>
          <p><strong className='tzcc1'>Phone:</strong> <a href="tel:081-355-6089">081-355-6089</a></p>
          <p><strong className='tzcc1'>Email:</strong> <a href="mailto:info@company.com">info@company.com</a></p>
        </div>
      </div>

      <div className="footer-bottom">
        <p className='tzcc2'>© 2024 TUT. All Rights Reserved | Privacy Policy & POPIA</p>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
