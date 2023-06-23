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
      <table aria-label="customized table">
        <TableHead sx={{ backgroundColor: "lightblue"}}>
          <TableRow>
          <th scope="col">Registration Date&nbsp;</th>
          <th scope="col">Patient Name&nbsp;</th>
          <th scope="col">Sex&nbsp;</th>
          <th scope="col">Age&nbsp;</th>
          <th scope="col">Birthday&nbsp;</th>
          <th scope="col">Address&nbsp;</th>
          <th scope="col">Phone Number&nbsp;</th>
          <th scope="col">Patient Number&nbsp;</th>
          <th scope="col">Marital Status&nbsp;</th>
          <th scope="col">Email&nbsp;</th>
          <th scope="col">Emergency Contact&nbsp;</th>
          <th scope="col">Relationship&nbsp;</th>
          <th scope="col">Emergency Contact Full Name&nbsp;</th>
          <th scope="col">Reason&nbsp;</th>
          <th scope="col">Additional Notes&nbsp;</th>
          <th scope="col">Medications&nbsp;</th>
          
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