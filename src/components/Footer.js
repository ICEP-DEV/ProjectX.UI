import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css'; // Make sure to create or update this CSS file

const Footer = () => {
    return (
        <footer className="site-footer section-padding">
            <div className="container2">
                <div className="row">
                    <div className="col-lg-3 col-12 mb-4 pb-2">
                        <Link className="navbar-brand mb-2" to="/">
                            <i className="bi bi-mortarboard-fill graduation-icon"></i>
                        </Link>
                    </div>
                    <div className="col-lg-3 col-md-4 col-6">
                        <h6 className="site-footer-title mb-3">Links</h6>
                        <ul className="site-footer-links">
                            <li className="site-footer-link-item">
                                <Link to="#section_1" className="site-footer-link">Home</Link>
                            </li>
                            <li className="site-footer-link-item">
                                <Link to="#section_4" className="site-footer-link">Contact Us</Link>
                            </li>
                            <li className="site-footer-link-item">
                                <Link to="/Donate" className="site-footer-link">Donate</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-4 col-6 mb-4 mb-lg-0">
                        <h6 className="site-footer-title mb-3">Where To Find Us</h6>
                        <p className="text-white d-flex mb-4">
                            <a href="tel:081-355-6089" className="site-footer-link">081-355-6089</a>
                        </p>
                        <p className="text-white d-flex">
                            <a href="mailto:info@company.com" className="site-footer-link">alumnispace@tut.ac.za</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
