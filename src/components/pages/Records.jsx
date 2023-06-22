import React, { useState, useEffect } from 'react';

export default function Records() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    // Fetch data from the PHP file
    fetch("http://localhost/getData.php")
      .then(response => response.json())
      .then(data => setPatients(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Admitted Patients</h1>
      <table>
        <thead>
          <tr>
            <th>Patient No</th>
            <th>Name</th>
            <th>Age</th>
            <th>Sex</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Admitted On</th>
            <th>Condition On</th>
            <th>Advance Payment</th>
            <th>Payment Mode</th>
            <th>Room No</th>
            <th>Doctor No</th>
          </tr>
        </thead>
        <tbody>
          {patients.map(patient => (
            <tr key={patient.pat_no}>
              <td>{patient.pat_no}</td>
              <td>{patient.pat_name}</td>
              <td>{patient.pat_age}</td>
              <td>{patient.sex}</td>
              <td>{patient.address}</td>
              <td>{patient.ph_no}</td>
              <td>{patient.admtd_on}</td>
              <td>{patient.cond_on}</td>
              <td>{patient.adv_pymt}</td>
              <td>{patient.mode_pymt}</td>
              <td>{patient.room_no}</td>
              <td>{patient.doc_no}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
