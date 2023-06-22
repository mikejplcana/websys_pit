import React from 'react';
import { AppBar } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function Home() {
    const handleSubmit = (event) => {
        event.preventDefault();
    
        const formData = new FormData(event.target);
    
        fetch("http://localhost/saveEntry.php", {
          method: 'POST',
          body: formData
        })
        .then(response => response.text())
        .then(data => {
          console.log(data); // You can handle the response from the server here
        })
        .catch(error => {
          console.error(error);
        });
      };
  return (
    <div><AppBar position="fixed">
        <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              XYZH App
            </Typography>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit">About XYZH</Button>
            <Button color="inherit">Forms</Button>
            <Button color="inherit" component={Link} to="/records">
              Records
            </Button>
          </Toolbar>
    </AppBar>
    <div style={{ paddingTop: '64px' }}>
        <h4>Entry Card</h4>
        <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit}>
          <label htmlFor="registrationDate">Registration Date:</label>
          <input type="text" id="registrationDate" name="registrationDate" />

          <label htmlFor="patientName">Patient Name:</label>
          <input type="text" id="patientName" name="patientName" />

          <label htmlFor="patientNumber">Patient Number:</label>
          <input type="text" id="patientNumber" name="patientNumber" />

          <label htmlFor="sex">Sex:</label>
          <select id="sex" name="sex">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <label htmlFor="age">Age:</label>
          <input type="number" id="age" name="age" />

          <label htmlFor="dateOfBirth">Date of Birth:</label>
          <input type="date" id="dateOfBirth" name="dateOfBirth" />

          <label htmlFor="phoneNumber">Phone Number:</label>
          <input type="tel" id="phoneNumber" name="phoneNumber" />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />

          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" />

          <label htmlFor="maritalStatus">Marital Status:</label>
          <input type="text" id="maritalStatus" name="maritalStatus" />

          <h5>Emergency Contact</h5>

          <label htmlFor="emergencyFullName">Emergency Contact Full Name:</label>
          <input type="text" id="emergencyFullName" name="emergencyFullName" />

          <label htmlFor="relationship">Relationship:</label>
          <input type="text" id="relationship" name="relationship" />

          <label htmlFor="emergencyContactNumber">Contact Number:</label>
          <input type="tel" id="emergencyContactNumber" name="emergencyContactNumber" />

          <h5>Health History</h5>

          <label htmlFor="reasonForCheckup">Reason for Check-up:</label>
          <input type="text" id="reasonForCheckup" name="reasonForCheckup" />

          <label htmlFor="additionalNotes">Additional Notes:</label>
          <textarea id="additionalNotes" name="additionalNotes"></textarea>

          <label htmlFor="medications">Taking any medications, currently?</label>
          <input type="text" id="medications" name="medications" />

          <label htmlFor="department">Department:</label>
          <input type="text" id="department" name="department" />

          <button type="submit">REGISTER</button>
        </form>
      </div>
    </div>
  )
}

export default Home