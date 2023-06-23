import React, { useEffect, useState } from 'react';
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

function EntryCard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost/getDataEntry.php")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
        <NavBar />
        <h2>Entry Cards</h2>
        
      <TableContainer component={Paper}>
      <table sx={{ maxWidth: 1920 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell >Registration Date</StyledTableCell>
            <StyledTableCell align="right">Patient Name</StyledTableCell>
            <StyledTableCell align="right">Sex</StyledTableCell>
            <StyledTableCell align="right">Age</StyledTableCell>
            <StyledTableCell align="right">Birthday</StyledTableCell>
            <StyledTableCell align="right">Address</StyledTableCell>
            <StyledTableCell align="right">Phone Number</StyledTableCell>
            <StyledTableCell align="right">Patient Number</StyledTableCell>
            <StyledTableCell align="right">Marital Status</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Emergency Contact Full Name</StyledTableCell>
            <StyledTableCell align="right">Relationship</StyledTableCell>
            <StyledTableCell align="right">Emergency Contact Phone Number</StyledTableCell>
            <StyledTableCell align="right">Reason</StyledTableCell>
            <StyledTableCell align="right">Additional Notes</StyledTableCell>
            <StyledTableCell align="right">Medications</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <tbody>
          {data.map((entry, index) => (
            <StyledTableRow key={index}>
              <td>{entry.reg_date}</td>
              <td>{entry.pat_name}</td>
              <td>{entry.sex}</td>
              <td>{entry.age}</td>
              <td>{entry.birthday}</td>
              <td>{entry.address}</td>
              <td>{entry.ph_no}</td>
              <td>{entry.pat_no}</td>
              <td>{entry.marital_status}</td>
              <td>{entry.email}</td>
              <td>{entry.emrgncy_fullname}</td>
              <td>{entry.relationship}</td>
              <td>{entry.emrgncy_ph_no}</td>
              <td>{entry.reason}</td>
              <td>{entry.add_notes}</td>
              <td>{entry.medications}</td>
            </StyledTableRow>
          ))}
        </tbody>
        </table>
      </TableContainer>
    </div>
  );
}

export default EntryCard;