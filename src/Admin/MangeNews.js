import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Box, TextField, Button } from '@mui/material';
import axios from 'axios';
import NavbarLogged from './NavbarLogged';
import Sidebar from '../Admin/Sidebar';
import { useLocation, useNavigate } from 'react-router-dom';

const ManageNews = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { newsItem } = location.state || {};

  const [formData, setFormData] = useState({
    headline: '',
    publishedDate: '',
    publisher: '',
    description: '',
    link: '',
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [saveLoading, setSaveLoading] = useState(false);
  const [removeLoading, setRemoveLoading] = useState(false);

  useEffect(() => {
    if (newsItem) {
      setFormData({
        headline: newsItem.headline || '',
        publishedDate: newsItem.publishedDate?.split('T')[0] || '',
        publisher: newsItem.publisher || '',
        description: newsItem.description || '',
        link: newsItem.link || '',
      });
      if (newsItem.media) {
        setPreviewImage(`data:image/jpeg;base64,${newsItem.media}`);
      }
    }
  }, [newsItem]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    const reader = new FileReader();
    reader.onloadend = () => setPreviewImage(reader.result);
    if (file) reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaveLoading(true);
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
    const formDataToSend = {
      ...formData,
      media: mediaBase64 || newsItem?.media || null,
    };
    try {
      await axios.put(
        `http://localhost:5214/api/Admin/UpdateNews/UpdateNews/${newsItem.id}`,
        formDataToSend
      );
      alert("News updated successfully!");
      navigate('/manage');
    } catch (error) {
      console.error("Error updating news:", error.response ? error.response.data : error.message);
      alert("Failed to update news. Please try again.");
    } finally {
      setSaveLoading(false);
    }
  };

  const handleRemove = async () => {
    setRemoveLoading(true);
    try {
      await axios.delete(`http://localhost:5214/api/Admin/DeleteNews/DeleteNews/${newsItem.id}`);
      alert("News deleted successfully!");
      navigate('/manage');
    } catch (error) {
      console.error("Error deleting news:", error);
      alert("Failed to delete news. Please try again.");
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
          Manage News
        </Typography>
        <Box display="flex" justifyContent="center" mt={8}>
          <Card style={{ minWidth: 500, maxWidth: 600 }}>
            <CardContent style={{ maxHeight: '700px', overflowY: 'auto' }}>
              <form onSubmit={handleSubmit}>
                {newsItem?.type === 'magazine' ? (
                  <TextField
                    fullWidth
                    margin="normal"
                    label="Link"
                    name="link"
                    value={formData.link}
                    onChange={handleChange}
                  />
                ) : (
                  <>
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
                  </>
                )}

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

                {previewImage && (
                  <Box mt={2} display="flex" justifyContent="center">
                    <img
                      src={previewImage}
                      alt="Preview"
                      style={{
                        width: '100%',
                        maxHeight: '200px',
                        objectFit: 'cover',
                        marginBottom: '10px',
                      }}
                    />
                  </Box>
                )}

                <Box mt={2}>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    style={{ marginBottom: '15px' }}
                  />
                </Box>

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
                    disabled={saveLoading}
                  >
                    {saveLoading ? 'Saving...' : 'Save Changes'}
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
                    disabled={removeLoading}
                  >
                    {removeLoading ? 'Removing...' : 'Remove News'}
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
