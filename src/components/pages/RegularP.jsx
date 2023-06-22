import React, { useState, useEffect } from 'react';
import NavBar from '../ui/NavBar';

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
      <h1>Regular Patients</h1>
      <table>
        <thead>
          <tr>
            <th>Patient No</th>
            <th>Date of Visit</th>
            <th>Doctor No</th>
            <th>Medicines</th>
            <th>Payment</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.pat_no}>
              <td>{item.pat_no}</td>
              <td>{item.date_visit}</td>
              <td>{item.doc_no}</td>
              <td>{item.medicines}</td>
              <td>{item.payment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RegularP;
