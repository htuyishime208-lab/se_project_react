 import React, { useState } from "react";
import { useForm } from "../../Hooks/useForm";

import ModalWithForm from "../ModalWithForm/ModalWithForm";




export default function SignUpForm({isOpen, onClose,onSignUpSuccess}) {


  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    avatarUrl: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
   fetch(`http://localhost:3001/signup`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({name,email,password,avatarUrl})
}).then((res) => {
  return res.ok
  ? res.json()
  : Promise.reject(`Error occured: ${res.status}`);
    })   .then((data) => {
        onSignUpSuccess(data); 
      })
      .catch((err) => {
        console.error(err);
        alert("Invalid credentials");
      });



  };

  
  
 
 return (
    <ModalWithForm  
      isOpen={isOpen}
      title={"SignUp"}
      buttontext={"SignUp"}
      handleSubmit={handleSubmit}
      onClose={onClose}
       >
    
     
      <fieldset  className='modal__fieldset'>
        {/* Email Field */}
        <label htmlFor="add-Email" className="modal__label">Email</label>
        <input id='add-Email' className="modal__input" 
          type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        />


        {/* Password Field */}
        <label htmlFor="add-Password" className="modal__label">Password</label>
        <input id='add-Password'   className="modal__input"
         type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
        />
        

       
       

<label htmlFor="add-Name" className="modal__label">
      Name
    <input id='add-Name'  
    placeholder="Name"  
    className="modal__input" 
    type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required /></label>

      
    <label htmlFor="add-link" className="modal__label">
      Avatar URL
    <input id='add-link'  
    placeholder="link"  
    className="modal__input" 
    type="url"
        name="avatarUrl"
        value={formData.avatarUrl}
        onChange={handleChange}/></label>

      
      
        

      </fieldset>
    
  

</ModalWithForm>

);
}
