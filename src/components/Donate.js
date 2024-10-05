import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { TiTick } from "react-icons/ti";
import { useNavigate, useLocation } from 'react-router-dom';
import Footer from './Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Donate.css';

const Donate = () => {
    const navigate = useNavigate();
    const { smoothS } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [smoothS]);

    const handleDonateClick = () => {
        navigate('/DonationForm');
        window.scrollTo(0, 0);
    };

    // Update the steps array with detailed descriptions
    const steps = [
        { title: "Explore", description: "Browse our website to view what Alumni space is about." },
        { title: "Donate", description: "Click on the donate here button to complete the form." },
        { title: "Payment Method", description: "We will respond with our banking details." },
        { title: "Payment", description: "Once payment is made, email the POP to alumnispace@tut.ac.za" },
        { title: "Step 5", description: "Acknowledgment of payment and receipt of thank you letter and S18A certificate (if eligible)" }
    ];
    
    const [currentStep, setCurrentStep] = useState(1);
    const [complete, setComplete] = useState(false);

    // Create a reference to the donate button section
    const donateButtonRef = useRef(null);

    // Scroll to the donation section when the "Finish" button is clicked
    const handleFinishClick = () => {
        setComplete(true);
        donateButtonRef.current.scrollIntoView({ behavior: 'smooth' }); // Scroll to donate button
    };

    return (
        <div>
            <div className='hero-section'>
                <Container className="donation-journey">
                    <Row>
                        <Col lg={12} className="mx-auto">
                            <div className="step-container"> 
                                {steps.map((step, i) => (
                                    <div
                                        key={i}
                                        className={`step-item ${currentStep === i + 1 ? "active" : ""} ${
                                            i + 1 < currentStep || complete ? "complete" : ""
                                        }`}
                                    >
                                        <div className="step">
                                            {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
                                        </div>
                                        <h2 className="text-gray-500">{step.title}</h2>
                                        <p className="text-gray-500">{step.description}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="step-buttons"> {/* Container for buttons */} 
                                <Button
                                    variant="secondary"
                                    onClick={() => setCurrentStep((prev) => prev - 1)}
                                    disabled={currentStep === 1} // Disable when on the first step
                                    className="me-2" // Adds space between buttons
                                >
                                    Previous
                                </Button>

                                {!complete && (
                                    <Button
                                        variant="primary"
                                        onClick={() => {
                                            if (currentStep === steps.length) {
                                                handleFinishClick(); // Scroll to donate button
                                            } else {
                                                setCurrentStep((prev) => prev + 1);
                                            }
                                        }}
                                    >
                                        {currentStep === steps.length ? "Finish" : "Next"}
                                    </Button>
                                )}
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={12} className="text-center mt-5" ref={donateButtonRef}> {/* Add ref to the Col */}
                            <div className="donation-info">
                                <h2>Your Little Help Will Make a Big Impact</h2>
                                <p>Click below for donation form:</p>
                                <Button variant="secondary" onClick={handleDonateClick}>Donate Here</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Footer />
        </div>
    );
};

export default Donate;
