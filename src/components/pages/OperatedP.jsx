import React, { useState, useEffect } from 'react';
import NavBar from '../ui/NavBar';

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
    <h1>Operated Patients</h1>
    <table>
      <thead>
        <tr>
          <th>Document Number</th>
          <th>Patient Number</th>
          <th>Type of Operation</th>
          <th>Date of Operation</th>
          <th>In Condition</th>
          <th>Out Condition</th>
          <th>Medicines</th>
          <th>Treatment Advice</th>
          <th>Operation Room Number</th>
        </tr>
      </thead>
      <tbody>
        {data.map((patient) => (
          <tr key={patient.doc_no}>
            <td>{patient.doc_no}</td>
            <td>{patient.pat_no}</td>
            <td>{patient.ty_operation}</td>
            <td>{patient.date_opr}</td>
            <td>{patient.in_cond}</td>
            <td>{patient.out_cond}</td>
            <td>{patient.medicines}</td>
            <td>{patient.treat_adv}</td>
            <td>{patient.opr_room_no}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
}

export default OperatedP;