import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { TiTick } from "react-icons/ti";
import { useNavigate, useLocation } from 'react-router-dom';
import Footer from './Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Donate.css';
import NavBar from './NavBar';

const Donate = () => {
    const navigate = useNavigate();
    const { smoothS } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [smoothS]);

    const handleDonateClick = () => {
        navigate('/donationForm');
        window.scrollTo(0, 0);
    };

    const steps = [
        { title: "Explore", description: "Browse our website to view what Alumni space is about." },
        { title: "Donate", description: "Click on the donate here button to complete the form." },
        { title: "Payment Method", description: "We will respond with our banking details." },
        { title: "Payment", description: "Once payment is made, email the POP to tut.ac.za" },
        { title: "Thank you", description: "Acknowledgment of payment and receipt of thank you letter and S18A certificate (if eligible)" }
    ];
    
    const [currentStep, setCurrentStep] = useState(1);
    const [complete, setComplete] = useState(false);
    const [showPreviousButton, setShowPreviousButton] = useState(true); // State to control the visibility of the previous button

    const donateButtonRef = useRef(null);

    const handleFinishClick = () => {
        setComplete(true);
        setShowPreviousButton(false); // Hide the "Previous" button when Finish is clicked
        donateButtonRef.current.scrollIntoView({ behavior: 'smooth' }); // Scroll to donate button
        navigate('/donationForm'); // Redirect to donation form page
    };

    return (
        <div>
            <NavBar/>
            <Container className="donation-journey">
                <Row>
                    <Col md={12}>
                        <h3 className="text-center mb-4">Donation</h3>
                    </Col>
                </Row>  
                <Row>
                    <Col md={12} className="text-center mt-2" ref={donateButtonRef}> 
                        <div className="donation-info">
                            <p>
                                Thank you for your donation. We would like to extend our sincere gratitude to you for your generous donations and contributions made to our Institution, which will immensely contribute towards achieving the academic success and implementation plans of teaching, research, and learnership robustness.
                            </p>
                        </div>
                    </Col>
                </Row>  
                <Row>
                    <Col lg={12} className="mx-auto">
                        <div className="step-container">
                            {steps.map((step, i) => (
                                <div
                                    key={i}
                                    className={`step-item ${currentStep === i + 1 ? "active" : ""} ${i + 1 < currentStep || complete ? "complete" : ""}`}
                                >
                                    <div className="step">
                                        {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
                                    </div>
                                    <h2 className="text-gray-500">{step.title}</h2>
                                    <p className="text-gray-500">{step.description}</p>
                                </div>
                            ))}
                        </div>
    
                        <div className="step-buttons"> 
                            {showPreviousButton && (
                                <Button
                                    variant="secondary"
                                    onClick={() => setCurrentStep((prev) => prev - 1)}
                                    disabled={currentStep === 1}
                                    className="me-2"
                                >
                                    Previous
                                </Button>
                            )}
    
                            {!complete && (
                                <Button
                                    variant="primary"
                                    onClick={() => {
                                        if (currentStep === steps.length) {
                                            handleFinishClick(); 
                                        } else {
                                            setCurrentStep((prev) => prev + 1);
                                        }
                                    }}
                                >
                                    {currentStep === steps.length ? "Donate" : "Next"}
                                </Button>
                            )}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Donate;
