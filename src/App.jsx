import React, { useState, useEffect } from 'react';
// import {ConfirmationPage} from './component/submit.component .jsx'
import appImage from './data/pictures/app.jpg';
import app2Image from './data/pictures/app2.jpg';
import { createUser,getUser } from './api/users.api';



import './App.css';

function App() {
  // const [currentImage, setCurrentImage] = useState(appImage);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentImage((prevImage) =>
  //       prevImage === appImage ? app2Image : appImage
  //     );
  //   }, 2000);

  //   return () => clearInterval(interval);
  // }, []);

// const getuser= async()=>{
//   const user = await getUser("d20768c8-b421-477b-bab5-bf12b633adac");
//   console.log(user.data);
// }
// const deleteUser= async()=>{
//   const user = await 
//   console.log(user.data);
// }

// const signin= async()=>{
//   const user = await createUser({"user":{
//     "username":"fff",
//     "password":"3333",
//     }});
// console.log(user+"kkk)");
// }

  return (
    <>
    {/* < ConfirmationPage/> */}
      <div className="frame">
        {/* <img src={currentImage}  /> */}
      </div>

      {/* <button onClick={signin()}>להרשם</button> */}

        <div className="content">
          <h1>Welcome to pleasures keitring</h1>
          <p>
            Special and thoughtful staff members, furniture and full production.
            The catering completes the set of 'Matouka' hospitality solutions,
            which is based on extensive experience and thousands of successful
            events - parties, launches, private events, and company events. All
            were carried out from an innovative, creative, and professional point
            of view in full compliance with the client's requirements. We know
            and are ready to fulfill any wish: from serving our catering in an
            event space or office to serving in the yard, on the beach, in nature
            and anywhere you can think of. We will know how to be there just in
            time to make the event unforgettable.
          </p>
         
        </div>
    </>
  );
}

export default App;


