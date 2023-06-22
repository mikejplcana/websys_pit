import React, { useState } from 'react';
import NavBar from '../ui/NavBar';

const CheckUpForm = () => {
  const [checkUpDate, setCheckUpDate] = useState('');
  const [patientNumber, setPatientNumber] = useState('');
  const [diagnosis, setDiagnosis] = useState('');
  const [status, setStatus] = useState('');
  const [treatment, setTreatment] = useState('');
  const [doctorNumber, setDoctorNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    // You can access the form values using the state variables
    console.log({
      checkUpDate,
      patientNumber,
      diagnosis,
      status,
      treatment,
      doctorNumber
    });
    // Reset form fields after submission
    setCheckUpDate('');
    setPatientNumber('');
    setDiagnosis('');
    setStatus('');
    setTreatment('');
    setDoctorNumber('');
  };

  return (
    <div>
        <NavBar />
        <div style={{ paddingTop: '64px' }}>
      <h2>CHECK UP FORM</h2>
      <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit}>
        <label htmlFor="checkUpDate">Check-up Date:</label>
        <input
          type="date"
          id="checkUpDate"
          value={checkUpDate}
          onChange={(e) => setCheckUpDate(e.target.value)}
          required
        />

        <label htmlFor="patientNumber">Patient Number:</label>
        <input
          type="text"
          id="patientNumber"
          value={patientNumber}
          onChange={(e) => setPatientNumber(e.target.value)}
          required
        />

        <label htmlFor="diagnosis">Diagnosis:</label>
        <input
          type="text"
          id="diagnosis"
          value={diagnosis}
          onChange={(e) => setDiagnosis(e.target.value)}
          required
        />

        <label htmlFor="status">Status:</label>
        <input
          type="text"
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          required
        />

        <label htmlFor="treatment">Treatment:</label>
        <input
          type="text"
          id="treatment"
          value={treatment}
          onChange={(e) => setTreatment(e.target.value)}
          required
        />

        <label htmlFor="doctorNumber">Doctor Number:</label>
        <input
          type="text"
          id="doctorNumber"
          value={doctorNumber}
          onChange={(e) => setDoctorNumber(e.target.value)}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default CheckUpForm;
