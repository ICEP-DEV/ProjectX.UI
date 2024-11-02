import React, { useState } from 'react'; 
import './volunteer.css';
import Footer from './Footer';

const Volunteer = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true); // Show the popup when the button is clicked
  };

  const handleClosePopup = () => {
    setShowPopup(false); // Hide the popup when close button is clicked
  };

  return (
    <div>
      <div className="content">
        <div className="section ways-to-volunteer">
          <h3>Ways to volunteer:</h3>
          <ul>
            <li>
              <input type="radio" name="volunteer" id="mentor" />
              <label htmlFor="mentor">Be a mentor</label>
            </li>
            <li>
              <input type="radio" name="volunteer" id="tutor" />
              <label htmlFor="tutor">Be a tutor</label>
            </li>
            <li>
              <input type="radio" name="volunteer" id="speaker" />
              <label htmlFor="speaker">Be a motivational speaker</label>
            </li>
            <li>
              <input type="radio" name="volunteer" id="mc" />
              <label htmlFor="mc">Be an MC</label>
            </li>
          </ul>
          <button className="volunteer-btn" onClick={handleButtonClick}>Volunteer Now</button>
        </div>

        <div className="section benefits">
          <h3>What are the benefits?</h3>
          <ul>
            <li>Tax relief eligibility</li>
            <li>Recognition on the campaign webpage</li>
            <li>
              Publicity highlighting your company’s commitment to social responsibility and positive community impact through all the campaign communication platforms.
            </li>
          </ul>
        </div>

        {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <p>Thank you for choosing to volunteer! We will reach out to you soon.</p>
              <button onClick={handleClosePopup} className="close-popup-btn">Close</button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Volunteer;
