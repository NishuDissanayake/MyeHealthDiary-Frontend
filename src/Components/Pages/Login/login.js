import React, { useState } from 'react';
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
import axios from 'axios';
import Swal from 'sweetalert2';
import { decodeToken } from '../../../Utils/tokenDecode';

export default function Login() {


  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {

      const res = await axios.post(`http://localhost:5000/api/login?email=` + email + `&pass=` + pass);
      console.log(res.data.token);

      setEmail("");
      setPass("");
      Swal.fire({
        title: 'Success!',
        text: 'Logged in successfully!',
        icon: 'success',
        confirmButtonText: 'OK'
      });

      const decoded_token = decodeToken(res.data.token);
      if (decoded_token) {
        const { userId, role, email, nic, fname, lname } = decoded_token;

        // Use the userRole, email, and name as needed
        console.log('User ID:', userId);
        console.log('Role:', role);
        console.log('Email:', email);
        console.log('NIC:', nic);
        console.log('First Name:', fname);
        console.log('Last Name:', lname);


        localStorage.setItem('role', role);
        localStorage.setItem('fname', fname);
        localStorage.setItem('lname', lname);
        localStorage.setItem('email', email);
        localStorage.setItem('nic', nic);
      }

      localStorage.setItem('token', res.data.token);

      window.location.href = '/home';

    } catch (error) {
      console.log(error);
      Swal.fire({
        title: 'Error!',
        text: 'Login failed!',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className='loginForm'>
      <div className='formContent center'>
        <MDBCol>
          <MDBRow className='mb-4 mainColLogin'>
            <span className='loginText'>Login</span>
            <MDBRow className='inputLogin'>
              <label className='loginLText'>Email Address</label>
              <MDBInput className='inputField' id='email' type='text' value={email} onChange={(event) => setEmail(event.target.value)} required />
            </MDBRow>
            <MDBRow className='inputLogin'>
              <label className='loginLText'>Password</label>
              <MDBInput className='inputField' id='pwd' type='password' value={pass} onChange={(event) => setPass(event.target.value)} required />
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