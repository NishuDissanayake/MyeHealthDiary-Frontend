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

    useEffect(() => {
        updateAddress();
    }, [])

    const updateAddress = async (event) => {
        event.preventDefault();

        try {
            const nic = '200055702644';

            const res = await axios.put("https://my-ehealth-diary-backend.herokuapp.com/api/update-address", { nic, n_address });
            console.log(res.data);

            setAddress("");

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
            const nic = '200055702644';

            const res = await axios.put("https://my-ehealth-diary-backend.herokuapp.com/api/update-contact", { nic, n_phone });
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
        updateEmPerson();
    }, [])

    const updateEmPerson = async (event) => {
        event.preventDefault();

        try {
            const nic = '200055702644';

            const res = await axios.put("https://my-ehealth-diary-backend.herokuapp.com/api/update-em-contact-name", { nic, n_emergency_contact_person });
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
            const nic = '200055702644';

            const res = await axios.put("https://my-ehealth-diary-backend.herokuapp.com/api/update-em-contact", { nic, n_emergency_contact });
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
            const nic = '200055702644';

            const res = await axios.put("https://my-ehealth-diary-backend.herokuapp.com/api/update-blood-group", { nic, n_blood_group });
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
            const nic = '200055702644';

            const res = await axios.put("https://my-ehealth-diary-backend.herokuapp.com/api/update-chronic-diseases", { nic, n_chronic_disease });
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
            const nic = '200055702644';

            const res = await axios.put("https://my-ehealth-diary-backend.herokuapp.com/api/update-health-insurance", { nic, n_health_insurance_provider });
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

    // const [n_passwrd, setDelete] = useState([]);
    // const [dataArray, setDataArray] = useState([]);

    // useEffect(() => {
    //     getUser();
    // }, []);

    // const getUser = async () => {
    //     const nic = '200055702644';
    //     try {
    //         const response = await axios.get(`https://my-ehealth-diary-backend.herokuapp.com/api/get-users?nic=${nic}`);
    //         setDataArray(response.data);
    //     } catch (error) {
    //         console.log(error);
    //         Swal.fire({
    //             title: 'Error!',
    //             text: 'Retrieving user data failed!',
    //             icon: 'error',
    //             confirmButtonText: 'OK'
    //         });
    //     }
    // };


    // useEffect(() => {
    //     deleteAccount();
    // }, [])

    // const deleteAccount = async (event) => {
    //     event.preventDefault();

    //     const pass = dataArray[0].passwrd;
    //     console.log(pass);

    //     if (pass !== n_passwrd) {
    //         console.log("Passwords do not match!");
    //         Swal.fire({
    //             title: 'Error!',
    //             text: 'Passwords do not match!',
    //             icon: 'error',
    //             confirmButtonText: 'OK'
    //         });
    //     }
    //     else {
    //         try {
    //             const nic = '200055702644';

    //             const res = await axios.put("https://my-ehealth-diary-backend.herokuapp.com/api/delete-user", { nic });
    //             console.log(res.data);

    //             Swal.fire({
    //                 title: 'Success!',
    //                 text: 'Account deactivated successfully!',
    //                 icon: 'success',
    //                 confirmButtonText: 'OK'
    //             });

    //         } catch (error) {
    //             console.log(error);
    //             Swal.fire({
    //                 title: 'Error!',
    //                 text: 'Account deactivation failed!',
    //                 icon: 'error',
    //                 confirmButtonText: 'OK'
    //             });
    //         }
    //     }
    // };



    return (
        <MDBContainer className='manageProfile1'>

            <MDBContainer className='manageProfile2'>
                <MDBRow className='uprofileT1'>Manage Your Profile!</MDBRow>

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
                        {/* <form onSubmit={getUser} className='mprofileForm'>
                            <legend className='mprofileLegendx'>Deactivate Account</legend>
                            <label className='mprofileText'>Enter your password</label> <br />
                            <input className='mprofileInput' id="passwrd" type="text" value={n_passwrd} onChange={(event) => setDelete(event.target.value)} required></input> <br />
                            <MDBBtn type='submit' className='mb-4 mprofileBtn' block>Deactivate Account</MDBBtn>
                        </form> */}
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
    )
}

export default ProfileUpdate

