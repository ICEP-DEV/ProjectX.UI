import { useState } from "react";
import './ConfirmProfile.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export default function ConfirmProfile() {
  const [image, setImage] = useState(null);
  const navigate = useNavigate(); // Initialize the navigate hook
  const [currentStep, setCurrentStep] = useState(1); // State for current form section

  // Handle file upload and preview
  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form submission and navigate to logged.js
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you can add any validation or form processing logic
    navigate('/Logged'); // Navigate to the logged.js page
  };

    // Handlers for navigation between sections
    const nextStep = () => setCurrentStep((prev) => prev + 1);
    const prevStep = () => setCurrentStep((prev) => prev - 1);

  return (
    <section className="bg-gray-900 text-gray-100">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="w-full max-w-md p-8 space-y-6 rounded-lg shadow-lg bg-gray-800">
          <h2 className="text-2xl font-semibold text-center text-indigo-200">Confirm Your Profile</h2>

          {/* Circular User Icon */}
          <div className="flex flex-col items-center">
            <label htmlFor="file-upload" className="relative cursor-pointer mb-4">
              <input
                id="file-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
              <div className="w-28 h-28 rounded-full overflow-hidden flex items-center justify-center bg-indigo-600 transition-transform duration-300 hover:scale-110">
                {image ? (
                  <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                    <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        borderRadius: '50%',
                        border: '4px solid transparent',
                        borderTopColor: 'purple',
                        animation: 'spin 2s linear infinite',
                        boxShadow: '0 0 20px rgba(128, 0, 128, 0.8), 0 0 30px rgba(128, 0, 128, 0.6)',
                      }}
                    />
                    <img src={image} alt="User" className="w-full h-full object-cover" />
                  </div>
                ) : (
                  <span className="text-white text-3xl">👤</span>
                )}
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
                    Student Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="stuno"
                    className="w-full p-2 rounded-lg bg-gray-700 text-gray-300"
                    placeholder="Enter student number"
                    readOnly
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-indigo-200/65" htmlFor="name">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-2 rounded-lg bg-gray-700 text-gray-300"
                    placeholder="Enter first name"
                    readOnly
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-indigo-200/65" htmlFor="surname">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="surname"
                    className="w-full p-2 rounded-lg bg-gray-700 text-gray-300"
                    placeholder="Enter last name"
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
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-2 rounded-lg bg-gray-700 text-gray-300"
                    placeholder="Enter email address"
                    readOnly
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-indigo-200/65" htmlFor="campus">
                    Campus <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="campus"
                    className="w-full p-2 rounded-lg bg-gray-700 text-gray-300"
                    readOnly
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-indigo-200/65" htmlFor="faculty">
                    Faculty <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="faculty"
                    className="w-full p-2 rounded-lg bg-gray-700 text-gray-300"
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
                    Alumni Linkedin Link <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="linkedin"
                    className="w-full p-2 rounded-lg bg-gray-700 text-gray-300"
                    placeholder="Linkedin Link"
                  />
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
                <button type="button" onClick={prevStep} className="btn text-white" style={{ marginRight: 'auto' }}>
                  Back
                </button>
                <button type="submit" className="btn text-white" style={{ marginLeft: 'auto' }}>
                  Confirm
                </button>
              </div>

              </div>
            )}
          </form>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}
