import React from 'react';
import { Link } from 'react-router-dom'; 


const PasswordReset = () => {
  return (
    <div className="bg-light py-3 py-md-5">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-12 col-md-11 col-lg-8 col-xl-7 col-xxl-6">
            <div className="bg-white p-4 p-md-5 rounded shadow-sm">
              <div className="row">
                <div className="col-12">
                  <div className="mb-5">
                    <h2 className="h3"> Change password</h2>
                    <h3 className="fs-6 fw-normal text-secondary m-0">
                      Enter a new password below
                    </h3>
                  </div>
                </div>
              </div>
              <form action="#!">
                <div className="row gy-3 gy-md-4 overflow-hidden">
                  <div className="col-12">
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      id="password"
                      placeholder="New Password"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      id="password"
                      placeholder="Confirm Password"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <div className="d-grid">
                      <button
                        className="btn btn-lg"
                        type="submit"
                        style={{
                          background: 'linear-gradient(15deg, #ce1127 0%, #003883 100%)',
                          color: '#fff',
                          border: 'none',
                        }}
                      >
                        Change Password
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;
