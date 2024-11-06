import React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemAvatar, ListItemText, Avatar, Box } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Computer, Engineering, Explore, Science } from '@mui/icons-material';

const eventData = [
    { name: 'ICT Gala Dinner', date: '22 DEC 7:20 PM', icon: <NotificationsIcon />, color: '#4CAF50' },
    { name: 'Tshwane Varsity Hackaton', date: '21 DEC 11:00 PM', icon: <Computer />, color: '#F44336' },
    { name: 'Science Exhibition', date: '21 DEC 9:34 PM', icon: <Science />, color: '#2196F3' },
    { name: 'FEED', date: '20 DEC 2:20 AM', icon: <Explore />, color: '#FF9800' },
    { name: 'New Card race', date: '18 DEC 4:54 AM', icon: <Engineering />, color: '#E91E63' }
];

const UpcomingEvents = ({ data = eventData }) => {
    return (
        <Card style={{ maxWidth: 500,  marginLeft: '50px',height:530 }}>
            <CardContent>
                <Typography variant="h6" color="#003883" gutterBottom>
                    Upcoming Events
                </Typography>
                
                <List>
                    {data.map((item, index) => (
                        <ListItem key={index}>
                            <ListItemAvatar>
                                <Avatar style={{ backgroundColor: item.color }}>
                                    {item.icon}
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText 
                                primary={item.name}
                                secondary={item.date}
                            />
                        </ListItem>
                    ))}
                </List>
            </CardContent>
        </Card>
    );
};

export default UpcomingEvents;
