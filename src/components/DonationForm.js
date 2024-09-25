import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
// Ensure you have the NavBar imported correctly
import Footer from './Footer';
import './DonationForm.css'; // Import the CSS file

const DonationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        phone: '',
        email: '',
        studentNumber: '',
        eventOptions: {
            galaDinner: false,
            ictOrientation: false,
            humanitiesAwards: false,
            fashionShow: false,
        }
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData(prevState => ({
                ...prevState,
                eventOptions: {
                    ...prevState.eventOptions,
                    [name]: checked,
                }
            }));
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        window.alert("Thank you for your submission! We will get back to you soon.");
        setFormData({
            name: '',
            surname: '',
            phone: '',
            email: '',
            studentNumber: '',
            eventOptions: {
                galaDinner: false,
                ictOrientation: false,
                humanitiesAwards: false,
                fashionShow: false,
            }
        });
    };

    return (
        <div>
          {/* Navbar should be rendered only once here */}
            <Container className="hero-section d-flex justify-content-center align-items-center">
                <Row>
                    <Col md={12}>
                        <div className="form-container"> {/* Add the form-container class here */}
                            <h2>Donation Form</h2>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="formName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        name="name" 
                                        value={formData.name} 
                                        onChange={handleInputChange} 
                                        required 
                                    />
                                </Form.Group>

                                <Form.Group controlId="formSurname">
                                    <Form.Label>Surname</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        name="surname" 
                                        value={formData.surname} 
                                        onChange={handleInputChange} 
                                        required 
                                    />
                                </Form.Group>

                                <Form.Group controlId="formPhone">
                                    <Form.Label>Phone Number</Form.Label>
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

                                <Form.Group controlId="formStudentNumber">
                                    <Form.Label>Student Number</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        name="studentNumber" 
                                        value={formData.studentNumber} 
                                        onChange={handleInputChange} 
                                    />
                                </Form.Group>

                                <Form.Group controlId="formEventOptions">
                                    <Form.Label>Select Event/s</Form.Label>
                                    <div style={{ textAlign: 'left' }}>
                                        <Form.Check 
                                            type="checkbox" 
                                            id="event1" 
                                            label="Gala Dinner" 
                                            name="galaDinner" 
                                            checked={formData.eventOptions.galaDinner} 
                                            onChange={handleInputChange} 
                                        />
                                        <Form.Check 
                                            type="checkbox" 
                                            id="event2" 
                                            label="ICT Orientation" 
                                            name="ictOrientation" 
                                            checked={formData.eventOptions.ictOrientation} 
                                            onChange={handleInputChange} 
                                        />
                                        <Form.Check 
                                            type="checkbox" 
                                            id="event3" 
                                            label="Humanities Academic Awards" 
                                            name="humanitiesAwards" 
                                            checked={formData.eventOptions.humanitiesAwards} 
                                            onChange={handleInputChange} 
                                        />
                                        <Form.Check 
                                            type="checkbox" 
                                            id="event4" 
                                            label="Arts and Design Fashion Show" 
                                            name="fashionShow" 
                                            checked={formData.eventOptions.fashionShow} 
                                            onChange={handleInputChange} 
                                        />
                                    </div>
                                </Form.Group>

                                <Button variant="primary" type="submit" className="mt-3">
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default DonationForm;
