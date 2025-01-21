import React, { useEffect, useState } from "react";
import { Box, Typography, TextField, Card, CardContent, Button } from "@mui/material";
import axios from "axios";
import NavbarLogged from './NavbarLogged';
import Sidebar from '../Admin/Sidebar';
import { useLocation, useNavigate } from 'react-router-dom';

const ManageJobs = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { jobItem } = location.state || {}; // Get the passed job item data

  const [formData, setFormData] = useState({
    faculty: '',
    type: '',
    vacancy: '',
    location: '',
    closingdate: '',
    link: '',
  });

  const [submitLoading, setSubmitLoading] = useState(false);
  const [removeLoading, setRemoveLoading] = useState(false);

  useEffect(() => {
    if (jobItem) {
      setFormData({
        faculty: jobItem.faculty || '',
        type: jobItem.type || '',
        vacancy: jobItem.vacancy || '',
        location: jobItem.location || '',
        closingdate: jobItem.closingdate ? jobItem.closingdate.split('T')[0] : '',
        link: jobItem.link || '',
      });
    }
  }, [jobItem]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setRemoveLoading(true);
    try {
      await axios.put(`http://localhost:5214/api/Admin/UpdateJob/UpdateJob/${jobItem.id}`, formData);
      alert("Job updated successfully!");
      navigate('/manageJobs');
    } catch (error) {
      console.error("Error updating job:", error.response ? error.response.data : error.message);
    } finally {
      setRemoveLoading(false);
    }
  };

  const handleRemove = async () => {
    try {
      await axios.delete(`http://localhost:5214/api/Admin/DeleteJob/DeleteJob/${jobItem.id}`);
      alert("Job deleted successfully!");
      navigate('/manage-jobs');
    } catch (error) {
      console.error("Error deleting job:", error);
    }
  };

  return (
    <Box display="flex">
      <NavbarLogged />
      <Sidebar />
      <Box flex="1" ml="200px" p={3}>
        <Typography variant="h4" align="center" color="#003883" gutterBottom>
          Manage Job
        </Typography>
        <Box display="flex" justifyContent="center" mt={8}>
          <Card style={{ minWidth: 500, maxWidth: 600 }}>
            <CardContent style={{ maxHeight: '700px', overflowY: 'auto' }}>
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  margin="normal"
                  label="Faculty"
                  name="faculty"
                  value={formData.faculty}
                  onChange={handleChange}
                  required
                />

                <TextField
                  fullWidth
                  margin="normal"
                  label="Type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  required
                />

                <TextField
                  fullWidth
                  margin="normal"
                  label="Vacancy"
                  name="vacancy"
                  value={formData.vacancy}
                  onChange={handleChange}
                  required
                />

                <TextField
                  fullWidth
                  margin="normal"
                  label="Location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />

                <TextField
                  fullWidth
                  margin="normal"
                  label="Closing Date"
                  name="closingdate"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  value={formData.closingdate}
                  onChange={handleChange}
                  required
                />

                <TextField
                  fullWidth
                  margin="normal"
                  label="Link"
                  name="link"
                  value={formData.link}
                  onChange={handleChange}
                  required
                />

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
                      {removeLoading ? 'Removing...' : 'Remove Event'}
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

export default ManageJobs;
