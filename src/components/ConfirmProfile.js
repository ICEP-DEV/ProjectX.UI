import React, { useEffect, useState } from "react";
import "./ConfirmProfile.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AvatarPic from "../images/intro-bg1.gif";
import confetti from "canvas-confetti"; // Import confetti library

export default function ConfirmProfile() {
  const [profile, setProfile] = useState({
    alumnusId: "",
    firstName: "",
    lastName: "",
    graduationYear: "",
    campus: "",
    faculty: "",
    linkedinProfile: "",
    profilePicture: "",
  });

  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [signUpLoading, setSignUpLoading] = useState(false);

  // Fetch the profile data when the component loads
  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const response = await fetch(
        "http://localhost:5214/api/Alumnus/GetAlumnusProfile/GetAlumnusProfile",
        {
          method: "GET",
          credentials: "include", // Include cookies in the request
        }
      );
      console.log("Response status:", response.status); // Check status
      if (response.ok) {
        const data = await response.json();
        console.log("Fetched data:", data); // Log data to verify it
        setProfile({
          alumnusId: data.alumnusId,
          firstName: data.firstName,
          lastName: data.lastName,
          graduationYear: data.graduationYear,
          campus: data.campus,
          faculty: data.faculty,
          linkedinProfile: data.linkedinProfile,
          profilePicture: data.profilePicture
            ? `data:image/png;base64,${data.profilePicture}`
            : null,
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

  // // Handle LinkedIn input change
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
      alert("LinkedIn Profile Link Saved!");
    } catch (error) {
      console.error("LinkedIn Profile Error:", error);
    } finally {
      setSignUpLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSignUpLoading(true);

    const data = {
      studentNum: profile.alumnusId,
      linkedinProfile: profile.linkedinProfile,
      profilePicture: image ? image.split(",")[1] : null, // Send only the base64 string
    };

    try {
      console.log(data);
      const response = await axios.put(
        `http://localhost:5214/api/Alumnus/UpdateProfile/UpdateProfile`,
        data,
        { headers: { "Content-Type": "application/json" } }
      );

      alert("Profile updated successfully!");
      navigate("/Login");
    } catch (error) {
      console.error("Failed to update profile:", error);
    } finally {
      setSignUpLoading(false);
    }
  };

  const [image, setImage] = useState(null); // State for the uploaded image

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Preview the image
        setProfile({
          ...profile,
          profilePicture: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    // Add 'signup-page' class to body when this component mounts
    document.body.classList.add("login-page");

    // Clean up when leaving the signup page
    return () => {
      document.body.classList.remove("login-page");
    };
  }, []);

  // useEffect(() => {
  //   // Trigger confetti animation on page load
  //   const icon = document.querySelector('.fa-graduation-cap');
  //   if (icon) {
  //     icon.addEventListener('animationend', triggerConfetti);
  //     triggerConfetti(); // Run it once at load
  //   }

  //   return () => {
  //     if (icon) {
  //       icon.removeEventListener('animationend', triggerConfetti);
  //     }
  //   };
  // }, []);

  // const triggerConfetti = () => {
  //   confetti({
  //     particleCount: 100,
  //     spread: 70,
  //     origin: { y: 0.6 },
  //   });
  // };

  const handleClick = () => {
    // Start loading
    setSignUpLoading(true);

    // Activate the blur overlay
    document.querySelector(".blur-overlay2").classList.add("active");

    // Simulate an async operation (e.g., API request)
    setTimeout(() => {
      setSignUpLoading(false); // Stop loading
      document.querySelector(".blur-overlay2").classList.remove("active");
    }, 3000); // Simulate 3 seconds of loading time
  };

  return (
    <div className="confirm-body">
      <div className="confirm-container-2">
        {/* Fullscreen Blur Overlay */}
        {signUpLoading && (
          <div className="blur-overlay2 active">
            <div className="loading-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}

        <div className="confirm-container-4">
          <div>
            <h2 className="titless">Confirm Profile</h2>            
          </div>

          {/* Circular User Icon */}
          <div className="confirm-avatar">
            <label htmlFor="file-upload" className="confirm-avatar-label">
              {profile.profilePicture ? (
                <img
                  src={profile.profilePicture}
                  alt="User Avatar"
                  className="cp-avatar-image"
                />
              ) : (
                <img
                  src={AvatarPic}
                  alt="Default Avatar"
                  className="cp-avatar-image"
                />
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
            {/* Form for user details */}
            <form onSubmit={handleSubmit}>
              {/* Section 1 */}
              {currentStep === 1 && (
                <>
                  {/* Student Number */}

                  <label htmlFor="stuno">Student Number</label>
                  <div className="cp-input-container">
                    <i className="fas fa-graduation-cap cp-icon-sn"></i>
                    <input
                      type="text"
                      id="stuno"
                      className="cp-input"
                      placeholder="Student number"
                      value={profile.alumnusId}
                      readOnly
                    />
                  </div>

                  {/* First Name */}

                  <label htmlFor="name">First Name</label>
                  <div className="cp-input-container">
                    <i className="fas fa-user-graduate cp-icon"></i>
                    <input
                      type="text"
                      id="name"
                      className="cp-input"
                      placeholder="First name"
                      value={profile.firstName}
                      readOnly
                    />
                  </div>

                  {/* Last Name */}

                  <label htmlFor="surname">Last Name</label>
                  <div className="cp-input-container">
                    <i className="fas fa-user-graduate cp-icon"></i>
                    <input
                      type="text"
                      id="surname"
                      className="cp-input"
                      placeholder="Last name"
                      value={profile.lastName}
                      readOnly
                    />
                  </div>
                  <div className="cp-button">
                    <button type="button" className="cp-btn" onClick={nextStep}>
                      <i class="fa-solid fa-arrow-right point-right"></i>
                    </button>
                  </div>
                </>
              )}

              {currentStep === 2 && (
                <>
                  {/* Graduation Year */}

                  <label htmlFor="email">Graduation Year</label>
                  <div className="cp-input-container">
                    <i className="fas fa-calendar-alt cp-icon"></i>
                    <input
                      type="email"
                      id="email"
                      className="cp-input"
                      placeholder="Graduation year"
                      value={profile.graduationYear}
                      readOnly
                    />
                  </div>

                  {/* Campus */}

                  <label htmlFor="campus">Campus</label>
                  <div className="cp-input-container">
                    <i className="fas fa-building cp-icon"></i>
                    <input
                      type="text"
                      id="campus"
                      className="cp-input"
                      placeholder="Campus"
                      value={profile.campus}
                      readOnly
                    />
                  </div>

                  {/* Faculty */}

                  <label htmlFor="faculty">Faculty</label>
                  <div className="cp-input-container">
                    <i className="fas fa-university cp-icon"></i>
                    <input
                      type="text"
                      id="faculty"
                      className="cp-input"
                      placeholder="Faculty"
                      value={profile.faculty}
                      readOnly
                    />
                  </div>

                  <div className="cp-button">
                    <button type="button" className="cp-btn" onClick={prevStep}>
                      <i class="fa-solid fa-arrow-left"></i>
                    </button>
                    <button type="button" className="cp-btn" onClick={nextStep}>
                      <i class="fa-solid fa-arrow-right point-right"></i>
                    </button>
                  </div>
                </>
              )}

              {currentStep === 3 && (
                <>
                  {/* Alumni LinkedIn */}

                  <div className="cp-container-for-input">
                    <label htmlFor="linkedin">Alumni LinkedIn Link</label>
                    <div className="cp-input-container">
                      <i className="fab fa-linkedin cp-icon"></i>
                      <input
                        type="text"
                        id="linkedin"
                        className="cp-input"
                        placeholder="Paste LinkedIn Link Here"
                        value={profile.linkedinProfile}
                        onChange={handleLinkedInChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="cp-button">
                    <button type="button" className="cp-btn" onClick={prevStep}>
                      <i class="fa-solid fa-arrow-left"></i>
                    </button>
                    <button type="submit" className="cp-btn">
                      {signUpLoading ? (
                        <div className="loading-dots">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      ) : (
                        <i className="fa-regular fa-circle-check"></i>
                      )}
                    </button>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
