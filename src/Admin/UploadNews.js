import React, { useState } from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import axios from 'axios';
import NavbarLogged from './NavbarLogged';
import Sidebar from '../Admin/Sidebar';
import { Form, Button } from 'react-bootstrap';

const UploadNews = () => {
    const [newsType, setNewsType] = useState(''); // To track the selected news type
    const [formData, setFormData] = useState({
        newsType:'',
        headline: '',
        description: '',
        publisher: '',
        link: '',
        publishedDate: '',
        media: null, // For magazines
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
            reader.onload = () => resolve(reader.result); // Keep the full Base64 string
            reader.onerror = (error) => reject(error);
        });
    };
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        setNewsType('');
            setSubmitError('');
            setSubmitLoading(true);
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
                formDataToSend.append('media', formData.media);
            } else if (newsType === 'magazine') {
                formDataToSend.append('link', formData.link);
                formDataToSend.append('description', formData.description);
                formDataToSend.append('media', formData.media);
            }

            // Send form data to the API
            const response = await axios.post(
                'http://localhost:5214/api/Admin/UploadNews/UploadNews',
                formDataToSend
            );

            window.alert('News uploaded successfully!!!');

            // Clear the form fields
            setFormData({
                newsType:'',
                headline: '',
                description: '',
                publisher: '',
                publishedDate: '',
                link: '',
                media: null,
            });
            
        } catch (error) {
            console.error('Error uploading news', error);
            setSubmitError('Error uploading news. Please try again later.');
        }
        finally {
            setSubmitLoading(false);
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
                                    onChange={(e) => {
                                        setNewsType(e.target.value);
                                        setFormData({ ...formData, newsType: e.target.value }); // Update formData with newsType
                                    }}
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

                                    </>
                                )}
                                {newsType && (
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
                                )}
                                {newsType === 'general' && (
                                    <>

                                        <Form.Group controlId="formPublisher">
                                        <Form.Label>Publisher</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="publisher"
                                            value={formData.publisher}
                                            onChange={handleTextChange}
                                            required
                                        />
                                    </Form.Group>     

                                    <Form.Group controlId="formDate">
                                        <Form.Label>Published Date</Form.Label>
                                        <Form.Control
                                            type="date"
                                            name="publishedDate"
                                            value={formData.publishedDate}
                                            onChange={handleTextChange}
                                            required
                                        />
                                    </Form.Group>

                                    </>
                                )}
                                {newsType === 'magazine' && (
                                    <Form.Group controlId="formLink">
                                    <Form.Label>Magazine Link</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="link"
                                        value={formData.link}
                                        onChange={handleTextChange}
                                        required
                                    />
                                </Form.Group>
                                )}

                                {newsType && (
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

export default UploadNews;
