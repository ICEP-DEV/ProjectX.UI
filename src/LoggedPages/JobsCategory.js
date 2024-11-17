import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const JobsCategory = () => {
  const { faculty } = useParams(); // get the faculty from the route
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://localhost:5214/api/Alumnus/GetJobsByFaculty/GetJobsByFaculty/${faculty}');
        setJobs(response.data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };
    fetchJobs();
  }, [faculty]);

  return (
    <div>
      <h2>{faculty} Jobs</h2>
      <div className="row">
        {jobs.map((job, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card text-start h-100 custom-card">
              <div className="card-body">
                <p><strong>Position:</strong> {job.Type}</p>
                <p><strong>Location:</strong> {job.Location}</p>
                <p><strong>Closing Date:</strong> {job.Closingdate}</p>
                <a href={job.Link}>Apply Here</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobsCategory;
