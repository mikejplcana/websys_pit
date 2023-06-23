import React, { useEffect, useState } from 'react';
import NavBar from '../ui/NavBar';

function CallDoctors() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    // Make the HTTP request to fetch the data
    fetch("http://localhost/getCallDoctors.php")
      .then(response => response.json())
      .then(data => setDoctors(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
        <NavBar />
      <h1>Doctors on Call</h1>
      <table>
        <thead>
          <tr>
            <th>Doctor Number</th>
            <th>FS PR CL</th>
            <th>Payment Due</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map(doctor => (
            <tr key={doctor.doc_no}>
              <td>{doctor.doc_no}</td>
              <td>{doctor.fs_pr_cl}</td>
              <td>{doctor.pymt_du}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CallDoctors;
