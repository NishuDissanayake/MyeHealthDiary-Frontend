import { MDBContainer, MDBRow, MDBCol, MDBTable, MDBTableHead, MDBTableBody, MDBBtn } from 'mdb-react-ui-kit';
import React, { useEffect, useState } from 'react';
import './userhome.css';
import uHomeImg from './../../../Assets/User Home Img.jpg';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { decodeToken } from '../../../Utils/tokenDecode';

function Userhome() {

  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    getMedicines();

  }, []);

  const currentDate = new Date().toLocaleDateString(); 

  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();
      const formattedTime = `${hours}:${minutes}:${seconds}`;
      setCurrentTime(formattedTime);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);


  const getMedicines = async () => {
    const nic = localStorage.getItem('nic');
    console.log(nic);
    try {
      const response = await axios.get(`https://my-ehealth-diary-backend.herokuapp.com/api/get-active-meds?nic=${nic}`);
      const medicinesArray = response.data.currentMeds;
      setMedicines(medicinesArray);
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: 'Error!',
        text: 'Retrieving medicines failed!',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };



  return (
    <>
      {localStorage.getItem('role') !== 'user' ? window.location.href = '/' : (
        <MDBContainer breakpoint='sm md lg xl xxl main-cont'>
          <MDBContainer className='uhomeCont1'>
            <MDBRow className='uHomeT1'>Hello, {localStorage.getItem('fname')}</MDBRow>
            <MDBRow className='uHomeT2'>We hope you are having a wonderful day today!</MDBRow>
          </MDBContainer>

          <MDBContainer className='uhomeCont2'>
            <MDBRow className='uhomeCont2R'>
              <MDBCol>
                <MDBRow className='uHomeT3'>Don't forget to take your meds on time!</MDBRow>
                <MDBRow>
                  <MDBCol lg='4' md='8' className='uHomeT4'>Today's Date:</MDBCol>
                  <MDBCol lg='8' md='16' className='uHomeT5'>{currentDate}</MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol lg='4' md='8' className='uHomeT4'>Current Time:</MDBCol>
                  <MDBCol lg='8' md='16' className='uHomeT5'>{currentTime}</MDBCol>
                </MDBRow>
              </MDBCol>
              <MDBCol><center><img src={uHomeImg} alt='...' className='uHomeImgCls' /></center></MDBCol>
            </MDBRow>

            <MDBRow>
              <MDBTable striped>
                <MDBTableHead dark>
                  <tr>
                    <th scope='col'>Date</th>
                    <th scope='col'>Name</th>
                    <th scope='col'>Type</th>
                    <th scope='col'>Dosage</th>
                    <th scope='col'>Meals</th>
                    <th scope='col'>Morning</th>
                    <th scope='col'>Afternoon</th>
                    <th scope='col'>Night</th>
                    <th scope='col'>Revoke Status</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody>
                  {medicines.map((medicine) => (
                    <tr key={medicine._id}>
                      <td>{medicine.date_issued}</td>
                      <td>{medicine.med_name}</td>
                      <td>{medicine.type}</td>
                      <td>{medicine.dosage}</td>
                      <td>{medicine.meals}</td>
                      <td>{medicine.morning}</td>
                      <td>{medicine.noon}</td>
                      <td>{medicine.night}</td>
                      <td><Link to="/mood-chart">
                        <MDBBtn className='aprofBtn3'>Revoke Status</MDBBtn>
                      </Link></td>
                    </tr>
                  ))}
                </MDBTableBody>
              </MDBTable>
            </MDBRow>
          </MDBContainer>
        </MDBContainer>
      )}</>
  )
}

export default Userhome