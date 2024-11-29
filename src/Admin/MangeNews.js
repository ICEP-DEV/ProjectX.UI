import React, { useState } from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import axios from 'axios';
import NavbarLogged from './NavbarLogged';
import Sidebar from '../Admin/Sidebar';
import { useLocation } from 'react-router-dom';
import { TextField, Button } from '@mui/material';
import { Form } from 'react-bootstrap';

const ManageNews = () => {
  const location = useLocation();
  const { newsItem } = location.state || {}; // Get the passed news item data

  const [formData, setFormData] = useState({
    headline: newsItem?.headline || '',
    publishedDate: newsItem?.publishedDate || '',
    publisher: newsItem?.publisher || '',
    description: newsItem?.description || '',
    media: newsItem?.media || '',
    link: newsItem?.link || '',  // Add this line
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Check for ID
    if (!newsItem || !newsItem.id) {
      console.error("News item ID is missing.");
      return;
    }
  
    // Create FormData object
    const formDataToSend = new FormData();
    formDataToSend.append("id", newsItem.id);
    formDataToSend.append("headline", formData.headline);
    formDataToSend.append("publishedDate", formData.publishedDate);
    formDataToSend.append("publisher", formData.publisher);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("link", formData.link || "No link provided");
  
    if (selectedFile) {
      formDataToSend.append("media", selectedFile);  // Append file directly
    }
  
    // Debug form data
    for (let pair of formDataToSend.entries()) {
      console.log(pair[0] + ':', pair[1]);
    }
  
    try {
      const response = await axios.put(
        "http://localhost:5214/api/Admin/UpdateNews/UpdateNews",
        formDataToSend,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      console.log("News updated successfully", response.data);
      alert("News updated successfully!");
    } catch (error) {
      console.error("Error updating news", error.response?.data || error.message);
      alert("Error updating news. Please try again.");
    }
  };
  
  const [selectedFile, setSelectedFile] = useState(null);

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

  return (

    <Box display="flex">
        <NavbarLogged />
        <Sidebar />
        <Box flex="1" ml="200px" p={3}>
            <Typography variant="h4" align="center" color="#003883" gutterBottom>
                Manage News
            </Typography>
            <Box display="flex" justifyContent="center" mt={8}>
                <Card style={{ minWidth: 500, maxWidth: 600 }}>
                    <CardContent style={{ maxHeight: '700px', overflowY: 'auto' }}>
                        <form onSubmit={handleSubmit}>
                            <TextField
                            fullWidth
                            margin="normal"
                            label="Headline"
                            name="headline"
                            value={formData.headline}
                            onChange={handleChange}
                            />
                            <TextField
                            fullWidth
                            margin="normal"
                            label="Published Date"
                            name="publishedDate"
                            type="date"
                            InputLabelProps={{ shrink: true }}
                            value={formData.publishedDate}
                            onChange={handleChange}
                            />
                            <TextField
                            fullWidth
                            margin="normal"
                            label="Publisher"
                            name="publisher"
                            value={formData.publisher}
                            onChange={handleChange}
                            />
                            <TextField
                            fullWidth
                            multiline
                            rows={4}
                            margin="normal"
                            label="Description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            />

                            <Box mt={2}>
                            <Form.Group controlId="formImage">
                                <Form.Label>Upload Image</Form.Label>
                                <Form.Control
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    style={{ marginBottom: '15px' }}
                                />
                            </Form.Group>
                            {selectedFile && (
                                <Typography variant="body2">
                                Selected file: {selectedFile.name}
                                </Typography>
                            )}
                            </Box>
                            <Box display="flex" justifyContent="space-between" mt={2} gap={2}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    sx={{
                                    background: "linear-gradient(15deg, #ce1127 0%, #003883 100%)",
                                    color: "#fff",
                                    ":hover": { background: "#FF8C00" },
                                    marginTop: "10px",
                                    flex: 1, // Ensures equal width
                                    }}
                                >
                                    Save Changes
                                </Button>
                                <Button
                                    variant="contained"
                                    sx={{
                                    background: "linear-gradient(15deg, #ce1127 0%, #003883 100%)",
                                    color: "#fff",
                                    ":hover": { background: "#FF8C00" },
                                    marginTop: "10px",
                                    flex: 1, // Ensures equal width
                                    }}
                                >
                                    Remove News
                                </Button>
                            </Box>
                        </form>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    </Box>


  );
};

export default ManageNews;
