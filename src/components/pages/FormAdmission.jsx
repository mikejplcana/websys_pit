import React, { useState } from 'react';
import NavBar from '../ui/NavBar';

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

    // Perform form submission logic here
    // You can access all the form field values using the state variables

    // Reset the form after submission
    setPatientNumber('');
    setAdmissionDate('');
    setCondition('');
    setAdvancePayment('');
    setModeOfPayment('');
    setRoomNo('');
    setRoomType('');
    setDoctorNumber('');
  };

  return (
    <div>
        <NavBar />
      <h2>ADMISSION FORM</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Patient Number:
          <input
            type="text"
            value={patientNumber}
            onChange={(e) => setPatientNumber(e.target.value)}
          />
        </label>
        <br />

        <label>
          Admission Date:
          <input
            type="text"
            value={admissionDate}
            onChange={(e) => setAdmissionDate(e.target.value)}
          />
        </label>
        <br />

        <label>
          Condition:
          <input
            type="text"
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
          />
        </label>
        <br />

        <label>
          Advance Payment:
          <input
            type="text"
            value={advancePayment}
            onChange={(e) => setAdvancePayment(e.target.value)}
          />
        </label>
        <br />

        <label>
          Mode of Payment:
          <select value={modeOfPayment} onChange={(e) => setModeOfPayment(e.target.value)}>
            <option value="">Select</option>
            <option value="cash">Cash</option>
            <option value="credit card">Credit Card</option>
          </select>
        </label>
        <br />

        <label>
          Room Number:
          <select value={roomNo} onChange={(e) => setRoomNo(e.target.value)}>
            <option value="">Select</option>
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

        <label>
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

        <label>
          Doctor Number:
          <select value={roomNo} onChange={(e) => setRoomNo(e.target.value)}>
          <option value="">Select</option>
            <option value="reg1">DR001</option>
            <option value="reg2">DR002</option>
            <option value="reg3">DR003</option>
            <option value="reg4">DR004</option>
            <option value="reg5">DR005</option>
            <option value="reg6">DR006</option>
            <option value="reg7">DR007</option>
            <option value="reg8">DR008</option>
            <option value="reg9">DR009</option>
            <option value="reg10">DR010</option>
            <option value="c1">DC011</option>
            <option value="c2">DC012</option>
            <option value="c3">DC013</option>
            <option value="c4">DC014</option>
            <option value="c5">DC015</option>
            <option value="c6">DC016</option>
            <option value="c7">DC017</option>
            <option value="c8">DC018</option>
            <option value="c9">DC019</option>
            <option value="c10">DC020</option>
            </select>
        </label>
        <br />

        <button type="submit">ADMIT</button>
      </form>
    </div>
  );
};

export default AdmissionForm;
