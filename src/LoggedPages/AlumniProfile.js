import React, { useState, useEffect } from 'react';
import './AlumniProfile.css';

const AlumniProfile = ({ alumni, isVisible, onClose }) => {
  if (!alumni) return null;

  return (
    <div className={`alumni-modal ${isVisible ? 'fade-in' : 'fade-out'}`}>
      <div className="alumni-modal-content">
        <span className="close-icon" onClick={onClose}>&times;</span>
        <img src={alumni.photo} alt={`${alumni.name} ${alumni.surname}`} className="alumni-modal-photo" />
        <div className="alumni-modal-info">
          <h2>{alumni.name} {alumni.surname}</h2>
          <p><strong>Student Number:</strong> {alumni.stuno}</p>
          <p><strong>Course:</strong> {alumni.course}</p>
          <p><strong>Year Graduated:</strong> {alumni.yearGraduated}</p>
        </div>
      </div>
    </div>
  );
};

export default AlumniProfile;
