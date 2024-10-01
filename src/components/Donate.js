import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useLocation for detecting route changes
import Footer from './Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './homepage.css';
import './Donate.css';

const Donate = () => {
    const [step, setStep] = useState(1);
    const navigate = useNavigate(); // Initialize useNavigate
    const { smoothS } = useLocation(); // Initialize useLocation to get the current path

    // Scroll to the top whenever the path changes (including when "Donate" button is clicked)
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page
    }, [smoothS]); // Triggers the effect when `pathname` changes

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

    const handleDonateClick = () => {
        navigate('/DonationForm'); // Navigate to the form page
        window.scrollTo(0, 0);
    };

  
  

    return (
        <div>
            {/* <NavBar /> */}
            <div className='hero-section'>
                <Container className="donation-journey">
               
 <Row>
  <Col md={12}>
    <div className="timeline d-flex align-items-center">
      <div className="timeline-line"></div>
      <div className="timeline-steps d-flex justify-content-between w-100">
        <div className="timeline-step">
          <p>Step 1</p>
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="timeline-step">
          <p>Step 2</p>
          <i class="fa-regular fa-file"></i>
        </div>
        <div className="timeline-step">
          <p>Step 3</p>
          <i class="fa-brands fa-cc-apple-pay"></i>
        </div>
        <div className="timeline-step">
          <p>Step 4</p>
          <i class="fa-regular fa-envelope"></i>
        </div>
        <div className="timeline-step">
          <p>Step 5</p>
          <i class="fa-solid fa-check"></i>
        </div>
      </div>
    </div>
  </Col>
</Row>



                    <Row>
                        <Col md={12}>
                            <div className="donation-step-details">
                                {step === 1 && (
                                    <div>
                                        <h2>Step 1: Explore</h2>
                                        <p>Browse our website to view what Alumni space is about</p>
                                    </div>
                                )}
                                {step === 2 && (
                                    <div>
                                        <h2>Step 2: Complete Form</h2>
                                        <p>Click on the donate here button to complete the form..</p>
                                    </div>
                                )}
                                {step === 3 && (
                                    <div>
                                        <h2>Step 3: Payment Method</h2>
                                        <p>We will respond with our banking details.</p>
                                    </div>
                                )}
                                {step === 4 && (
                                    <div>
                                        <h2>Step 4: Payment</h2>
                                        <p>Once the payment is made, please email the POP to alumnispace@tut.ac.za</p>
                                    </div>
                                )}
                                {step === 5 && (
                                    <div>
                                        <h2>Step 5: Thank You!</h2>
                                        <p>Acknowledgment of payment and receipt of thank you letter and S18A certificate (if eligible).</p>
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


