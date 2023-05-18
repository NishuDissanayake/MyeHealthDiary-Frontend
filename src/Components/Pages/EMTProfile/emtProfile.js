import React, { useEffect, useState, useRef } from 'react';
import './emtProfile.css';
import { MDBContainer, MDBRow, MDBCol, MDBTable, MDBTableHead, MDBTableBody, MDBBtn } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';


function EmtProfile() {

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const email = 'isuruP@gmail.com';
    try {
      const response = await axios.get(`https://my-ehealth-diary-backend.herokuapp.com/api/get-emt-by-email?email=${email}`);
      const dataArray = response.data;
      console.log(response);
      setUserData(dataArray);
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: 'Error!',
        text: 'Retrieving user data failed!',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  const [n_hospital, setHospital] = useState('');
  const [n_phone, setPhone] = useState('');
  const [n_designation, setDesignation] = useState('');
  const [n_pass, setPass] = useState('');

  useEffect(() => {
    updateHospital();
  }, [])

  const updateHospital = async (event) => {
    event.preventDefault();

    try {
      const _id = '64257fba06dca3cc2d5a2d54';

      const res = await axios.put("https://my-ehealth-diary-backend.herokuapp.com/api/update-emt-hospital?_id=" + _id + "&n_hospital=" + n_hospital);

      setHospital("");
      console.log(n_hospital);

      Swal.fire({
        title: 'Success!',
        text: 'Hospital updated successfully!',
        icon: 'success',
        confirmButtonText: 'OK'
      });

    } catch (error) {
      console.log(error);
      Swal.fire({
        title: 'Error!',
        text: 'Hospital update failed!',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  useEffect(() => {
    updatePhone();
  }, [])

  const updatePhone = async (event) => {
    event.preventDefault();

    try {
      const _id = '64257fba06dca3cc2d5a2d54';

      const res = await axios.put("https://my-ehealth-diary-backend.herokuapp.com/api/update-emt-phone?_id=" + _id + "&n_phone=" + n_phone);
      console.log(res.data);

      setPhone("");

      Swal.fire({
        title: 'Success!',
        text: 'Phone number updated successfully!',
        icon: 'success',
        confirmButtonText: 'OK'
      });

    } catch (error) {
      console.log(error);
      Swal.fire({
        title: 'Error!',
        text: 'Phone number update failed!',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  useEffect(() => {
    updateDesignation();
  }, [])

  const updateDesignation = async (event) => {
    event.preventDefault();

    try {
      const _id = '64257fba06dca3cc2d5a2d54';

      const res = await axios.put("https://my-ehealth-diary-backend.herokuapp.com/api/update-emt-designation?_id=" + _id + "&n_designation=" + n_designation);
      console.log(res.data);

      setDesignation("");

      Swal.fire({
        title: 'Success!',
        text: 'Designation updated successfully!',
        icon: 'success',
        confirmButtonText: 'OK'
      });

    } catch (error) {
      console.log(error);
      Swal.fire({
        title: 'Error!',
        text: 'Designation update failed!',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  useEffect(() => {
    deleteUser();
  }, [])

  const deleteUser = async (event) => {
    event.preventDefault();

    try {
      const _id = '64257fba06dca3cc2d5a2d54';
      const res = await axios.put("https://my-ehealth-diary-backend.herokuapp.com/api/delete-emt-account?_id=" + _id + "&n_pass=" + n_pass);
      console.log(res.data);

      setPass("");

      Swal.fire({
        title: 'Success!',
        text: 'Account deactivation successful!',
        icon: 'success',
        confirmButtonText: 'OK'
      });

    } catch (error) {
      console.log(error);
      Swal.fire({
        title: 'Error!',
        text: 'Account deactivation failed! Recheck password!',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  return (

    <>
      {localStorage.getItem('role') !== 'emt' ? window.location.href = '/' : (

        <MDBContainer>
          <MDBContainer className='uprofileCont2'>
            <MDBRow className='uprofileT1'>Welcome Back, User!</MDBRow>

            <MDBRow className='uprofileTbl1'>
              <MDBTable striped>
                <MDBTableHead dark>
                  <tr>
                    <th scope='col'>Emergency Medical Team Member Information</th>
                    <th><Link to="/emergency">
                      <MDBBtn className='profBtnL'>Find User</MDBBtn>
                    </Link>
                    </th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody>
                  <tr>
                    <th scope='row'>Name</th>
                    <td>{userData && userData.length ? userData[0].emt_name : '-'}</td>
                  </tr>
                  <tr>
                    <th scope='row'>Hospital</th>
                    <td>{userData && userData.length ? userData[0].hospital : '-'}</td>
                  </tr>
                  <tr>
                    <th scope='row'>Designation</th>
                    <td>{userData && userData.length ? userData[0].designation : '-'}</td>
                  </tr>
                  <tr>
                    <th scope='row'>Phone Number</th>
                    <td>{userData && userData.length ? userData[0].phone_number : '-'}</td>
                  </tr>
                  <tr>
                    <th scope='row'>Email</th>
                    <td>{userData && userData.length ? userData[0].email : '-'}</td>
                  </tr>
                </MDBTableBody>
              </MDBTable>
            </MDBRow>
          </MDBContainer>

          <MDBContainer>
            <MDBRow className='uprofileT1x'>Manage Your Profile!</MDBRow>

            <MDBRow className='manageProfileR2'>
              <MDBCol className='manageProfileC'>
                <form onSubmit={updateHospital} className='mprofileForm'>
                  <legend className='mprofileLegend'>Update Hospital</legend>
                  <label className='mprofileText' htmlFor="n_hospital">New Hospital</label> <br />
                  <input className='mprofileInput' id="n_hospital" type="text" value={n_hospital} onChange={(event) => setHospital(event.target.value)} required></input> <br />
                  <MDBBtn type='submit' className='mb-4 mprofileBtn' block>Update Hospital</MDBBtn>
                </form>
              </MDBCol>

              <MDBCol className='manageProfileC'>
                <form onSubmit={updatePhone} className='mprofileForm'>
                  <legend className='mprofileLegend'>Update Phone Number</legend>
                  <label className='mprofileText'>New Phone Number</label> <br />
                  <input className='mprofileInput' id="phone_number" type="text" value={n_phone} onChange={(event) => setPhone(event.target.value)} required></input> <br />
                  <MDBBtn type='submit' className='mb-4 mprofileBtn' block>Update Phone Number</MDBBtn>
                </form>
              </MDBCol>
            </MDBRow>

            <MDBRow className='manageProfileR2'>
              <MDBCol className='manageProfileC'>
                <form onSubmit={updateDesignation} className='mprofileForm'>
                  <legend className='mprofileLegend'>Update Designation</legend>
                  <label className='mprofileText' htmlFor="designation">New Designation</label> <br />
                  <input className='mprofileInput' id="designation" type="text" value={n_designation} onChange={(event) => setDesignation(event.target.value)} required></input> <br />
                  <MDBBtn type='submit' className='mb-4 mprofileBtn' block>Update Designation</MDBBtn>
                </form>
              </MDBCol>

              <MDBCol className='manageProfileC'>
                <form onSubmit={deleteUser} className='mprofileForm'>
                  <legend className='mprofileLegendx'>Deactivate Account</legend>
                  <label className='mprofileText'>Enter your password</label> <br />
                  <input className='mprofileInput' id="n_pass" type="text" value={n_pass} onChange={(event) => setPass(event.target.value)} required></input> <br />
                  <MDBBtn type='submit' className='mb-4 mprofileBtn' block>Deactivate Account</MDBBtn>
                </form>
              </MDBCol>
            </MDBRow>

          </MDBContainer>

        </MDBContainer>

      )}</>

  )
}

export default EmtProfile