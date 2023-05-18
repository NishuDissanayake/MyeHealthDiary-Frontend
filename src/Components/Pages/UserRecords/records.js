import React, { useState, useEffect } from 'react';
import './records.css';
import { MDBContainer, MDBRow, MDBTable, MDBTableHead, MDBTableBody, MDBBtn } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';


function Records() {

  const [records, setRecords] = useState([]);

  useEffect(() => {
    getRecords();
  }, []);

  const getRecords = async () => {
    const nic = localStorage.getItem('nic');
    console.log(nic);
    try {
      const response = await axios.get(`https://my-ehealth-diary-backend.herokuapp.com/api/get-user-data?nic=` + + nic);
      const reportsArray = response.data[0].medical_reports;
      setRecords(reportsArray);
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: 'Error!',
        text: 'Retrieving medical records failed!',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  return (

    <>
      {localStorage.getItem('role') !== 'user' ? window.location.href = '/' : (

        <MDBContainer breakpoint='sm md lg xl xxl main-cont'>
          <MDBContainer className='recordsCont1'>
            <MDBRow className='recordsT1'>Let’s go through your recent medical records...</MDBRow>
          </MDBContainer>

          <MDBContainer className='reportTable'>
            <MDBTable striped>
              <MDBTableHead dark>
                <tr>
                  <th scope='col'>Date</th>
                  <th scope='col'>Type</th>
                  <th scope='col'>Diagnosis</th>
                  <th></th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                {records.map((record) => (
                  <tr key={record._id}>
                    <td>{record.date}</td>
                    <td>{record.type}</td>
                    <td>{record.primary_diagnosis}</td>
                    <td>
                      <Link to={`/hospitalization-record/${record._id}`}>
                        <MDBBtn className='reportBtn'>View Full Report</MDBBtn>
                      </Link></td>
                  </tr>
                ))}
              </MDBTableBody>
            </MDBTable>
          </MDBContainer>

        </MDBContainer>

      )}</>

  )
}

export default Records