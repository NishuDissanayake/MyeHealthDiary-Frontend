import React, { useState, useEffect } from 'react';
import './profileUpdate.css';
import {
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBContainer
} from 'mdb-react-ui-kit';
import axios from 'axios';
import Swal from 'sweetalert2';

function ProfileUpdate() {

    const [n_address, setAddress] = useState('');
    const [n_phone, setPhone] = useState('');
    const [n_emergency_contact_person, setEmPerson] = useState('');
    const [n_emergency_contact, setEmPhone] = useState('');
    const [n_blood_group, setBGroup] = useState('');
    const [n_chronic_disease, setCDisease] = useState('');
    const [n_health_insurance_provider, setInsurance] = useState('');
    const [n_pass, setPass] = useState('');
    const [n_AType, setAType] = useState('');
    const [n_AName, setAName] = useState('');

    useEffect(() => {
        updateAddress();
    }, [])

    const updateAddress = async (event) => {
        event.preventDefault();

        try {
            const nic = localStorage.getItem('nic');

            const res = await axios.put("https://my-ehealth-diary-backend.herokuapp.com/api/update-address?nic=" + nic + "&n_address=" + n_address);
            console.log(res.data);

            Swal.fire({
                title: 'Success!',
                text: 'Address updated successfully!',
                icon: 'success',
                confirmButtonText: 'OK'
            });

        } catch (error) {
            console.log(error);
            Swal.fire({
                title: 'Error!',
                text: 'Address update failed!',
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
            const nic = localStorage.getItem('nic');

            const res = await axios.put("https://my-ehealth-diary-backend.herokuapp.com/api/update-contact?nic=" + nic + "&n_phone=" + n_phone);
            console.log(res.data);

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
        updateEmPerson();
    }, [])

    const updateEmPerson = async (event) => {
        event.preventDefault();

        try {
            const nic = localStorage.getItem('nic');

            const res = await axios.put("https://my-ehealth-diary-backend.herokuapp.com/api/update-em-contact-name?nic=" + nic + "&n_emergency_contact_person=" + n_emergency_contact_person);
            console.log(res.data);

            setEmPerson("");

            Swal.fire({
                title: 'Success!',
                text: 'Emergency contact person updated successfully!',
                icon: 'success',
                confirmButtonText: 'OK'
            });

        } catch (error) {
            console.log(error);
            Swal.fire({
                title: 'Error!',
                text: 'Emergency contact person update failed!',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    };

    useEffect(() => {
        updateEmContact();
    }, [])

    const updateEmContact = async (event) => {
        event.preventDefault();

        try {
            const nic = localStorage.getItem('nic');

            const res = await axios.put("https://my-ehealth-diary-backend.herokuapp.com/api/update-em-contact?nic=" + nic + "&n_emergency_contact=" + n_emergency_contact);
            console.log(res.data);

            setEmPhone("");

            Swal.fire({
                title: 'Success!',
                text: 'Emergency contact number updated successfully!',
                icon: 'success',
                confirmButtonText: 'OK'
            });

        } catch (error) {
            console.log(error);
            Swal.fire({
                title: 'Error!',
                text: 'Emergency contact number update failed!',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    };

    useEffect(() => {
        updateBloodGroup();
    }, [])

    const updateBloodGroup = async (event) => {
        event.preventDefault();

        try {
            const nic = localStorage.getItem('nic');

            const res = await axios.put("https://my-ehealth-diary-backend.herokuapp.com/api/update-blood-group?nic=" + nic + "&n_blood_group=" + n_blood_group);
            console.log(res.data);

            setBGroup("");

            Swal.fire({
                title: 'Success!',
                text: 'Blood group updated successfully!',
                icon: 'success',
                confirmButtonText: 'OK'
            });

        } catch (error) {
            console.log(error);
            Swal.fire({
                title: 'Error!',
                text: 'Blood group update failed!',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    };

    useEffect(() => {
        updateCDiseases();
    }, [])

    const updateCDiseases = async (event) => {
        event.preventDefault();

        try {
            const nic = localStorage.getItem('nic');

            const res = await axios.put("https://my-ehealth-diary-backend.herokuapp.com/api/update-chronic-diseases?nic=" + nic + "&n_chronic_disease=" + n_chronic_disease);
            console.log(res.data);

            setCDisease("");

            Swal.fire({
                title: 'Success!',
                text: 'Diseases updated successfully!',
                icon: 'success',
                confirmButtonText: 'OK'
            });

        } catch (error) {
            console.log(error);
            Swal.fire({
                title: 'Error!',
                text: 'Diseases update failed!',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    };

    useEffect(() => {
        updateInsurance();
    }, [])

    const updateInsurance = async (event) => {
        event.preventDefault();

        try {
            const nic = localStorage.getItem('nic');

            const res = await axios.put("https://my-ehealth-diary-backend.herokuapp.com/api/update-health-insurance?nic=" + nic + "&n_health_insurance_provider=" + n_health_insurance_provider);
            console.log(res.data);

            setInsurance("");

            Swal.fire({
                title: 'Success!',
                text: 'Health Insurance Provider updated successfully!',
                icon: 'success',
                confirmButtonText: 'OK'
            });

        } catch (error) {
            console.log(error);
            Swal.fire({
                title: 'Error!',
                text: 'Health Insurance Provider update failed!',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    };

    useEffect(() => {
        addAllergy();
    }, [])

    const addAllergy = async (event) => {
        event.preventDefault();

        try {
            const nic = localStorage.getItem('nic');

            const res = await axios.put("https://my-ehealth-diary-backend.herokuapp.com/api/add-allergy?nic=" + nic + "&allergy_type=" + n_AType + "&allergy_name=" + n_AName);
            console.log(res.data);

            setAType("");
            setAName("");

            Swal.fire({
                title: 'Success!',
                text: 'Allergy added successfully!',
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

    useEffect(() => {
        deleteUser();
    }, [])

    const deleteUser = async (event) => {
        event.preventDefault();

        try {
            const nic = localStorage.getItem('nic');
            const res = await axios.put("https://my-ehealth-diary-backend.herokuapp.com/api/delete-user?nic=" + nic + "&n_pass=" + n_pass);
            console.log(res.data);

            setPass("");

            Swal.fire({
                title: 'Success!',
                text: 'Account deactivation successful!',
                icon: 'success',
                confirmButtonText: 'OK'
            });

        } catch (error) {
            console.log(error);
            Swal.fire({
                title: 'Error!',
                text: 'Account deactivation failed! Recheck password!',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    };



    return (

        <>
            {localStorage.getItem('role') !== 'user' ? window.location.href = '/' : (

                <MDBContainer className='manageProfile1'>

                    <MDBContainer className='manageProfile2'>
                        <MDBRow className='uprofileT1'>Manage Your Profile!</MDBRow>

                        <MDBRow className='manageProfileR2'>
                            <MDBCol className='manageProfileC'>
                                <form onSubmit={addAllergy} className='mprofileForm'>
                                    <legend className='mprofileLegend'>Add Allergy</legend>
                                    <MDBRow>
                                        <MDBCol>
                                            <label className='mprofileText' htmlFor="address">New Allergy Type</label> <br />
                                            <input className='mprofileInput' id="allergy_type" type="text" value={n_AType} onChange={(event) => setAType(event.target.value)} required></input> <br />
                                        </MDBCol>
                                        <MDBCol>
                                            <label className='mprofileText' htmlFor="address">New Allergy Name</label> <br />
                                            <input className='mprofileInput' id="allergy_name" type="text" value={n_AName} onChange={(event) => setAName(event.target.value)} required></input> <br />
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBBtn type='submit' className='mb-4 mprofileBtn' block>Add Allergy</MDBBtn>
                                </form>
                            </MDBCol>
                        </MDBRow>

                        <MDBRow className='manageProfileR2'>
                            <MDBCol className='manageProfileC'>
                                <form onSubmit={updateAddress} className='mprofileForm'>
                                    <legend className='mprofileLegend'>Update Address</legend>
                                    <label className='mprofileText' htmlFor="address">New Address</label> <br />
                                    <input className='mprofileInput' id="address" type="text" value={n_address} onChange={(event) => setAddress(event.target.value)} required></input> <br />
                                    <MDBBtn type='submit' className='mb-4 mprofileBtn' block>Update Adress</MDBBtn>
                                </form>
                            </MDBCol>

                            <MDBCol className='manageProfileC'>
                                <form onSubmit={updatePhone} className='mprofileForm'>
                                    <legend className='mprofileLegend'>Update Phone Number</legend>
                                    <label className='mprofileText'>New Phone Number</label> <br />
                                    <input className='mprofileInput' id="phone_number" type="text" value={n_phone} onChange={(event) => setPhone(event.target.value)} required></input> <br />
                                    <MDBBtn type='submit' className='mb-4 mprofileBtn' block>Update Phone Number</MDBBtn>
                                </form>
                            </MDBCol>
                        </MDBRow>

                        <MDBRow className='manageProfileR2'>
                            <MDBCol className='manageProfileC'>
                                <form onSubmit={updateEmPerson} className='mprofileForm'>
                                    <legend className='mprofileLegend'>Update Emergency Contact Person</legend>
                                    <label className='mprofileText'>New Emergency Contact Person</label> <br />
                                    <input className='mprofileInput' id="emergency_person" type="text" value={n_emergency_contact_person} onChange={(event) => setEmPerson(event.target.value)} required></input> <br />
                                    <MDBBtn type='submit' className='mb-4 mprofileBtn' block>Update Person</MDBBtn>
                                </form>
                            </MDBCol>

                            <MDBCol className='manageProfileC'>
                                <form onSubmit={updateEmContact} className='mprofileForm'>
                                    <legend className='mprofileLegend'>Update Emergency Contact Person Phone Number</legend>
                                    <label className='mprofileText'>New Emergency Contact Number</label> <br />
                                    <input className='mprofileInput' id="emergency_contact" type="text" value={n_emergency_contact} onChange={(event) => setEmPhone(event.target.value)} required></input> <br />
                                    <MDBBtn type='submit' className='mb-4 mprofileBtn' block>Update Number</MDBBtn>
                                </form>
                            </MDBCol>
                        </MDBRow>

                        <MDBRow className='manageProfileR2'>
                            <MDBCol className='manageProfileC'>
                                <form onSubmit={updateBloodGroup} className='mprofileForm'>
                                    <legend className='mprofileLegend'>Update Blood Group</legend>
                                    <label className='mprofileText'>New Blood Group</label> <br />
                                    <input className='mprofileInput' id="blood_group" type="text" value={n_blood_group} onChange={(event) => setBGroup(event.target.value)} required></input> <br />
                                    <MDBBtn type='submit' className='mb-4 mprofileBtn' block>Update Blood Group</MDBBtn>
                                </form>
                            </MDBCol>

                            <MDBCol className='manageProfileC'>
                                <form onSubmit={updateCDiseases} className='mprofileForm'>
                                    <legend className='mprofileLegend'>Update Chronic Diseases</legend>
                                    <label className='mprofileText'>New Diseases</label> <br />
                                    <input className='mprofileInput' id="chronic_disease" type="text" value={n_chronic_disease} onChange={(event) => setCDisease(event.target.value)} required></input> <br />
                                    <MDBBtn type='submit' className='mb-4 mprofileBtn' block>Update Diseases</MDBBtn>
                                </form>
                            </MDBCol>
                        </MDBRow>

                        <MDBRow className='manageProfileR2'>
                            <MDBCol className='manageProfileC'>
                                <form onSubmit={updateInsurance} className='mprofileForm'>
                                    <legend className='mprofileLegend'>Update Health Insurance</legend>
                                    <label className='mprofileText'>New Health Insurance</label> <br />
                                    <input className='mprofileInput' id="chronic_disease" type="text" value={n_health_insurance_provider} onChange={(event) => setInsurance(event.target.value)} required></input> <br />
                                    <MDBBtn type='submit' className='mb-4 mprofileBtn' block>Update Diseases</MDBBtn>
                                </form>
                            </MDBCol>

                            <MDBCol className='manageProfileC'>
                                <form onSubmit={deleteUser} className='mprofileForm'>
                                    <legend className='mprofileLegendx'>Deactivate Account</legend>
                                    <label className='mprofileText'>Enter your password</label> <br />
                                    <input className='mprofileInput' id="n_pass" type="text" value={n_pass} onChange={(event) => setPass(event.target.value)} required></input> <br />
                                    <MDBBtn type='submit' className='mb-4 mprofileBtn' block>Deactivate Account</MDBBtn>
                                </form>
                            </MDBCol>
                        </MDBRow>

                        {/* <div id='allergySection'>
                    <MDBRow className='manageProfileR2'>
                        <MDBCol className='manageProfileC'>
                            <form onSubmit={addAllergy} className='mprofileForm'>
                                <legend className='mprofileLegend'>Add Allergy</legend>
                                <label className='mprofileText'>Allergy Type</label> <br />
                                <input className='mprofileInput' id="chronic_disease" type="text" value={n_health_insurance_provider} onChange={(event) => setInsurance(event.target.value)} required></input> <br />
                                <label className='mprofileText'>Allergy Name</label> <br />
                                <input className='mprofileInput' id="chronic_disease" type="text" value={n_health_insurance_provider} onChange={(event) => setInsurance(event.target.value)} required></input> <br />
                                <MDBBtn type='submit' className='mb-4 mprofileBtn' block>Update Diseases</MDBBtn>
                            </form>
                        </MDBCol>

                        <MDBCol className='manageProfileC'>
                            <form onSubmit={getUser} className='mprofileForm'>
                            <legend className='mprofileLegendx'>Deactivate Account</legend>
                            <label className='mprofileText'>Enter your password</label> <br />
                            <input className='mprofileInput' id="passwrd" type="text" value={n_passwrd} onChange={(event) => setDelete(event.target.value)} required></input> <br />
                            <MDBBtn type='submit' className='mb-4 mprofileBtn' block>Deactivate Account</MDBBtn>
                        </form>
                        </MDBCol>
                    </MDBRow>
                </div> */}

                    </MDBContainer>

                </MDBContainer>

            )}</>

    )
}

export default ProfileUpdate

