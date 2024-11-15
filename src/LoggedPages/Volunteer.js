import React, { useState } from 'react'; 
import './volunteer.css';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';

const Volunteer = () => {
  const { state } = useLocation();
  const roles = state?.roles || [];
  const [showPopup, setShowPopup] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);

  const handleButtonClick = () => {
    if (selectedRole) {
      setShowPopup(true); // Show the popup when the button is clicked
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false); // Hide the popup when close button is clicked
  };

  return (
   
     <div className="volunteer-container">
      <div className="content">
        <div className="section ways-to-volunteer">
          <h3>Volunteer for a role:</h3>
          <ul>
            {roles.map((role, index) => (
              <li key={index}>
                <input
                  type="radio"
                  name="volunteer"
                  id={role}
                  value={role}
                  onChange={() => setSelectedRole(role)}
                />
                <label htmlFor={role}>{role}</label>
              </li>
            ))}
          </ul>
          
          <button className="volunteer-btn" onClick={handleButtonClick}>Volunteer Now</button>
        </div>

        <div className="section benefits">
          <h3>What are the benefits?</h3>
          <ul>
            <li>Tax relief eligibility</li>
            <li>Recognition on the campaign webpage</li>
            <li>Publicity highlighting your commitment to community impact.</li>
          </ul>
        </div>
        

        {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <p>Thank you for volunteering as a {selectedRole}! We will reach out to you soon.</p>
              <button onClick={handleClosePopup} className="close-popup-btn">Close</button>
            </div>
          </div>
        )}

      </div>
      <Footer/>
    </div>
    
   
  );
};

export default Volunteer;

