import React, { useState } from 'react';
import { MDBBtn, MDBModal, MDBModalHeader, MDBModalBody, MDBModalFooter, MDBInput, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import axios from 'axios';
import './addEmt.css';
import Swal from 'sweetalert2';

function AddDoctor() {

    const [emt_id, setId] = useState('');
    const [emt_name, setName] = useState('');
    const [hospital, setHospital] = useState('');
    const [designation, setDesignation] = useState('');
    const [phone_number, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [passwrd, setPass] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const added_by = "U00T";

            const res = await axios.post("https://my-ehealth-diary-backend.herokuapp.com/api/add-emt", { emt_id, emt_name, hospital, designation, phone_number, email, passwrd, added_by });
            console.log(res.data);

            setId("");
            setName("");
            setHospital("");
            setDesignation("");
            setPhoneNumber("");
            setEmail("");
            setPass("");
            Swal.fire({
                title: 'Success!',
                text: 'EMT member added successfully!',
                icon: 'success',
                confirmButtonText: 'OK'
            });

        } catch (error) {
            console.log(error);
            Swal.fire({
                title: 'Error!',
                text: 'EMT member addition failed!',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    };

    return (

        <MDBContainer className='add-doc-cont1'>
            <form onSubmit={handleSubmit} className="addDoctorForm">
                <h1 className='addDoctorForm-heading'>Add a New EMT</h1>

                <MDBRow>
                    <MDBCol className='doctor-form-col'>
                        <MDBRow className='d-inputLogin'>
                            <label className='d-loginLText' htmlFor="emt_id">EMT ID</label>
                            <MDBInput className='inputField' id="emt_id" type="text" value={emt_id} onChange={(event) => setId(event.target.value)} required />
                        </MDBRow>
                        <MDBRow className='d-inputLogin'>
                            <label htmlFor="emt_name" className='d-loginLText'>EMT Name</label>
                            <MDBInput className='inputField' id="emt_name" type="text" value={emt_name} onChange={(event) => setName(event.target.value)} required />
                        </MDBRow>
                        <MDBRow className='d-inputLogin'>
                            <label htmlFor="hospital" className='d-loginLText'>Hospital</label>
                            <MDBInput className='inputField' id="hospital" type="text" value={hospital} onChange={(event) => setHospital(event.target.value)} required />
                        </MDBRow>
                        <MDBRow className='d-inputLogin'>
                            <label htmlFor="email" className='d-loginLText'>Email</label>
                            <MDBInput className='inputField doctor-email-input' id="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
                        </MDBRow>
                    </MDBCol>
                    <MDBCol>
                        <MDBRow className='d-inputLogin'>
                            <label htmlFor="designation" className='d-loginLText'>Designation</label>
                            <MDBInput className='inputField' id="designation" type="text" value={designation} onChange={(event) => setDesignation(event.target.value)} required />
                        </MDBRow>
                        <MDBRow className='d-inputLogin'>
                            <label htmlFor="phone_number" className='d-loginLText'>Phone Number</label>
                            <MDBInput className='inputField' id="phone_number" type="tel" value={phone_number} onChange={(event) => setPhoneNumber(event.target.value)} required />
                        </MDBRow>
                        <MDBRow className='d-inputLogin'>
                            <label htmlFor="passwrd" className='d-loginLText'>Password</label>
                            <MDBInput className='inputField' id="passwrd" type="password" value={passwrd} onChange={(event) => setPass(event.target.value)} required />
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
                <MDBRow></MDBRow>
                <MDBBtn type='submit' className='mb-4 btnLogin doc-button' block>Add EMT Member</MDBBtn>
            </form>

        </MDBContainer>

    )
}

export default AddDoctor


