import React, { useState } from 'react';
import './emergencyData.css';
import { MDBContainer, MDBRow, MDBCol, MDBTable, MDBTableHead, MDBTableBody, MDBBtn } from 'mdb-react-ui-kit';
import AllImg from './../../../Assets/Allergy Img.jpg';
import axios from 'axios';
import Swal from 'sweetalert2';

function UserEmergency() {

  const [userData, setUserData] = useState([]);
  const nic = localStorage.getItem('nic');
  const [allergydata, setAllergyData] = useState([]);

  const handleClick = (event) => {
    event.preventDefault();
    console.log(nic);
    getUserData();
    getAllergyData();
  };


  const getUserData = async () => {
    try {
      const response = await axios.get(`https://my-ehealth-diary-backend.herokuapp.com/api/get-users?nic=` + nic);
      const dataArray = response.data;
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

  function calcAge(bday) {
    const tdate = new Date();
    const age = tdate - bday;

    return age;
  }


  const getAllergyData = async () => {
    try {
      const response = await axios.get(`https://my-ehealth-diary-backend.herokuapp.com/api/get-allergies?nic=` + nic);
      const allergyArray = response.data.allergies;
      setAllergyData(allergyArray);
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: 'Error!',
        text: 'Retrieving allergies failed!',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };



  return (

    <>
      {localStorage.getItem('role') !== 'user' ? window.location.href = '/' : (

        <MDBContainer>

          <MDBContainer className='uprofileCont2'>
            <MDBRow className='uprofileT1e'>Emergency Medical Data Profile!!!</MDBRow>

            <MDBRow className='uprofileTbl1'>
              <MDBTable striped>
                <MDBTableHead dark>
                  <tr>
                    <th scope='col' colspan='2'>Emergency Medical Information</th>
                    <th></th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody>
                  <tr>
                    <th scope='row'>First Name</th>
                    <td>{userData && userData.length ? userData[0].first_name : '-'}</td>
                  </tr>
                  <tr>
                    <th scope='row'>Last Name</th>
                    <td>{userData && userData.length ? userData[0].last_name : '-'}</td>
                  </tr>
                  <tr>
                    <th scope='row'>Age</th>
                    <td>{userData && userData.length ? calcAge(userData[0].birth_day) : '-'}</td>
                  </tr>
                  <tr>
                    <th scope='row'>Address</th>
                    <td>{userData && userData.length ? userData[0].address : '-'}</td>
                  </tr>
                  <tr>
                    <th scope='row'>Phone Number</th>
                    <td>{userData && userData.length ? userData[0].phone_number : '-'}</td>
                  </tr>
                  <tr>
                    <th scope='row'>Emergency Contact Person</th>
                    <td>{userData && userData.length ? userData[0].emergency_contact_person : '-'}</td>
                  </tr>
                  <tr>
                    <th scope='row'>Emergency Contact Number</th>
                    <td>{userData && userData.length ? userData[0].emergency_contact : '-'}</td>
                  </tr>
                  <tr>
                    <th scope='row'>Blood Group</th>
                    <td>{userData && userData.length ? userData[0].blood_group : '-'}</td>
                  </tr>
                  <tr>
                    <th scope='row'>Chronic/ Long Term Diseases</th>
                    <td>{userData && userData.length ? userData[0].chronic_disease : '-'}</td>
                  </tr>
                  <tr>
                    <th scope='row'>Health Insurance Provider</th>
                    <td>{userData && userData.length ? userData[0].health_insurance_provider
                      : '-'}</td>
                  </tr>
                </MDBTableBody>
              </MDBTable>
            </MDBRow>
          </MDBContainer>

          <MDBContainer className='uprofileCont2'>

            <MDBRow className='uprofileR3'>
              <MDBCol className='uprofileTbl2'>
                <MDBTable striped>
                  <MDBTableHead dark>
                    <tr>
                      <th scope='col'>Allergy Type</th>
                      <th scope='col'>Allergy Element</th>
                    </tr>
                  </MDBTableHead>
                  <MDBTableBody>
                    {allergydata.map((allergy) => (
                      <tr key={allergy._id}>
                        <td>{allergy.allergy_type}</td>
                        <td colspan='2'>{allergy.allergy_name}</td>
                      </tr>
                    ))}
                  </MDBTableBody>
                </MDBTable>
              </MDBCol>
              <MDBCol className='uprofileImg'>
                <img src={AllImg} alt='....' className='allImgStyle' />
              </MDBCol>
            </MDBRow>

          </MDBContainer>

        </MDBContainer>

      )}</>

  )
}

export default UserEmergency