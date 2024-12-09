import React, { useEffect, useState } from "react";
import './ConfirmProfile.css';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import AvatarPic from '../images/intro-bg1.gif';
import Container3Image from "../images/SidePhoto.png";
import AlumniSpaceLogo from '../images/aslogo.png';  // Importing the logo

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

  const [image, setImage] = useState(null);  // State for the uploaded image

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);  // Set the uploaded image in state
      };
      reader.readAsDataURL(file);  // Read the file as a data URL
    }
  };

  useEffect(() => {
    // Add 'signup-page' class to body when this component mounts
    document.body.classList.add("cp-page");

    // Clean up when leaving the signup page
    return () => {
      document.body.classList.remove("cp-page");
    };
  }, []);

  return (
    <div className="confirm-body">
      <div className="confirm-container-2">
      
        {/* Left Side (Container 3) */}
        <div
          className="confirm-container-3"
          style={{ backgroundImage: `url(${Container3Image})` }}
        >
                      {/* Logo - clickable, directs to homepage */}
                      <a href="/signup" className="confirm-logo">
              <img src={AlumniSpaceLogo} alt="Logo" className="confirm-logo-img" />
            </a>
          
          <div className="cp-text-content">
            <h1>Welcome to Alumni Space</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>

        {/* Right Side (Container 4) */}
        <div className="confirm-container-4">
          <div className="confirm-avatar">
            <label htmlFor="file-upload" className="confirm-avatar-label">
              {image ? (
                <img src={image} alt="User Avatar" />
              ) : (
                <img src={AvatarPic} alt="Default Avatar" />
              )}
            </label>
            <input
              type="file"
              id="file-upload"
              className="confirm-file-input"
              accept="image/*"
              onChange={handleImageUpload}
            />
          </div>

        <div className="cp-input-field">
          <form onSubmit={handleSubmit}>
            {currentStep === 1 && (
              <>
                <label>Student Number</label>
                <input
                  type="text"
                  value={profile.alumnusId}
                  readOnly
                />
                <label>First Name</label>
                <input
                  type="text"
                  value={profile.firstName}
                  readOnly
                />
                <label>Last Name</label>
                <input
                  type="text"
                  value={profile.lastName}
                  readOnly
                />
                <button type="button" onClick={nextStep}>
                  Next
                </button>
              </>
            )}

            {currentStep === 2 && (
              <>
                <label>Graduation Year</label>
                <input
                  type="text"
                  value={profile.graduationYear}
                  readOnly
                />
                <label>Campus</label>
                <input
                  type="text"
                  value={profile.campus}
                  readOnly
                />
                <label>Faculty</label>
                <input
                  type="text"
                  value={profile.faculty}
                  readOnly
                />
                <button type="button" onClick={prevStep}>
                  Back
                </button>
                <button type="button" onClick={nextStep}>
                  Next
                </button>
              </>
            )}

            {currentStep === 3 && (
              <>
                <label>LinkedIn</label>
                <input
                  type="text"
                  value={profile.linkedinProfile}
                  onChange={handleLinkedInChange}
                />
                <button type="button" onClick={prevStep}>
                  Back
                </button>
                <button type="submit" disabled={signUpLoading}>
                  Confirm
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}

