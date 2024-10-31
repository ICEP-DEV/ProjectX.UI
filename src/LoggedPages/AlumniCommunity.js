import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';

import './AlumniCommunity.css';

// Import images directly
import Image1 from './SearchBarDemoImages/formal photo.jpg';
import Image2 from './SearchBarDemoImages/1.jpg';
import Image3 from './SearchBarDemoImages/2.png';
import GraduationHatIcon from './SearchBarDemoImages/aslogo.png'; // Import the graduation hat icon

const AlumniCommunity = () => {
  // Alumni data array with specific image imports
  const alumniData = [
    { photo: Image1, name: 'Tshiamo', surname: 'Matiza' },
    { photo: Image2, name: 'Tshiamo', surname: 'Madukadzhi' },
    { photo: Image3, name: 'Tshiamo', surname: 'Mazibuko' },
    
    // Add more alumni as needed
  ];

  const [searchInput, setSearchInput] = useState('');
  const [filteredAlumni, setFilteredAlumni] = useState(alumniData);
  const [loading, setLoading] = useState(false);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchInput(value);
    setLoading(true); // Start loading animation

    setFilteredAlumni(
      alumniData.filter((alumni) =>
        alumni.name.toLowerCase().includes(value.toLowerCase()) ||
        alumni.surname.toLowerCase().includes(value.toLowerCase())
      )
    );

    // Stop loading after a short delay (simulate loading time)
    setTimeout(() => {
      setLoading(false);
    }, 500); // Adjust this timeout as needed
  };

  // Function to highlight matching text
  const highlightText = (text, search) => {
    if (!search) return text; // Return original text if no search input
    const regex = new RegExp(`(${search})`, 'gi'); // Create a regex to match search input
    return text.split(regex).map((part, index) => 
      regex.test(part) ? <span key={index} style={{ color: '#30ffec' }}>{part}</span> : part
    );
  };

  return (
    <div className="alumni-community">
    

      <section className="hero-section d-flex justify-content-center align-items-center" id="section_1">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-12 mx-auto text-center"></div>
              <div className="col-lg-8 col-12 mx-auto">
                <h1 className="text-black text-center">Connect. Inspire. Celebrate.</h1>
                <h6 className="text-center">A Hub for TUT Graduates</h6>
              </div>
            </div>
          </div>
        </section>

      <div className="search-container">
        <i className="search-icon bi bi-search"></i>
        <input 
          type="text" 
          className="search-bar" 
          placeholder="Search Alumnus..." 
          value={searchInput} 
          onChange={handleSearch} 
        />
        <button className="search-button">Search</button>
      </div>

      {(loading || searchInput) && ( // Show loading animation or results-container based on state
        <div className="results-container">
          {loading ? (
            <div className="loading-animation">
              <img 
                src={GraduationHatIcon} 
                alt="Loading..." 
                className="graduation-hat-icon" 
              />
            </div>
          ) : (
            <>
              <div className="results-header">
                <h3>Results Found ({filteredAlumni.length})</h3>
                <div className="filter-results">
                  <i className="bi bi-funnel"></i><span className='fr-add-space'>Filter Results</span>
                </div>
              </div>
              {filteredAlumni.map((alumni, index) => (
                <div key={index} className="alumni-card">
                  <img src={alumni.photo} alt={`${alumni.name} ${alumni.surname}`} className="alumni-photo" />
                  <div className="alumni-info">
                    <p>
                      <span className="label">Name: </span> 
                      <span style={{ color: 'white' }}>{highlightText(alumni.name, searchInput)}</span>
                    </p>
                    <p>
                      <span className="label">Surname: </span> 
                      <span style={{ color: 'white' }}>{highlightText(alumni.surname, searchInput)}</span>
                    </p>
                  </div>
                  <a href="#" className="view-alumni">> View Alumni</a>
                </div>
              ))}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default AlumniCommunity;
