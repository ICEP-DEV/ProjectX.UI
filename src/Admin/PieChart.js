import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';
import { Card, CardContent, Typography } from '@mui/material';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    'http://localhost:5214/api/Admin/CountRSVPPerFaculty/CountRSVPPerFaculty'
                );
                const data = response.data;
                console.log('API Response:', response.data);

                // Prepare labels and data for the chart
                const labels = data.map((item) => item.Faculty);
                const counts = data.map((item) => item.RSVPCount);

                setChartData({
                    labels,
                    datasets: [
                        {
                            label: 'RSVP Count',
                            data: counts,
                            backgroundColor: [
                                '#FF6384', // Red
                                '#36A2EB', // Blue
                                '#FFCE56', // Yellow
                                '#4BC0C0', // Teal
                                '#9966FF', // Purple
                            ],
                            hoverOffset: 4,
                        },
                    ],
                });
            } catch (error) {
                console.error('Error fetching RSVP data:', error);
            }
        };

        fetchData();
    }, []);

    if (!chartData) {
        return <p>Loading chart...</p>;
    }

    return (



        <Card style={{ maxWidth: 500, marginLeft: '80px', marginBottom: '90px', maxHeight: 540}}>
                <CardContent>
                    <Typography variant="h5" color="textPrimary" gutterBottom style={{ textAlign: 'center', color: "#003883" }}>
                    RSVPs by Faculty
                    </Typography>
                    <Pie data={chartData} />
                </CardContent>
            </Card>
    );
};

export default PieChart;
