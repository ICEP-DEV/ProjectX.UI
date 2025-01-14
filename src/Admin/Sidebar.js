import React, { useState } from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Badge  } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import Money from '@mui/icons-material/AttachMoney';
import VolunteerActivism from '@mui/icons-material/VolunteerActivism';
import EventAvailableSharp from '@mui/icons-material/EventAvailableSharp';
import DropdownListItem from './DropdownListItem'; // Import the DropdownListItem
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import axios from "axios";
import { useEffect } from "react";
import { Notifications } from "@mui/icons-material";

const Sidebar = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const navigate = useNavigate();  // Initialize the navigate function
    const [newVolunteersCount, setNewVolunteersCount] = useState(0);
    const [hoveredItem, setHoveredItem] = useState(null);

  
    const handleMouseEnter = (index) => setHoveredIndex(index);
    const handleMouseLeave = () => setHoveredIndex(null);

    const buttonStyles = (index) => ({
        backgroundColor: hoveredIndex === index ? '#ffffff33' : 'transparent',
        color: hoveredIndex === index ? '#ffcc00' : '#fff',
        transition: '0.3s',
        cursor: 'pointer',
    });

    // Simulate fetching new data
        useEffect(() => {
            const fetchNewVolunteers = async () => {
                try {
                    const response = await axios.get("http://localhost:5214/api/Admin/GetNewVolunteers/GetNewVolunteers");
                    setNewVolunteersCount(response.data); // Set only the data (count)
                    console.log("New Volunteers Count:", response.data);
                } catch (error) {
                    console.error("Error fetching new volunteers:", error);
                }
            };
        
            fetchNewVolunteers();
        
            const interval = setInterval(fetchNewVolunteers, 60000); // Check every 60 seconds
        
            return () => clearInterval(interval); // Cleanup interval on unmount
        }, []);
    

        const VolunteerHandleClick = (path) => {
            setNewVolunteersCount(0); // Reset counter
            navigate(path); // Navigate to the page
        };

        const VolButtonStyles = (itemId) => ({
            backgroundColor: hoveredItem === itemId ? "#f0f0f0" : "transparent",
            color: hoveredItem === itemId ? "#003883" : "#000",
          });

    // Function to handle navigation when item is clicked
    const handleClick = (path) => {
        navigate(path);
    };

    return (
        <div style={{ width: '200px',  position: 'fixed',background: 'linear-gradient(15deg, #ce1127 0%, #003883 100%)', color: '#fff', height: '100vh' }}>
            <List>
                <ListItem
                    button
                    onMouseEnter={() => handleMouseEnter(0)}
                    onMouseLeave={handleMouseLeave}
                    style={buttonStyles(0)}
                    onClick={() => handleClick('/admin')}  // Navigate to the Dashboard page
                >
                    <ListItemIcon><DashboardIcon style={{ color: buttonStyles(0).color }} /></ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItem>

                <ListItem
                    button
                    onMouseEnter={() => handleMouseEnter(1)}
                    onMouseLeave={handleMouseLeave}
                    style={buttonStyles(1)}
                    onClick={() => handleClick('/RegisteredAlumni')}  // Navigate to the Alumni page
                >
                    <ListItemIcon><PeopleIcon style={{ color: buttonStyles(1).color }} /></ListItemIcon>
                    <ListItemText primary="Alumni" />
                </ListItem>

                {/* <ListItem
                    button
                    onMouseEnter={() => handleMouseEnter(2)}
                    onMouseLeave={handleMouseLeave}
                    style={buttonStyles(2)}
                    onClick={() => handleClick('/donations')}  // Navigate to the Donations page
                >
                    <ListItemIcon><Money style={{ color: buttonStyles(2).color }} /></ListItemIcon>
                    <ListItemText primary="Donations" />
                </ListItem> */}
                 {/* Dropdown for Content */}
                 <DropdownListItem />

                {/* Additional List Items */}
                <ListItem
                    button
                    onMouseEnter={() => handleMouseEnter(3)}
                    onMouseLeave={handleMouseLeave}
                    style={buttonStyles(3)}
                    onClick={() => VolunteerHandleClick('/viewResponses')}  // Navigate to the Volunteers page
                >
                    <ListItemIcon>
                        <Badge
                        badgeContent={newVolunteersCount}
                        color="error"
                        invisible={newVolunteersCount === 0} // Hide badge if no new data
                        >
                        {newVolunteersCount > 0 ? (
                            <Notifications style={{ color: buttonStyles(2).color }} />
                        ) : (
                            <VolunteerActivism style={{ color: buttonStyles(2).color }} />
                        )}
                        </Badge>
                    </ListItemIcon>
                    <ListItemText primary="Volunteers" />
                </ListItem>

                <ListItem
                    button
                    onMouseEnter={() => handleMouseEnter(4)}
                    onMouseLeave={handleMouseLeave}
                    style={buttonStyles(4)}
                    onClick={() => handleClick('/events')}  // Navigate to the Events page
                >
                    <ListItemIcon><EventAvailableSharp style={{ color: buttonStyles(4).color }} /></ListItemIcon>
                    <ListItemText primary="RSVPs" />
                </ListItem>
            </List>
        </div>
    );
};



export default Sidebar;
