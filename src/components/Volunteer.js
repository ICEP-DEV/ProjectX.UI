import React from 'react';
import './volunteer.css'; // Import the CSS file for styling
import image2 from '../images/image2.jpg'; // Adjust the path as necessary
// import image2 from '../images/image2.jpg';

function Volunteer() {
  return (
    <div className="about-page">
      <div className="about-section">
        <h2 className="section-title">About Treact</h2>
        <p className="section-description">
          We are a modern design agency. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <a href="#" className="see-portfolio">See Portfolio</a>
        {/* Display the imported image */}
        <img src={image2} alt="Image 1" className="section-image" />
      </div>

      <div className="vision-section">
        <h2 className="section-title">Our Vision</h2>
        <p className="section-description">
          We aim to disrupt the design space. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        {/* You can import another image similarly if needed */}
        <img src={image2} alt="Image 2" className="section-image" />
      </div>
    </div>
  );
}

export default Volunteer;
