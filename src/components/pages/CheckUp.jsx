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

function CheckUp() {
  const [checkUps, setCheckUps] = useState([]);

  useEffect(() => {
    fetch("http://localhost/getDataCheckUp.php")
      .then(response => response.json())
      .then(data => setCheckUps(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
        <NavBar />
      <h2>Checked-Up</h2>
      <TableContainer component={Paper}>
      <table aria-label="customized table">
        <TableHead sx={{ backgroundColor: "lightblue"}}>
          <TableRow>
            <th scope='col'>Doctor Number&nbsp;</th>
            <th scope='col'>Patient Number&nbsp;</th>
            <th scope='col'>Diagnosis&nbsp;</th>
            <th scope='col'>Status&nbsp;</th>
            <th scope='col'>Treatment&nbsp;</th>
            <th scope='col'>Checkup Date&nbsp;</th>
          </TableRow>
        </TableHead>

        <tbody>
          {checkUps.map(checkUp => (
            <StyledTableRow key={checkUp.doc_no}>
              <td>{checkUp.doc_no}</td>
              <td>{checkUp.pat_no}</td>
              <td>{checkUp.diagnosis}</td>
              <td>{checkUp.status}</td>
              <td>{checkUp.treatment}</td>
              <td>{checkUp.checkup_date}</td>
            </StyledTableRow>
          ))}

        </tbody>
      </table>
      </TableContainer>
    </div>
  );
}

export default CheckUp;