import React, { useState, useEffect } from 'react';
import { Button, Card, CardContent, Typography, List, ListItem, ListItemText,Badge, Box } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const UpcomingEvents = () => {
  const [eventsData, setEvents] = useState([]);
  const navigate = useNavigate();

  const handleResponses = (item) => {
    navigate('/viewResponses', { state: { newsItem: item } });
  };

  // Fetch events on component mount
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:5214/api/Admin/GetEvents/GetEvents");
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchEvents();
  }, []);

  return (
    <Card style={{ maxWidth: 500, marginLeft: '50px', height: 530 }}>
      <CardContent style={{ maxHeight: '500px', overflowY: 'auto' }}>
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
                    Date:{" "}
                    {new Date(item.date).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })}
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
            <Box display="flex" flexDirection="column" alignItems="center">
              {/* Badge for response count */}
              <Badge
                badgeContent={item.responseCount || 0}
                color="primary"
                sx={{
                  '& .MuiBadge-badge': {
                    top: 10,
                    left:30,
                    background: '#e6b012',
                    color: '#fff',
                    fontSize: '0.8rem',
                    fontWeight: 'bold',
                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)',
                  },
                }}
              />
              {/* Button */}
              <Button
                variant="contained"
                sx={{
                  mt: 1,
                  background: 'linear-gradient(15deg, #ce1127 0%, #003883 100%)',
                  color: '#fff',
                  ':hover': { background: '#FF8C00' },
                }}
                onClick={() => handleResponses(item)}
              >
                Responses
              </Button>
            </Box>
          </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default UpcomingEvents;
