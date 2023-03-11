import React from 'react';
import './login.css';
import loginImage from './../../../Assets/Login Image.jpg';
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';

export default function login() {
  return (
    <form className='loginForm'>
      <div className='formContent center'>
        <MDBCol>
        <MDBRow className='mb-4 mainColLogin'>
          <span className='loginText'>Login</span>
          <MDBRow className='inputLogin'>
            <label className='loginLText'>Email Address</label>
            <MDBInput className='inputField' id='email' type='text' />
          </MDBRow>
          <MDBRow className='inputLogin'>
            <label className='loginLText'>Password</label>
            <MDBInput className='inputField' id='pwd' type='password' />
          </MDBRow>
          <MDBRow>
            <MDBBtn type='submit' className='mb-4 btnLogin' block>Login</MDBBtn>
          </MDBRow>
          <MDBRow>
            <div className='text-center'>
              <p>
                Don't have an account? <span className='signupBText'><a href='#!'>Sign Up</a></span>
              </p>
            </div>
          </MDBRow>
        </MDBRow>
        </MDBCol>
        <MDBCol>
          <img src={loginImage} className='loginImageStyle' />
        </MDBCol>
      </div>
    </form >
  );
}