import React, { useEffect, useState } from 'react';
import './doctor.css';
import axios from 'axios';
import Swal from 'sweetalert2';
import { MDBContainer, MDBRow, MDBCol, MDBTable, MDBTableHead, MDBTableBody, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBInput } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import VaccineImg from './../../../Assets/syringe.png';

function DoctorFindRecord() {

  const [userData, setUserData] = useState([]);
  const [nic, setNIC] = useState("");
  const [medicines, setMedicines] = useState([]);

  const handleClick = (event) => {
    event.preventDefault();
    console.log(nic);
    getUserData();
    getMedicines();
  };


  const getUserData = async () => {
    try {
      const response = await axios.get(`https://my-ehealth-diary-backend.herokuapp.com/api/get-user-data?nic=` + + nic);
      const reportsArray = response.data[0].medical_reports;
      setUserData(reportsArray);
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

  const getMedicines = async () => {
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

  const [date_issued, setDateIssued] = useState('');
  const [med_name, setMedName] = useState('');
  const [type, setType] = useState('');
  const [dosage, setDosage] = useState('');
  const [meals, setMeals] = useState('');
  const [morning, setMorning] = useState('');
  const [noon, setNoon] = useState('');
  const [night, setNight] = useState('');
  const [comments, setComments] = useState('');

  useEffect(() => {
    addMeds();
  }, [])

  const addMeds = async (event) => {
    event.preventDefault();

    try {
      const state = "Active";

      const res = await axios.put("https://my-ehealth-diary-backend.herokuapp.com/api/add-meds?nic=" + nic + "&date_issued=" + date_issued + "&med_name=" + med_name + "&type=" + type + "&dosage=" + dosage + "&meals=" + meals + "&morning=" + morning + "&noon=" + noon + "&night=" + night + "&comments=" + comments + "&state=" + state);
      console.log(res.data);

      setDateIssued("");
      setMedName("");
      setType("");
      setDosage("");
      setMeals("");
      setMorning("");
      setNoon("");
      setNight("");
      setComments("");

      Swal.fire({
        title: 'Success!',
        text: 'Medication added successfully!',
        icon: 'success',
        confirmButtonText: 'OK'
      });

    } catch (error) {
      console.log(error);
      Swal.fire({
        title: 'Error!',
        text: 'Medication addition failed!',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };


  const [rtype, setReportType] = useState('');
  const [date, setDate] = useState('');
  const [primary_diagnosis, setPDiagnosis] = useState('');
  const [doctor_in_charge, setDIC] = useState('');
  const [admitted_date, SetAdmit] = useState('');

  useEffect(() => {
    addRecord();
  }, [])

  const addRecord = async (event) => {
    event.preventDefault();

    try {
      const state = "Active";

      const next_clinic_date = new Date();
      const date_of_discharge = new Date();

      const res = await axios.put("https://my-ehealth-diary-backend.herokuapp.com/api/add-record?nic=" + nic + "&type=" + rtype + "&date=" + date + "&primary_diagnosis=" + primary_diagnosis + "&doctor_in_charge=" + doctor_in_charge + "&admitted_date=" + admitted_date + "&date_of_discharge=" + date_of_discharge + "&next_clinic_date=" + next_clinic_date);
      console.log(res.data);

      setReportType("");
      setDate("");
      setPDiagnosis("");
      setDIC("");
      SetAdmit("");

      Swal.fire({
        title: 'Success!',
        text: 'Medical record added successfully!',
        icon: 'success',
        confirmButtonText: 'OK'
      });

    } catch (error) {
      console.log(error);
      Swal.fire({
        title: 'Error!',
        text: 'Medical record addition failed!',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  return (

    <>
      {localStorage.getItem('role') !== 'doctor' ? window.location.href = '/' : (

        <MDBContainer>

          <MDBRow className='uprofileT1e uFindD'>Find Users!!!</MDBRow>

          <MDBRow className='manageProfileR2'>
            <MDBCol className='manageProfileC'>
              <form onSubmit={handleClick}>
                <label className='mprofileText' htmlFor="n_hospital">Insert NIC</label> <br />
                <input className='mprofileInput' id="nic" type="text" value={nic} onChange={(event) => setNIC(event.target.value)} required></input>
                <MDBBtn type='submit' className='mb-4 mprofileBtn emBtn' block>Find User</MDBBtn>
              </form>
            </MDBCol>
          </MDBRow>

          <h2 className='dFindUserTxt'>Medical Reports</h2>
          <MDBTable striped className='dFindUserTables'>
            <MDBTableHead dark>
              <tr>
                <th scope='col'>Date</th>
                <th scope='col'>Type</th>
                <th scope='col'>Diagnosis</th>
                <th></th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {userData.map((record) => (
                <tr key={record._id}>
                  <td>{record.date}</td>
                  <td>{record.type}</td>
                  <td>{record.primary_diagnosis}</td>
                  <td>
                    <Link to={`/update-user-record/${record._id}`}>
                      <MDBBtn className='reportBtn'>View Full Report</MDBBtn>
                    </Link></td>
                </tr>
              ))}
            </MDBTableBody>
          </MDBTable>

          <MDBRow>
            <h2 className='dFindUserTxt'>Current Medications</h2>
            <MDBTable striped className='dFindUserTables'>
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
                  </tr>
                ))}
              </MDBTableBody>
            </MDBTable>
          </MDBRow>

          <h2 className='dFindUserTxt'>Add Medications</h2>
          <MDBRow className='manageProfileR2'>
            <form onSubmit={addMeds} className='mprofileForm addVaForm'>
              <legend className='mprofileLegend'>Add New Medication</legend>
              <MDBRow>
                <MDBCol>
                  <label className='mprofileText' htmlFor="address">Date Issued</label> <br />
                  <input className='mprofileInput' id="address" type="text" value={date_issued} onChange={(event) => setDateIssued(event.target.value)} required></input>
                </MDBCol>
                <MDBCol>
                  <label className='mprofileText' htmlFor="address">Med Name</label> <br />
                  <input className='mprofileInput' id="address" type="text" value={med_name} onChange={(event) => setMedName(event.target.value)} required></input>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol>
                  <label className='mprofileText' htmlFor="address">Type</label> <br />
                  <input className='mprofileInput' id="address" type="text" value={type} onChange={(event) => setType(event.target.value)} required></input>
                </MDBCol>
                <MDBCol>
                  <label className='mprofileText' htmlFor="address">Dosage</label> <br />
                  <input className='mprofileInput' id="address" type="text" value={dosage} onChange={(event) => setDosage(event.target.value)} required></input>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol>
                  <label className='mprofileText' htmlFor="address">Morning</label> <br />
                  <input className='mprofileInput' id="address" type="text" value={morning} onChange={(event) => setMorning(event.target.value)} required></input> <br />
                </MDBCol>
                <MDBCol>
                  <label className='mprofileText' htmlFor="address">Noon</label> <br />
                  <input className='mprofileInput' id="address" type="text" value={noon} onChange={(event) => setNoon(event.target.value)} required></input>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol>
                  <label className='mprofileText' htmlFor="address">Night</label> <br />
                  <input className='mprofileInput' id="address" type="text" value={night} onChange={(event) => setNight(event.target.value)} required></input>
                </MDBCol>
                <MDBCol>
                  <label className='mprofileText' htmlFor="address">Meals</label> <br />
                  <input className='mprofileInput' id="address" type="text" value={meals} onChange={(event) => setMeals(event.target.value)} required></input>
                </MDBCol>
              </MDBRow>
              <label className='mprofileText' htmlFor="address">Comments</label> <br />
              <input className='mprofileInput' id="address" type="text" value={comments} onChange={(event) => setComments(event.target.value)} required></input> <br />

              <MDBBtn type='submit' className='mb-4 mprofileBtn' block>Add Medication</MDBBtn>
            </form>
          </MDBRow>


          <h2 className='dFindUserTxt'>Add New Medical Record</h2>
          <MDBRow className='manageProfileR2'>
            <form onSubmit={addRecord} className='mprofileForm addVaForm'>
              <legend className='mprofileLegend'>Add New Medical Record</legend>
              <MDBRow>
                <MDBCol>
                  <label className='mprofileText' htmlFor="address">Report Type</label> <br />
                  <input className='mprofileInput' id="address" type="text" value={rtype} onChange={(event) => setReportType(event.target.value)} required></input>
                </MDBCol>
                <MDBCol>
                  <label className='mprofileText' htmlFor="address">Date</label> <br />
                  <input className='mprofileInput' id="address" type="text" value={date} onChange={(event) => setDate(event.target.value)} required></input>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol>
                  <label className='mprofileText' htmlFor="address">Primary Diagnosis</label> <br />
                  <input className='mprofileInput' id="address" type="text" value={primary_diagnosis} onChange={(event) => setPDiagnosis(event.target.value)} required></input>
                </MDBCol>
                <MDBCol>
                  <label className='mprofileText' htmlFor="address">Doctor in Charge</label> <br />
                  <input className='mprofileInput' id="address" type="text" value={doctor_in_charge} onChange={(event) => setDIC(event.target.value)} required></input>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol>
                  <label className='mprofileText' htmlFor="address">Admitted Date</label> <br />
                  <input className='mprofileInput' id="address" type="text" value={admitted_date} onChange={(event) => SetAdmit(event.target.value)} required></input> <br />
                </MDBCol>
                <MDBCol className='duprecspan'>
                  <span className='duprecspan'>* Please note that the current date is being sent as the Date of Discharge and Next Clinic Date by default. Please update these values when necessary.</span>
                </MDBCol>
              </MDBRow>

              <MDBBtn type='submit' className='mb-4 mprofileBtn' block>Add Medication</MDBBtn>
            </form>
          </MDBRow>

        </MDBContainer>

      )}</>

  )
}

export default DoctorFindRecord