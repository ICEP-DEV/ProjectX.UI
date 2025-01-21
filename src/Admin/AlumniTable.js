import React, { useEffect, useState } from 'react';
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography,
    TablePagination, TextField, MenuItem
} from '@mui/material';
import axios from 'axios';
import NavbarLogged from './NavbarLogged';
import { Box } from '@mui/material';
import Sidebar from '../Admin/Sidebar';

const UserTable = () => {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchField, setSearchField] = useState('alumnusId'); // Default search field
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(6);

    useEffect(() => {
        // Fetch users data from API
        axios
            .get('http://localhost:5214/api/Admin/GetAlumnis/GetAlumnis')
            .then((response) => {
                setUsers(response.data);
                setFilteredUsers(response.data); // Initially, show all users
            });
    }, []);

    // Handle search
    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);

        const filtered = users.filter((user) => {
            const fieldValue = user[searchField]?.toString().toLowerCase() || ''; // Safely handle undefined fields
            return fieldValue.includes(query);
        });

        setFilteredUsers(filtered);
    };

    // Handle field change for search
    const handleFieldChange = (e) => {
        const newField = e.target.value;
        setSearchField(newField);

        // Reapply the search to update filteredUsers
        const filtered = users.filter((user) => {
            const fieldValue = user[newField]?.toString().toLowerCase() || '';
            return fieldValue.includes(searchQuery);
        });

        setFilteredUsers(filtered);
    };


    // Handle page change
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    // Handle rows per page change
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <Box display="flex">
            <NavbarLogged />
            <Sidebar />
            <Box flex="1" ml="200px" p={3}>
                <Typography variant="h4" align="center" color="#003883" gutterBottom>
                    Registered Alumni
                </Typography>

                {/* Search Controls */}
                <Box display="flex" justifyContent="space-between" mb={3}>
                    <TextField
                        label="Search"
                        variant="outlined"
                        value={searchQuery}
                        onChange={handleSearch}
                        style={{ width: '70%' }}
                    />
                    <TextField
                        select
                        label="Search Field"
                        value={searchField}
                        onChange={handleFieldChange}
                        variant="outlined"
                        style={{ width: '25%' }}
                    >
                        <MenuItem value="alumnusId">Student Number</MenuItem>
                        <MenuItem value="firstName">Name</MenuItem>
                        <MenuItem value="lastName">Surname</MenuItem>
                        <MenuItem value="campus">Campus</MenuItem>
                        <MenuItem value="faculty">Faculty</MenuItem>
                        <MenuItem value="course">Course</MenuItem>
                        <MenuItem value="graduationYear">Graduation Year</MenuItem>
                    </TextField>
                </Box>

                {/* Table */}
                <Paper>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell style={{ fontWeight: 'bold' }}>Alumni ID</TableCell>
                                    <TableCell style={{ fontWeight: 'bold' }}>Name</TableCell>
                                    <TableCell style={{ fontWeight: 'bold' }}>Surname</TableCell>
                                    <TableCell style={{ fontWeight: 'bold' }}>Campus</TableCell>
                                    <TableCell style={{ fontWeight: 'bold' }}>Faculty</TableCell>
                                    <TableCell style={{ fontWeight: 'bold' }}>Course</TableCell>
                                    <TableCell style={{ fontWeight: 'bold' }}>Graduation Year</TableCell>
                                    <TableCell style={{ fontWeight: 'bold' }}>Profile</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {filteredUsers
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((user) => (
                                        <TableRow key={user.id}>
                                            <TableCell>{user.alumnusId}</TableCell>
                                            <TableCell>{user.firstName}</TableCell>
                                            <TableCell>{user.lastName}</TableCell>
                                            <TableCell>{user.campus}</TableCell>
                                            <TableCell>{user.faculty}</TableCell>
                                            <TableCell>{user.course}</TableCell>
                                            <TableCell>{user.graduationYear}</TableCell>
                                            <TableCell>
                                                <a
                                                    href={user.linkedInProfile}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    View Profile
                                                </a>
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
            </Box>
        </Box>
    );
};

export default UserTable;
