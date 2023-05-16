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


  const getMedicines = async () => {
    const nic = '200055702640';
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
                  <MDBCol lg='4' md='8' className='uHomeT4'>Condition:</MDBCol>
                  <MDBCol lg='8' md='16' className='uHomeT5'>Acute Leukaemia</MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol lg='4' md='8' className='uHomeT4'>Start Date:</MDBCol>
                  <MDBCol lg='8' md='16' className='uHomeT5'>02 - 02 - 2023</MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol lg='4' md='8' className='uHomeT4'>Doctor:</MDBCol>
                  <MDBCol lg='8' md='16' className='uHomeT5'>Dr. John Davis</MDBCol>
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