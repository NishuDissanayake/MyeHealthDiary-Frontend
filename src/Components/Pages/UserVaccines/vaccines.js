import { MDBContainer, MDBRow, MDBCol, MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';
import React, { useState, useEffect } from 'react';
import './vaccines.css';
import VaccineImg from './../../../Assets/syringe.png';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

function Vaccines() {

  const [vaccines, setVaccines] = useState([]);

  useEffect(() => {
    getVaccines();
  }, []);

  const getVaccines = async () => {
    const nic = localStorage.getItem('nic');
    try {
      const response = await axios.get(`https://my-ehealth-diary-backend.herokuapp.com/api/get-vaccines?nic=${nic}`);
      const vaccineArray = response.data.vaccinations;
      console.log(vaccineArray);
      setVaccines(vaccineArray);
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: 'Error!',
        text: 'Retrieving vaccinations failed!',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  return (

    <>
      {localStorage.getItem('role') !== 'user' ? window.location.href = '/' : (

        <MDBContainer className='vaccineCont1'>
          <MDBContainer className='vaccineCont2'>
            <MDBRow className='vaccineRow1'>
              <span className='vaccineT1'>
                <img src={VaccineImg} alt='...' className='vaccineIcon' />
                Vaccination History
              </span>
            </MDBRow>
          </MDBContainer>

          <MDBContainer className='vaccineCont3'>
            <MDBCol>
              <MDBTable striped>
                <MDBTableHead dark>
                  <tr>
                    <th scope='col'>Vaccination Name</th>
                    <th scope='col'>Date</th>
                    <th scope='col'>Dose</th>
                    <th scope='col'>Batch Number</th>
                    <th scope='col'>Location</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody>
                  {vaccines.map((vaccine) => (
                    <tr key={vaccine._id}>
                      <td>{vaccine.vaccine_name}</td>
                      <td>{vaccine.date}</td>
                      <td>{vaccine.dosage}</td>
                      <td>{vaccine.batch_number}</td>
                      <td>{vaccine.location}</td>
                    </tr>
                  ))}
                </MDBTableBody>
              </MDBTable>
            </MDBCol>
          </MDBContainer>
        </MDBContainer>

      )}</>

  )
}

export default Vaccines