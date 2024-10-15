import { useState } from "react";
import './ConfirmProfile.css';


export default function ConfirmProfile() {
  const [image, setImage] = useState(null);

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
          <form>
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
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-indigo-200/65" htmlFor="email">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 rounded-lg bg-gray-700 text-gray-300"
                  placeholder="Enter email address"
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
                  placeholder="Enter campus"
                />
              </div>
            </div>

            <div className="mt-6 space-y-5">
            <button
            type="submit"
            className="btn w-full text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)]"
            >
            Confirm
            </button>

            </div>
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
