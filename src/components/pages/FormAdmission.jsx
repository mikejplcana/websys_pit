import React, { useState } from 'react';
import NavBar from '../ui/NavBar';
import { Paper } from "@mui/material";

const AdmissionForm = () => {
  const [patientNumber, setPatientNumber] = useState('');
  const [admissionDate, setAdmissionDate] = useState('');
  const [condition, setCondition] = useState('');
  const [advancePayment, setAdvancePayment] = useState('');
  const [modeOfPayment, setModeOfPayment] = useState('');
  const [roomNo, setRoomNo] = useState('');
  const [roomType, setRoomType] = useState('');
  const [doctorNumber, setDoctorNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('patientNumber', patientNumber);
    formData.append('admissionDate', admissionDate);
    formData.append('condition', condition);
    formData.append('advancePayment', advancePayment);
    formData.append('modeOfPayment', modeOfPayment);
    formData.append('roomNo', roomNo);
    formData.append('roomType', roomType);
    formData.append('doctorNumber', doctorNumber);

    fetch("http://localhost/saveEntryAdmission.php", {
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
      <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit}>
      <Paper className="admission" elevation={24} style={{ width:'500px', display: 'flex'}}>
      <h2 style={{ textAlign: 'center', fontSize: "22px", fontFamily: 'Google Sans, sans-serif' }}>ADMISSION FORM</h2>
        <div style={{width: '370px', display: 'flex', flexDirection: 'column', margin: '20px'}}>
        {/*<label>
          
          <input
            placeholder="Patient Number"
            type="text"
            value={patientNumber}
            onChange={(e) => setPatientNumber(e.target.value)}
          />
        </label>
  <br />*/}

        <label htmlFor="patientNumber"></label>
          <input type="text" placeholder="Patient Number" id="patientNumber" name="pat_no" value={patientNumber}
            onChange={(e) => setPatientNumber(e.target.value)}
          /> 
          <br></br>

        {/*<label style={{ fontSize: '10px', textAlign: 'left' }}>
          Admission Date:
          <input
            type="text"
            value={admissionDate}
            onChange={(e) => setAdmissionDate(e.target.value)}
          />
        </label>
  <br />*/}

        <label htmlFor="admissionDate" style={{ fontSize: '10px', textAlign: 'left' }}>Admission Date</label>
          <input type="date" id="admissionDate" name="admissionDate"value={admissionDate}
            onChange={(e) => setAdmissionDate(e.target.value)}
          />
          <br></br>

          <label htmlFor="conditon"></label>
          <input type="text" placeholder="Condition" id="condition" name="condition" value={condition}
            onChange={(e) => setCondition(e.target.value)}
         /> 
          <br></br>

        {/*<label>
          Condition:
          <input
            type="text"
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
          />
        </label>
<br />*/}

          <label htmlFor="advancePayment"></label>
          <input type="text" placeholder="Advance Payment" id="advancePayment" name="advancePayment" value={advancePayment}
            onChange={(e) => setAdvancePayment(e.target.value)}
          /> 
          <br></br>

        {/*<label>
          Advance Payment:
          <input
            type="text"
            value={advancePayment}
            onChange={(e) => setAdvancePayment(e.target.value)}
          />
        </label>
<br />*/}

        <label>
          <select value={modeOfPayment} onChange={(e) => setModeOfPayment(e.target.value)}>
            <option value="">Select Mode of Payment</option>
            <option value="cash">Cash</option>
            <option value="credit card">Credit Card</option>
          </select>
        </label>
        <br />

        <label>
  <select value={doctorNumber} onChange={(e) => setDoctorNumber(e.target.value)}>
    <option value="">Select Doctor No.</option>
    <option value="DR001">DR001</option>
    <option value="DR002">DR002</option>
    <option value="DR003">DR003</option>
    <option value="DR004">DR004</option>
    <option value="DR005">DR005</option>
    <option value="DR006">DR006</option>
    <option value="DR007">DR007</option>
    <option value="DR008">DR008</option>
    <option value="DR009">DR009</option>
    <option value="DR010">DR010</option>
    <option value="DC011">DC011</option>
    <option value="DC012">DC012</option>
    <option value="DC013">DC013</option>
    <option value="DC014">DC014</option>
    <option value="DC015">DC015</option>
    <option value="DC016">DC016</option>
    <option value="DC017">DC017</option>
    <option value="DC018">DC018</option>
    <option value="DC019">DC019</option>
    <option value="DC020">DC020</option>
  </select>
</label>
<br />

<label>
  <select value={roomNo} onChange={(e) => setRoomNo(e.target.value)}>
    <option value="">Select Room No.</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    <option value="10">10</option>
    <option value="11">11</option>
    <option value="12">12</option>
    <option value="13">13</option>
    <option value="14">14</option>
    <option value="15">15</option>
    <option value="16">16</option>
    <option value="17">17</option>
    <option value="18">18</option>
    <option value="19">19</option>
    <option value="20">20</option>
    <option value="21">21</option>
    <option value="22">22</option>
    <option value="23">23</option>
    <option value="24">24</option>
    <option value="25">25</option>
    <option value="26">26</option>
    <option value="27">27</option>
    <option value="28">28</option>
    <option value="29">29</option>
    <option value="30">30</option>
  </select>
</label>
<br />

        <label style={{ fontSize: '14px', textAlign: 'center' }}>
          Room Type:
          <input
            type="radio"
            value="G"
            checked={roomType === 'G'}
            onChange={() => setRoomType('G')}
          />{' '}
          General
          <input
            type="radio"
            value="P"
            checked={roomType === 'P'}
            onChange={() => setRoomType('P')}
          />{' '}
          Private
        </label>
        <br />


        <button style={{ fontSize: '20px', fontFamily: 'Google Sans, sans-serif', backgroundColor: 'lightskyblue', fontWeight: 'bold'}} type="submit">ADMIT</button>
        </div>
        </Paper>
      </form>
    </div>
  );
};

export default AdmissionForm;
