import React, {  useState } from 'react'
import "../styles/login.css"
import axios from 'axios';
import {baseUrl} from '../constants/constants';
import { useNavigate } from 'react-router-dom';

 const Login = ()=> {

  const [loginCred, setLoginCred] = useState({});

  const navigate = useNavigate();

  const loginUser=(e)=>{
    console.log(loginCred);
    fetchUser(loginCred);
    e.preventDefault();
  }

  const fetchUser=(data)=>{
    axios.post(`${baseUrl}/login`,data).then(
      (response)=>{
        console.log(response);
        if(response.status===200){
          if(response.data!=null&&response.data!=''){
            navigate("/home")
          }
        }
      },(error)=>{
        console.log(error);
        console.log("Error");
      }
    );
  }
  
    return (
      <div className="auth-wrapper">
          <div className="auth-inner">
      <form onSubmit={loginUser}>
        <h3>Sign In</h3>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={
              (e)=>{setLoginCred({...loginCred, email: e.target.value})}
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
              (e)=>{setLoginCred({...loginCred, password: e.target.value})}
            }
          />
        </div>

        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form></div></div>
    )
  }
  export default Login