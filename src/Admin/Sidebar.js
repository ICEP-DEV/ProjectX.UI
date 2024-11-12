import React, { useState } from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import Money from '@mui/icons-material/AttachMoney';
import VolunteerActivism from '@mui/icons-material/VolunteerActivism';
import EventAvailableSharp from '@mui/icons-material/EventAvailableSharp';
import DropdownListItem from './DropdownListItem'; // Import the DropdownListItem
import { useNavigate } from 'react-router-dom';  // Import useNavigate

const Sidebar = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const navigate = useNavigate();  // Initialize the navigate function

    const handleMouseEnter = (index) => setHoveredIndex(index);
    const handleMouseLeave = () => setHoveredIndex(null);

    const buttonStyles = (index) => ({
        backgroundColor: hoveredIndex === index ? '#ffffff33' : 'transparent',
        color: hoveredIndex === index ? '#ffcc00' : '#fff',
        transition: '0.3s',
        cursor: 'pointer',
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

                <ListItem
                    button
                    onMouseEnter={() => handleMouseEnter(2)}
                    onMouseLeave={handleMouseLeave}
                    style={buttonStyles(2)}
                    onClick={() => handleClick('/donations')}  // Navigate to the Donations page
                >
                    <ListItemIcon><Money style={{ color: buttonStyles(2).color }} /></ListItemIcon>
                    <ListItemText primary="Donations" />
                </ListItem>
                 {/* Dropdown for Content */}
                 <DropdownListItem />

                {/* Additional List Items */}
                <ListItem
                    button
                    onMouseEnter={() => handleMouseEnter(3)}
                    onMouseLeave={handleMouseLeave}
                    style={buttonStyles(3)}
                    onClick={() => handleClick('/volunteers')}  // Navigate to the Volunteers page
                >
                    <ListItemIcon><VolunteerActivism style={{ color: buttonStyles(3).color }} /></ListItemIcon>
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
                    <ListItemText primary="Events" />
                </ListItem>
            </List>
        </div>
    );
};



export default Sidebar;
