import React, { useState } from 'react';
import { ListItem, ListItemIcon, ListItemText, Collapse, List, Divider } from '@mui/material';
import { ContentCopy, ExpandLess, ExpandMore, SubdirectoryArrowRight } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const DropdownListItem = () => {
    const [open, setOpen] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const navigate = useNavigate();

    const handleMouseEnter = (index) => setHoveredIndex(index);
    const handleMouseLeave = () => setHoveredIndex(null);

    const buttonStyles = (index) => ({
        backgroundColor: hoveredIndex === index ? '#ffffff33' : 'transparent',
        color: hoveredIndex === index ? '#ffcc00' : '#fff',
        transition: '0.3s',
        cursor: 'pointer',
    });

    // Toggle dropdown expansion
    const handleToggle = () => {
        setOpen(!open);
    };

    // Navigation for nested items
    const handleNestedClick = (path) => {
        navigate(path);
    };

    return (
        <>
            {/* Main List Item */}
            <ListItem button onClick={handleToggle} 
                style={{ cursor: 'pointer' }}
                >
                <ListItemIcon>
                    <ContentCopy style={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary="Content" style={{ color: 'white' }} />
                {open ? <ExpandLess style={{ color: 'white' }} /> : <ExpandMore style={{ color: 'white' }} />}
            </ListItem>

            {/* Nested Items */}
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button sx={{ pl: 4 }}
                        onMouseEnter={() => handleMouseEnter(1)}
                        onMouseLeave={handleMouseLeave}
                        style={buttonStyles(1)}
                        onClick={() => handleNestedClick('/upload')}
                    >
                        <ListItemIcon>
                            <SubdirectoryArrowRight style={{ color: buttonStyles(1).color }} />
                        </ListItemIcon>
                        <ListItemText primary="Upload Content" style={{ color: buttonStyles(1).color }} />
                    </ListItem>

                    <ListItem button sx={{ pl: 4 }}
                        onMouseEnter={() => handleMouseEnter(2)}
                        onMouseLeave={handleMouseLeave}
                        style={buttonStyles(2)}
                        onClick={() => handleNestedClick('/manage')}
                    >
                        <ListItemIcon>
                            <SubdirectoryArrowRight style={{ color: buttonStyles(2).color }} />
                        </ListItemIcon>
                        <ListItemText primary="Manage Content" style={{ color: buttonStyles(2).color }} />
                    </ListItem>
                </List>
            </Collapse>
            <Divider />
        </>
    );
};

export default DropdownListItem;
