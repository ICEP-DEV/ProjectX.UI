import React, { useState } from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import axios from 'axios';
import NavbarLogged from './NavbarLogged';
import Sidebar from '../Admin/Sidebar';
import { Form, Button } from 'react-bootstrap';


const UploadEvents = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    venue: '',
    volunteerRoles: [''],
    media: null,
     // Initial volunteer role field
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
      setFormData({ ...formData, media: base64 });
    }
  };

  // Helper function to convert file to base64
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result.split(',')[1]);
      reader.onerror = (error) => reject(error);
    });
  };

  // Handle volunteer roles change
  const handleVolunteerRoleChange = (index, value) => {
    const newRoles = [...formData.volunteerRoles];
    newRoles[index] = value;
    setFormData({ ...formData, volunteerRoles: newRoles });
  };

  // Add a new volunteer role field
  const addVolunteerRole = () => {
    setFormData({ ...formData, volunteerRoles: [...formData.volunteerRoles, ''] });
  };

  // Remove a volunteer role field
  const removeVolunteerRole = (index) => {
    const newRoles = formData.volunteerRoles.filter((_, i) => i !== index);
    setFormData({ ...formData, volunteerRoles: newRoles });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();  // Prevent default form submission behavior
    setSubmitLoading(true);  // Set loading state before starting the request
    setSubmitError('');      // Clear any previous errors

    try {
      console.log(formData);
      // Send form data to the API
      const response = await axios.post('http://localhost:5214/api/Admin/UploadEvents/UploadEvents', formData);

      window.alert('Event uploaded successfully!!!');

      // Clear form fields
      setFormData({
        title: '',
        description: '',
        date: '',
        time: '',
        venue: '',
        volunteerRoles: [''],
        media: null,
      });
    } catch (error) {
      console.error('Error uploading event:', error);
      setSubmitError('Error uploading event. Please try again later.');
    } finally {
      setSubmitLoading(false);  // Ensure loading is turned off
    }
  };
  

  return (
    <Box display="flex">
      <NavbarLogged />
      <Sidebar />
      <Box flex="1" ml="200px" p={3}>
        <Typography variant="h4" align="center" color="#003883" gutterBottom>
          Upload Event
        </Typography>
        <Box display="flex" justifyContent="center" mt={8}>
          <Card style={{ minWidth: 500, maxWidth: 600}}>
            <CardContent style={{ maxHeight: '700px', overflowY: 'auto' }}> {/* Scrollable Content */}
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleTextChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formDesc">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleTextChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formDate">
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleTextChange}
                    required
                  />
                </Form.Group>
                
                <Form.Group controlId="formTime">
                  <Form.Label>Time</Form.Label>
                  <Form.Control
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleTextChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formVenue">
                  <Form.Label>Venue</Form.Label>
                  <Form.Control
                    type="text"
                    name="venue"
                    value={formData.venue}
                    onChange={handleTextChange}
                    required
                  />
                </Form.Group>


                <Form.Group controlId="formVolunteerRoles">
                  <Form.Label>Volunteer Roles</Form.Label>
                  {formData.volunteerRoles.map((role, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                      <Form.Control
                        type="text"
                        value={role}
                        onChange={(e) => handleVolunteerRoleChange(index, e.target.value)}
                        placeholder="Enter a role (e.g., waiter, camera operator)"
                        required
                      />
                      {index > 0 && (
                        <Button variant="danger" onClick={() => removeVolunteerRole(index)} style={{ marginLeft: '8px' }}>
                          Remove
                        </Button>
                      )}
                    </div>
                  ))}
                  <Button variant="secondary" onClick={addVolunteerRole} className="mt-2">
                    Add Another Role
                  </Button>
                </Form.Group>
                <Form.Group controlId="formMedia">
                  <Form.Label>Media</Form.Label>
                  <Form.Control
                    type="file"
                    name="media"
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

export default UploadEvents;
