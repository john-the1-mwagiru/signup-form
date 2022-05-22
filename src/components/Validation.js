import React from 'react'
import Inputs from './Inputs'
const Validation = (firstName,lastName,email,password) => {
    let errors={}
    if(!firstName){
        errors.firstName="Name is required"
    }
    if(!lastName){
        errors.lastName="Name is required"
    }
    if(!email){
        errors.email="Email is required"
    }else if(!/\S+@\S+\.\S+/.test(email)){
        errors.email="Email is invalid"
    }
    if(!password){
        errors.password="Password is required"
    }else if(password.length < 5){
        errors.password="Password is too short"
    }
  return (
      errors
  )
}

export default Validation