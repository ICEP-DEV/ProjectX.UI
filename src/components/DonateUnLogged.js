import React, { useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import './donateUnLogged.css';

const DonateUnLogged = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const tabId = Math.random().toString(36).substring(2); // Unique identifier for the current tab
        localStorage.setItem('donatePageTab', tabId);

        const checkTabConflict = () => {
            const activeTab = localStorage.getItem('donatePageTab');
            if (activeTab && activeTab !== tabId) {
                alert('This page is already open in another tab. Redirecting to the homepage.');
                navigate('/'); // Redirect to the homepage
            }
        };

        // Listen for storage changes across tabs
        const handleStorageChange = (event) => {
            if (event.key === 'donatePageTab') {
                checkTabConflict();
            }
        };

        window.addEventListener('storage', handleStorageChange);

        // Initial check in case another tab is already open
        checkTabConflict();

        // Cleanup: remove tab ID on page unload
        const cleanup = () => {
            if (localStorage.getItem('donatePageTab') === tabId) {
                localStorage.removeItem('donatePageTab');
            }
        };

        window.addEventListener('beforeunload', cleanup);

        return () => {
            cleanup();
            window.removeEventListener('storage', handleStorageChange);
            window.removeEventListener('beforeunload', cleanup);
        };
    }, [navigate]);

    return (
        <div>
            <NavBar />
            <Container className="donation-journey">
                <Row>
                    <Col md={12}>
                        <h3 className="text-center mb-4 donation-heading">Donation</h3>
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
                            onClick={() =>
                                (window.location.href = 'https://tut.devman.co.za/Devman/online/giving/')
                            }
                        >
                            Donate
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default DonateUnLogged;
