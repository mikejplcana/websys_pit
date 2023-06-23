import React, { useState, useEffect } from 'react';
import NavBar from '../ui/NavBar';

function RegDoctors() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("http://localhost/getRegDoctors.php")
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
        <NavBar />
      <h2>Regular Doctors</h2>
      <table>
        <thead>
          <tr>
            <th>Doctor No</th>
            <th>Date Joined</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {data.map(row => (
            <tr key={row.doc_no}>
              <td>{row.doc_no}</td>
              <td>{row.date_joined}</td>
              <td>{row.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RegDoctors;
