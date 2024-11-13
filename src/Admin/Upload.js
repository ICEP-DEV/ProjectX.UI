import React, { useEffect, useState } from 'react';
import { Card, Grid,  CardContent, Typography, List, ListItem, ListItemAvatar, ListItemText, Avatar , Button} from '@mui/material';
import NavbarLogged from './NavbarLogged';
import { Box } from '@mui/material';
import Sidebar from '../Admin/Sidebar';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Computer, Engineering, Explore, Science } from '@mui/icons-material';

const eventData = [
    { name: 'ICT Gala Dinner', date: '22 DEC 7:20 PM' },
    { name: 'Tshwane Varsity Hackaton', date: '21 DEC 11:00 PM'},
    { name: 'Science Exhibition', date: '21 DEC 9:34 PM' },

];

const UploadContent = ({ data = eventData }) => {

    return (
        <Box display="flex">
            <NavbarLogged />
            <Sidebar />
            <Box flex="1" ml="200px" p={3}>
            <Typography variant="h4" align="center" color= "#003883" gutterBottom style={{ marginBottom: '50px' }}>
                    Upload Content
            </Typography>
                <Grid container spacing={3} style={{ marginBottom: '60px' }}>
                    <Grid item xs={4}>
                        <Card style={{ maxWidth: 400,  marginLeft: '30px',height:400 }}>
                            <CardContent>
                                <Typography variant="h6" color="#003883" gutterBottom>
                                     Events
                                </Typography>
                                <List>
                                    {data.map((item, index) => (
                                        <ListItem key={index}>
                                            <ListItemText
                                                primary={item.name}
                                                secondary={item.date}
                                            />
                                        </ListItem>
                                    ))}

                                </List>
                                <Button style={{ marginLeft: '290px', marginTop: '20px', background: 'linear-gradient(15deg, #ce1127 0%, #003883 100%)', color:"#fff" }}>Upload</Button>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={4}>
                        <Card style={{ maxWidth: 400,  marginLeft: '30px',height:400 }}>
                            <CardContent>
                                <Typography variant="h6" color="#003883" gutterBottom>
                                    Jobs
                                </Typography>
                                <List>
                                    {data.map((item, index) => (
                                        <ListItem key={index}>

                                            <ListItemText
                                                primary={item.name}
                                                secondary={item.date}
                                            />
                                        </ListItem>
                                    ))}
                                </List>
                                <Button style={{ marginLeft: '290px', marginTop: '20px', background: 'linear-gradient(15deg, #ce1127 0%, #003883 100%)', color:"#fff" }}>Upload</Button>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={4}>
                        <Card style={{ maxWidth: 400,  marginLeft: '30px',height:400 }}>
                            <CardContent>
                                <Typography variant="h6" color="#003883" gutterBottom>
                                    News
                                </Typography>
                                <List>
                                    {data.map((item, index) => (
                                        <ListItem key={index}>

                                            <ListItemText
                                                primary={item.name}
                                                secondary={item.date}
                                            />
                                        </ListItem>
                                    ))}
                                </List>
                                <Button style={{ marginLeft: '290px', marginTop: '20px', background: 'linear-gradient(15deg, #ce1127 0%, #003883 100%)', color:"#fff" }}>Upload</Button>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <Card style={{ maxWidth: 400,  marginLeft: '30px',height:400 }}>
                            <CardContent>
                                <Typography variant="h6" color="#003883" gutterBottom>
                                     Donation Programmes
                                </Typography>
                                <List>
                                    {data.map((item, index) => (
                                        <ListItem key={index}>
                                            <ListItemText
                                                primary={item.name}
                                                secondary={item.date}
                                            />
                                        </ListItem>
                                    ))}
                                </List>
                                <Button style={{ marginLeft: '290px', marginTop: '20px', background: 'linear-gradient(15deg, #ce1127 0%, #003883 100%)', color:"#fff" }}>Upload</Button>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={4}>
                        <Card style={{ maxWidth: 400,  marginLeft: '30px',height:400 }}>
                            <CardContent>
                                <Typography variant="h6" color="#003883" gutterBottom>
                                    Podcasts
                                </Typography>
                                <List>
                                    {data.map((item, index) => (
                                        <ListItem key={index}>
                                            <ListItemText
                                                primary={item.name}
                                                secondary={item.date}
                                            />
                                        </ListItem>
                                    ))}
                                </List>
                                <Button style={{ marginLeft: '290px', marginTop: '20px', background: 'linear-gradient(15deg, #ce1127 0%, #003883 100%)', color:"#fff" }}>Upload</Button>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={4}>
                        <Card style={{ maxWidth: 400,  marginLeft: '30px',height:400 }}>
                            <CardContent>
                                <Typography variant="h6" color="#003883" gutterBottom>
                                    News
                                </Typography>
                                <List>
                                    {data.map((item, index) => (
                                        <ListItem key={index}>
                                            <ListItemText
                                                primary={item.name}
                                                secondary={item.date}
                                            />
                                        </ListItem>
                                    ))}
                                </List>
                                <Button style={{ marginLeft: '290px', marginTop: '20px', background: 'linear-gradient(15deg, #ce1127 0%, #003883 100%)', color:"#fff" }}>Upload</Button>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>


            </Box>
        </Box>
    );
};

export default UploadContent;
