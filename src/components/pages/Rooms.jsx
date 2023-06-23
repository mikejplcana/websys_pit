import React, { useState, useEffect } from 'react';
import NavBar from '../ui/NavBar';

function Rooms() {
  const [roomData, setRoomData] = useState([]);

  useEffect(() => {
    // Fetch room data from the PHP script
    fetch("http://localhost/getRooms.php")
      .then(response => response.json())
      .then(data => setRoomData(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
        <NavBar />
      <h1>Rooms</h1>
      <table>
        <thead>
          <tr>
            <th>Room No</th>
            <th>Room Type</th>
            <th>Status</th>
            <th>Charge per Day</th>
          </tr>
        </thead>
        <tbody>
          {roomData.map(room => (
            <tr key={room.room_no}>
              <td>{room.room_no}</td>
              <td>{room.room_type}</td>
              <td>{room.status}</td>
              <td>{room.chrge_per_day}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Rooms;
