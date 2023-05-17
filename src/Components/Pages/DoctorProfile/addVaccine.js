import React, { useEffect, useState } from 'react';
import './doctor.css';
import axios from 'axios';
import Swal from 'sweetalert2';
import { MDBContainer, MDBRow, MDBCol, MDBTable, MDBTableHead, MDBTableBody, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBInput } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import VaccineImg from './../../../Assets/syringe.png';

function AddVaccine() {

    const [vaccines, setVaccines] = useState([]);
    const [nic, setNIC] = useState("");
    const [vaccine_name, setVaccineName] = useState('');
    const [date, setDate] = useState('');
    const [dosage, setDosage] = useState('');
    const [batch_number, setBatchNo] = useState('');
    const [location, setLocation] = useState('');


    const getVaccines = async (event) => {
        event.preventDefault();

        try {
            console.log(nic);
            const response = await axios.get(`https://my-ehealth-diary-backend.herokuapp.com/api/get-vaccines?nic=` + nic);
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

    useEffect(() => {
        addVaccine();
    }, [])

    const addVaccine = async (event) => {
        event.preventDefault();

        try {
            const res = await axios.put("https://my-ehealth-diary-backend.herokuapp.com/api/add-vaccine?nic=" + nic + "&vaccine_name=" + vaccine_name + "&date=" + date + "&dosage=" + dosage + "&batch_number=" + batch_number + "&location=" + location);
            console.log(res.data);

            setVaccineName("");
            setDate("");
            setDosage("");
            setBatchNo("");
            setLocation("");

            Swal.fire({
                title: 'Success!',
                text: 'Vaccine added successfully!',
                icon: 'success',
                confirmButtonText: 'OK'
            });

        } catch (error) {
            console.log(error);
            Swal.fire({
                title: 'Error!',
                text: 'Allergy addition failed!',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    };



    return (
        <>
            {localStorage.getItem('role') !== 'doctor' ? window.location.href = '/' : (

                <MDBContainer className='vaccineCont1'>

                    <MDBRow className='manageProfileR2'>
                        <MDBCol className='manageProfileC'>
                            <form onSubmit={getVaccines}>
                                <label className='mprofileText vacTxt' htmlFor="n_hospital">Insert NIC</label> <br />
                                <input className='mprofileInput' id="nic" type="text" value={nic} onChange={(event) => setNIC(event.target.value)} required></input>
                                <MDBBtn type='submit' className='mb-4 mprofileBtn emBtn' block>Find User</MDBBtn>
                            </form>
                        </MDBCol>
                    </MDBRow>

                    <MDBContainer className='vaccineCont2'>
                        <MDBRow className='vaccineRow1'>
                            <span className='vaccineT1'>
                                <img src={VaccineImg} alt='...' className='vaccineIcon' />
                                Vaccinations
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

                        <MDBRow className='manageProfileR2'>
                            <form onSubmit={addVaccine} className='mprofileForm addVaForm'>
                                <legend className='mprofileLegend'>Add Vaccine</legend>
                                <MDBRow>
                                    <MDBCol>
                                        <label className='mprofileText' htmlFor="address">Vaccine Name</label> <br />
                                        <input className='mprofileInput' id="address" type="text" value={vaccine_name} onChange={(event) => setVaccineName(event.target.value)} required></input>
                                    </MDBCol>
                                    <MDBCol>
                                        <label className='mprofileText' htmlFor="address">Date</label> <br />
                                        <input className='mprofileInput' id="address" type="text" value={date} onChange={(event) => setDate(event.target.value)} required></input>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCol>
                                        <label className='mprofileText' htmlFor="address">Dosage</label> <br />
                                        <input className='mprofileInput' id="address" type="text" value={dosage} onChange={(event) => setDosage(event.target.value)} required></input>
                                    </MDBCol>
                                    <MDBCol>
                                        <label className='mprofileText' htmlFor="address">Batch Number</label> <br />
                                        <input className='mprofileInput' id="address" type="text" value={batch_number} onChange={(event) => setBatchNo(event.target.value)} required></input>
                                    </MDBCol>
                                </MDBRow>
                                <label className='mprofileText' htmlFor="address">Location</label> <br />
                                <input className='mprofileInput' id="address" type="text" value={location} onChange={(event) => setLocation(event.target.value)} required></input> <br />
                                <MDBBtn type='submit' className='mb-4 mprofileBtn' block>Add Vaccination</MDBBtn>
                            </form>
                        </MDBRow>

                    </MDBContainer>
                </MDBContainer>

            )}</>
    )
}

export default AddVaccine