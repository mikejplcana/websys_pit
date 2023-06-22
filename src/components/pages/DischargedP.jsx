import React, { useEffect, useState } from 'react';
import NavBar from '../ui/NavBar';

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
      <h1>Discharged Patients</h1>
      <table>
        <thead>
          <tr>
            <th>Patient No</th>
            <th>Discharged On</th>
            <th>Payment Given</th>
            <th>Mode of Payment</th>
            <th>Transaction Given</th>
            <th>Transaction Advised</th>
            <th>Medicine</th>
          </tr>
        </thead>
        <tbody>
          {data.map(patient => (
            <tr key={patient.pat_no}>
              <td>{patient.pat_no}</td>
              <td>{patient.dis_on}</td>
              <td>{patient.pymt_gv}</td>
              <td>{patient.mode_of_pymt}</td>
              <td>{patient.tr_gvn}</td>
              <td>{patient.tr_advs}</td>
              <td>{patient.medicine}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DischargedP;
