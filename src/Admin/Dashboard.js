// Dashboard.js
import React from 'react';
import { Box ,Grid} from '@mui/material';
import Sidebar from '../Admin/Sidebar';
import TopCards from '../Admin/TopCards';
import AnalyticsGraph from '../Admin/AnalyticsGraph';
import NavbarLogged from './NavbarLogged';
import UpcomingEvents from './UpcomingEvents';
import PerFaculty from './PerFaculty';
import TrackAlumni from './TrackAlumni';

const Dashboard = () => {
    const cardData = [
        { title: 'Registered Alumni', value: 1200 },
        { title: 'Donors', value: 80 },
        { title: 'Attendees', value: '45K' },
        { title: 'Volunteers', value: 120 }
    ];

    return (
        <Box display="flex">
            <NavbarLogged />
            <Sidebar />
            <Box flex="1" ml="200px" p={3}>
                <TopCards data={cardData}/>

                <Grid container spacing={3}>
                    <Grid item xs={6}>
                    <TrackAlumni />
                    </Grid>
                    <Grid item xs={6}>
                        <PerFaculty />
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={8}>
                    <AnalyticsGraph/>
                    </Grid>
                    <Grid item xs={4}>
                        <UpcomingEvents />
                    </Grid>
                </Grid>
            </Box>
        </Box>


    );
};

export default Dashboard;
