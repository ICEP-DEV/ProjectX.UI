import React, { useState } from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import axios from 'axios';
import NavbarLogged from './NavbarLogged';
import Sidebar from '../Admin/Sidebar';
import { Form, Button } from 'react-bootstrap';


const UploadBlogs = () => {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    link: '',
    image: null
  });

  const [submitError, setSubmitError] = useState('');
  const [submitLoading, setSubmitLoading] = useState(false);
  // Handle text input changes
  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file input change
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const base64 = await convertToBase64(file);
      setFormData({ ...formData, image: base64 });
    }
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result); // Don't split the Base64 string
      reader.onerror = (error) => reject(error);
    });
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitLoading(true);
    setSubmitError('');
  
    try {
      console.log('Submitting data:', formData); // Debugging step
      const response = await axios.post('http://localhost:5214/api/Admin/UploadBlogs/UploadBlogs',formData);
      
      console.log('Submitted data:', formData); // Debugging step
      window.alert('Blog uploaded successfully!');
      setFormData({ name: '', role: '', link: '', image: null }); // Reset form
    } catch (error) {
      console.error('Error uploading blog:', error);
      setSubmitError(error.response?.data?.message || 'Error uploading blog.');
    } finally {
      setSubmitLoading(false);
    }
  };
  
  

  return (
    <Box display="flex">
      <NavbarLogged />
      <Sidebar />
      <Box flex="1" ml="200px" p={3}>
        <Typography variant="h4" align="center" color="#003883" gutterBottom>
          Upload Blogs
        </Typography>
        <Box display="flex" justifyContent="center" mt={8}>
          <Card style={{ minWidth: 500, maxWidth: 600}}>
            <CardContent style={{ maxHeight: '700px', overflowY: 'auto' }}> {/* Scrollable Content */}
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleTextChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formDesc">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    name="role"
                    value={formData.role}
                    onChange={handleTextChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formDesc">
                  <Form.Label>Link</Form.Label>
                  <Form.Control
                    type="text"
                    name="link"
                    value={formData.link}
                    onChange={handleTextChange}
                    required
                  />
                </Form.Group>

            
                <Form.Group controlId="formMedia">
                  <Form.Label>Image</Form.Label>
                  <Form.Control
                    type="file"
                    name="image"
                    onChange={handleFileChange}
                    accept="image/*" // Allows only image files
                    required
                  />
                </Form.Group>

                

                <Button variant="primary" type="submit" className="mt-3" disabled={submitLoading}>
                        {submitLoading? 'Uploading...' : 'Upload'}
                </Button>
              </Form>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default UploadBlogs;
