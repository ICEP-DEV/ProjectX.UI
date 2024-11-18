import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NavbarLogged from "./NavbarLogged";
import Footer from "../components/Footer";
import "./Jobs.css";

const JobsCategory = () => {
  const { faculty } = useParams(); // get the faculty from the route
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5214/api/Alumnus/GetJobsByFaculty/GetJobsByFaculty/${faculty}`
        );
        const flattenedJobs = response.data.flat();
        setJobs(flattenedJobs);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };
    fetchJobs();
  }, [faculty]);

  console.log(jobs); // Verify the structure of jobs

  // Separate jobs into "Internship" and "Permanent"
  const internships = jobs.filter((job) => job.type === "Internship");
  const permanentJobs = jobs.filter((job) => job.type === "Permanent");

  return (
    <div className="d-flex flex-column min-vh-100">
      <NavbarLogged />
      <div className="container mt-5">
        <h2 className="job-title">{faculty} Jobs</h2>
        {jobs.length === 0 ? (
          <div className="no-jobs-container text-center">
            <i className="fas fa-folder-open no-jobs-icon"></i>
            <p>No jobs available for the selected faculty.</p>
          </div>
        ) : (
          <>
            {/* Internship Section */}
            <h3 className="job-title">Internships</h3>
            <div className="row">
              {internships.length === 0 ? (
                <div className="no-jobs-container text-center w-100">
                  <i className="fas fa-folder-open no-jobs-icon"></i>
                  <p>No internship opportunities available.</p>
                </div>
              ) : (
                internships.map((job, index) => (
                  <div className="col-md-3 mb-4" key={index}>
                    <div className="card text-start h-100 custom-card">
                      <div className="card-body">
                        <p>
                          <strong>{job.vacancy}</strong>
                        </p>
                        <p>
                          <strong>Location:</strong> {job.location}
                        </p>
                        <p>
                          <strong>Closing Date:</strong>{" "}
                          {new Date(job.closingdate).toLocaleDateString(
                            "en-GB",
                            {
                              day: "2-digit",
                              month: "long",
                              year: "numeric",
                            }
                          )}
                        </p>
                        <a
                          href={job.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="apply-link"
                        >
                          Click here to apply
                        </a>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Permanent Section */}
            <h3 className="job-title">Permanent</h3>
            <div className="row">
              {permanentJobs.length === 0 ? (
                <div className="no-jobs-container text-center w-100">
                  <i className="fas fa-folder-open no-jobs-icon"></i>
                  <p>No permanent job opportunities available.</p>
                </div>
              ) : (
                permanentJobs.map((job, index) => (
                  <div className="col-md-3 mb-4" key={index}>
                    <div className="card text-start h-100 custom-card">
                      <div className="card-body">
                        <p>
                          <strong>{job.vacancy}</strong>
                        </p>
                        <p>
                          <strong>Location:</strong> {job.location}
                        </p>
                        <p>
                          <strong>Closing Date:</strong>{" "}
                          {new Date(job.closingdate).toLocaleDateString(
                            "en-GB",
                            {
                              day: "2-digit",
                              month: "long",
                              year: "numeric",
                            }
                          )}
                        </p>
                        <a
                          href={job.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="apply-link"
                        >
                          Click here to apply
                        </a>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default JobsCategory;
