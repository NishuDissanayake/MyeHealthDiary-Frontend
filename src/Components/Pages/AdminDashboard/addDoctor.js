import React, { useState } from 'react';
import { MDBBtn, MDBModal, MDBModalHeader, MDBModalBody, MDBModalFooter, MDBInput, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import axios from 'axios';
import './addDoctor.css';
import Swal from 'sweetalert2';

function AddDoctor() {

    const [doctor_id, setId] = useState('');
    const [doctor_name, setName] = useState('');
    const [hospital, setHospital] = useState('');
    const [specialization, setSpecialization] = useState('');
    const [qualifications, setQualifications] = useState('');
    const [phone_number, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [added_by, setAddedBy] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const added_by = "U00T";

            const res = await axios.post("https://my-ehealth-diary-backend.herokuapp.com/api/add-doctor", { doctor_id, doctor_name, hospital, specialization, qualifications, phone_number, email, added_by, pass });
            console.log(res.data);

            setId("");
            setName("");
            setHospital("");
            setSpecialization("");
            setQualifications("");
            setPhoneNumber("");
            setEmail("");
            setPass("");
            Swal.fire({
                title: 'Success!',
                text: 'Doctor added successfully!',
                icon: 'success',
                confirmButtonText: 'OK'
            });

        } catch (error) {
            console.log(error);
            Swal.fire({
                title: 'Error!',
                text: 'Doctor addition failed!',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    };

    return (

        <>
            {localStorage.getItem('role') !== 'admin' ? window.location.href = '/' : (

                <MDBContainer className='add-doc-cont1'>
                    <form onSubmit={handleSubmit} className="addDoctorForm">
                        <h1 className='addDoctorForm-heading'>Add a New Doctor</h1>

                        <MDBRow>
                            <MDBCol className='doctor-form-col'>
                                <MDBRow className='d-inputLogin'>
                                    <label className='d-loginLText' htmlFor="doctor_id">Doctor ID</label>
                                    <MDBInput className='inputField' id="doctor_id" type="text" value={doctor_id} onChange={(event) => setId(event.target.value)} required />
                                </MDBRow>
                                <MDBRow className='d-inputLogin'>
                                    <label htmlFor="doctor_name" className='d-loginLText'>Doctor Name</label>
                                    <MDBInput className='inputField' id="doctor_name" type="text" value={doctor_name} onChange={(event) => setName(event.target.value)} required />
                                </MDBRow>
                                <MDBRow className='d-inputLogin'>
                                    <label htmlFor="specialization" className='d-loginLText'>Specialization</label>
                                    <MDBInput className='inputField' id="specialization" type="text" value={specialization} onChange={(event) => setSpecialization(event.target.value)} required />
                                </MDBRow>
                                <MDBRow className='d-inputLogin'>
                                    <label htmlFor="email" className='d-loginLText'>Email</label>
                                    <MDBInput className='inputField doctor-email-input' id="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
                                </MDBRow>
                            </MDBCol>
                            <MDBCol>
                                <MDBRow className='d-inputLogin'>
                                    <label htmlFor="hospital" className='d-loginLText'>Hospital</label>
                                    <MDBInput className='inputField' id="hospital" type="text" value={hospital} onChange={(event) => setHospital(event.target.value)} required />
                                </MDBRow>
                                <MDBRow className='d-inputLogin'>
                                    <label htmlFor="qualifications" className='d-loginLText'>Qualifications</label>
                                    <MDBInput className='inputField' id="qualifications" type="text" value={qualifications} onChange={(event) => setQualifications(event.target.value)} required />
                                </MDBRow>
                                <MDBRow className='d-inputLogin'>
                                    <label htmlFor="phone_number" className='d-loginLText'>Phone Number</label>
                                    <MDBInput className='inputField' id="phone_number" type="tel" value={phone_number} onChange={(event) => setPhoneNumber(event.target.value)} required />
                                </MDBRow>
                                <MDBRow className='d-inputLogin'>
                                    <label htmlFor="pass" className='d-loginLText'>Password</label>
                                    <MDBInput className='inputField' id="pass" type="password" value={pass} onChange={(event) => setPass(event.target.value)} required />
                                </MDBRow>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow></MDBRow>
                        <MDBBtn type='submit' className='mb-4 btnLogin doc-button' block>Add Doctor</MDBBtn>
                    </form>

                </MDBContainer>
            )}</>
    )
}

export default AddDoctor


