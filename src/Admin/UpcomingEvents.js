import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  TablePagination,
  TextField,
  MenuItem,
  Button,
} from "@mui/material";
import axios from "axios";
import NavbarLogged from "./NavbarLogged";
import { Box } from "@mui/material";
import Sidebar from "../Admin/Sidebar";
import * as XLSX from "xlsx";


const UpcomingEvents = () => {
  const [eventsData, setEvents] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchField, setSearchField] = useState("AlumnusFirstName");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(6);
  const [eventOptions, setEventOptions] = useState([]); // List of events with volunteers
  const [selectedEvent, setSelectedEvent] = useState(""); // Selected event for download

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5214/api/Admin/GetRSVPs/GetRSVPs"
        );
        setEvents(response.data);
        setFilteredUsers(response.data);

        // Extract unique event titles for the dropdown
        const uniqueEvents = [
          ...new Set(response.data.map((rsvp) => rsvp.eventTitle)),
        ];
        setEventOptions(uniqueEvents);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchEvents();
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = eventsData.filter((rsvp) =>
      rsvp[searchField]?.toString().toLowerCase().includes(query)
    );

    setFilteredUsers(filtered);
  };

  const handleFieldChange = (e) => {
    setSearchField(e.target.value);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  const handleDownload = () => {
    if (!selectedEvent) {
      alert("Please select an event to download responses.");
      return;
    }

    const eventResponses = eventsData.filter(
      (rsvp) => rsvp.eventTitle === selectedEvent
    );

    if (eventResponses.length === 0) {
      alert("No responses found for the selected event.");
      return;
    }

    const worksheet = XLSX.utils.json_to_sheet(eventResponses);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Responses");
    XLSX.writeFile(workbook, `${selectedEvent}-Responses.xlsx`);
  };

  return (
    <Box display="flex">
      <NavbarLogged />
      <Sidebar />
      <Box flex="1" ml="200px" p={3}>
        <Typography variant="h4" align="center" color="#003883" gutterBottom>
          Responses
        </Typography>

        <Box display="flex" justifyContent="space-between" mb={3}>
          <TextField
            label="Search"
            variant="outlined"
            value={searchQuery}
            onChange={handleSearch}
            style={{ width: "70%" }}
          />
          <TextField
            select
            label="Search Field"
            value={searchField}
            onChange={handleFieldChange}
            variant="outlined"
            style={{ width: "25%" }}
          >
            <MenuItem value="alumnusFirstName">Name</MenuItem>
            <MenuItem value="alumnusLastName">Surname</MenuItem>
            <MenuItem value="alumnusCampus">Campus</MenuItem>
            <MenuItem value="alumnusCourse">Course</MenuItem>
            <MenuItem value="status">Status</MenuItem>
            <MenuItem value="eventTitle">Event Title</MenuItem>
            <MenuItem value="eventTitle">Event Date</MenuItem>
            <MenuItem value="eventTitle">Event Venue</MenuItem>
 
          </TextField>
        </Box>

        {/* Table Component */}
        <Paper>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell style={{ fontWeight: "bold" }}>Alumni ID</TableCell>
                  <TableCell style={{ fontWeight: "bold" }}>Name</TableCell>
                  <TableCell style={{ fontWeight: "bold" }}>Surname</TableCell>
                  <TableCell style={{ fontWeight: "bold" }}>Campus</TableCell>
                  <TableCell style={{ fontWeight: "bold" }}>Course</TableCell>
                  <TableCell style={{ fontWeight: "bold" }}>Event Title</TableCell>
                  <TableCell style={{ fontWeight: "bold" }}>Event Venue</TableCell>
                  <TableCell style={{ fontWeight: "bold" }}>Event Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredUsers
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((rsvp, index) => (
                    <TableRow key={index}>
                      <TableCell>{rsvp.alumnusId}</TableCell>
                      <TableCell>{rsvp.alumnusFirstName}</TableCell>
                      <TableCell>{rsvp.alumnusLastName}</TableCell>
                      <TableCell>{rsvp.alumnusCampus}</TableCell>
                      <TableCell>{rsvp.alumnusCourse}</TableCell>
                      <TableCell>{rsvp.eventTitle}</TableCell>
                      <TableCell>{rsvp.eventVenue}</TableCell>
                      <TableCell>{rsvp.eventDate}</TableCell>
                      
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>

          <TablePagination
            rowsPerPageOptions={[6, 10, 20]}
            component="div"
            count={filteredUsers.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>

        <Box display="flex" justifyContent="space-between" mb={2} paddingTop={10}>
          
          <TextField
            select
            label="Select Event"
            value={selectedEvent}
            onChange={(e) => setSelectedEvent(e.target.value)}
            variant="outlined"
            style={{ width: "30%" }}
          >
            {eventOptions.map((event, index) => (
              <MenuItem key={index} value={event}>
                {event}
              </MenuItem>
            ))}
          </TextField>
          <Button
            variant="contained"
            color="primary"
            onClick={handleDownload}
            style={{ marginLeft: "5px", height: "56px" , marginRight: "70%", background: "linear-gradient(15deg, #ce1127 0%, #003883 100%)"}}
          >
            Download Responses
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default UpcomingEvents;
