import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';
import { Card, CardContent, Typography, Grid, List, ListItem, ListItemText } from '@mui/material';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
    const [chartData, setChartData] = useState(null);
    const [rsvpDetails, setRsvpDetails] = useState([]); // To store faculty names and counts

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5214/api/Admin/CountVolunteerPerFaculty/CountVolunteerPerFaculty');
                const data = response.data;
                console.log('API Response:', data);
    
                if (data && data.length > 0) {
                    const labels = data.map((item) => item.faculty);
                    const counts = data.map((item) => item.volunteerCount);

                    console.log('Labels:', labels);
                    console.log('Counts:', counts);

                    // Store faculty and RSVP counts for display
                    setRsvpDetails(data);

                    setChartData({
                        labels,
                        datasets: [
                            {
                                label: 'Volunteer Count',
                                data: counts,
                                backgroundColor: [
                                    '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FFA07A', '#8FBC8F',
                                ],
                                hoverOffset: 4,
                            },
                        ],
                    });
                } else {
                    console.warn('No data available from API.');
                }
            } catch (error) {
                console.error('Error fetching volunteer data:', error);
            }
        };
    
        fetchData();
    }, []);
    
    if (!chartData) {
        return <p>Loading chart...</p>;
    }

    return (
        <Card style={{ maxWidth: 800, margin: '20px auto', padding: '20px' , minHeight: 500}}>
            <CardContent>
                <Typography variant="h5" color="textPrimary" gutterBottom style={{ textAlign: 'center', color: "#003883" , paddingBottom: "30px"}}>
                    Volunteer by Faculty
                </Typography>
                <Grid container spacing={3}>
                    {/* Pie Chart */}
                    <Grid item xs={12} sm={8}>
                        <Pie data={chartData} 
                        options={{
                            plugins: {
                                legend: {
                                    position: 'bottom', // Place legend below the chart
                                },
                            },
                            maintainAspectRatio: false, // Allow responsive resizing
                        }} />
                    </Grid>

                    {/* Faculty List */}
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" color="textSecondary" gutterBottom>
                            Faculty Details
                        </Typography>
                        <List>
                            {rsvpDetails.map((item, index) => (
                                <ListItem key={index}>
                                    <ListItemText
                                        primary={`${item.faculty} = ${item.volunteerCount}`}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default PieChart;
