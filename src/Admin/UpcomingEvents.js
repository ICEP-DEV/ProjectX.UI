import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemText, Box } from '@mui/material';
import axios from 'axios';

const UpcomingEvents = () => {
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

  return (
    <Card style={{ maxWidth: 500, marginLeft: '50px', height: 530 }}>
      <CardContent style={{ maxHeight: '700px', overflowY: 'auto' }}>
        <Typography variant="h6" color="#003883" gutterBottom>
          Upcoming Events
        </Typography>
        <List>
          {eventsData.map((item, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={
                  <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>
                    {item.title}
                  </Typography>
                }
                secondary={
                  <>
                    <Typography variant="body2" color="textSecondary">
                      Date: {item.date}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Time: {item.time}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Venue: {item.venue}
                    </Typography>
                  </>
                }
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default UpcomingEvents;
