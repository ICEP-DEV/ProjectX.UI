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
  const [currentStep, setCurrentStep] = useState(1);
  const [signUpLoading, setSignUpLoading] = useState(false);
  const [studentNum, setStudentNum] = useState('');
  // Fetch the profile data when the component loads
  useEffect(() => {
    fetchProfile();
  }, []); 

  const fetchProfile = async () => {
    try {
      const response = await fetch("http://localhost:5214/api/Alumnus/GetAlumnusProfile/GetAlumnusProfile", {
        method: "GET",
        credentials: 'include' // Include cookies in the request
      });
      console.log("Response status:", response.status); // Check status
      if (response.ok) {
        const data = await response.json();
        console.log("Fetched data:", data); // Log data to verify it
        setProfile({
          alumnusId:data.alumnusId,
          firstName: data.firstName,
          lastName: data.lastName,
          graduationYear: data.graduationYear,
          campus: data.campus,
          faculty: data.faculty,
          linkedinProfile: data.linkedinProfile,
          profilePicture: data.profilePicture
        });
        
      } else if (response.status === 204) {
        console.log("No content found");
      } else {
        console.log("Error fetching profile:", response.statusText);
      }
    } catch (error) {
      console.error("There was an error fetching the profile:", error);
    }
  };
  

  // Handlers for navigation between sections
  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  // Handle LinkedIn input change
  const handleLinkedInChange = async (e) => {
    const updatedProfile = {
      ...profile,
      linkedinProfile: e.target.value,
    };
    setProfile(updatedProfile);

    const data = {
      studentNum: updatedProfile.alumnusId,
      linkedinProfile: updatedProfile.linkedinProfile,
    };

    try {
      console.log(data);
      const response = await axios.put(
        `http://localhost:5214/api/Alumnus/UpdateProfile/UpdateProfile`,
        data
      );
      alert("Profile updated!");
    } catch (error) {
      console.error('Profile Error:', error);
    } finally {
      setSignUpLoading(false);
    }
  };


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
            {/* Section 1 */}
            {currentStep === 1 && (
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
            )}

            {/* Section 2 */}
            {currentStep === 2 && (
              <div className="space-y-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-indigo-200/65" htmlFor="email">
                    Graduation Year 
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-2 rounded-lg bg-gray-700 text-gray-300"
                    placeholder="Graduation year"
                    value={profile.graduationYear}
                    readOnly
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-indigo-200/65" htmlFor="campus">
                    Campus 
                  </label>
                  <input
                    type="text"
                    id="campus"
                    className="w-full p-2 rounded-lg bg-gray-700 text-gray-300"
                    value={profile.campus}
                    readOnly
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-indigo-200/65" htmlFor="faculty">
                    Faculty 
                  </label>
                  <input
                    type="text"
                    id="faculty"
                    className="w-full p-2 rounded-lg bg-gray-700 text-gray-300"
                    value={profile.faculty}
                    readOnly
                  />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
                  <button type="button" onClick={prevStep} className="btn text-white" style={{ marginRight: 'auto' }}>
                    Back
                  </button>
                  <button type="button" onClick={nextStep} className="btn text-white" style={{ marginLeft: 'auto' }}>
                    Next
                  </button>
                </div>
              </div>
            )}

            {/* Section 3 */}
            {currentStep === 3 && (
              <div className="space-y-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-indigo-200/65" htmlFor="linkedin">
                    Alumni Linkedin Link 
                  </label>
                  <input
                    type="text"
                    id="linkedin"
                    className="w-full p-2 rounded-lg bg-gray-700 text-gray-300"
                    placeholder="LinkedIn Link"
                    value={profile.linkedinProfile}
                    onChange={handleLinkedInChange}
                  />
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
                  <button type="button" onClick={prevStep} className="btn text-white" style={{ marginRight: 'auto' }}>
                    Back
                  </button>
                  <button type="submit" className="btn text-white" style={{ marginLeft: 'auto' }} disabled={signUpLoading}>
                   {signUpLoading ? 'Loading...' : 'Confirm'}
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

