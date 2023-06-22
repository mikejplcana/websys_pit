import React, { useEffect, useState } from 'react';
import NavBar from '../ui/NavBar';

function EntryCard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost/getDataEntry.php")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
        <NavBar />
        <h2>Entry Cards</h2>
      <table>
        <thead>
          <tr>
            <th>Registration Date</th>
            <th>Patient Name</th>
            <th>Sex</th>
            <th>Age</th>
            <th>Birthday</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Patient Number</th>
            <th>Marital Status</th>
            <th>Email</th>
            <th>Emergency Contact Full Name</th>
            <th>Relationship</th>
            <th>Emergency Contact Phone Number</th>
            <th>Reason</th>
            <th>Additional Notes</th>
            <th>Medications</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <tr key={index}>
              <td>{entry.reg_date}</td>
              <td>{entry.pat_name}</td>
              <td>{entry.sex}</td>
              <td>{entry.age}</td>
              <td>{entry.birthday}</td>
              <td>{entry.address}</td>
              <td>{entry.ph_no}</td>
              <td>{entry.pat_no}</td>
              <td>{entry.marital_status}</td>
              <td>{entry.email}</td>
              <td>{entry.emrgncy_fullname}</td>
              <td>{entry.relationship}</td>
              <td>{entry.emrgncy_ph_no}</td>
              <td>{entry.reason}</td>
              <td>{entry.add_notes}</td>
              <td>{entry.medications}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EntryCard;