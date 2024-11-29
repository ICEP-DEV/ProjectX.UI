import React from "react";

const EditProfile = () => {
  return (

    <section className="bg-gray-900 text-gray-100">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="w-full max-w-md p-8 space-y-6 rounded-lg shadow-lg bg-gray-800">
          <h2 className="text-2xl font-semibold text-center text-indigo-200">Profile</h2>

        {/* Circular User Icon with Edit Option */}
        <div className="relative flex flex-col items-center">
        {/* Profile Picture Placeholder */}
        <div className="w-40 h-40 rounded-full overflow-hidden flex items-center justify-center bg-indigo-600 transition-transform duration-300 hover:scale-110">
         <span className="text-white text-3xl">👤</span>
       </div>
      {/* Edit Icon */}
     <label
       htmlFor="profilePicture"
       className="absolute bottom-2 right-2 bg-gray-800 text-white p-2 rounded-full cursor-pointer hover:bg-gray-700 transition"
       title="Edit Profile Picture"
      >
       ✏️
    </label>
    {/* Hidden Input for File Upload */}
    <input
    type="file"
    id="profilePicture"
    className="hidden"
    accept="image/*"
    onChange={(e) => {
      const file = e.target.files[0];
      if (file) {
        console.log("Selected file:", file.name);
        // Add logic to handle the uploaded file
       }
        }}
     />
     </div>


          {/* Update Profile Form */}
          <form>
            <div className="space-y-4">
              {/* Student Number */}
              <div>
                <label className="mb-1 block text-sm font-medium text-indigo-200/65" htmlFor="stuno">
                  Student Number
                </label>
                <input
                  type="text"
                  id="stuno"
                  className="w-full p-2 rounded-lg bg-gray-700 text-gray-300"
                  
                  
                />
              </div>

              {/* First Name */}
              <div>
                <label className="mb-1 block text-sm font-medium text-indigo-200/65" htmlFor="name">
                  First Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2 rounded-lg bg-gray-700 text-gray-300"
                 
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="mb-1 block text-sm font-medium text-indigo-200/65" htmlFor="surname">
                  Last Name
                </label>
                <input
                  type="text"
                  id="surname"
                  className="w-full p-2 rounded-lg bg-gray-700 text-gray-300"
                  
                />
              </div>

              {/* Graduation Year */}
              <div>
                <label className="mb-1 block text-sm font-medium text-indigo-200/65" htmlFor="gradYear">
                  Graduation Year
                </label>
                <input
                  type="text"
                  id="gradYear"
                  className="w-full p-2 rounded-lg bg-gray-700 text-gray-300"
                  
                />
              </div>

              {/* Campus */}
              <div>
                <label className="mb-1 block text-sm font-medium text-indigo-200/65" htmlFor="campus">
                  Campus
                </label>
                <input
                  type="text"
                  id="campus"
                  className="w-full p-2 rounded-lg bg-gray-700 text-gray-300"
                  
                />
              </div>

              {/* Faculty */}
              <div>
                <label className="mb-1 block text-sm font-medium text-indigo-200/65" htmlFor="faculty">
                  Faculty
                </label>
                <input
                  type="text"
                  id="faculty"
                  className="w-full p-2 rounded-lg bg-gray-700 text-gray-300"
                  
                />
              </div>

              {/* Alumni LinkedIn Link */}
              <div>
                <label className="mb-1 block text-sm font-medium text-indigo-200/65" htmlFor="linkedin">
                LinkedIn Link
                </label>
                <input
                  type="text"
                  id="linkedin"
                  className="w-full p-2 rounded-lg bg-gray-700 text-gray-300"
                  
                />
                </div>
              <div>

                <label className="mb-1 block text-sm font-medium text-indigo-200/65" htmlFor="email">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  className="w-full p-2 rounded-lg bg-gray-700 text-gray-300"
                  
                />
              </div>

               {/* Save Changes Button */}
               <button
                type="submit"
                className="w-full p-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg mt-4">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>

  );
};

export default EditProfile;
