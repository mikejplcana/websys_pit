import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import NavBar from '../ui/NavBar';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function Records() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    // Fetch data from the PHP file
    fetch("http://localhost/getDataAdmittedP.php")
      .then(response => response.json())
      .then(data => setPatients(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <NavBar />
      <h2>Admitted Patients</h2>

      <TableContainer component={Paper}>
      <table aria-label="customized table">
        <TableHead sx={{ backgroundColor: "lightblue"}}>
          <TableRow>
            <th scope='col'>Patient No&nbsp;</th>
            <th scope='col'>Admitted On&nbsp;</th>
            <th scope='col'>Condition On&nbsp;</th>
            <th scope='col'>Advance Payment&nbsp;</th>
            <th scope='col'>Payment Mode&nbsp;</th>
            <th scope='col'>Room No&nbsp;</th>
            <th scope='col'>Doctor No&nbsp;</th>
          </TableRow>
          </TableHead>
        <tbody>

          {patients.map(patient => (
            <StyledTableRow key={patient.pat_no}>
              <td>{patient.pat_no}</td>
              <td>{patient.admtd_on}</td>
              <td>{patient.cond_on}</td>
              <td>{patient.adv_pymt}</td>
              <td>{patient.mode_pymt}</td>
              <td>{patient.room_no}</td>
              <td>{patient.doc_no}</td>
            </StyledTableRow>
          ))}
        </tbody>
      </table>
      </TableContainer>
    </div>
  );
}
