import React, { useState } from 'react';
import './volunteer.css';
import FooterLogged from './FooterLogged';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Volunteer = () => {
  const { state } = useLocation();
  const [showPopup, setShowPopup] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);
  const navigate = useNavigate();
  const alumnusId = sessionStorage.getItem('alumnusId'); // Ensure alumnusId is set in sessionStorage
  const { eventId, roles } = state; // Pass eventId via state or props

  const handleButtonClick = async () => {
    if (!eventId) {
      window.alert('Event ID is missing. Please try again.');
      return;
    }
  
    if (!selectedRole) {
      window.alert('Please select a role before volunteering.');
      return;
    }
  
    const data = {
      EventId: eventId,
      AlumnusId: alumnusId,
      Role: selectedRole, // Send only the selected role
    };
  
    console.log(data);
    try {
      const response = await axios.post(
        'http://localhost:5214/api/Alumnus/Volunteer/Volunteer',
        data
      );
  
      if (response.status === 200) {
        setShowPopup(true); // Show popup on success
      }
    } catch (error) {
      console.error('Error volunteering:', error);
      const errorMessage =
        error.response?.data || 'An error occurred while submitting your request.';
      window.alert(errorMessage);
    }
  };
  

  const handleClosePopup = () => {
    setShowPopup(false); // Hide the popup
    navigate('/Logged'); // Redirect to another page if needed
  };

  return (
    <div className="volunteer-container">
      <div className="content">
        <div className="">
        
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

          <button className="volunteer-btn" onClick={handleButtonClick}>
            Volunteer Now
          </button>
        </div>

        <div className="">
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
              <p>
                Thank you for volunteering as a {selectedRole}! We will reach out to you soon.
              </p>
              <button onClick={handleClosePopup} className="close-popup-btn">
                Close
              </button>
            </div>
          </div>
        )}
      </div>
      <FooterLogged />
    </div>
  );
};

export default Volunteer;
