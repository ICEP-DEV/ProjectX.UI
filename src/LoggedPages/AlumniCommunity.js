import React from 'react';
import Footer from '../components/Footer';
import NavbarLogged from './NavbarLogged';
import './AlumniCommunity.css'; // Import the CSS file for styles

const AlumniCommunity = () => {
  return (
    <div className="alumni-community">
      <NavbarLogged />
      <div className="search-container">
        <input type="text" className="search-bar" placeholder="Search..." />
        <div className="icons">
          <i className="search-icon bi bi-search"></i>
          <i className="filter-icon bi bi-funnel"></i>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AlumniCommunity;
