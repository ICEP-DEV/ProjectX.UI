// AnalyticsGraph.js
import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import axios from 'axios';
import { Card, CardContent, Typography } from '@mui/material';

const TrackAlumni = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        
        
        //Fetch data from the backend to display alumni tracking data
        axios.get('http://localhost:5214/api/Admin/TrackAlumni/TrackAlumni')
            .then((response) => {
                setData(response.data);
                console.log(response);
            })
            .catch(error => {
                console.error("Error fetching alumni tracking data:", error);
            });
    }, []);
        console.log("Data for LineChart:", data); // Check if data is reaching the LineChart
    return (
        <Card style={{ maxWidth: 10000, marginLeft: '7px', marginBottom: '90px' }}>
            <CardContent>
                <Typography variant="h5" color="textPrimary" gutterBottom style={{ textAlign: 'center', color: "#003883" }}>
                    Track Alumni
                </Typography>
                <ResponsiveContainer width="100%" height={400} style={{ marginBottom: '50px' }}>
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis 
                            dataKey="graduated" 
                            label={{ 
                                value: 'Graduation Year', 
                                angle: 0, 
                                position: 'outsideBottom', 
                                dy: 12 
                            }} 
                        />
                        <YAxis label={{ value: 'Graduated Alumni', angle: -90, position: 'insideLeft' }} />
                        <Tooltip />
                        <Line type="monotone" dataKey="graduatedAlumni" stroke="#9271C2" />
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
};

export default TrackAlumni;
