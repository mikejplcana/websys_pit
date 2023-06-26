import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function FormCheckUp() {
  const [doc_no, setDocNo] = useState('');
  const [pat_no, setPatNo] = useState('');
  const [diagnosis, setDiagnosis] = useState('');
  const [status, setStatus] = useState('');
  const [treatment, setTreatment] = useState('');
  const [checkup_date, setCheckupDate] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('doc_no', doc_no);
    formData.append('pat_no', pat_no);
    formData.append('diagnosis', diagnosis);
    formData.append('status', status);
    formData.append('treatment', treatment);
  
    // Convert checkup_date to the desired format (YYYY-MM-DD)
    const formattedDate = checkup_date.toISOString().split('T')[0];
    formData.append('checkup_date', formattedDate);

    fetch("http://localhost/saveEntryCheckUp.php", {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        console.log('Data inserted successfully:', data);
        // Perform any additional actions after successful insertion
      })
      .catch(error => {
        console.error('Error inserting data:', error);
        // Handle any errors that occurred during insertion
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="doc_no" value={doc_no} onChange={e => setDocNo(e.target.value)} placeholder="Doctor Number" />
        <input type="text" name="pat_no" value={pat_no} onChange={e => setPatNo(e.target.value)} placeholder="Patient Number" />
        <input type="text" name="diagnosis" value={diagnosis} onChange={e => setDiagnosis(e.target.value)} placeholder="Diagnosis" />
        <input type="text" name="status" value={status} onChange={e => setStatus(e.target.value)} placeholder="Status" />
        <input type="text" name="treatment" value={treatment} onChange={e => setTreatment(e.target.value)} placeholder="Treatment" />
        <DatePicker
          name="checkup_date"
          selected={checkup_date}
          onChange={date => setCheckupDate(date)}
          dateFormat="yyyy-MM-dd" // Set the desired date format
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormCheckUp;
