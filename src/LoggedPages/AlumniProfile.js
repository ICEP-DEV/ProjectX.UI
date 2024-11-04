// AlumniProfile.js
import React from 'react';
import './AlumniProfile.css';

const AlumniProfile = ({ selectedAlumni, onClose }) => {
  if (!selectedAlumni) return null; // Hide component if no alumni is selected

  const { photo, name, surname, course, yearGraduated, faculty, studNum, email } = selectedAlumni;

  return (
    <div className="alumni-profile">
      <h2>Alumni Profile</h2>
      <div className="profile-overview">
        <img src={photo} alt={`${name} ${surname}`} className="profile-photo" />
        <div className="profile-info">
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Surname:</strong> {surname}</p>
          <p><strong>Faculty:</strong> {faculty || 'ICT'}</p>
          <p><strong>StudNum:</strong> {studNum || '221190987'}</p>
          <p><strong>Email:</strong> {email || 'example@gmail.com'}</p>
          <p><strong>Course:</strong> {course}</p>
          <div className="graduation-year">
            <strong>Class of:</strong> 
            {[...yearGraduated.toString()].map((digit, index) => (
              <span key={index} className="year-digit">{digit}</span>
            ))}
          </div>
        </div>
      </div>
      <button className="close-button" onClick={onClose}>Close</button>
    </div>
  );
};

export default AlumniProfile;
