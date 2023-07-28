import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="bg">
          <div className="bg1">
     <div className="contact">
        <h1>CONTACT US</h1>
        </div>
        <div className="contact2">
          <div className="sumcontact2">
          <p>
            Call +91 9746463996
          </p>
          <p>or fill out the form below</p>
        </div>
        <div>
            <br></br>
             {/* <img src={mail} alt="mail" className="mail"/> */}
             <input type="text" placeholder="Username" className="name" required/>
           </div>
           <div className="second-input">
             {/* <img src={pass} alt="pass" className="mail"/> */}
             <input type="email" placeholder="email" className="name" required/>
           </div>
           <div>
            <br></br>
             {/* <img src={mail} alt="mail" className="mail"/> */}
             <input type="text" placeholder="Subject" className="name" required/>
           </div>
           <div>
            <br></br>
             {/* <img src={mail} alt="mail" className="mail"/> */}
             <input type="text" placeholder="Message" className="name" maxlength="120" minlength="3"  required/>
           </div>
        </div>

        </div>
        
     </div>  
  );
}
export default Contact