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

const ViewResponses = () => {
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
          "http://localhost:5214/api/Admin/GetEventResponses/GetEventResponses"
        );
        setEvents(response.data);
        setFilteredUsers(response.data);

        // Extract unique event titles for the dropdown
        const uniqueEvents = [
          ...new Set(response.data.map((volunteer) => volunteer.eventTitle)),
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

    const filtered = eventsData.filter((volunteer) =>
      volunteer[searchField]?.toString().toLowerCase().includes(query)
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

  const updateVolunteerStatus = async (alumnusId, eventId, role, newStatus) => {
    try {
      // Update the volunteer's status in the backend
      await axios.post(`http://localhost:5214/api/Admin/UpdateStatus/UpdateStatus`, {
        alumnusId,
        eventId,
        role,
        status: newStatus,
      });
  
      // Update the status locally in the frontend
      const updatedData = eventsData.map((volunteer) =>
        volunteer.alumnusId === alumnusId && volunteer.eventId === eventId && volunteer.volunteerRole === role
          ? { ...volunteer, status: newStatus }
          : volunteer
      );
      console.log(updatedData);
      setEvents(updatedData);
      setFilteredUsers(updatedData);
    } catch (error) {
      console.error("Error updating volunteer status:", error);
    }
  };
  

  const approveVolunteer = (alumnusId, eventId,role) => {
    updateVolunteerStatus(alumnusId, eventId, role, "Approved");
  };
  
  const rejectVolunteer = (alumnusId, eventId,role) => {
    updateVolunteerStatus(alumnusId, eventId, role, "Rejected");
  };
  

  const getStatusColor = (status) => {
    switch (status) {
      case "Approved":
        return "green";
      case "Rejected":
        return "red";
      case "Awaiting":
        return "orange";
      default:
        return "black";
    }
  };


  const handleDownload = () => {
    if (!selectedEvent) {
      alert("Please select an event to download responses.");
      return;
    }

    const eventResponses = eventsData.filter(
      (volunteer) => volunteer.eventTitle === selectedEvent
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
            <MenuItem value="volunteerRole">Volunteer Role</MenuItem>
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
                  <TableCell style={{ fontWeight: "bold" }}>Status</TableCell>
                  <TableCell style={{ fontWeight: "bold" }}>
                    Volunteer Role
                  </TableCell>
                  <TableCell style={{ fontWeight: "bold" }}>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredUsers
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((volunteer, index) => (
                    <TableRow key={index}>
                      <TableCell>{volunteer.alumnusId}</TableCell>
                      <TableCell>{volunteer.alumnusFirstName}</TableCell>
                      <TableCell>{volunteer.alumnusLastName}</TableCell>
                      <TableCell>{volunteer.alumnusCampus}</TableCell>
                      <TableCell>{volunteer.alumnusCourse}</TableCell>
                      <TableCell>{volunteer.eventTitle}</TableCell>
                      <TableCell>
                        <span
                          style={{
                            color: getStatusColor(volunteer.status),
                            fontWeight: "bold",
                          }}
                        >
                          {volunteer.status}
                        </span>
                      </TableCell>
                      <TableCell>{volunteer.volunteerRole}</TableCell>
                      <TableCell>
                        {volunteer.status === "Awaiting" && (
                          <>
                            <button
                              style={{
                                padding: "5px 10px",
                                margin: "0 5px",
                                backgroundColor: "green",
                                color: "white",
                                border: "none",
                                borderRadius: "5px",
                                cursor: "pointer",
                              }}
                              onClick={() =>
                                approveVolunteer(
                                  volunteer.alumnusId,
                                  volunteer.eventId,
                                  volunteer.volunteerRole
                                )
                              }
                            >
                              Approve
                            </button>
                            <button
                              style={{
                                padding: "5px 10px",
                                margin: "0 5px",
                                backgroundColor: "red",
                                color: "white",
                                border: "none",
                                borderRadius: "5px",
                                cursor: "pointer",
                              }}
                              onClick={() =>
                                rejectVolunteer(
                                  volunteer.alumnusId,
                                  volunteer.eventId,
                                  volunteer.volunteerRole
                                )
                              }
                            >
                              Reject
                            </button>
                          </>
                        )}
                      </TableCell>
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

export default ViewResponses;
