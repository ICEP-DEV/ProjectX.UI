import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import logo from '../images/aslogo.png';

const Footer = () => {
    return (
        <footer className="site-footer ss">
            <div className="container22">
                <div className="row footer-row">
                    <div className="col-lg-3 col-12 mb-4 pb-2">
                        <Link className="navbar-brand mb-2" to="/">
                            <img 
                                src={logo} 
                                alt="Logo"
                                style={{ width: '105px', height: '105px' }} 
                                className="graduation-icon"
                            />
                        </Link>
                    </div>

                    {/* Quick Links Section */}
                    <div className="col-lg-3 col-md-6 col-12 mb-4" id='links'>
                        <h6 className="site-footer-title mb-3">Quick Links</h6>
                        <ul className="site-footer-links">
                            <li className="site-footer-link-item">
                                <Link to="/logged#section_2" className="site-footer-linkf">About Us</Link>
                            </li>
                            <li className="site-footer-link-item">
                                <Link to="/donate" className="site-footer-linkf">Donate</Link>
                            </li>
                            <li className="site-footer-link-item">
                                <Link to="/logged#section_4" className="site-footer-linkf">FAQs</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media Section */}
                    <div className="col-lg-3 col-md-6 col-12 mb-4" id='linksss'>
                        <p className="site-footer-title mb-3" style={{ color: '#e6b012', fontSize: '25px' }}>Connect with us</p>
                        <div className="social-mediass">
                            <div className="social-iconss" onClick={() => window.open('https://www.facebook.com/TUTCommunications', '_blank')}>
                                <i className="fab fa-facebook-square"></i>
                            </div>
                            <div className="social-iconss" onClick={() => window.open('https://x.com/official_tut', '_blank')}>
                                <i className="fab fa-twitter-square"></i>
                            </div>
                            <div className="social-iconss" onClick={() => window.open('https://www.tut.ac.za', '_blank')}>
                                <i className="fab fa-tiktok"></i>
                            </div>
                            <div className="social-iconss" onClick={() => window.open('https://www.linkedin.com/company/official-tshwane-university-of-technology/posts/?feedView=all', '_blank')}>
                                <i className="fab fa-linkedin"></i>
                            </div>
                            <div className="social-iconss" onClick={() => window.open('https://www.youtube.com/channel/UCD4jxDpRYTarILQjtsEQv9Q?view_as=subscriber', '_blank')}>
                                <i className="fab fa-youtube-square"></i>
                            </div>
                            <div className="social-iconss" onClick={() => window.open('https://www.instagram.com/tut_official2/#', '_blank')}>
                                <i className="fab fa-instagram-square"></i>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className="row">
                    <div className="col-12 text-center">
                        <p className="footer-copyright">
                            Copyright © 2024 TUT - All Rights Reserved
                            <span className="privacy-policy"> | Privacy Policy & POPIA</span>
                        </p>
                        
                    </div>
                </div>
                
            </div>
        </footer>
    );
};

export default Footer;
