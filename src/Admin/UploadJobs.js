import React, { useState } from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import axios from 'axios';
import NavbarLogged from './NavbarLogged';
import Sidebar from '../Admin/Sidebar';
import { Form, Button } from 'react-bootstrap';


const UploadJobs = () => {
  const [formData, setFormData] = useState({
    faculty: '',
    type: '',
    position: '',
    vacancy: '',
    closingdate: '',
    link: ''
  });

  const [submitError, setSubmitError] = useState('');

  // Handle text input changes
  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      // Send form data to the API
      const response = await axios.post('http://localhost:5214/api/Admin/UploadJob/UploadJob', formData);
      window.alert('Job post uploaded successfully!!!');

      // Clear the form fields
      setFormData({
        faculty: '',
        type: '',
        vacancy: '',
        location: '',
        closingdate: '',
        link: ''
        
      });
      setSubmitError('');
    } catch (error) {
      console.error('Error uploading job post', error);
      setSubmitError('Error uploading job post. Please try again later.');
    }
  };

  return (
    <Box display="flex">
      <NavbarLogged />
      <Sidebar />
      <Box flex="1" ml="200px" p={3}>
        <Typography variant="h4" align="center" color="#003883" gutterBottom>
          Upload Job Opportunity
        </Typography>
        <Box display="flex" justifyContent="center" mt={8}>
          <Card style={{ minWidth: 500, maxWidth: 600}}>
            <CardContent style={{ maxHeight: '700px', overflowY: 'auto' }}> {/* Scrollable Content */}
              <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formFaculty">
                <Form.Label>Faculty</Form.Label>
                <Form.Select
                    name="faculty"
                    value={formData.faculty}
                    onChange={handleTextChange}
                    required
                >
                    <option value="">Select Faculty</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Man. Sci.">Management Science</option>
                    <option value="Science">Science</option>
                    <option value="Arts">Arts and Design</option>
                    <option value="ICT">ICT</option>
                    <option value="Humanities">Humanities</option>
                    <option value="Finance">Finance</option>
                    {/* Add more options as needed */}
                </Form.Select>
                </Form.Group>

                <Form.Group controlId="formType">
                <Form.Label>Job Type</Form.Label>
                <Form.Select
                    name="type"
                    value={formData.type}
                    onChange={handleTextChange}
                    required
                >
                    <option value="">Select Job Type</option>
                    <option value="Internship">Internship</option>
                    <option value="Permanent">Permanent</option>
                    {/* Add more options as needed */}
                </Form.Select>
                </Form.Group>


                <Form.Group controlId="formVacancy">
                  <Form.Label>Vacancy</Form.Label>
                  <Form.Control
                    type="text"
                    name="vacancy"
                    value={formData.vacancy}
                    onChange={handleTextChange}
                    required
                  />
                </Form.Group>
                
                <Form.Group controlId="formLocation">
                  <Form.Label>Location</Form.Label>
                  <Form.Control
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleTextChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formDate">
                  <Form.Label>Closing Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="closingdate"
                    value={formData.closingdate}
                    onChange={handleTextChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formLink">
                  <Form.Label>Link</Form.Label>
                  <Form.Control
                    type="text"
                    name="link"
                    value={formData.link}
                    onChange={handleTextChange}
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="mt-3">
                  Upload
                </Button>
              </Form>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default UploadJobs;
