import React, { Component } from 'react'
import { useState } from 'react'
import "../styles/login.css"
import axios from "axios";
import {baseUrl} from '../constants/constants';

 const Register = ()=> {

  const [user, setUser]=useState({});
  const registerUser=(e)=>{
    console.log(user);
    postDataToServer(user);
    e.preventDefault();
  }

  const postDataToServer=(data)=>{
    axios.post(`${baseUrl}/register`,data).then(
      (response)=>{
        console.log(response);
        console.log("Success")
      },(error)=>{
        console.log(error);
        console.log("Error");
      }
    )
  }

    return (
      <div className="auth-wrapper">
          <div className="auth-inner">
      <form onSubmit={registerUser}>
        <h3>Sign Up</h3>

        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            onChange={
              (e)=>{setUser({...user, name: e.target.value})}
            }
          />
        </div>


        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={
              (e)=>{setUser({...user, email: e.target.value})}
            }
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={
              (e)=>{setUser({...user, password: e.target.value})}
            }
          />
        </div>

        <div className="d-grid">
          <button ontype="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form></div></div>
    )
  }

  export default Register