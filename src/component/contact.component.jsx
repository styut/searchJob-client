
import React, { useState } from 'react';
import Modal from 'react-modal';
import '../style/contact.css';
// import {createMeeting} from '../api/meeting.api';
import { createUser } from '../api/users.api';



export const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [useClose, setClose] = useState(true);
  const handleSubmit = async(e) => {
    e.preventDefault();

    // Access form input values
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    // const hour = e.target.hour.value;
    // const duration = e.target.duration.value;
    // const requestContent = e.target.requestContent.value;

    // Perform any necessary validation or submit the form data
    console.log(firstName, lastName);
    setIsModalOpen(false);
   
      console.log(firstName+"lastName");
      const user = await createUser({"user":{
        "username":firstName,
        "password":lastName,
        }});
  };
  
  const setclose = () => {
    setClose(false);
  };
  return (
   useClose&&<Modal
      isOpen={isModalOpen}
      onRequestClose={() => setIsModalOpen(false)}
      contentLabel="Contact Form"
      className="modal"
      overlayClassName="overlay"
    >
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
        <button id="close" className="close-button" onClick={setclose}>
              X
            </button>
          <label>
            User Name:
            <input type="text" name="firstName" required />
          </label>
          <label>
            password:
            <input type="password" name="lastName" required />
          </label>
          {/* <label>
          Hour:
            <input type="int" name="hour" required />
          </label>
          <label>
            Duration:
            <input type="int" name="duration" required />
          </label>
          <label>
            Request Content:
            <textarea name="requestContent" required></textarea>
          </label> */}
          <button type="submit">
          submit
            </button>
        
        </form>
      </div>
    </Modal>
  );
};
