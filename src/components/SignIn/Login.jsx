 import React, { useState } from "react";
import { useForm } from "react-hook-form";

import ModalWithForm from "../ModalWithForm/ModalWithForm";





export default function LoginForm({isOpen, onClose,onLoginSuccess}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
 fetch(`http://localhost:3001/signin`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({email:email, password:password})
}).then((res) => {
  return res.ok
  ? res.json()
  : Promise.reject(`Error occured: ${res.status}`);
    })   .then((data) => {
        onLoginSuccess(data); 
      })
      .catch((err) => {
        console.error(err);
        alert("Invalid credentials");
      });


  };
  return (
        <ModalWithForm  
      isOpen={isOpen}
      title={"Login"}
      buttontext={"Login"}
      handleSubmit={handleSubmit}
      onClose={onClose}
       >
    
     
      <fieldset  className='modal__fieldset'>
        {/* Email Field */}
        <label htmlFor="add-Email" className="modal__label">Email</label>
        <input id='add-Email' className="modal__input" 
          type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        />
    

        {/* Password Field */}
        <label htmlFor="add-Password" className="modal__label">Password</label>
        <input id='add-Password'   className="modal__input"
          type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        />
             
        

      </fieldset>
    
  

</ModalWithForm>

);
}
