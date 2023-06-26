import React from 'react';
import NavBar from '../ui/NavBar';
//import { TextField } from '@mui/material';
import { Paper, TextField } from "@mui/material";
import "react-datepicker/dist/react-datepicker.css";
import '../css/Homepage.css';

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
        <div className="Home"> {/* Apply the 'Home' class */}
          <NavBar />
          <div className="content">
        <form className="entry-form" style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit}>
        <Paper className="entry-card" elevation={24} style={{width:'1000px', display: 'flex'}}>
          <div style={{width: '370px', display: 'flex', flexDirection: 'column', margin: '20px'}}>
          <h2 style={{ fontSize: "24px", fontFamily: 'Google Sans, sans-serif' }}>ENTRY CARD</h2>
          </div>

          <div style={{width: '370px', display: 'flex', flexDirection: 'column', margin: '20px'}}>
          <h1 style={{ fontSize: "18px", fontFamily: 'Google Sans, sans-serif' }}>Basic Info</h1>
          <label htmlFor="reg_date" style={{ fontSize: '10px', textAlign: 'left' }}>Registration Date</label>
          <input type="date" id="reg_date" name="reg_date"/>
          <br></br>
          <label htmlFor="patientName"></label>
          <TextField variant="standard" placeholder="Full Name" id="patientName" name="patientName" />
          <br></br>
          <label htmlFor="patientNumber"></label>
          <TextField variant="standard" placeholder="Patient Number" id="patientNumber" name="pat_no" /> 
          <br></br>
          <label htmlFor="sex"></label>
          <TextField variant="standard" placeholder="Sex" id="sex" name="sex" /> 
          <br></br>
          <label htmlFor="dateOfBirth" style={{ fontSize: '10px', textAlign: 'left' }}>Birth date</label>
          <input type="date" id="dateOfBirth" name="dateOfBirth"/>
          <br></br>
          <label htmlFor="age"></label>
          <TextField variant="standard" input type="number" placeholder="Age" id="age" name="age" />
          <br></br>
          <label htmlFor="phoneNumber"></label>
          <TextField variant="standard" input type="tel" placeholder="Phone Number" id="phoneNumber" name="phoneNumber" />
          <br></br>
          <label htmlFor="email"></label>
          <TextField variant="standard" input type="email" placeholder="Email" id="email" name="email" />
          <br></br>
          <label htmlFor="address"></label>
          <TextField variant="standard" input type="text" placeholder="Address" id="address" name="address" />
          <br></br>
          <label htmlFor="maritalStatus"></label>
          <TextField variant="standard" input type="text" placeholder="Marital Status" id="maritalStatus" name="maritalStatus" />
          </div>

          <div style={{width: '370px', display: 'flex', flexDirection: 'column', margin: '20px'}}>
          <h1 style={{ fontSize: "18px", fontFamily: 'Google Sans, sans-serif' }}>Emergency Contact</h1>

          <label htmlFor="emergencyFullName"></label>
          <TextField variant="standard" input type="text" placeholder="Full Name" id="emergencyFullName" name="emergencyFullName" />
          <br></br>
          <label htmlFor="relationship"></label>
          <TextField variant="standard" input type="text" placeholder="Relationship" id="relationship" name="relationship" />
          <br></br>
          <label htmlFor="emergencyContactNumber"></label>
          <TextField variant="standard" input type="tel" placeholder="Contact Number" id="emergencyContactNumber" name="emergencyContactNumber" />
          <br></br>
          <h1 style={{ fontSize: "18px", fontFamily: 'Google Sans, sans-serif' }}>Health History</h1>

          <label htmlFor="reasonForCheckup"></label>
          <TextField variant="standard" input type="text" placeholder="Reason for Check-up" id="reasonForCheckup" name="reasonForCheckup" />
          <br></br>
          <label htmlFor="additionalNotes"></label>
          <TextField
          label=""
          multiline
          maxRows={4}
          variant="standard" id="additionalNotes" placeholder="Additional Notes" name="additionalNotes" />
          <br></br>
          <label htmlFor="medications"></label>
          <TextField variant="standard" input type="text" placeholder="Taking any medications, currently?" id="medications" name="medications" />
          <br></br>
          {/*</div><div style={{width:'100px', display: 'flex', alignItems: 'flex-end', margin: '20px'}}>*/}
          <button style={{ fontSize: '20px', fontFamily: 'Google Sans, sans-serif', backgroundColor: 'lightskyblue', fontWeight: 'bold'}} type="submit">Register</button>
          </div>
           </Paper>
        </form>
      </div>
    </div>
  );
}

export default Home;