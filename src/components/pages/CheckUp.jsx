import React, { useState, useEffect } from 'react';
import NavBar from '../ui/NavBar';

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
      <table>
        <thead>
          <tr>
            <th>Doctor Number</th>
            <th>Patient Number</th>
            <th>Diagnosis</th>
            <th>Status</th>
            <th>Treatment</th>
            <th>Checkup Date</th>
          </tr>
        </thead>
        <tbody>
          {checkUps.map(checkUp => (
            <tr key={checkUp.doc_no}>
              <td>{checkUp.doc_no}</td>
              <td>{checkUp.pat_no}</td>
              <td>{checkUp.diagnosis}</td>
              <td>{checkUp.status}</td>
              <td>{checkUp.treatment}</td>
              <td>{checkUp.checkup_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CheckUp;