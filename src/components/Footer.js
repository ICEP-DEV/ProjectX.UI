import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css'; // Ensure this CSS file is updated with the styles below
import logo from '../images/aslogo.png';

const Footer = () => {
    return (
        <footer className="site-footer section-padding">
            <div className="container2">
                <div className="row footer-row">
                <div className="col-lg-3 col-12 mb-4 pb-2">
                <Link className="navbar-brand mb-2" to="/">
                    <img 
                        src={logo} // Use the imported logo variable
                        alt="Logo"
                        style={{ width: '60px', height: '60px' }} 
                        className="graduation-icon"
                    />
                </Link>
                </div>


                    {/* Links Section */}
                    <div className="col-lg-3 col-md-6 col-12 mb-4" id='links'>
                        <h6 className="site-footer-title mb-3">Links</h6>
                        <ul className="site-footer-links">
                            <li className="site-footer-link-item">
                                <Link to="#section_1" className="site-footer-linkf">Home</Link>
                            </li>
                            <li className="site-footer-link-item">
                                <Link to="#section_4" className="site-footer-linkf">Contact Us</Link>
                            </li>
                            <li className="site-footer-link-item">
                                <Link to="/Donate" className="site-footer-linkf">Donate</Link>
                            </li>
                        </ul>
                    </div>

                                        {/* Links Section */}
                                        <div className="col-lg-3 col-md-6 col-12 mb-4" id='links'>
                        <h6 className="site-footer-title mb-3">Where To Find Us</h6>
                        <ul className="site-footer-links">
                            <li className="site-footer-link-item">
                            <p style={{ color: 'white' }}>081-355-6089</p>
                            </li>
                            <li className="site-footer-link-item">
                            <p style={{ color: 'white' }}>alumnispace@tut.ac.za</p>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
