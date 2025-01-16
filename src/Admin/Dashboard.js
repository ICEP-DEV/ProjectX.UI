// Dashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box ,Grid} from '@mui/material';
import Sidebar from '../Admin/Sidebar';
import TopCards from '../Admin/TopCards';
import AnalyticsGraph from '../Admin/AnalyticsGraph';
import NavbarLogged from './NavbarLogged';
import UpcomingEvents from './UpcomingEvents';
import PerFaculty from './PerFaculty';
import TrackAlumni from './TrackAlumni';
import PieChart from './PieChart';

const Dashboard = () => {
    const [cardData, setCardData] = useState([
        { title: 'Registered Alumni', value: 0 },
        { title: 'Attendees', value: 0},
        { title: 'Volunteers', value: 0 }
      ]);

      useEffect(() => {
        const fetchAlumniCount = async () => {
          try {
            const response = await axios.get('http://localhost:5214/api/Admin/CountAlumni/CountAlumni');
            const alumniCount = response.data;
            console.log(alumniCount);
            // Update the cardData array with the fetched alumni count
            setCardData((prevCardData) =>
              prevCardData.map((card) =>
                card.title === 'Registered Alumni' ? { ...card, value: alumniCount } : card
              )
            );
          } catch (error) {
            console.error('Error fetching alumni count:', error);
          }
        };
    
        fetchAlumniCount();

        const fetchVolunteersCount = async() => {
          try{
            const response = await axios.get('http://localhost:5214/api/Admin/CountVolunteers/CountVolunteers');
            const volunteersCount = response.data;
            console.log('volunteers :' + volunteersCount);
            //update card data array with fetched volunteer count
            setCardData((prevCardData) =>
              prevCardData.map((card) => 
                card.title === 'Volunteers' ? { ...card, value: volunteersCount} : card
              )
            );

          }
          catch(error){
            console.error('Error fetching volunteers count: ', error)
          }

        };

        fetchVolunteersCount();

        const fetchRSVPsCount = async() => {
          try{
            const response = await axios.get('http://localhost:5214/api/Admin/CountRSVPS/CountRSVPS');
            const RSVPsCount = response.data;
            console.log('RSVP :' + RSVPsCount);
            //update card data array with fetched RSVPS count
            setCardData((prevCardData) =>
              prevCardData.map((card) => 
                card.title === 'Attendees' ? { ...card, value: RSVPsCount} : card
              )
            );

          }
          catch(error){
            console.error('Error fetching RSVPS count: ', error)
          }

        };

        fetchRSVPsCount();
      }, []);

    return (
        <Box display="flex">
            <NavbarLogged />
            <Sidebar />
            <Box flex="1" ml="200px" p={3}>
                <TopCards data={cardData} />

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
                        <PieChart />
                    </Grid>
                </Grid>
            </Box>
        </Box>


    );
};

export default Dashboard;
