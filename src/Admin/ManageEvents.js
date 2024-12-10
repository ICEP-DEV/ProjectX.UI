import React, { useEffect, useState } from "react";
import { Box, Typography, TextField, Card, CardContent, Button } from "@mui/material";
import axios from "axios";
import NavbarLogged from './NavbarLogged';
import Sidebar from '../Admin/Sidebar';
import { useLocation, useNavigate } from 'react-router-dom';

const ManageEvents = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { eventItem } = location.state || {}; // Get the passed event item data

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    venue: '',
    volunteerRoles: [''],
    media: null,
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [submitLoading, setSubmitLoading] = useState(false);

  useEffect(() => {
    if (eventItem) {
      setFormData({
        title: eventItem.title || '',
        description: eventItem.description || '',
        date: eventItem.date ? eventItem.date.split('T')[0] : '',
        time: eventItem.time || '',
        venue: eventItem.venue || '',
        volunteerRoles: eventItem.volunteerRoles || [''],
      });
      if (eventItem.media) {
        setPreviewImage(`data:image/jpeg;base64,${eventItem.media}`);
      }
    }
  }, [eventItem]);

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

  const handleVolunteerRoleChange = (index, value) => {
    const newRoles = [...formData.volunteerRoles];
    newRoles[index] = value;
    setFormData({ ...formData, volunteerRoles: newRoles });
  };

  const addVolunteerRole = () => {
    setFormData({ ...formData, volunteerRoles: [...formData.volunteerRoles, ''] });
  };

  const removeVolunteerRole = (index) => {
    const newRoles = formData.volunteerRoles.filter((_, i) => i !== index);
    setFormData({ ...formData, volunteerRoles: newRoles });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitLoading(true);

    let mediaBase64 = null;
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = async () => {
        mediaBase64 = reader.result.split(',')[1];
        await submitUpdateRequest(mediaBase64);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      await submitUpdateRequest();
    }
  };

  const submitUpdateRequest = async (mediaBase64 = null) => {
    try {
      const formDataToSend = {
        ...formData,
        media: mediaBase64 || eventItem.media,
      };
      await axios.put(`http://localhost:5214/api/Admin/UpdateEvents/UpdateEvents/${eventItem.id}`, formDataToSend);
      alert("Event updated successfully!");
      navigate('/manage');
    } catch (error) {
      console.error("Error updating event:", error.response ? error.response.data : error.message);
    } finally {
      setSubmitLoading(false);
    }
  };

  const handleRemove = async () => {
    try {
      await axios.delete(`http://localhost:5214/api/Admin/DeleteEvent/DeleteEvent/${eventItem.id}`);
      alert("Event deleted successfully!");
      navigate('/manage');
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };

  return (
    <Box display="flex">
      <NavbarLogged />
      <Sidebar />
      <Box flex="1" ml="200px" p={3}>
        <Typography variant="h4" align="center" color="#003883" gutterBottom>
          Manage Event
        </Typography>
        <Box display="flex" justifyContent="center" mt={8}>
          <Card style={{ minWidth: 500, maxWidth: 600 }}>
            <CardContent style={{ maxHeight: '700px', overflowY: 'auto' }}>
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  margin="normal"
                  label="Title"
                  name="title"
                  value={formData.title}
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

                <TextField
                  fullWidth
                  margin="normal"
                  label="Date"
                  name="date"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  value={formData.date}
                  onChange={handleChange}
                  required
                />

                <TextField
                  fullWidth
                  margin="normal"
                  label="Time"
                  name="time"
                  type="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                />

                <TextField
                  fullWidth
                  margin="normal"
                  label="Venue"
                  name="venue"
                  value={formData.venue}
                  onChange={handleChange}
                  required
                />

                {/* Volunteer Roles */}
                {formData.volunteerRoles.map((role, index) => (
                  <Box key={index} display="flex" alignItems="center" mt={2}>
                    <TextField
                      fullWidth
                      margin="normal"
                      label={`Volunteer Role ${index + 1}`}
                      value={role}
                      onChange={(e) => handleVolunteerRoleChange(index, e.target.value)}
                      required
                    />
                    {index > 0 && (
                      <Button variant="outlined" onClick={() => removeVolunteerRole(index)} style={{ marginLeft: '10px', background: "linear-gradient(15deg, #ce1127 0%, #003883 100%)",
                        color: "#fff"}}>
                        Remove
                      </Button>
                    )}
                  </Box>
                ))}
                <Button variant="contained" onClick={addVolunteerRole} style={{ marginTop: '10px', background: "linear-gradient(15deg, #ce1127 0%, #003883 100%)",
                      color: "#fff"}}>
                  Add Role
                </Button>

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
                    {submitLoading ? 'Removing...' : 'Remove Event'}
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

export default ManageEvents;
