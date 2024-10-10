import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Footer from './Footer'; // Import the Footer component
import './confirmation.css'; // Import the CSS file
import axios from 'axios';

const Confirmation = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    studentNumber: '',
   
  });

  const [submitError, setSubmitError] = useState('');

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevState) => ({
        ...prevState,
        eventOptions: {
          ...prevState.eventOptions,
          [name]: checked,
        },
      }));
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send form data to the API
      const response = await axios.post('http://localhost:5214/api/Guest/CaptureDonation/CaptureDonation', formData);
      window.alert('Thank you for your submission! We will get back to you soon.');

      // Clear the form fields
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        studentNumber: '',
      });
      setSubmitError('');
    } catch (error) {
      console.error('Error submitting the form:', error);
      setSubmitError('Error submitting the form. Please try again later.');
    }
  };
  
  return (
    
    <div>
      
      {/* Form Section */}
      <div className='hero-section d-flex justify-content-center align-items-center'>
      <Container className="mt-2">
        <Row>
          <Col md={12}>
            <div className="form-container">
              <h2>Confirm Profile</h2>
                 <h5>Please review your information and make necessary changes. Click confirm to proceed</h5>
             
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                  <Form.Label>Student Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formSurname">
                  <Form.Label>Fisrt Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="surname"
                    value={formData.surname}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formPhone">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>

              

                <Form.Group controlId="formEmail">
                  <Form.Label>LinkedIn</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="mt-3">
                  Confirm
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
      {/* Include Footer Component */}
      <Footer />
    </div>
  );
};

export default Confirmation;
