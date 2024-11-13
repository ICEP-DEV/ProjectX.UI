import React, { useEffect, useState } from "react";
import './ConfirmProfile.css';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

export default function ConfirmProfile() {
  const [profile, setProfile] = useState({
    alumnusId:'',
    firstName: '',
    lastName: '',
    graduationYear: '',
    campus: '',
    faculty: '',
    linkedinProfile: '',
    profilePicture: ''
  });


  const navigate = useNavigate();


  // Handle form submission and navigate to logged.js
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/Logged');
  };

  return (
    <section className="bg-gray-900 text-gray-100">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="w-full max-w-md p-8 space-y-6 rounded-lg shadow-lg bg-gray-800">
          <h2 className="text-2xl font-semibold text-center text-indigo-200">Confirm Your Profile</h2>

          {/* Circular User Icon */}
          <div className="flex flex-col items-center">
            <label htmlFor="file-upload" className="relative cursor-pointer mb-4">
              <div className="w-28 h-28 rounded-full overflow-hidden flex items-center justify-center bg-indigo-600 transition-transform duration-300 hover:scale-110">
                {/* {profile.profilePicture ? ( 
                  <img src={profile.profilePicture} alt="User" className="w-full h-full object-cover" />
                ) : */}( 
                  <span className="text-white text-3xl">👤</span>
                )
              </div>
            </label>
          </div>

          {/* Form for user details */}
          <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-indigo-200/65" htmlFor="stuno">
                    Student Number 
                  </label>
                  <input
                    type="text"
                    id="stuno"
                    className="w-full p-2 rounded-lg bg-gray-700 text-gray-300"
                    placeholder="Student number"
                    value={profile.alumnusId}
                    readOnly
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-indigo-200/65" htmlFor="name">
                    First Name 
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-2 rounded-lg bg-gray-700 text-gray-300"
                    placeholder="First name"
                    value={profile.firstName}
                    readOnly
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-indigo-200/65" htmlFor="surname">
                    Last Name 
                  </label>
                  <input
                    type="text"
                    id="surname"
                    className="w-full p-2 rounded-lg bg-gray-700 text-gray-300"
                    placeholder="Last name"
                    value={profile.lastName}
                    readOnly
                  />
                </div>
                <button type="button" onClick={nextStep} className="btn w-full text-white mt-4">
                  Next
                </button>
              </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
                  <button type="button" onClick={prevStep} className="btn text-white" style={{ marginRight: 'auto' }}>
                    Back
                  </button>
                  <button type="submit" className="btn text-white" style={{ marginLeft: 'auto' }} disabled={signUpLoading}>
                   {signUpLoading ? 'Loading...' : 'Confirm'}
                  </button>
                </div>

        </form>
);
};

