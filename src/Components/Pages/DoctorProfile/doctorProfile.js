import React, { useEffect, useState } from 'react';
import './doctor.css';
import axios from 'axios';
import Swal from 'sweetalert2';
import { MDBContainer, MDBRow, MDBCol, MDBTable, MDBTableHead, MDBTableBody, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBInput } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function DoctorProfile() {

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const email = 'rasikapTest@gmail.com';
    try {
      const response = await axios.get(`https://my-ehealth-diary-backend.herokuapp.com/api/get-doctor-by-email?email=${email}`);
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
  const [n_qualifications, setQualifications] = useState('');
  const [n_pass, setPass] = useState('');

  useEffect(() => {
    updateHospital();
  }, [])

  const updateHospital = async (event) => {
    event.preventDefault();

    try {
      const _id = '64257b8752453202c6958d03';

      const res = await axios.put("https://my-ehealth-diary-backend.herokuapp.com/api/update-doctor-hospital?_id=" + _id + "&n_hospital=" + n_hospital);

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
      const _id = '64257b8752453202c6958d03';

      const res = await axios.put("https://my-ehealth-diary-backend.herokuapp.com/api/update-doctor-phone?_id=" + _id + "&n_phone=" + n_phone);
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
    updateQualifications();
  }, [])

  const updateQualifications = async (event) => {
    event.preventDefault();

    try {
      const _id = '64257b8752453202c6958d03';

      const res = await axios.put("https://my-ehealth-diary-backend.herokuapp.com/api/update-doctor-qualifications?_id=" + _id + "&n_qualifications=" + n_qualifications);
      console.log(res.data);

      setQualifications("");

      Swal.fire({
        title: 'Success!',
        text: 'Qualifications updated successfully!',
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
      const _id = '64257b8752453202c6958d03';
      const res = await axios.put("https://my-ehealth-diary-backend.herokuapp.com/api/delete-doctor?_id=" + _id + "&n_pass=" + n_pass);
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
    <MDBContainer>
      <MDBContainer className='uprofileCont2'>
        <MDBRow className='uprofileT1'>Welcome Back, User!</MDBRow>

        <MDBRow className='uprofileTbl1'>
          <MDBTable striped>
            <MDBTableHead dark>
              <tr>
                <th scope='col'>Doctor Information</th>
                <th><Link to="/find-user-record">
                  <MDBBtn className='profBtnL'>Find User</MDBBtn>
                </Link>
                </th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              <tr>
                <th scope='row'>Name</th>
                <td>{userData && userData.length ? userData[0].doctor_name : '-'}</td>
              </tr>
              <tr>
                <th scope='row'>Hospital</th>
                <td>{userData && userData.length ? userData[0].hospital : '-'}</td>
              </tr>
              <tr>
                <th scope='row'>Specialization</th>
                <td>{userData && userData.length ? userData[0].specialization : '-'}</td>
              </tr>
              <tr>
                <th scope='row'>Qualifications</th>
                <td>{userData && userData.length ? userData[0].qualifications : '-'}</td>
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
            <form onSubmit={updateQualifications} className='mprofileForm'>
              <legend className='mprofileLegend'>Update Qualifications</legend>
              <label className='mprofileText' htmlFor="designation">New Qualifications</label> <br />
              <input className='mprofileInput' id="qualifications" type="text" value={n_qualifications} onChange={(event) => setQualifications(event.target.value)} required></input> <br />
              <MDBBtn type='submit' className='mb-4 mprofileBtn' block>Update Qualifications</MDBBtn>
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
  )
}

export default DoctorProfile