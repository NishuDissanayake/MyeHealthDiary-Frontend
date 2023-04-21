import React, { useState } from 'react';
import { MDBBtn, MDBModal, MDBModalHeader, MDBModalBody, MDBModalFooter, MDBInput, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import axios from 'axios';
import './addHospital.css';
import Swal from 'sweetalert2';

function AddHospital() {
    const [hospital_regno, setHospitalRegNo] = useState('');
    const [hospital_name, setHospitalName] = useState('');
    const [address, setAddress] = useState('');
    const [phone_number, setPhoneNumber] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const added_by = "U00T";

            const res = await axios.post("https://my-ehealth-diary-backend.herokuapp.com/api/add-hospital", { hospital_regno, hospital_name, address, phone_number, added_by });
            console.log(res.data);

            setHospitalRegNo("");
            setHospitalName("");
            setAddress("");
            setPhoneNumber("");
            Swal.fire({
                title: 'Success!',
                text: 'Hospital added successfully!',
                icon: 'success',
                confirmButtonText: 'OK'
            });

        } catch (error) {
            console.log(error);
            Swal.fire({
                title: 'Error!',
                text: 'Hospital addition failed!',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    };
    return (
        <MDBContainer className='add-hos-cont1'>
            <form onSubmit={handleSubmit} className="addHospitalForm">
                <h1 className='addHospitalForm-heading'>Add a New Hospital</h1>

                <MDBRow>
                    <MDBCol className='hospital-form-col'>
                        <MDBRow className='d-inputLogin'>
                            <label className='d-loginLText' htmlFor="hospital_regno">Hospital Registration No</label>
                            <MDBInput className='inputField' id="hospital_regno" type="text" value={hospital_regno} onChange={(event) => setHospitalRegNo(event.target.value)} required />
                        </MDBRow>
                        <MDBRow className='d-inputLogin'>
                            <label htmlFor="hospital_name" className='d-loginLText'>Hospital Name</label>
                            <MDBInput className='inputField' id="hospital_name" type="text" value={hospital_name} onChange={(event) => setHospitalName(event.target.value)} required />
                        </MDBRow>
                    </MDBCol>
                    <MDBCol>
                        <MDBRow className='d-inputLogin'>
                            <label htmlFor="phone_number" className='d-loginLText'>Phone Number</label>
                            <MDBInput className='inputField' id="phone_number" type="tel" value={phone_number} onChange={(event) => setPhoneNumber(event.target.value)} required />
                        </MDBRow>
                        <MDBRow className='d-inputLogin'>
                            <label htmlFor="address" className='d-loginLText'>Address</label>
                            <MDBInput className='inputField' id="address" type="text" value={address} onChange={(event) => setAddress(event.target.value)} required />
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
                <MDBRow></MDBRow>
                <MDBBtn type='submit' className='mb-4 btnLogin doc-button' block>Add Hospital</MDBBtn>
            </form>

        </MDBContainer>
    )
}

export default AddHospital