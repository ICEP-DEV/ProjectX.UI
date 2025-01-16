// TopCards.js
import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

const TopCards = ({ data }) => {
    return (
        <Grid container spacing={2} style={{ marginBottom: '90px' }}>
            {data.map((item, index) => (
                <Grid item xs={4} key={index}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" color= "#003883">{item.title} </Typography>
                            <Typography variant="h4" color= "#e6b012">{item.value}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default TopCards;
