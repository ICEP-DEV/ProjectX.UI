import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "./Footer";
import { Link } from 'react-router-dom';

const ViewAllBlogs = () => {
  const [allBlogs, setAllBlogs] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch all blogs from the backend
  useEffect(() => {
    const fetchAllBlogs = async () => {
      try {
        const response = await axios.get(`http://localhost:5214/api/Alumnus/GetBlogs/GetBlogs/`);
        setAllBlogs(response.data); // Set blogs data
        setLoading(false); // Stop loading
      } catch (error) {
        console.error("Error fetching all blogs:", error);
        setError("Failed to load blogs"); // Handle error
        setLoading(false); // Stop loading
      }
    };

    fetchAllBlogs();
  }, []);

  // If loading, show a loading indicator
  if (loading) {
    return <div>Loading...</div>;
  }

  // If there was an error, show an error message
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <Container className="mt-4 text-center">
        <h2 className="fw-bold mb-5"> Alumni Hall Of Fame</h2>
        <Row className="justify-content-center align-items-stretch g-5">
          {allBlogs.map((blog, index) => (
            <Col key={index} xs={12} sm={6} md={3} className="mb-4 d-flex">
              <div className="card11 text-center shadow-lg border-0 w-100">
                {/* Check if the image exists and display */}
                <img
                  className="card11-img-top"
                  src={`data:image/jpeg;base64,${blog.image}`} // Assuming the backend returns Base64 encoded image
                  alt={blog.name}
                />
                <div className="card11-body">
                  <h5 className="fw-bold">{blog.name}</h5>
                  <p className="text-muted">{blog.role}</p>
                  <div className="read-more-container">
                    {/* Link to the AlumniDetails page, passing the blog's id */}
                    <Link to={`/alumni-details/${blog.id}`} className="read-more-link">
                      Read more
                    </Link>
                    <span className="greater-than-symbol">&gt;&gt;</span>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default ViewAllBlogs;
