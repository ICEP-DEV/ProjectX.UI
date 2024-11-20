import React, { useEffect, useState } from "react";
import { Box, Typography, FormControl, InputLabel, Select, MenuItem, Grid, Card, CardContent, Button } from "@mui/material";
import axios from "axios";

const ManageJobs = ({ activeSection, toggleSection }) => {
  const [faculty, setFaculty] = useState("");
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(`http://localhost:5214/api/Alumnus/GetJobsByFaculty/GetJobsByFaculty/${faculty}`);
        setJobs(response.data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };
    if (faculty) fetchJobs();
  }, [faculty]);

  return (
    <Box>
      <Card>
        <CardContent>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h5" color="#003883" gutterBottom>
              Job Opportunities
            </Typography>
            <Button
              variant="contained"
              onClick={() => toggleSection("jobs")}
              sx={{ background: activeSection === "jobs" ? "#FF8C00" : "#003883", color: "#fff" }}
            >
              Manage
            </Button>
          </Box>
        </CardContent>
      </Card>

      {activeSection === "jobs" && (
        <Box>
          <FormControl fullWidth>
            <InputLabel>Select Faculty</InputLabel>
            <Select value={faculty} onChange={(e) => setFaculty(e.target.value)}>
              <MenuItem value="ICT">ICT</MenuItem>
              <MenuItem value="Engineering">Engineering</MenuItem>
            </Select>
          </FormControl>
          <Grid container spacing={2}>
            {jobs.map((job, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card>
                  <CardContent>
                    <Typography>{job.vacancy}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Box>
  );
};

export default ManageJobs;
