import React, { useState } from 'react';
import NavBar from '../ui/NavBar';

const DischargeForm = () => {
  const [patientNumber, setPatientNumber] = useState('');
  const [dischargedDate, setDischargedDate] = useState('');
  const [paymentGiven, setPaymentGiven] = useState('');
  const [modeOfPayment, setModeOfPayment] = useState('');
  const [treatmentGiven, setTreatmentGiven] = useState('');
  const [treatmentAdvise, setTreatmentAdvise] = useState('');
  const [medicine, setMedicine] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    // You can access the form values using the state variables
  };

  return (
    <div>
        <NavBar />
      <h2>DISCHARGE FORM</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="patientNumber">Patient Number:</label>
          <input
            type="text"
            id="patientNumber"
            value={patientNumber}
            onChange={(e) => setPatientNumber(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="dischargedDate">Discharged Date:</label>
          <input
            type="date"
            id="dischargedDate"
            value={dischargedDate}
            onChange={(e) => setDischargedDate(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="paymentGiven">Payment Given:</label>
          <input
            type="number"
            id="paymentGiven"
            value={paymentGiven}
            onChange={(e) => setPaymentGiven(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="modeOfPayment">Mode of Payment:</label>
          <select
            id="modeOfPayment"
            value={modeOfPayment}
            onChange={(e) => setModeOfPayment(e.target.value)}
          >
            <option value="">Select</option>
            <option value="cash">Cash</option>
            <option value="credit">Credit</option>
          </select>
        </div>
        <div>
          <label htmlFor="treatmentGiven">Treatment Given:</label>
          <textarea
            id="treatmentGiven"
            value={treatmentGiven}
            onChange={(e) => setTreatmentGiven(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="treatmentAdvise">Treatment Advise:</label>
          <textarea
            id="treatmentAdvise"
            value={treatmentAdvise}
            onChange={(e) => setTreatmentAdvise(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="medicine">Medicine:</label>
          <textarea
            id="medicine"
            value={medicine}
            onChange={(e) => setMedicine(e.target.value)}
          />
        </div>
        <button type="submit">Discharge</button>
      </form>
    </div>
  );
};

export default DischargeForm;
