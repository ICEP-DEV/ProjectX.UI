import React, { useEffect, useState } from "react";
import { Box, Typography, TextField, Card, CardContent, Button } from "@mui/material";
import axios from "axios";
import NavbarLogged from './NavbarLogged';
import Sidebar from '../Admin/Sidebar';
import { useLocation, useNavigate } from 'react-router-dom';


const ManageBlogs = () => {
      const location = useLocation();
      const navigate = useNavigate();
      const { blogItem } = location.state || {}; // Get the passed event item data
    
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    description: '',
    image: null
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [removeLoading, setRemoveLoading] = useState(false);

 useEffect(() => {
    if (blogItem) {
      setFormData({
        name: blogItem.name || '',
        role: blogItem.role || '',
        description: blogItem.description || '',
      });
      if (blogItem.image) {
        setPreviewImage(`data:image/jpeg;base64,${blogItem.image}`);
      }
    }
  }, [blogItem]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => setPreviewImage(reader.result);
      reader.readAsDataURL(file);
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitLoading(true);
  
    try {
      let mediaBase64 = null;
  
      // Convert file to base64 if a file is selected
      if (selectedFile) {
        mediaBase64 = await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result.split(',')[1]);
          reader.onerror = (error) => reject(error);
          reader.readAsDataURL(selectedFile);
        });
      }
  
      // Call the function to submit the request
      await submitUpdateRequest(mediaBase64);
    } catch (error) {
      console.error("Error submitting the form:", error.message);
    } finally {
      setSubmitLoading(false);
    }
  };
  

  const submitUpdateRequest = async (mediaBase64 = null) => {
    try {
      const formDataToSend = {
        ...formData,
        image: mediaBase64 || blogItem.image,
      };
      await axios.put(`http://localhost:5214/api/Admin/UpdateBlogs/UpdateBlogs/${blogItem.id}`, formDataToSend);
      console.log(formData);
      alert("Blog updated successfully!");
      navigate('/manage');
    } catch (error) {
      console.error("Error updating blog:", error.response ? error.response.data : error.message);
    } finally {
      setSubmitLoading(false);
    }
  };

  const handleRemove = async () => {
    setRemoveLoading(true);
    try {
      await axios.delete(`http://localhost:5214/api/Admin/DeleteBlogs/DeleteBlogs/${blogItem.id}`);
      alert("blog deleted successfully!");
      navigate('/manage');
    } catch (error) {
      console.error("Error deleting blog:", error);
    } finally {
      setRemoveLoading(false);
    }
  };
  
  

  return (
    <Box display="flex">
      <NavbarLogged />
      <Sidebar />
      <Box flex="1" ml="200px" p={3}>
        <Typography variant="h4" align="center" color="#003883" gutterBottom>
          Manage Blogs
        </Typography>
        <Box display="flex" justifyContent="center" mt={8}>
          <Card style={{ minWidth: 500, maxWidth: 600 }}>
            <CardContent style={{ maxHeight: '700px', overflowY: 'auto' }}>
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  margin="normal"
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                 <TextField
                  fullWidth
                  margin="normal"
                  label="Role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                />

                <TextField
                  fullWidth
                  margin="normal"
                  label="Description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                />

                {/* Image Preview */}
                {previewImage && (
                  <Box mt={2} textAlign="center">
                    <img src={previewImage} alt="Preview" style={{ width: '100%', maxHeight: '200px', objectFit: 'cover' }} />
                  </Box>
                )}

                {/* File Input */}
                <Box mt={2}>
                  <input type="file" accept="image/*" onChange={handleFileChange} />
                </Box>

                {/* Submit & Remove Buttons */}
                <Box display="flex" justifyContent="space-between" mt={2} gap={2}>
                <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      background: "linear-gradient(15deg, #ce1127 0%, #003883 100%)",
                      color: "#fff",
                      ":hover": { background: "#FF8C00" },
                      flex: 1,
                    }}
                  >
                    {submitLoading ? 'Saving...' : 'Save Changes'}
                  </Button>

                  <Button
                    variant="contained"
                    onClick={handleRemove}
                    sx={{
                      background: "linear-gradient(15deg, #ce1127 0%, #003883 100%)",
                      color: "#fff",
                      ":hover": { background: "#FF8C00" },
                      flex: 1,
                    }}
                  >
                    {removeLoading ? 'Removing...' : 'Remove Blog'}
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

export default ManageBlogs;
