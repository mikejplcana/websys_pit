import React from 'react';
import NavBar from '../ui/NavBar';
//import { TextField } from '@mui/material';
import { Paper } from "@mui/material";
import "react-datepicker/dist/react-datepicker.css";

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
    <div>  
      <NavBar />
        <h2 style={{ fontSize: "22px", fontFamily: 'Google Sans, sans-serif' }}>Entry Card </h2>
        <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit}>
        <Paper elevation={24} style={{width:'800px', display: 'flex'}}>
          <div style={{width: '370px', display: 'flex', flexDirection: 'column', margin: '20px'}}>
          <h1 style={{ fontSize: "18px", fontFamily: 'Google Sans, sans-serif' }}>Basic Info</h1>
          <label htmlFor="regDate" style={{ fontSize: '10px', textAlign: 'left' }}>Registration Date</label>
          <input type="date" id="regDate" name="regDate"/>
          <br></br>
          <label htmlFor="patientName"></label>
          <input type="text" placeholder="Full Name" id="patientName" name="patientName" />
          <br></br>
          <label htmlFor="patientNumber"></label>
          <input type="text" placeholder="Patient Number" id="patientNumber" name="pat_no" /> 
          <br></br>
          <label htmlFor="sex"></label>
          <select id="sex" name="sex">
          <option value="male">Select Sex</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <br></br>
          <label htmlFor="dateOfBirth" style={{ fontSize: '10px', textAlign: 'left' }}>Birth date</label>
          <input type="date" id="dateOfBirth" name="dateOfBirth"/>
          <br></br>
          <label htmlFor="age"></label>
          <input type="number" placeholder="Age" id="age" name="age" />
          <br></br>
          <label htmlFor="phoneNumber"></label>
          <input type="tel" placeholder="Phone Number" id="phoneNumber" name="phoneNumber" />
          <br></br>
          <label htmlFor="email"></label>
          <input type="email" placeholder="Email" id="email" name="email" />
          <br></br>
          <label htmlFor="address"></label>
          <input type="text" placeholder="Address" id="address" name="address" />
          <br></br>
          <label htmlFor="maritalStatus"></label>
          <input type="text" placeholder="Marital Status" id="maritalStatus" name="maritalStatus" />
          </div>

          <div style={{width: '370px', display: 'flex', flexDirection: 'column', margin: '20px'}}>
          <h1 style={{ fontSize: "18px", fontFamily: 'Google Sans, sans-serif' }}>Emergency Contact</h1>

          <label htmlFor="emergencyFullName"></label>
          <input type="text" placeholder="Full Name" id="emergencyFullName" name="emergencyFullName" />
          <br></br>
          <label htmlFor="relationship"></label>
          <input type="text" placeholder="Relationship" id="relationship" name="relationship" />
          <br></br>
          <label htmlFor="emergencyContactNumber"></label>
          <input type="tel" placeholder="Contact Number" id="emergencyContactNumber" name="emergencyContactNumber" />
          <br></br>
          <h1 style={{ fontSize: "18px", fontFamily: 'Google Sans, sans-serif' }}>Health History</h1>

          <label htmlFor="reasonForCheckup"></label>
          <input type="text" placeholder="Reason for Check-up" id="reasonForCheckup" name="reasonForCheckup" />
          <br></br>
          <label htmlFor="additionalNotes"></label>
          <textarea id="additionalNotes" placeholder="Additional Notes" name="additionalNotes"></textarea>
          <br></br>
          <label htmlFor="medications"></label>
          <input type="text" placeholder="Taking any medications, currently?" id="medications" name="medications" />
          <br></br>
          <label htmlFor="department"></label>
          <input type="text" placeholder="Department" id="department" name="department" />
<br></br>
          {/*</div><div style={{width:'100px', display: 'flex', alignItems: 'flex-end', margin: '20px'}}>*/}
          <button style={{ fontSize: '20px', fontFamily: 'Google Sans, sans-serif', backgroundColor: 'lightgreen', fontWeight: 'bold'}} type="submit">Register</button>
          </div>
          </Paper>
        </form>
    </div>
  )
}

export default Home