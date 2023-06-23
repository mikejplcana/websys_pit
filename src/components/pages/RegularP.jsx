import React, { useState, useEffect } from 'react';
import NavBar from '../ui/NavBar';
import { styled } from '@mui/material/styles';
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

function RegularP() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost/getDataRegP.php") // Adjust the URL if necessary
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
        <NavBar />
      <h2>Regular Patients</h2>
      <TableContainer component={Paper}>
      <table aria-label="customized table">
        <TableHead sx={{ backgroundColor: "lightblue"}}>
          <TableRow>
            <th scope='col'>Patient No&nbsp;</th>
            <th scope='col'>Date of Visit&nbsp;</th>
            <th scope='col'>Doctor No&nbsp;</th>
            <th scope='col'>Medicines&nbsp;</th>
            <th scope='col'>Payment&nbsp;</th>
          </TableRow>
        </TableHead>

        <tbody>
          {data.map(item => (
            <StyledTableRow key={item.pat_no}>
              <td>{item.pat_no}</td>
              <td>{item.date_visit}</td>
              <td>{item.doc_no}</td>
              <td>{item.medicines}</td>
              <td>{item.payment}</td>
            </StyledTableRow>
          ))}

        </tbody>
        </table>
      </TableContainer>
    </div>
  );
}

export default RegularP;
