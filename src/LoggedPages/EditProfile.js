import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa"; // Font Awesome Icon
import './Jobs.css';

const EditProfile = () => {

  const [profileImage, setProfileImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Generate a temporary URL for the uploaded image
      setProfileImage(imageUrl); // Update state with the new image
    }
  };

  return (
    <section className="bg-gray-900 text-gray-100 min-h-screen flex items-center justify-center px-4">
      <div className="flex flex-col items-center justify-center min-h-screen w-full " style={{ maxWidth: "550px" }}> {/* Added max width for responsiveness */}
        {/* Adjusted Form Wrapper */}
        <div 
          style={{ width: '100%', padding: '20px', height: '900px' }} // Responsive width
          className="space-y-6 rounded-lg shadow-lg bg-gray-800"
        >
          <h2 className="text-lg font-semibold text-center text-indigo-200 mb-6">Edit Profile</h2>
          
          {/* Profile Picture Section */}
          <div className="relative flex flex-col items-center" style={{ marginTop: profileImage ? '-10px' : '-10px' }}>
            <div
              style={{
                width: "160px",
                height: "160px", // Fixed size for the profile picture container
              }}
              className="rounded-full overflow-hidden bg-gray-700 flex items-center justify-center relative cursor-pointer"
            >
              <label htmlFor="profilePicture" className="cursor-pointer">
                {profileImage ? (
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <FaUserCircle
                    className="text-gray-400"
                    style={{ fontSize: "7rem", transform: "translateY(-10px)" }}
                  />
                )}
              </label>
            </div>
            <input
              type="file"
              id="profilePicture"
              className="hidden"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>

          {/* Update Profile Form */}
          <div className="move-up mt-[-20px]">
            <form style={{ marginTop: "-30px" }} className="space-y-4">
              {/* Student Number */}
              <div>
                <label className="mb-1 block text-sx md:text-base font-medium text-indigo-200/65" htmlFor="stuno">
                  Student Number
                </label>
                <input
                  type="text"
                  id="stuno"
                  className="w-full p-2 rounded-lg bg-gray-700 text-gray-300 focus:ring focus:ring-indigo-500"
                />
              </div>

              {/* First Name */}
              <div>
                <label className="mb-1 block text-sx md:text-base font-medium text-indigo-200/65" htmlFor="name">
                  First Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2 rounded-lg bg-gray-700 text-gray-300 focus:ring focus:ring-indigo-500"
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="mb-1 block text-sx md:text-base font-medium text-indigo-200/65" htmlFor="surname">
                  Last Name
                </label>
                <input
                  type="text"
                  id="surname"
                  className="w-full p-2 rounded-lg bg-gray-700 text-gray-300 focus:ring focus:ring-indigo-500"
                />
              </div>

              {/* Graduation Year */}
              <div>
                <label className="mb-1 block text-sx md:text-base font-medium text-indigo-200/65" htmlFor="gradYear">
                  Graduation Year
                </label>
                <input
                  type="text"
                  id="gradYear"
                  className="w-full p-2 rounded-lg bg-gray-700 text-gray-300 focus:ring focus:ring-indigo-500"
                />
              </div>

              {/* Campus */}
              <div>
                <label className="mb-1 block text-sx md:text-base font-medium text-indigo-200/65" htmlFor="campus">
                  Campus
                </label>
                <input
                  type="text"
                  id="campus"
                  className="w-full p-2 rounded-lg bg-gray-700 text-gray-300 focus:ring focus:ring-indigo-500"
                />
              </div>

              {/* Faculty */}
              <div>
                <label className="mb-1 block text-sx md:text-base font-medium text-indigo-200/65" htmlFor="faculty">
                  Faculty
                </label>
                <input
                  type="text"
                  id="faculty"
                  className="w-full p-2 rounded-lg bg-gray-700 text-gray-300 focus:ring focus:ring-indigo-500"
                />
              </div>

              {/* Alumni LinkedIn Link */}
              <div>
                <label className="mb-1 block text-sx md:text-base font-medium text-indigo-200/65" htmlFor="linkedin">
                  LinkedIn Link
                </label>
                <input
                  type="text"
                  id="linkedin"
                  className="w-full p-2 rounded-lg bg-gray-700 text-gray-300 focus:ring focus:ring-indigo-500"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-1 block text-sx md:text-base font-medium text-indigo-200/65" htmlFor="email">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  className="w-full p-2 rounded-lg bg-gray-700 text-gray-300 focus:ring focus:ring-indigo-500"
                />
              </div>

              <div className="flex justify-center items-center h-full">
                <button
                  type="submit"
                  className="w-3/4 p-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg mt-4 focus:ring focus:ring-indigo-500">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditProfile;
