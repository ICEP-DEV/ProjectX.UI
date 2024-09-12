// src/components/Footer.js

import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css'; // Make sure to create or update this CSS file

const Footer = () => {
    return (
        <footer className="site-footer section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-12 mb-4 pb-2">
                        <Link className="navbar-brand mb-2" to="/">
                        <i className="bi bi-mortarboard-fill graduation-icon"></i> {/* Add a custom class */}
                           
                        </Link>
                    </div>

                    <div className="col-lg-3 col-md-4 col-6">
                        <h6 className="site-footer-title mb-3">Resources</h6>
                        <ul className="site-footer-links">
                            <li className="site-footer-link-item">
                                <Link to="/" className="site-footer-link">Home</Link>
                            </li>
                            <li className="site-footer-link-item">
                                <Link to="/how-it-works" className="site-footer-link">How it works</Link>
                            </li>
                            <li className="site-footer-link-item">
                                <Link to="/faqs" className="site-footer-link">FAQs</Link>
                            </li>
                            <li className="site-footer-link-item">
                                <Link to="/contact" className="site-footer-link">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-4 col-6 mb-4 mb-lg-0">
                        <h6 className="site-footer-title mb-3">Information</h6>
                        <p className="text-white d-flex mb-1">
                            <a href="tel:305-240-9671" className="site-footer-link">
                                305-240-9671
                            </a>
                        </p>
                        <p className="text-white d-flex">
                            <a href="mailto:info@company.com" className="site-footer-link">
                                info@company.com
                            </a>
                        </p>
                    </div>

                    <div className="col-lg-3 col-md-4 col-12 mt-4 mt-lg-0 ms-auto">
                        <p className="copyright-text mt-lg-5 mt-4">
                            Copyright © 2024 Project X. All rights reserved.
                            <br /><br />
                            Design: <a rel="noopener noreferrer" href="https://templatemo.com" target="_blank">TemplateMo</a>
                        </p>
                        <p className="copyright-text mt-lg-5 mt-4">
                            Editor: <a rel="noopener noreferrer" href="https://github.com/KISMETtakk" target="_blank">Project X (ICEP)</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
