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

function DischargedP() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Make an HTTP GET request to the PHP file
    fetch("http://localhost/getDataDischargedP.php")
      .then(response => response.json())
      .then(jsonData => {
        setData(jsonData);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>
        <NavBar />
      <h2>Discharged Patients</h2>
      <TableContainer component={Paper}>
      <table aria-label="customized table">
        <TableHead sx={{ backgroundColor: "lightblue"}}>
          <TableRow>
            <th scope='col'>Patient No&nbsp;</th>
            <th scope='col'>Discharged On&nbsp;</th>
            <th scope='col'>Payment Given&nbsp;</th>
            <th scope='col'>Mode of Payment&nbsp;</th>
            <th scope='col'>Transaction Given&nbsp;</th>
            <th scope='col'>Transaction Advised&nbsp;</th>
            <th scope='col'>Medicine&nbsp;</th>
          </TableRow>
        </TableHead>
        <tbody>
          {data.map(patient => (
            <StyledTableRow key={patient.pat_no}>
              <td>{patient.pat_no}</td>
              <td>{patient.dis_on}</td>
              <td>{patient.pymt_gv}</td>
              <td>{patient.mode_of_pymt}</td>
              <td>{patient.tr_gvn}</td>
              <td>{patient.tr_advs}</td>
              <td>{patient.medicine}</td>
            </StyledTableRow>
          ))}
        </tbody>
      </table>
      </TableContainer>
    </div>
  );
}

export default DischargedP;
