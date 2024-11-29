import React, { useEffect, useState } from "react";
import { Box, Typography, Grid, Card, CardContent, Button } from "@mui/material";
import axios from "axios";

const ManageEvents = ({ activeSection, toggleSection }) => {
  const [eventsData, setEventsData] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:5214/api/Alumnus/GetEvent/GetEvents");
        setEventsData(response.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchEvents();
  }, []);

  return (
    <Box>
      <Card>
        <CardContent>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h5" color="#003883" gutterBottom>
              Events
            </Typography>
            <Button
              variant="contained"
              onClick={() => toggleSection("events")}
              sx={{ background: activeSection === "events" ? "#FF8C00" : "#003883", color: "#fff" }}
            >
              Manage
            </Button>
          </Box>
        </CardContent>
      </Card>

      {activeSection === "events" && (
        <Grid container spacing={2}>
          {eventsData.map((event, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardContent>
                  <Typography>{event.title}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default ManageEvents;
