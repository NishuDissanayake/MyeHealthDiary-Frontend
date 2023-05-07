import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import React, { useState, useEffect } from 'react';
import './finddoctor.css';
import FDHeaderImg from './../../../Assets/Find Doctor Img.jpg';
import FDSImg from './../../../Assets/Find Doctor Img2.jpg';
import Swal from 'sweetalert2';
import axios from 'axios';

function Finddoctor() {

  const [doctors, setDoctors] = useState([]);
  const [hospitals, setHospitals] = useState([]);

  const handleSubmit1 = async (event) => {
    event.preventDefault();
    try {
      const specialization = event.target.elements.specialization.value;
      const response = await axios.get(`https://my-ehealth-diary-backend.herokuapp.com/api/get-doctors-by-spec?specialization=${specialization}`);
      setDoctors(response.data);
      console.log(specialization);
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: 'Error!',
        text: 'Retrieving doctors failed!',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  const handleSubmit2 = async (event) => {
    event.preventDefault();
    try {
      const hospital = event.target.elements.hospital.value;
      const response = await axios.get(`https://my-ehealth-diary-backend.herokuapp.com/api/get-doctors-by-hospital?hospital=${hospital}`);
      setDoctors(response.data);
      console.log(hospital);
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: 'Error!',
        text: 'Retrieving doctors failed!',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  useEffect(() => {
    async function fetchHospitals() {
      try {
        const response = await axios.get(`https://my-ehealth-diary-backend.herokuapp.com/api/get-hospitals`);
        setHospitals(response.data);
      } catch (error) {
        console.log(error);
        Swal.fire({
          title: 'Error!',
          text: 'Retrieving hospitals failed!',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    }

    fetchHospitals();
  }, []);

  return (
    <MDBContainer className='findDoctorCont1'>
      <MDBContainer className='findDoctorCont2'>
        <div className='findDoctorHeaderImg'>
          <img src={FDHeaderImg} alt='...' className='fdimg' />
        </div>
      </MDBContainer>

      <MDBContainer className='findDoctorCont3'>
        <MDBRow className='fdText1'>Find Your Doctor</MDBRow>
        <MDBRow>
          <MDBCol>
            <form onSubmit={handleSubmit1} id="docForm1">
              <MDBRow className='fdText2'>Find Through Specialization:</MDBRow>
              <MDBRow>
                <select name="specialization" id="specialization" className='fdInput1' required>
                  <option value="None">Select</option>
                  <option value="Cardiology">Cardiology</option>
                  <option value="Nutritionist">Nutritionist</option>
                  <option value="Dentist">Dentist</option>
                </select>
              </MDBRow>
              <MDBRow><MDBBtn className='fdBtn' type="submit">Find Doctor</MDBBtn></MDBRow>
            </form>
          </MDBCol>
          <MDBCol>
            <form onSubmit={handleSubmit2} id="docForm2">
              <MDBRow className='fdText2'>Find By Hospital:</MDBRow>
              <MDBRow>
                <select name="hospital" id="hospital" className='fdInput1' required>
                  <option value="None">Select</option>
                  {hospitals.map((hospital) => (
                    <option key={hospital.hospital_id} value={hospital.hospital_name}>
                      {hospital.hospital_name}
                    </option>
                  ))}
                </select>
              </MDBRow>
              <MDBRow><MDBBtn className='fdBtn' type="submit">Find Doctor</MDBBtn></MDBRow>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <MDBContainer className='findDoctorCont4'>
        <MDBRow>
          <MDBCol lg='8' md='16'>
            <MDBTable striped>
              <MDBTableHead dark>
                <tr>
                  <th>Doctor</th>
                  <th>Hospital</th>
                  <th>Contact Number</th>
                  <th>Hospital</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                {doctors.map((doctor) => (
                  <tr key={doctor.doctor_id}>
                    <td>{doctor.doctor_name}</td>
                    <td>{doctor.hospital}</td>
                    <td>{doctor.phone_number}</td>
                    <td>{doctor.hospital}</td>
                  </tr>
                ))}
              </MDBTableBody>
            </MDBTable>
          </MDBCol>
          <MDBCol>
            <img src={FDSImg} alt='....' className='fdSecondImg' />
          </MDBCol>
        </MDBRow>
      </MDBContainer>

    </MDBContainer>
  )
}

export default Finddoctor