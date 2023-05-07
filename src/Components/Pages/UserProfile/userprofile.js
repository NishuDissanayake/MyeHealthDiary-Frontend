import React, { useEffect, useState, useRef } from 'react';
import './userprofile.css';
import { MDBContainer, MDBRow, MDBCol, MDBTable, MDBTableHead, MDBTableBody, MDBBtn } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import AllImg from './../../../Assets/Allergy Img.jpg';
import axios from 'axios';
import Swal from 'sweetalert2';


function Userprofile() {

  const [userData, setUserData] = useState([]);
  const [allergydata, setAllergyData] = useState([]);

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const nic = '200055702644';
    try {
      const response = await axios.get(`https://my-ehealth-diary-backend.herokuapp.com/api/get-users?nic=${nic}`);
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

  useEffect(() => {
    getAllergyData();
  }, []);

  const getAllergyData = async () => {
    const nic = '200055702644';
    try {
      const response = await axios.get(`https://my-ehealth-diary-backend.herokuapp.com/api/get-allergies?nic=${nic}`);
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
    <MDBContainer>

      <MDBContainer className='uprofileCont2'>
        <MDBRow className='uprofileT1'>Welcome Back, User!</MDBRow>

        <MDBRow className='uprofileTbl1'>
          <MDBTable striped>
            <MDBTableHead dark>
              <tr>
                <th scope='col'>Emergency Medical Information</th>
                <th><Link to="/manage-profile">
                  <MDBBtn className='profBtnL'>Update Data</MDBBtn>
                </Link>
                </th>
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
                  <th className='profAllergyBtns'>
                    <Link to="/manage-profile#allergySection">
                      <MDBBtn className='profBtnL'>Update Data</MDBBtn>
                    </Link></th>
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

        <MDBRow className='uprofileR4'>
          <MDBCol className='uprofileB1'>
            <Link to="/vaccinations">
              <MDBBtn className='profBtn1'>Visit Vaccinations</MDBBtn>
            </Link>
          </MDBCol>
          <MDBCol className='uprofileB2'>
            <Link to="/mood-chart">
              <MDBBtn className='profBtn2'>Visit Mood Chart</MDBBtn>
            </Link>
          </MDBCol>
        </MDBRow>

      </MDBContainer>

    </MDBContainer>
  )
}

export default Userprofile