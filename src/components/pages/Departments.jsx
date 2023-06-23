import React, { useEffect, useState } from 'react';
import NavBar from '../ui/NavBar';

function Departments() {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    // Fetch data from the PHP script
    fetch("http://localhost/getDepartments.php")
      .then(response => response.json())
      .then(data => setDepartments(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
        <NavBar />
      <h1>Departments</h1>
      <table>
        <thead>
          <tr>
            <th>Department Name</th>
            <th>Location</th>
            <th>Facilities</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((department, index) => (
            <tr key={index}>
              <td>{department.dept_name}</td>
              <td>{department.dept_location}</td>
              <td>{department.facilities}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Departments;
