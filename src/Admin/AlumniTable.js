import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, TablePagination } from '@mui/material';
import axios from 'axios';
import NavbarLogged from './NavbarLogged';
import { Box } from '@mui/material';
import Sidebar from '../Admin/Sidebar';
import TopCards from '../Admin/TopCards'

const UserTable = () => {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(6);

    useEffect(() => {
        // Fetch users data from API
        axios.get('http://localhost:5214/api/Admin/GetAlumnis/GetAlumnis').then((response) => setUsers(response.data));
    }, []);

    // Handle page change
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    // Handle rows per page change
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 5));
        setPage(0);
    };

    return (
        <Box display="flex">
            <NavbarLogged />
            <Sidebar />
            <Box flex="1" ml="200px" p={3}>
            <Typography variant="h4" align="center" color= "#003883" gutterBottom>
                    Registered Alumni
                </Typography>
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
                            {users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((user) => (
                                <TableRow key={user.id}>
                                    <TableCell>{user.alumnusId}</TableCell>
                                    <TableCell>{user.firstName}</TableCell>
                                    <TableCell>{user.lastName}</TableCell>
                                    <TableCell>{user.campus}</TableCell>
                                    <TableCell>{user.faculty}</TableCell>
                                    <TableCell>{user.course}</TableCell>
                                    <TableCell>{user.graduationYear}</TableCell>
                                    <TableCell>
                                        <a href={user.linkedInProfile} target="_blank" rel="noopener noreferrer">
                                            View Profile
                                        </a>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 20]}
                    component="div"
                    count={users.length}
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
