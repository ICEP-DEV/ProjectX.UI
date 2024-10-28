import React from 'react';
import NavbarLogged from './NavbarLogged';
import Footer from '../components/Footer';
import { FaSearch, FaFilter } from 'react-icons/fa';
import './SearchPage.css'; // Importing the CSS file for styles

const SearchPage = () => {
  return (
    <div className="search-page">
      <NavbarLogged />
      <div className="search-container">
        <div className="search-bar">
          <FaSearch className="icon search-icon" />
          <input type="text" placeholder="Search..." className="search-input" />
          <FaFilter className="icon filter-icon" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SearchPage;

