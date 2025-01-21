import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import NavBar from './NavBar';
import './Donate.css';
import FooterLogged from '../LoggedPages/FooterLogged';

const Donate = () => {
    return (
        <div>
           
            <Container className="donation-journey">
                <Row>
                    <Col md={12}>
                        <h3 className="text-center mb-4">Donation</h3>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="text-center mt-2">
                        <div className="donation-info">
                            <p>
                                Thank you for your donation. We would like to extend our sincere gratitude to you for your generous donations and contributions made to our Institution. Please click on the donate button to be redirected to the donation journey and to complete your donation process.
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} className="mx-auto text-center">
                        <Button
                            variant="primary"
                            onClick={() => window.location.href = 'https://tut.devman.co.za/Devman/online/giving/'}
                        >
                            Donate
                        </Button>
                    </Col>
                </Row>
            </Container>
            { <FooterLogged />}
        </div>
    );
};

export default Donate;
