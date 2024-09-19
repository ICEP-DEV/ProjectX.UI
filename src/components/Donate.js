import React, { useState } from 'react';
import { Container, Row, Col, Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link for routing
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome
import './homepage.css';
import './navbar.css';
import './Donate.css';
import NavBar from './NavBar'; // Ensure the path is correct
import Footer from './Footer'; // Import the Footer component

const Donate = () => {
    const [step, setStep] = useState(1);

    const handleNextStep = () => {
        if (step < 5) {
            setStep(step + 1);
        }
    };

    const handlePreviousStep = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };

    return (
        <div>
            <NavBar /> {/* Render the NavBar component */}
            <div className='hero-section'>
                <Container className="donation-journey">
                    <Row>
                        <Col md={12}>

                            {/* Add a Home link here */}
                            {/* <Nav.Link as={Link} to="/HomePage" className="text-primary mb-3">Home</Nav.Link> */}

                            <div className="d-flex justify-content-between">
                                <div className="donation-step">
                                    <i className="fas fa-check-circle"></i>
                                    <p>Step 1</p>
                                </div>
                                <div className="donation-step">
                                    <i className={`fas ${step >= 2 ? 'fa-check-circle' : 'fa-times-circle'}`}></i>
                                    <p>Step 2</p>
                                </div>
                                <div className="donation-step">
                                    <i className={`fas ${step >= 3 ? 'fa-check-circle' : 'fa-times-circle'}`}></i>
                                    <p>Step 3</p>
                                </div>
                                <div className="donation-step">
                                    <i className={`fas ${step >= 4 ? 'fa-check-circle' : 'fa-times-circle'}`}></i>
                                    <p>Step 4</p>
                                </div>
                                <div className="donation-step">
                                    <i className={`fas ${step === 5 ? 'fa-check-circle' : 'fa-times-circle'}`}></i>
                                    <p>Step 5</p>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={12}>
                            <div className="donation-step-details">
                                {step === 1 && (
                                    <div>
                                        <h2>Step 1: Your Information</h2>
                                        <p>Please provide your personal details.</p>
                                    </div>
                                )}
                                {step === 2 && (
                                    <div>
                                        <h2>Step 2: Donation Amount</h2>
                                        <p>Choose your donation amount.</p>
                                    </div>
                                )}
                                {step === 3 && (
                                    <div>
                                        <h2>Step 3: Payment Method</h2>
                                        <p>Select your preferred payment method.</p>
                                    </div>
                                )}
                                {step === 4 && (
                                    <div>
                                        <h2>Step 4: Review and Submit</h2>
                                        <p>Review your donation details and submit.</p>
                                    </div>
                                )}
                                {step === 5 && (
                                    <div>
                                        <h2>Step 5: Thank You!</h2>
                                        <p>Thank you for your donation.</p>
                                    </div>
                                )}
                            </div>

                            <div className="d-flex justify-content-center mt-4">
                                <Button
                                    variant="secondary"
                                    onClick={handlePreviousStep}
                                    disabled={step === 1} // Disable "Previous" on the first step
                                    className="me-2" // Add margin to the right
                                >
                                    Previous Step
                                </Button>
                                
                                <Button
                                    variant="primary"
                                    onClick={handleNextStep}
                                    disabled={step === 5} // Disable "Next" on the last step
                                >
                                    Next Step
                                </Button>
                            </div>
                        </Col>
                    </Row>

                    <Row className="mt-5">
                        <Col md={12}>
                            <div className="donation-info text-center">
                                <h2>Your Little Help Will Make a Big Impact</h2>
                                <p>Click here for donation:</p>
                                <Button variant="secondary">Donate Here</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Footer/> {/* Render the Footer component */}
        </div>
    );
};

export default Donate;
