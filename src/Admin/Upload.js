import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Grid, CardContent, Typography, List, ListItem, ListItemIcon, ListItemText, Box, Button } from '@mui/material';
import CheckBoxRounded from '@mui/icons-material/CheckBoxRounded';
import NavbarLogged from './NavbarLogged';
import Sidebar from '../Admin/Sidebar';

const UploadContent = () => {
  const navigate = useNavigate();

  return (
    <Box display="flex">
      <NavbarLogged />
      <Sidebar />
      <Box flex="1" ml="200px" p={3}>
        <Typography variant="h4" align="center" color="#003883" gutterBottom style={{ marginBottom: '50px' }}>
          Upload Content
        </Typography>
        
        <Grid container spacing={3} style={{ marginBottom: '60px' }}>
                <Grid item xs={4}>
                    <Card style={{ maxWidth: 400, marginLeft: '30px', height: 300 }}>
                    <CardContent>
                        <Typography variant="h6" color="#003883" gutterBottom>
                        Events
                        </Typography>
                        <List>
                        <ListItem><ListItemIcon><CheckBoxRounded /></ListItemIcon><ListItemText primary="Posters" /></ListItem>
                        <ListItem><ListItemIcon><CheckBoxRounded /></ListItemIcon><ListItemText primary="Links" /></ListItem>
                        <ListItem><ListItemIcon><CheckBoxRounded /></ListItemIcon><ListItemText primary="Pdf, png, jpg" /></ListItem>
                        </List>
                        <Button
                        style={{ marginLeft: '290px', marginBottom: '20px', background: 'linear-gradient(15deg, #ce1127 0%, #003883 100%)', color: "#fff" }}
                        onClick={() => navigate('/uploadEvents')}
                        >
                        Upload
                        </Button>
                    </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={4}>
                    <Card style={{ maxWidth: 400, marginLeft: '30px', height: 300 }}>
                    <CardContent>
                        <Typography variant="h6" color="#003883" gutterBottom>
                        Jobs
                        </Typography>
                        <List>
                        <ListItem><ListItemIcon><CheckBoxRounded /></ListItemIcon><ListItemText primary="Posters" /></ListItem>
                        <ListItem><ListItemIcon><CheckBoxRounded /></ListItemIcon><ListItemText primary="Links" /></ListItem>
                        <ListItem><ListItemIcon><CheckBoxRounded /></ListItemIcon><ListItemText primary="Pdf, png, jpg" /></ListItem>
                        </List>
                        <Button
                        style={{ marginLeft: '290px', marginBottom: '20px', background: 'linear-gradient(15deg, #ce1127 0%, #003883 100%)', color: "#fff" }}
                        onClick={() => navigate('/jobs')}
                        >
                        Upload
                        </Button>
                    </CardContent>
                    </Card>
                </Grid>
            
                <Grid item xs={4}>
                    <Card style={{ maxWidth: 400, marginLeft: '30px', height: 300 }}>
                    <CardContent>
                        <Typography variant="h6" color="#003883" gutterBottom>
                        News
                        </Typography>
                        <List>
                        <ListItem><ListItemIcon><CheckBoxRounded /></ListItemIcon><ListItemText primary="Posters" /></ListItem>
                        <ListItem><ListItemIcon><CheckBoxRounded /></ListItemIcon><ListItemText primary="Links" /></ListItem>
                        <ListItem><ListItemIcon><CheckBoxRounded /></ListItemIcon><ListItemText primary="Pdf, png, jpg" /></ListItem>
                        </List>
                        <Button
                        style={{ marginLeft: '290px', marginBottom: '20px', background: 'linear-gradient(15deg, #ce1127 0%, #003883 100%)', color: "#fff" }}
                        onClick={() => navigate('/uploadNews')}
                        >
                        Upload
                        </Button>
                    </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <Card style={{ maxWidth: 400,  marginLeft: '30px',height:300 }}>
                        <CardContent>
                            <Typography variant="h6" color="#003883" gutterBottom>
                                    Donation Programmes
                            </Typography>
                            <List> 
                                <ListItem >
                                    <ListItemIcon>
                                        <CheckBoxRounded/>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={'Text'} 
                                    />
                                </ListItem>
                                
                            </List>
                            <Button style={{ marginLeft: '290px', marginBottom: '-250px', background: 'linear-gradient(15deg, #ce1127 0%, #003883 100%)', color:"#fff" }}>Upload</Button>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={4}>
                    <Card style={{ maxWidth: 400,  marginLeft: '30px',height:300 }}>
                        <CardContent>
                            <Typography variant="h6" color="#003883" gutterBottom>
                                Podcasts
                            </Typography>
                            <List> 
                                <ListItem >
                                    <ListItemIcon>
                                        <CheckBoxRounded/>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={'Posters'} 
                                    />
                                </ListItem>
                                <ListItem >
                                    <ListItemIcon>
                                        <CheckBoxRounded/>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={'Videos'} 
                                    />
                                </ListItem>
                                <ListItem >
                                    <ListItemIcon>
                                        <CheckBoxRounded/>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={'mp3,mp4'} 
                                    />
                                </ListItem>
                            </List>
                            <Button style={{ marginLeft: '290px', marginBottom: '20px', background: 'linear-gradient(15deg, #ce1127 0%, #003883 100%)', color:"#fff" }}>Upload</Button>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card style={{ maxWidth: 400,  marginLeft: '30px',height:300 }}>
                        <CardContent>
                            <Typography variant="h6" color="#003883" gutterBottom>
                                Magazines
                            </Typography>
                            <List> 
                                <ListItem >
                                    <ListItemIcon>
                                        <CheckBoxRounded/>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={'Text'} 
                                    />
                                </ListItem>
                                <ListItem >
                                    <ListItemIcon>
                                        <CheckBoxRounded/>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={'Images'} 
                                    />
                                </ListItem>
                                <ListItem >
                                    <ListItemIcon>
                                        <CheckBoxRounded/>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={'mp3,mp4'} 
                                    />
                                </ListItem>
                            </List>
                            <Button style={{ marginLeft: '290px', marginBottom: '20px', background: 'linear-gradient(15deg, #ce1127 0%, #003883 100%)', color:"#fff" }}>Upload</Button>
                        </CardContent>
                    </Card>
                </Grid>

            </Grid>
            </Box>
        </Box>
    );
};

export default UploadContent;
