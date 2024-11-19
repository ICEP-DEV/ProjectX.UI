import React, { useState } from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import axios from 'axios';
import NavbarLogged from './NavbarLogged';
import Sidebar from '../Admin/Sidebar';
import { Form, Button } from 'react-bootstrap';

const UploadNews = () => {
    const [newsType, setNewsType] = useState(''); // To track the selected news type
    const [formData, setFormData] = useState({
        headline: '',
        description: '',
        publisher: '',
        publishedDate: '',
        image: null, // For magazines
    });

    const [submitError, setSubmitError] = useState('');

    // Handle text input changes
    const handleTextChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle file input change (for magazines)
    const handleFileChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(formData);

            // Prepare form data for submission
            const formDataToSend = new FormData();
            formDataToSend.append('newsType', newsType);

            if (newsType === 'general') {
                formDataToSend.append('headline', formData.headline);
                formDataToSend.append('description', formData.description);
                formDataToSend.append('publisher', formData.publisher);
                formDataToSend.append('publishedDate', formData.publishedDate);
            } else if (newsType === 'magazine') {
                formDataToSend.append('link', formData.link);
                formDataToSend.append('image', formData.image);
            }

            // Send form data to the API
            const response = await axios.post(
                'http://localhost:5214/api/Admin/UploadNews',
                formDataToSend,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );

            window.alert('News uploaded successfully!!!');

            // Clear the form fields
            setFormData({
                headline: '',
                description: '',
                publisher: '',
                publishedDate: '',
                image: null,
            });
            setNewsType('');
            setSubmitError('');
        } catch (error) {
            console.error('Error uploading news', error);
            setSubmitError('Error uploading news. Please try again later.');
        }
    };

    return (
        <Box display="flex">
            <NavbarLogged />
            <Sidebar />
            <Box flex="1" ml="200px" p={3}>
                <Typography variant="h4" align="center" color="#003883" gutterBottom>
                    Upload News
                </Typography>
                <Box display="flex" justifyContent="center" mt={8}>
                    <Card style={{ minWidth: 500, maxWidth: 600 }}>
                        <CardContent style={{ maxHeight: '700px', overflowY: 'auto' }}>
                            {/* News Type Selection */}
                            <Form.Group controlId="formNewsType">
                                <Form.Label>News Type</Form.Label>
                                <Form.Select
                                    value={newsType}
                                    onChange={(e) => setNewsType(e.target.value)}
                                    required
                                >
                                    <option value="">Select News Type</option>
                                    <option value="general">General News</option>
                                    <option value="magazine">Magazine</option>
                                </Form.Select>
                            </Form.Group>

                            {/* News Form */}
                            <Form onSubmit={handleSubmit} className="mt-3">
                                {newsType === 'general' && (
                                    <>
                                        <Form.Group controlId="formHeadline">
                                            <Form.Label>Headline</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="headline"
                                                value={formData.headline}
                                                onChange={handleTextChange}
                                                required
                                            />
                                        </Form.Group>
                                        <Form.Group controlId="formDescription">
                                            <Form.Label>Description</Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                rows={3}
                                                name="description"
                                                value={formData.description}
                                                onChange={handleTextChange}
                                                required
                                            />
                                        </Form.Group>
                                    </>
                                )}

                                {newsType && (
                                    <Form.Group controlId="formLink">
                                        <Form.Label>Publisher</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="link"
                                            value={formData.publisher}
                                            onChange={handleTextChange}
                                            required
                                        />
                                    </Form.Group>
                                )}
                                {newsType && (
                                    <Form.Group controlId="formLink">
                                        <Form.Label>Published Date</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="link"
                                            value={formData.publishedDate}
                                            onChange={handleTextChange}
                                            required
                                        />
                                    </Form.Group>
                                )}

                                {newsType === 'magazine' && (
                                    <Form.Group controlId="formImage">
                                        <Form.Label>Upload Image</Form.Label>
                                        <Form.Control
                                            type="file"
                                            accept="image/*"
                                            onChange={handleFileChange}
                                            required
                                        />
                                    </Form.Group>
                                )}

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

export default UploadNews;
