import React from 'react';
import {createMeeting} from '../api/meeting.api';

export const ConfirmationPage = () => {
 


  const handleSubmit = async(e) => {
    e.preventDefault();
    const date = e.target.date.value;
    const Name = e.target.Name.value;
    const location = e.target.location.value;
    const email = e.target.email.value;
    await createMeeting(date,Name,location,email);
    // Handle form submission here
    // You can access form values ​​using event.target
  };



  return (
    <div>
      <h2>Confirmation Page</h2>
      <h3>Selected Items:</h3>
      <ul>
        {/* {selectedItems.map((item) => (
          <li>{item}</li>
        ))} */}
      </ul>
      <form onSubmit={handleSubmit}>
        <label>
          Date:
          <input type="date" name="date" required />
        </label>
        <br />
        <label>
          Name:
          <input type="text" name="Name" required />
        </label>
        <br />
        {/* <label>
          Telephone:
          <input type="tel" name="telephone" required />
        </label>
        <br /> */}
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <br />
        <label>
          Location of the Event:
          <input type="text" name="location" required />
        </label>
        <br />
        <button type="submit">Confirm</button>
      </form>
    </div>
  );
};
