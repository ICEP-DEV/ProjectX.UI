// AnalyticsGraph.js
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';
import { Card, CardContent, Typography, List, ListItem, ListItemAvatar, ListItemText, Avatar, Box } from '@mui/material';
const AnalyticsGraph = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Fetch data from the backend to display alumni per faculty
        axios.get('http://localhost:5214/api/Admin/CountAlumniPerFaculty/CountAlumniPerFaculty').then((response) => {
            setData(response.data);
        }).catch(error => {
            console.error("Error fetching alumni per faculty data:", error);
        });
    }, []);

    return (
        <Card style={{ maxWidth: 100000 , marginBottom: '90px'}}>
            <CardContent>
                     <Typography variant="h5" color="textPrimary"  gutterBottom style={{ textAlign: 'center' , color:"#003883" }}>
                        Donors
                    </Typography>
                <ResponsiveContainer width="100%" height={400} style={{ marginBottom: '50px' }}>
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="faculty" label={{ 
                            value: 'Faculty',
                            angle: 0,
                            position: 'outsideBottom', // Try 'insideBottom' if it appears too far down
                            dy: 12, // Adjust vertical position
                            dx: 0
                            }}/>
                        <YAxis label={{ value: 'Alumni Count', angle: -90, position: 'insideLeft' }} />
                        <Tooltip />
                        {/* <Legend /> */}
                        <Bar dataKey="registeredAlumni" fill="#9271C2" />
                    </BarChart>
                </ResponsiveContainer>

        </CardContent>
        </Card>
    );
};

export default AnalyticsGraph;
