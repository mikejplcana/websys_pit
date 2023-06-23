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

function OperatedP() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost/getDataOperatedP.php");
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.log('Error:', error);
    }
  };

return (
  <div>
    <NavBar />
    <h2>Operated Patients</h2>

    <TableContainer component={Paper}>
      <table aria-label="customized table">
        <TableHead sx={{ backgroundColor: "lightblue"}}>
          <TableRow>
          <th>Document Number&nbsp;</th>
          <th>Patient Number&nbsp;</th>
          <th>Type of Operation&nbsp;</th>
          <th>Date of Operation&nbsp;</th>
          <th>In Condition&nbsp;</th>
          <th>Out Condition&nbsp;</th>
          <th>Medicines&nbsp;</th>
          <th>Treatment Advice&nbsp;</th>
          <th>Operation Room Number&nbsp;</th>
        </TableRow>
      </TableHead>
      <tbody>
        {data.map((patient) => (
          <StyledTableRow key={patient.doc_no}>
            <td scope='col'>{patient.doc_no}</td>
            <td scope='col'>{patient.pat_no}</td>
            <td scope='col'>{patient.ty_operation}</td>
            <td scope='col'>{patient.date_opr}</td>
            <td scope='col'>{patient.in_cond}</td>
            <td scope='col'>{patient.out_cond}</td>
            <td scope='col'>{patient.medicines}</td>
            <td scope='col'>{patient.treat_adv}</td>
            <td scope='col'>{patient.opr_room_no}</td>
          </StyledTableRow>
        ))}
      </tbody>
    </table>
    </TableContainer>
  </div>
);
}

export default OperatedP;