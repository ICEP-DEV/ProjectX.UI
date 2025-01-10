import React, { useEffect, useState } from "react";
import './EditProfile.css';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import AvatarPic from '../images/intro-bg1.gif';

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
          alumnusId: data.alumnusId,
          firstName: data.firstName,
          lastName: data.lastName,
          graduationYear: data.graduationYear,
          campus: data.campus,
          faculty: data.faculty,
          linkedinProfile: data.linkedinProfile,
          profilePicture: data.profilePicture ? `data:image/png;base64,${data.profilePicture}` : null,
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
      navigate('/Logged');
    } catch (error) {
      console.error("Failed to update profile:", error);
    } finally {
      setSignUpLoading(false);
    }
  };
  
  


  const [image, setImage] = useState(null);  // State for the uploaded image

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
  
  

  return (
    <section className="ep-bg-gray-900 ep-text-gray-100">
      <div className="ep-flex ep-flex-col ep-items-center ep-justify-center ep-min-h-screen">
        <div className="ep-w-full ep-max-w-md ep-p-8 ep-space-y-6 ep-rounded-lg ep-shadow-lg ep-bg-gray-800">
          <h2 className="ep-text-2xl ep-font-semibold ep-text-center ep-text-indigo-200">Confirm Your Profile</h2>

        {/* Circular User Icon */}
          <div className="ep-flex ep-flex-col ep-items-center">
            <label htmlFor="file-upload" className="ep-relative ep-cursor-pointer ep-mb-4">
              <div className="ep-w-28 ep-h-28 ep-rounded-full ep-overflow-hidden ep-flex ep-items-center ep-justify-center ep-bg-indigo-600 ep-transition-transform ep-duration-300 hover:ep-scale-110">
                {/* Display the uploaded image or the default AvatarPic */}
                {profile.profilePicture ? (
                  <img src={profile.profilePicture} alt="User Avatar" className="ep-w-full ep-h-full ep-object-cover" />
                ) : (
                  <img src={AvatarPic} alt="Default Avatar" className="ep-w-full ep-h-full ep-object-cover" />
                )}

              </div>
            </label>

            {/* File input for uploading an image */}
            <input
              type="file"
              id="file-upload"
              className="ep-hidden"
              accept="image/*"
              onChange={handleImageUpload}
            />
          </div>

          {/* Form for user details */}
          <form onSubmit={handleSubmit}>
            {/* Section 1 */}
            {currentStep === 1 && (
              <div className="ep-space-y-4">
                <div>
                  <label className="ep-mb-1 ep-block ep-text-sm ep-font-medium ep-text-indigo-200/65" htmlFor="stuno">
                    Student Number 
                  </label>
                  <input
                    type="text"
                    id="stuno"
                    className="ep-w-full ep-p-2 ep-rounded-lg ep-bg-gray-700 ep-text-gray-300"
                    placeholder="Student number"
                    value={profile.alumnusId}
                    readOnly
                  />
                </div>

                <div>
                  <label className="ep-mb-1 ep-block ep-text-sm ep-font-medium ep-text-indigo-200/65" htmlFor="name">
                    First Name 
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="ep-w-full ep-p-2 ep-rounded-lg ep-bg-gray-700 ep-text-gray-300"
                    placeholder="First name"
                    value={profile.firstName}
                    readOnly
                  />
                </div>

                <div>
                  <label className="ep-mb-1 ep-block ep-text-sm ep-font-medium ep-text-indigo-200/65" htmlFor="surname">
                    Last Name 
                  </label>
                  <input
                    type="text"
                    id="surname"
                    className="ep-w-full ep-p-2 ep-rounded-lg ep-bg-gray-700 ep-text-gray-300"
                    placeholder="Last name"
                    value={profile.lastName}
                    readOnly
                  />
                </div>

               
                <div>
                  <label className="ep-mb-1 ep-block ep-text-sm ep-font-medium ep-text-indigo-200/65" htmlFor="email">
                    Graduation Year 
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="ep-w-full ep-p-2 ep-rounded-lg ep-bg-gray-700 ep-text-gray-300"
                    placeholder="Graduation year"
                    value={profile.graduationYear}
                    readOnly
                  />
                </div>

                <div>
                  <label className="ep-mb-1 ep-block ep-text-sm ep-font-medium ep-text-indigo-200/65" htmlFor="campus">
                    Campus 
                  </label>
                  <input
                    type="text"
                    id="campus"
                    className="ep-w-full ep-p-2 ep-rounded-lg ep-bg-gray-700 ep-text-gray-300"
                    value={profile.campus}
                    readOnly
                  />
                </div>

                <div>
                  <label className="ep-mb-1 ep-block ep-text-sm ep-font-medium ep-text-indigo-200/65" htmlFor="faculty">
                    Faculty 
                  </label>
                  <input
                    type="text"
                    id="faculty"
                    className="ep-w-full ep-p-2 ep-rounded-lg ep-bg-gray-700 ep-text-gray-300"
                    value={profile.faculty}
                    readOnly
                  />
                </div>

                
                <div>
                  <label className="ep-mb-1 ep-block ep-text-sm ep-font-medium ep-text-indigo-200/65" htmlFor="linkedin">
                    Alumni Linkedin Link 
                  </label>
                  <input
                    type="text"
                    id="linkedin"
                    className="ep-w-full ep-p-2 ep-rounded-lg ep-bg-gray-700 ep-text-gray-300"
                    placeholder="LinkedIn Link"
                    value={profile.linkedinProfile}                    
                  />
                </div>

            
                <button type="submit" className="ep-btn ep-w-full ep-text-white ep-mt-4" style={{ marginTop: '20px' }} disabled={signUpLoading}>
                   {signUpLoading ? 'Loading...' : 'Confirm'}
                  </button>
                
              </div>
            )}

          </form>
        </div>
      </div>
    </section>
  );
}
