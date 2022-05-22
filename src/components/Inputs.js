import React from 'react'
import { useState } from 'react';
import Validation from './Validation';

const Inputs = () => {

const[firstName,setFirstName]=useState("");
const[lastName,setLastName]=useState("");
const[email,setEmail]=useState("");
const[password,setPassword]=useState("")

const [errors,setErrors]=useState("")

 const handleSubmit=(e)=>{
     console.log(e)
     e.preventDefault();
setErrors(Validation(firstName,lastName,email,password));

setFirstName("")
setLastName("")
setEmail("")
setPassword("")

 }



  return (
    <div className='my-inputs'>
        <form className='my-form' >

       <div> 
            <input type="text" className="firstname" placeholder='First Name' value={firstName} onChange={(e)=>setFirstName(e.target.value)} /><br />
            </div>
            {errors.firstName&& <p className='error'>{errors.firstName}</p>}
            
        <div>
             <input type="text" className="lastname" placeholder='Last Name' value={lastName} onChange={(e)=>setLastName(e.target.value)}/><br />
             </div>
            {errors.lastName&& <p className='error'>{errors.lastName}</p>}
             
        <div> 
            <input type="text" id="email" className='email' required placeholder='abc123@gmail.com ' value={email} onChange={(e)=>setEmail(e.target.value)}/><br />
            </div>
            {errors.email&& <p className='error'>{errors.email}</p>}
            
        <div>
            <input type="password" id="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/><br />
            {errors.password&& <p className='error'>{errors.password}</p>}
        </div>
        <div> 
            <input type='submit' value="CLAIM YOUR FREE TRIAL" onClick={handleSubmit}/><br />
        </div>
         
        </form>
    </div>
  )
}

export default Inputs