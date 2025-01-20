import React, { useEffect, useState } from 'react';
import './footerlogged.css'; // Import your custom CSS for styling
import { Link } from 'react-router-dom';
import FLogo from '../images/aslogo.png';

const FooterLogged = () => {
    
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
      const handleMouseMove = (e) => {
        setCursorPosition({ x: e.clientX, y: e.clientY });
      };
  
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const [tilt, setTilt] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
      const logo = e.target.closest('.logo-container'); // Get the logo container
      const { left, top, width, height } = logo.getBoundingClientRect();
  
      // Get mouse position relative to the logo container
      const offsetX = e.clientX - left;
      const offsetY = e.clientY - top;
  
      // Calculate tilt values based on mouse position
      const tiltX = ((offsetY / height) - 0.5) * 30; // tilt range of -15deg to 15deg
      const tiltY = ((offsetX / width) - 0.5) * -40; // tilt range of -15deg to 15deg
  
      setTilt({ x: tiltX, y: tiltY });
    };
    
    return (
      <footer className="fo-footer_section">
        <div className="fo-widget_wrapper">
          <div className="container">
            <div className="row">
              {/* Logo and Social Media Section */}
              <div className="col-lg-6 col-md-6 col-12">
                <div className="fo-widget fo-widget_about">
                  <div className="logo-container" onMouseMove={handleMouseMove}>
                    <img
                      src={FLogo}
                      className="hover-logo"
                      alt="Animated Logo"
                      style={{
                        transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                      }}
                    />
                  </div>
                  <ul className="fo-social">
                    <li><a href="https://www.facebook.com/TUTCommunications"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="https://x.com/official_tut"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="https://www.instagram.com/tut_official2/#"><i className="fab fa-instagram"></i></a></li>
                    <li><Link to="/notfoundpage"><i className="fab fa-tiktok"></i></Link></li>
                    <li><a href="https://www.linkedin.com/company/official-tshwane-university-of-technology/posts/?feedView=all"><i className="fab fa-linkedin"></i></a></li>
                    <li><a href="https://www.youtube.com/channel/UCD4jxDpRYTarILQjtsEQv9Q?view_as=subscriber"><i className="fab fa-youtube-square"></i></a></li>
                  </ul>
                </div>
              </div>

              {/* Quick Links Section */}
              <div className="col-lg-2 col-md-6 col-sm-12">
  <div className="fo-widget fo-widget_links">
    <div className="fo-widget_title">
      <h4>Quick Links</h4>
    </div>
    <div className="fo-contact_info left-aligned"> {/* Added custom class here */}
      <div className="fo-single_info">
        <div className="fo-icon foot-icon-size-up icon-animation1">
          {/* <i className="fa-solid fa-circle-info "></i> */}
        </div>
        <div className="fo-info">
          <p className="site-footer-linkf"><Link to="/logged#section_7"><span className='Flinks'>What Is Alumni Space</span></Link></p>
        </div>
      </div>
      <div className="fo-single_info">
        <div className="fo-icon foot-icon-size-up icon-animation2">
          {/* <i className="fa-solid fa-hand-holding-dollar"></i> */}
        </div>
        <div className="fo-info">
          <p className="site-footer-linkf"><Link to="/donate"><span className='Flinks'>Donate</span></Link></p>
        </div>
      </div>
      <div className="fo-single_info">
        <div className="fo-icon foot-icon-size-up icon-animation3">
          {/* <i className="fa-solid fa-person-circle-question"></i> */}
        </div>
        <div className="fo-info">
          <p className="site-footer-linkf"><Link to="/logged#section_8"><span className='Flinks'>FAQs</span></Link></p>
        </div>
      </div>
    </div>
  </div>
</div>

            </div>
          </div>

          {/* Copyright Section */}
          <div className="fo-copyright_area">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="fo-copyright_text">
                    <p><span className='fo-copyright_text-paragraph'>Copyright &copy; 2024 TUT All Rights Reserved</span><span className='p-footer-space'>|</span><span className='fo-copyright_text-paragraph'>Privacy Policy & POPIA</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default FooterLogged;
