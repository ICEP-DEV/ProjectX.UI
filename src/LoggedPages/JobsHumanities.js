import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarLogged from './NavbarLogged';
import Footer from '../components/Footer';
import './Jobs.css';

const JobsHumanities = () => {
  return (
    <div>
      <NavbarLogged />
      <div className="container mt-5">
        <h2 className="job-title">Internships</h2>
        <div className="row">
          <div className="col-md-3 mb-4">
            <div className="card text-start h-100 custom-card">
              <div className="card-body">
                <p><strong>Position:</strong> Associate Professor</p>
                <p><strong>Province:</strong> Eastern Cape</p>
                <p>
                  <strong>Closing Date:</strong> 25 November 2024 <br /><br/>
                  <a href="https://www.graduates24.com/jobs/viewjob/10841" target="_blank" rel="noopener noreferrer" className="apply-link">Click here to apply</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card text-start h-100 custom-card">
              <div className="card-body">
                <p><strong>Position:</strong> Research Assistant</p>
                <p><strong>Province:</strong> Western Cape</p>
                <p>
                  <strong>Closing Date:</strong> 15 December 2024 <br /><br/>
                  <a href="https://apply-link-example.com" target="_blank" rel="noopener noreferrer" className="apply-link">Click here to apply</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card text-start h-100 custom-card">
              <div className="card-body">
                <p><strong>Position:</strong> History Teacher</p>
                <p><strong>Province:</strong> KwaZulu-Natal</p>
                <p>
                  <strong>Closing Date:</strong> 5 January 2025 <br /><br/>
                  <a href="https://apply-link-example.com" target="_blank" rel="noopener noreferrer" className="apply-link">Click here to apply</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card text-start h-100 custom-card">
              <div className="card-body">
                <p><strong>Position:</strong> Humanities Lecturer</p>
                <p><strong>Province:</strong> Gauteng</p>
                <p>
                  <strong>Closing Date:</strong> 10 February 2025 <br /><br/>
                  <a href="https://apply-link-example.com" target="_blank" rel="noopener noreferrer" className="apply-link">Click here to apply</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <h2 className="job-title">Permanent</h2>
        <div className="row">
          <div className="col-md-3 mb-4">
            <div className="card text-start h-100 custom-card">
              <div className="card-body">
                <p><strong>Position:</strong> Associate Professor</p>
                <p><strong>Province:</strong> Eastern Cape</p>
                <p>
                  <strong>Closing Date:</strong> 25 November 2024 <br /><br/>
                  <a href="https://apply-link-example.com" target="_blank" rel="noopener noreferrer" className="apply-link">Click here to apply</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card text-start h-100 custom-card">
              <div className="card-body">
                <p><strong>Position:</strong> Research Assistant</p>
                <p><strong>Province:</strong> Western Cape</p>
                <p>
                  <strong>Closing Date:</strong> 15 December 2024 <br /><br/>
                  <a href="https://apply-link-example.com" target="_blank" rel="noopener noreferrer" className="apply-link">Click here to apply</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card text-start h-100 custom-card">
              <div className="card-body">
                <p><strong>Position:</strong> History Teacher</p>
                <p><strong>Province:</strong> KwaZulu-Natal</p>
                <p>
                  <strong>Closing Date:</strong> 5 January 2025 <br /><br/>
                  <a href="https://apply-link-example.com" target="_blank" rel="noopener noreferrer" className="apply-link">Click here to apply</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card text-start h-100 custom-card">
              <div className="card-body">
                <p><strong>Position:</strong> Humanities Lecturer</p>
                <p><strong>Province:</strong> Gauteng</p>
                <p>
                  <strong>Closing Date:</strong> 10 February 2025 <br /><br/>
                  <a href="https://apply-link-example.com" target="_blank" rel="noopener noreferrer" className="apply-link">Click here to apply</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default JobsHumanities;
