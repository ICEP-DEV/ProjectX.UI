import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from "./Footer";
import NavBar from './NavBar';

const AlumniDetails = () => {
  const { id } = useParams();  // Get the 'id' from the URL
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(''); // To hold image Base64 string
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogDescription = async () => {
      try {
        // Fetch all blogs (you might already have this API working)
        const response = await fetch(`http://localhost:5214/api/Alumnus/GetBlogs/GetBlogs`);
        if (!response.ok) {
          throw new Error('Error fetching blogs');
        }

        // Parse the response as JSON
        const data = await response.json();

        // Find the specific blog by matching the 'id'
        const blog = data.find((item) => item.id === parseInt(id));

        if (blog) {
          setDescription(blog.description); // Set the description of the found blog
          setImage(blog.image); // Assuming image is a Base64 string in blog.image
        } else {
          setError('Blog not found');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogDescription();
  }, [id]); // The useEffect will re-run if 'id' changes

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  // Split the description into sections by double newlines (for paragraphs or sections)
  const formattedDescription = description.split('\n\n').map((section, index) => (
    <div key={index} style={styles.section}>
      <p>{section}</p>
    </div>
  ));

  return (
    <div>
      <NavBar />
      <div style={styles.container}>
        {/* Using the Base64 string for the image */}
        <img 
          className="card11-img-top" 
          src={`data:image/jpeg;base64,${image}`} 
          alt="Alumni" 
          style={styles.image} 
        />
        <div style={styles.description}>
          <h2>Blog Description</h2>
          {formattedDescription}
        </div>
      </div>
      <Footer />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'flex-start', // Align items to the top
    justifyContent: 'flex-start', // Align content to the left
    padding: '20px',
  },
  image: {
    width: '20%',
    height: 'auto',
    marginRight: '70px',  // Adjust the margin between the image and description
    marginLeft: '70px',   // Slightly shifted to the right
    marginTop: '20px',    // Move the image down a little
    borderRadius: '8px',
  },
  description: {
    width: '55%',
    fontFamily: 'Georgia, serif',
    lineHeight: '1.6',
    textAlign: 'justify',
    fontSize: '16px',
    color: '#333',
    wordWrap: 'break-word',   // Ensures words break properly
    whiteSpace: 'pre-wrap',   // Allows for proper word breaks and wrapping
  },
  section: {
    marginBottom: '20px', // Add spacing between each section
  }
};

export default AlumniDetails;
