import React, { useEffect, useState } from "react";
import { Button, Card, CardContent, Typography, Grid, Box, MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import NavbarLogged from "./NavbarLogged";
import Sidebar from "../Admin/Sidebar";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom'; // For navigation

const ManageContent = () => {
  const [activeSection, setActiveSection] = useState(null); // Track active section (News, Events, etc.)
  const [newsType, setNewsType] = useState("general"); // Dropdown state to manage news types
  const [newsData, setNewsData] = useState([]); // Store fetched news data

  // Handle Manage button click
  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  // Fetch news data by type
  const fetchNewsData = async (type) => {
    try {
      const response = await axios.get(`http://localhost:5214/api/Alumnus/GetNewsByType/GetNews/${type}`);
      setNewsData(response.data);
    } catch (error) {
      console.error("Error fetching news data:", error);
    }
  };

  // Fetch initial news data when the section is activated or news type changes
  useEffect(() => {
    if (activeSection === "news") {
      fetchNewsData(newsType);
    }
  }, [activeSection, newsType]);

  const [eventsData, setEvents] = useState([]);

  // Fetch events on component mount
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:5214/api/Alumnus/GetEvent/GetEvents");
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchEvents();
  }, []);

  const { faculty: routeFaculty } = useParams(); // Extract faculty from the route
  const [faculty, setFaculty] = useState(routeFaculty || ""); // State to manage faculty selection
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5214/api/Alumnus/GetJobsByFaculty/GetJobsByFaculty/${faculty}`
        );
        const flattenedJobs = response.data.flat();
        setJobs(flattenedJobs);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };
    fetchJobs();
  }, [faculty]);

  console.log(jobs); // Verify the structure of jobs

  // Separate jobs into "Internship" and "Permanent"
  const internships = jobs.filter((job) => job.type === "Internship");
  const permanentJobs = jobs.filter((job) => job.type === "Permanent");

  //handling the edit button
  const navigate = useNavigate();

  const handleEdit = (item) => {
    navigate('/manageNews', { state: { newsItem: item } }); // Pass the selected news item
  };

  return (
    <Box display="flex">
      <NavbarLogged />
      <Sidebar />
      <Box flex="1" ml="200px" p={3}>
        <Typography variant="h4" align="center" color="#003883" gutterBottom style={{ marginBottom: "90px" }}>
          Manage Content
        </Typography>

        {/* News and Historical Archives Section */}
        <Card sx={{ background: "#ffff", color: "#fff", marginBottom: "20px" }}>
          <CardContent>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="h5" color="#003883" gutterBottom>
                News and Historical Archives
              </Typography>
              <Button
                variant="contained"
                startIcon={<AddCircleIcon />}
                onClick={() => toggleSection("news")}
                sx={{
                  background: activeSection === "news" ? "#FF8C00" : "linear-gradient(15deg, #ce1127 0%, #003883 100%)",
                  color: "#fff",
                  ":hover": { background: "#FF8C00" },
                }}
              >
                Manage
              </Button>
            </Box>
          </CardContent>
        </Card>

        {/* News Section Content */}
        {activeSection === "news" && (
          <Box mb={3}>
            <FormControl fullWidth variant="outlined" sx={{ mb: 3 }}>
              <InputLabel id="news-type-select-label">Select News Type</InputLabel>
              <Select
                labelId="news-type-select-label"
                value={newsType}
                onChange={(e) => setNewsType(e.target.value)}
                label="Select News Type"
              >
                <MenuItem value="general">General News</MenuItem>
                <MenuItem value="magazine">Magazines</MenuItem>
              </Select>
            </FormControl>

            {/* Display News Articles */}
            <Grid container spacing={2}>
              {newsData.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card style={{Height:'350px' }}>
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        {item.headline}
                      </Typography>
                      <img
                        src={`data:image/jpeg;base64,${item.media}`}
                        alt="News"
                        style={{ width: "100%", height: "200px", objectFit: "cover", marginBottom: "10px" }}
                      />
                      <Typography variant="body2" color="textSecondary" gutterBottom>
                        Published: {new Date(item.publishedDate).toLocaleDateString("en-GB", {
                          day: "2-digit",
                          month: "long",
                          year: "numeric",
                        })}{" "}
                        by {item.publisher}
                      </Typography>
                      <Typography variant="body2">{item.description}</Typography>
                      <Button
                            variant="contained"
                            sx={{
                                background: "linear-gradient(15deg, #ce1127 0%, #003883 100%)",
                                color: "#fff",
                                marginTop: "10px",
                                ":hover": { background: "#FF8C00" },
                            }}
                            onClick={() => handleEdit(item)} // Pass the current item
                            >
                            Edit
                     </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}

        {/* Events Section */}
        <Card sx={{ background: '#ffff', color: '#fff', marginBottom: '20px' }}>
          <CardContent>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="h5" color="#003883" gutterBottom>
                Events
              </Typography>
              <Button
                variant="contained"
                startIcon={<AddCircleIcon />}
                onClick={() => toggleSection('events')}
                sx={{
                  background: activeSection === 'events' ? '#FF8C00' : 'linear-gradient(15deg, #ce1127 0%, #003883 100%)',
                  color: '#fff',
                  ':hover': { background: '#FF8C00' },
                }}
              >
                Manage
              </Button>
            </Box>
          </CardContent>
        </Card>



        {/* Events Grid */}
        {activeSection === "events" && (
        <Grid container spacing={2} mb={3}>
            {eventsData.map((event, index) => (
            <Grid item xs={3} key={index}>
                <Card>
                <CardContent>
                <Box
                    sx={{
                        height: '200px',
                        backgroundImage: `url(data:image/jpeg;base64,${event.media})`, // Correct syntax for base64 images
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                    />

                    {/* Display the title of the event */}
                    <Typography variant="h6" textAlign="center" gutterBottom>
                    {event.title}
                    </Typography>
                    {/* Optional: Add more fields as needed */}
                    <Typography variant="body2">{event.description}</Typography>
                    <Button
                    variant="contained"
                    sx={{
                        background: "linear-gradient(15deg, #ce1127 0%, #003883 100%)",
                        color: "#fff",
                        marginTop: "10px", marginLeft: "300px",
                        ":hover": { background: "#FF8C00" },
                    }}
                    >
                    Edit
                    </Button>
                </CardContent>
                </Card>
            </Grid>
            ))}
        </Grid>
        )}


        {/* Job Opportunities Section */}
        <Card sx={{ background: '#ffff', color: '#fff', marginBottom: '20px' }}>
          <CardContent>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="h5" color="#003883" gutterBottom>
                Job Opportunities
              </Typography>
              <Button
                variant="contained"
                startIcon={<AddCircleIcon />}
                onClick={() => toggleSection('jobs')}
                sx={{
                  background: activeSection === 'jobs' ? '#FF8C00' : 'linear-gradient(15deg, #ce1127 0%, #003883 100%)',
                  color: '#fff',
                  ':hover': { background: '#FF8C00' },
                }}
              >
                Manage
              </Button>
            </Box>
          </CardContent>
        </Card>
        {/* News Section Content */}
        {activeSection === "jobs" && (
        <Box mb={3}>
            {/* Faculty Selection Dropdown */}
            <FormControl fullWidth variant="outlined" sx={{ mb: 3 }}>
            <InputLabel id="faculty-select-label">Select Faculty</InputLabel>
            <Select
                labelId="faculty-select-label"
                value={faculty}
                onChange={(e) => setFaculty(e.target.value)}
                label="Select Faculty"
            >
                <MenuItem value="ICT">ICT</MenuItem>
                <MenuItem value="Arts">Arts</MenuItem>
                <MenuItem value="Humanities">Humanities</MenuItem>
                <MenuItem value="Engineering">Engineering</MenuItem>
                <MenuItem value="Science">Science</MenuItem>
                <MenuItem value="Management Science">Management Science</MenuItem>
                <MenuItem value="Finance">Finance</MenuItem>
            </Select>
            </FormControl>

            {/* Jobs Section Content */}
            <Box mb={3}>
            {/* Job Opportunities */}
            <Typography variant="h5" color="#003883" gutterBottom>
                Job Opportunities - {faculty}
            </Typography>

            {jobs.length === 0 ? (
                <Box textAlign="center" my={3}>
                <Typography variant="body1" color="textSecondary">
                    No jobs available for the selected faculty.
                </Typography>
                </Box>
            ) : (
                <>
                {/* Internship Section */}
                <Typography variant="h6" color="#003883" gutterBottom>
                    Internships
                </Typography>
                <Grid container spacing={2} mb={3}>
                    {internships.length === 0 ? (
                    <Grid item xs={12}>
                        <Typography variant="body2" color="textSecondary" textAlign="center">
                        No internship opportunities available.
                        </Typography>
                    </Grid>
                    ) : (
                    internships.map((job, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card>
                            <CardContent>
                            <Typography variant="h6" gutterBottom>
                                {job.vacancy}
                            </Typography>
                            <Typography variant="body2">
                                <strong>Location:</strong> {job.location}
                            </Typography>
                            <Button
                                variant="contained"
                                sx={{
                                background: "linear-gradient(15deg, #ce1127 0%, #003883 100%)",
                                color: "#fff",
                                marginTop: "10px",marginLeft: "400px",
                                ":hover": { background: "#FF8C00" },
                                }}
                            >
                                Edit
                            </Button>
                            </CardContent>
                        </Card>
                        </Grid>
                    ))
                    )}
                </Grid>

                {/* Permanent Job Section */}
                <Typography variant="h6" color="#003883" gutterBottom>
                    Permanent Jobs
                </Typography>
                <Grid container spacing={2} mb={3}>
                    {permanentJobs.length === 0 ? (
                    <Grid item xs={12}>
                        <Typography variant="body2" color="textSecondary" textAlign="center">
                        No permanent job opportunities available.
                        </Typography>
                    </Grid>
                    ) : (
                    permanentJobs.map((job, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card>
                            <CardContent>
                            <Typography variant="h6" gutterBottom>
                                {job.vacancy}
                            </Typography>
                            <Typography variant="body2">
                                <strong>Location:</strong> {job.location}
                            </Typography>
                            <Button
                                variant="contained"
                                sx={{
                                background: "linear-gradient(15deg, #ce1127 0%, #003883 100%)",
                                color: "#fff",
                                marginTop: "10px",marginLeft: "400px",
                                ":hover": { background: "#FF8C00" },
                                }}
                            >
                                Edit
                            </Button>
                            </CardContent>
                        </Card>
                        </Grid>
                    ))
                    )}
                </Grid>
                </>
            )}
            </Box>
        </Box>
        )}


        {/* Podcast Section */}
        <Card sx={{ background: '#ffff', color: '#fff', marginBottom: '20px' }}>
          <CardContent>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="h5" color="#003883" gutterBottom>
                Podcast
              </Typography>
              <Button
                variant="contained"
                startIcon={<AddCircleIcon />}
                onClick={() => toggleSection('podcast')}
                sx={{
                  background: activeSection === 'podcast' ? '#FF8C00' : 'linear-gradient(15deg, #ce1127 0%, #003883 100%)',
                  color: '#fff',
                  ':hover': { background: '#FF8C00' },
                }}
              >
                Manage
              </Button>
            </Box>
          </CardContent>
        </Card>
        

        {/* Podcast Grid */}
        {activeSection === 'podcast' && (
          <Grid container spacing={2} mb={3}>
            {['Software Engineer', 'Data Analyst', 'UI/UX Designer', 'Product Manager'].map((job, index) => (
              <Grid item xs={3} key={index}>
                <Card>
                  <CardContent>
                    <Typography variant="body1" textAlign="center" mt={1}>
                      {job}
                    </Typography>
                    <Button
                      variant="contained"
                      sx={{
                        background: 'linear-gradient(15deg, #ce1127 0%, #003883 100%)',
                        color: '#fff',
                        marginTop: '10px',marginLeft: "400px",
                        ':hover': { background: '#FF8C00' },
                      }}
                    >
                      Edit
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Box>
  );
};

export default ManageContent;
