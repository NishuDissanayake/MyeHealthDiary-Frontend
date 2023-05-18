import React, { useState, useEffect } from 'react';
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
            const added_by = localStorage.getItem('email');

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


    const [n_address, setNAddress] = useState('');
    const [n_phone, setPhone] = useState('');
    const [n_regno, setRegno] = useState('');

    useEffect(() => {
        updateHAddress();
    }, [])

    const updateHAddress = async (event) => {
        event.preventDefault();

        try {

            const res = await axios.put("https://my-ehealth-diary-backend.herokuapp.com/api/update-hospital-address?reg_no=" + n_regno + "&n_address=" + n_address);

            setNAddress("");

            Swal.fire({
                title: 'Success!',
                text: 'Hospital address updated successfully!',
                icon: 'success',
                confirmButtonText: 'OK'
            });

        } catch (error) {
            console.log(error);
            Swal.fire({
                title: 'Error!',
                text: 'Hospital address update failed!',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    };

    useEffect(() => {
        updatePhone();
    }, [])

    const updatePhone = async (event) => {
        event.preventDefault();

        try {

            const res = await axios.put("https://my-ehealth-diary-backend.herokuapp.com/api/update-hospital-phone?reg_no=" + n_regno + "&n_phone=" + n_phone);
            console.log(res.data);

            setPhone("");

            Swal.fire({
                title: 'Success!',
                text: 'Phone number updated successfully!',
                icon: 'success',
                confirmButtonText: 'OK'
            });

        } catch (error) {
            console.log(error);
            Swal.fire({
                title: 'Error!',
                text: 'Phone number update failed!',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    };

    useEffect(() => {
        deleteUser();
    }, [])

    const deleteUser = async (event) => {
        event.preventDefault();

        try {
            const res = await axios.put("https://my-ehealth-diary-backend.herokuapp.com/api/delete-hospital?reg_no=" + n_regno);
            console.log(res.data);

            setRegno("");

            Swal.fire({
                title: 'Success!',
                text: 'Hospital deactivation successful!',
                icon: 'success',
                confirmButtonText: 'OK'
            });

        } catch (error) {
            console.log(error);
            Swal.fire({
                title: 'Error!',
                text: 'Hospital deactivation failed! Recheck registration number!',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    };


    return (

        <>
            {localStorage.getItem('role') !== 'admin' ? window.location.href = '/' : (

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

                    <MDBContainer>
                        <MDBRow className='uprofileT1x manTxt1'>Manage Hospital!</MDBRow>

                        <MDBRow className='manageProfileR2'>
                            <MDBCol className='manageProfileC'>
                                <form onSubmit={updateHAddress} className='mprofileForm'>
                                    <legend className='mprofileLegend'>Update Address</legend>
                                    <label className='mprofileText' htmlFor="n_hospital">Registration Number</label> <br />
                                    <input className='mprofileInput' id="n_hospital" type="text" value={n_regno} onChange={(event) => setRegno(event.target.value)} required></input> <br />
                                    <label className='mprofileText' htmlFor="n_hospital">New Address</label> <br />
                                    <input className='mprofileInput' id="n_hospital" type="text" value={n_address} onChange={(event) => setNAddress(event.target.value)} required></input> <br />
                                    <MDBBtn type='submit' className='mb-4 mprofileBtn' block>Update Address</MDBBtn>
                                </form>
                            </MDBCol>

                            <MDBCol className='manageProfileC'>
                                <form onSubmit={updatePhone} className='mprofileForm'>
                                    <legend className='mprofileLegend'>Update Phone Number</legend>
                                    <label className='mprofileText' htmlFor="n_hospital">Registration Number</label> <br />
                                    <input className='mprofileInput' id="n_hospital" type="text" value={n_regno} onChange={(event) => setRegno(event.target.value)} required></input> <br />
                                    <label className='mprofileText'>New Phone Number</label> <br />
                                    <input className='mprofileInput' id="phone_number" type="text" value={n_phone} onChange={(event) => setPhone(event.target.value)} required></input> <br />
                                    <MDBBtn type='submit' className='mb-4 mprofileBtn' block>Update Phone Number</MDBBtn>
                                </form>
                            </MDBCol>
                        </MDBRow>

                        <MDBRow className='manageProfileR2'>
                            <MDBCol className='manageProfileC'>
                                <form onSubmit={deleteUser} className='mprofileForm'>
                                    <legend className='mprofileLegendx'>Remove Hospital</legend>
                                    <label className='mprofileText' htmlFor="n_hospital">Registration Number</label> <br />
                                    <input className='mprofileInput' id="n_hospital" type="text" value={n_regno} onChange={(event) => setRegno(event.target.value)} required></input> <br />
                                    <MDBBtn type='submit' className='mb-4 mprofileBtn' block>Remove Hospital</MDBBtn>
                                </form>
                            </MDBCol>

                            <MDBCol className='manageProfileC'>
                            </MDBCol>
                        </MDBRow>

                    </MDBContainer>

                </MDBContainer>
            )}</>
    )
}

export default AddHospital