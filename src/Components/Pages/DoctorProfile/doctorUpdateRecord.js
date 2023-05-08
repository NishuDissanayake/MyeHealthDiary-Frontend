import React, { useEffect, useState } from 'react';
import './doctor.css';
import axios from 'axios';
import Swal from 'sweetalert2';
import { MDBContainer, MDBRow, MDBCol, MDBTable, MDBTableHead, MDBTableBody, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBInput } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import HospImg from './../../../Assets/Hospitalization Record Img.png';

function DoctorUpdateRecord() {

  const [records, setRecords] = useState([]);
  // const [treatments, setTreatments] = useState([]);
  const { id } = useParams();
  // const [bandb, setBandB] = useState([]);
  // const [labTests, setLabTests] = useState([]);
  // const [temperatures, setTemp] = useState([]);
  // const [bp, setBP] = useState([]);
  // const [comments, setComments] = useState([]);
  // const [labReports, setLabReports] = useState([]);

  useEffect(() => {
    getRecords();
  }, []);

  const getRecords = async () => {
    const nic = '200055702644';
    try {
      console.log(id);
      const response = await axios.get(`https://my-ehealth-diary-backend.herokuapp.com/api/get-medical-record?nic=${nic}&_id=${id}`);
      const reportsArray = response.data.medicalRecord;
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

  // useEffect(() => {
  //   getTreatments();
  // }, []);

  // const getTreatments = async () => {
  //   const nic = '200055702644';
  //   try {
  //     const response = await axios.get(`https://my-ehealth-diary-backend.herokuapp.com/api/get-treatments?nic=` + + nic + `&_id=` + id);
  //     const treatsArray = response.data.treatments;
  //     setTreatments(treatsArray);
  //   } catch (error) {
  //     console.log(error);
  //     Swal.fire({
  //       title: 'Error!',
  //       text: 'Retrieving treatments failed!',
  //       icon: 'error',
  //       confirmButtonText: 'OK'
  //     });
  //   }
  // };

  // useEffect(() => {
  //   getBandB();
  // }, []);

  // const getBandB = async () => {
  //   const nic = '200055702644';
  //   try {
  //     const response = await axios.get(`https://my-ehealth-diary-backend.herokuapp.com/api/get-bandb?nic=` + nic + `&_id=` + id);
  //     const bbArray = response.data.bandb;
  //     setBandB(bbArray);
  //   } catch (error) {
  //     console.log(error);
  //     Swal.fire({
  //       title: 'Error!',
  //       text: 'Retrieving bladder and bowel functions failed!',
  //       icon: 'error',
  //       confirmButtonText: 'OK'
  //     });
  //   }
  // };


  // useEffect(() => {
  //   getLabTests();
  // }, []);

  // const getLabTests = async () => {
  //   const nic = '200055702644';
  //   try {
  //     const response = await axios.get(`https://my-ehealth-diary-backend.herokuapp.com/api/get-labtests?nic=` + + nic + `&_id=` + id);
  //     const ltestArray = response.data.labs;
  //     setLabTests(ltestArray);
  //   } catch (error) {
  //     console.log(error);
  //     Swal.fire({
  //       title: 'Error!',
  //       text: 'Retrieving lab tests failed!',
  //       icon: 'error',
  //       confirmButtonText: 'OK'
  //     });
  //   }
  // };


  // useEffect(() => {
  //   getTemperature();
  // }, []);

  // const getTemperature = async () => {
  //   const nic = '200055702644';
  //   try {
  //     const response = await axios.get(`https://my-ehealth-diary-backend.herokuapp.com/api/get-temperatures?nic=` + + nic + `&_id=` + id);
  //     const tempArray = response.data.temps;
  //     setTemp(tempArray);
  //   } catch (error) {
  //     console.log(error);
  //     Swal.fire({
  //       title: 'Error!',
  //       text: 'Retrieving temperatures failed!',
  //       icon: 'error',
  //       confirmButtonText: 'OK'
  //     });
  //   }
  // };


  // useEffect(() => {
  //   getBloodPressure();
  // }, []);

  // const getBloodPressure = async () => {
  //   const nic = '200055702644';
  //   try {
  //     const response = await axios.get(`https://my-ehealth-diary-backend.herokuapp.com/api/get-blood-pressures?nic=` + + nic + `&_id=` + id);
  //     const bpArray = response.data.bp;
  //     setBP(bpArray);
  //   } catch (error) {
  //     console.log(error);
  //     Swal.fire({
  //       title: 'Error!',
  //       text: 'Retrieving blood pressures failed!',
  //       icon: 'error',
  //       confirmButtonText: 'OK'
  //     });
  //   }
  // };

  // useEffect(() => {
  //   getComments();
  // }, []);

  // const getComments = async () => {
  //   const nic = '200055702644';
  //   try {
  //     const response = await axios.get(`https://my-ehealth-diary-backend.herokuapp.com/api/get-comments?nic=` + + nic + `&_id=` + id);
  //     const commentsArray = response.data.com;
  //     setComments(commentsArray);
  //   } catch (error) {
  //     console.log(error);
  //     Swal.fire({
  //       title: 'Error!',
  //       text: 'Retrieving comments failed!',
  //       icon: 'error',
  //       confirmButtonText: 'OK'
  //     });
  //   }
  // };


  // useEffect(() => {
  //   getLabReports();
  // }, []);

  // const getLabReports = async () => {
  //   const nic = '200055702644';
  //   try {
  //     const response = await axios.get(`https://my-ehealth-diary-backend.herokuapp.com/api/get-reports?nic=` + + nic + `&_id=` + id);
  //     const lreportsArray = response.data.report;
  //     setLabReports(lreportsArray);
  //   } catch (error) {
  //     console.log(error);
  //     Swal.fire({
  //       title: 'Error!',
  //       text: 'Retrieving lab reports failed!',
  //       icon: 'error',
  //       confirmButtonText: 'OK'
  //     });
  //   }
  // };

  return (
    <MDBContainer>

      <MDBContainer>
        <MDBRow className='hospT1'>These are the details of the medical record you requested...</MDBRow>

        <MDBRow className='hospR2'>
          <MDBCol>
            <MDBTable striped className='hospTable1'>
              <MDBTableBody>
                <tr>
                  <th scope='row'>Date</th>
                  <td>{records ? records.date : '-'}</td>
                </tr>
                <tr>
                  <th scope='row'>Type</th>
                  <td>{records ? records.type : '-'}</td>
                </tr>
                <tr>
                  <th scope='row'>Date</th>
                  <td>{records ? records.date : '-'}</td>
                </tr>
                <tr>
                  <th scope='row'>Primary Diagnosis</th>
                  <td>{records ? records.primary_diagnosis : '-'}</td>
                </tr>
                <tr>
                  <th scope='row'>Doctor in Charge</th>
                  <td>{records ? records.doctor_in_charge : '-'}</td>
                </tr>
                <tr>
                  <th scope='row'>Admitted Date</th>
                  <td>{records ? records.admitted_date : '-'}</td>
                </tr>
                <tr>
                  <th scope='row'>Date of Discharge</th>
                  <td>{records ? records.date_of_discharge : '-'}</td>
                </tr>
                <tr>
                  <th scope='row'>Next Clinic Date</th>
                  <td>{records ? records.next_clinic_date : '-'}</td>
                </tr>
              </MDBTableBody>
            </MDBTable>
          </MDBCol>
          <MDBCol>
            <img src={HospImg} alt='....' className='hospImgStyles' />
          </MDBCol>
        </MDBRow>

      </MDBContainer>

      {/* <MDBContainer className='hospContL'>

        <MDBRow className='hospR3'>
          <MDBTable striped>
            <MDBTableHead className='hospTbl2Head'>
              <tr>
                <th scope='col'>Treatments</th>
                <th></th>
                <th></th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {treatments.map((treatments) => (
                <tr key={treatments._id}>
                  <td>{treatments.date}</td>
                  <td>{treatments.treatment}</td>
                  <td>{treatments.added_by}</td>
                </tr>
              ))}
            </MDBTableBody>
          </MDBTable>
        </MDBRow>

        <MDBRow className='hospR3'>
          <MDBTable striped>
            <MDBTableHead className='hospTbl2Head'>
              <tr>
                <th scope='col'>Bowel and Bladder Functions</th>
                <th></th>
                <th></th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {bandb.map((bandb) => (
                <tr key={bandb._id}>
                  <td>{bandb.date}</td>
                  <td>{bandb.bladder_bowel_function}</td>
                  <td>{bandb.added_by}</td>
                </tr>
              ))}
            </MDBTableBody>
          </MDBTable>
        </MDBRow>

        <MDBRow className='hospR3'>
          <MDBTable striped>
            <MDBTableHead className='hospTbl2Head'>
              <tr>
                <th scope='col'>Lab Tests</th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {labTests.map((labTests) => (
                <tr key={labTests._id}>
                  <td>{labTests.date}</td>
                  <td>{labTests.test_name}</td>
                  <td>{labTests.test_comments}</td>
                  <td>{labTests.added_by}</td>
                </tr>
              ))}
            </MDBTableBody>
          </MDBTable>
        </MDBRow>

        <MDBRow className='hospR3'>
          <MDBTable striped>
            <MDBTableHead className='hospTbl2Head'>
              <tr>
                <th scope='col'>Temperature</th>
                <th></th>
                <th></th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {temperatures.map((temperatures) => (
                <tr key={temperatures._id}>
                  <td>{temperatures.date}</td>
                  <td>{temperatures.temperature}</td>
                  <td>{temperatures.added_by}</td>
                </tr>
              ))}
            </MDBTableBody>
          </MDBTable>
        </MDBRow>

        <MDBRow className='hospR3'>
          <MDBTable striped>
            <MDBTableHead className='hospTbl2Head'>
              <tr>
                <th scope='col'>Blood Pressure</th>
                <th></th>
                <th></th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {bp.map((bp) => (
                <tr key={bp._id}>
                  <td>{bp.date}</td>
                  <td>{bp.blood_pressure}</td>
                  <td>{bp.added_by}</td>
                </tr>
              ))}
            </MDBTableBody>
          </MDBTable>
        </MDBRow>

        <MDBRow className='hospR3'>
          <MDBTable striped>
            <MDBTableHead className='hospTbl2Head'>
              <tr>
                <th scope='col'>Comments</th>
                <th></th>
                <th></th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {comments.map((comments) => (
                <tr key={comments._id}>
                  <td>{comments.date}</td>
                  <td>{comments.comments}</td>
                  <td>{comments.added_by}</td>
                </tr>
              ))}
            </MDBTableBody>
          </MDBTable>
        </MDBRow>

        <MDBRow className='hospR3'>
          <MDBTable striped>
            <MDBTableHead className='hospTbl2Head'>
              <tr>
                <th scope='col'>Reports</th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {labReports.map((labReports) => (
                <tr key={labReports._id}>
                  <td>{labReports.date}</td>
                  <td>{labReports.report_type}</td>
                  <td>{labReports.report_link}</td>
                  <td>{labReports.added_by}</td>
                </tr>
              ))}
            </MDBTableBody>
          </MDBTable>
        </MDBRow>

      </MDBContainer> */}

    </MDBContainer>

  )
}

export default DoctorUpdateRecord