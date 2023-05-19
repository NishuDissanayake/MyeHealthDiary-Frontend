import React, { useEffect, useState } from 'react';
import './doctor.css';
import axios from 'axios';
import Swal from 'sweetalert2';
import { MDBContainer, MDBRow, MDBCol, MDBTable, MDBTableHead, MDBTableBody, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBInput } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function UpdateReport() {

    const { id } = useParams();
    const cur_date = new Date();
    const added_by = localStorage.getItem('name');

    const [treatment, setTreatment] = useState('');
    const [bandb, setBandB] = useState('');
    const [tname, setTName] = useState('');
    const [tcomments, setTComments] = useState('');
    const [temp, setTemp] = useState('');
    const [bp, setBp] = useState('');
    const [com, setCom] = useState('');
    const [rname, setRName] = useState('');
    const [rtype, setRType] = useState('');
    const [rlink, setRLink] = useState('');


    useEffect(() => {
        addTreatment();
    }, [])

    const addTreatment = async (event) => {
        event.preventDefault();

        try {
            const nic = '200055702644';

            const res = await axios.put("https://my-ehealth-diary-backend.herokuapp.com/api/add-treatment?nic=" + nic + "&_id=" + id + "&date=" + cur_date + "&treatment=" + treatment + "&added_by=" + added_by);
            console.log(res.data);

            Swal.fire({
                title: 'Success!',
                text: 'Treatment added successfully!',
                icon: 'success',
                confirmButtonText: 'OK'
            });

        } catch (error) {
            console.log(error);
            Swal.fire({
                title: 'Error!',
                text: 'Treatment addition failed!',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    };

    useEffect(() => {
        addBandB();
    }, [])

    const addBandB = async (event) => {
        event.preventDefault();

        try {
            const nic = '200055702644';

            const res = await axios.put("https://my-ehealth-diary-backend.herokuapp.com/api/add-bandb?nic=" + nic + "&_id=" + id + "&date=" + cur_date + "&bladder_bowel_function=" + bandb + "&added_by=" + added_by);
            console.log(res.data);

            Swal.fire({
                title: 'Success!',
                text: 'Bladder and bowel function added successfully!',
                icon: 'success',
                confirmButtonText: 'OK'
            });

        } catch (error) {
            console.log(error);
            Swal.fire({
                title: 'Error!',
                text: 'Bladder and bowel function addition failed!',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    };

    useEffect(() => {
        addLabTest();
    }, [])

    const addLabTest = async (event) => {
        event.preventDefault();

        try {
            const nic = '200055702644';

            const res = await axios.put("https://my-ehealth-diary-backend.herokuapp.com/api/add-labtest?nic=" + nic + "&_id=" + id + "&date=" + cur_date + "&test_name=" + tname + "&test_comments=" + tcomments + "&added_by=" + added_by);
            console.log(res.data);

            Swal.fire({
                title: 'Success!',
                text: 'Lab test added successfully!',
                icon: 'success',
                confirmButtonText: 'OK'
            });

        } catch (error) {
            console.log(error);
            Swal.fire({
                title: 'Error!',
                text: 'Lab test addition failed!',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    };

    useEffect(() => {
        addTemperature();
    }, [])

    const addTemperature = async (event) => {
        event.preventDefault();

        try {
            const nic = '200055702644';

            const res = await axios.put("https://my-ehealth-diary-backend.herokuapp.com/api/add-temperature?nic=" + nic + "&_id=" + id + "&date=" + cur_date + "&temperature=" + temp + "&added_by=" + added_by);
            console.log(res.data);

            Swal.fire({
                title: 'Success!',
                text: 'Temperature added successfully!',
                icon: 'success',
                confirmButtonText: 'OK'
            });

        } catch (error) {
            console.log(error);
            Swal.fire({
                title: 'Error!',
                text: 'Temperature addition failed!',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    };

    useEffect(() => {
        addBP();
    }, [])

    const addBP = async (event) => {
        event.preventDefault();

        try {
            const nic = '200055702644';

            const res = await axios.put("https://my-ehealth-diary-backend.herokuapp.com/api/add-blood-pressure?nic=" + nic + "&_id=" + id + "&date=" + cur_date + "&blood_pressure=" + bp + "&added_by=" + added_by);
            console.log(res.data);

            Swal.fire({
                title: 'Success!',
                text: 'Blood pressure added successfully!',
                icon: 'success',
                confirmButtonText: 'OK'
            });

        } catch (error) {
            console.log(error);
            Swal.fire({
                title: 'Error!',
                text: 'Blood pressure addition failed!',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    };

    useEffect(() => {
        addComment();
    }, [])

    const addComment = async (event) => {
        event.preventDefault();

        try {
            const nic = '200055702644';

            const res = await axios.put("https://my-ehealth-diary-backend.herokuapp.com/api/add-comment?nic=" + nic + "&_id=" + id + "&date=" + cur_date + "&comment=" + com + "&added_by=" + added_by);
            console.log(res.data);

            Swal.fire({
                title: 'Success!',
                text: 'Comment added successfully!',
                icon: 'success',
                confirmButtonText: 'OK'
            });

        } catch (error) {
            console.log(error);
            Swal.fire({
                title: 'Error!',
                text: 'Comment addition failed!',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    };

    useEffect(() => {
        addLabReport();
    }, [])

    const addLabReport = async (event) => {
        event.preventDefault();

        try {
            const nic = '200055702644';

            const res = await axios.put("https://my-ehealth-diary-backend.herokuapp.com/api/add-report?nic=" + nic + "&_id=" + id + "&date=" + cur_date + "&report_name=" + rname + "&report_type=" + rtype + "&report_link=" + rlink + "&added_by=" + added_by);
            console.log(res.data);

            Swal.fire({
                title: 'Success!',
                text: 'Lab report added successfully!',
                icon: 'success',
                confirmButtonText: 'OK'
            });

        } catch (error) {
            console.log(error);
            Swal.fire({
                title: 'Error!',
                text: 'Lab report addition failed!',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    };

    return (

        <>
            {localStorage.getItem('role') !== 'doctor' ? window.location.href = '/' : (

                <MDBContainer className='manageProfile1'>

                    <MDBContainer className='manageProfile2'>
                        <MDBRow className='uprofileT1'>Make Report Updates!</MDBRow>

                        <MDBRow className='manageProfileR2'>
                            <MDBCol className='manageProfileC'>
                                <form onSubmit={addTreatment} className='mprofileForm'>
                                    <legend className='mprofileLegend'>Add Treatment</legend>
                                    <label className='mprofileText' htmlFor="address">New Treatment</label> <br />
                                    <input className='mprofileInput' id="address" type="text" value={treatment} onChange={(event) => setTreatment(event.target.value)} required></input> <br />
                                    <MDBBtn type='submit' className='mb-4 mprofileBtn' block>Add Treatment</MDBBtn>
                                </form>
                            </MDBCol>

                            <MDBCol className='manageProfileC'>
                                <form onSubmit={addBandB} className='mprofileForm'>
                                    <legend className='mprofileLegend'>Add Bladder and Bowl Function</legend>
                                    <label className='mprofileText' htmlFor="address">New Bladder and Bowel Function</label> <br />
                                    <input className='mprofileInput' id="address" type="text" value={bandb} onChange={(event) => setBandB(event.target.value)} required></input> <br />
                                    <MDBBtn type='submit' className='mb-4 mprofileBtn' block>Add Bladder and Bowel Function</MDBBtn>
                                </form>
                            </MDBCol>
                        </MDBRow>

                        <MDBRow className='manageProfileR2'>
                            <MDBCol className='manageProfileC'>
                                <form onSubmit={addLabTest} className='mprofileForm'>
                                    <legend className='mprofileLegend'>Add Lab Test</legend>
                                    <label className='mprofileText' htmlFor="address">Lab Test</label> <br />
                                    <input className='mprofileInput' id="address" type="text" value={tname} onChange={(event) => setTName(event.target.value)} required></input> <br />
                                    <label className='mprofileText' htmlFor="address">Test Comments</label> <br />
                                    <input className='mprofileInput' id="address" type="text" value={tcomments} onChange={(event) => setTComments(event.target.value)} required></input> <br />
                                    <MDBBtn type='submit' className='mb-4 mprofileBtn' block>Add Lab Test</MDBBtn>
                                </form>
                            </MDBCol>

                            <MDBCol className='manageProfileC'>
                                <form onSubmit={addTemperature} className='mprofileForm'>
                                    <legend className='mprofileLegend'>Add Temperature</legend>
                                    <label className='mprofileText' htmlFor="address">New Temperature</label> <br />
                                    <input className='mprofileInput' id="address" type="text" value={temp} onChange={(event) => setTemp(event.target.value)} required></input> <br />
                                    <MDBBtn type='submit' className='mb-4 mprofileBtn' block>Add Temperature</MDBBtn>
                                </form>
                            </MDBCol>
                        </MDBRow>

                        <MDBRow className='manageProfileR2'>
                            <MDBCol className='manageProfileC'>
                                <form onSubmit={addBP} className='mprofileForm'>
                                    <legend className='mprofileLegend'>Add Blood Pressure</legend>
                                    <label className='mprofileText' htmlFor="address">New Blood Pressure</label> <br />
                                    <input className='mprofileInput' id="address" type="text" value={bp} onChange={(event) => setBp(event.target.value)} required></input> <br />
                                    <MDBBtn type='submit' className='mb-4 mprofileBtn' block>Add Blood Pressure</MDBBtn>
                                </form>
                            </MDBCol>

                            <MDBCol className='manageProfileC'>
                                <form onSubmit={addComment} className='mprofileForm'>
                                    <legend className='mprofileLegend'>Add Comment</legend>
                                    <label className='mprofileText' htmlFor="address">New Comment</label> <br />
                                    <input className='mprofileInput' id="address" type="text" value={com} onChange={(event) => setCom(event.target.value)} required></input> <br />
                                    <MDBBtn type='submit' className='mb-4 mprofileBtn' block>Add Comment</MDBBtn>
                                </form>
                            </MDBCol>
                        </MDBRow>

                        <MDBRow className='manageProfileR2'>
                            <MDBCol className='manageProfileC'>
                                <form onSubmit={addLabReport} className='mprofileForm'>
                                    <legend className='mprofileLegend'>Add Lab Report</legend>
                                    <label className='mprofileText' htmlFor="address">Report Name</label> <br />
                                    <input className='mprofileInput' id="address" type="text" value={rname} onChange={(event) => setRName(event.target.value)} required></input> <br />
                                    <label className='mprofileText' htmlFor="address">Report Type</label> <br />
                                    <input className='mprofileInput' id="address" type="text" value={rtype} onChange={(event) => setRType(event.target.value)} required></input> <br />
                                    <label className='mprofileText' htmlFor="address">Report Link</label> <br />
                                    <input className='mprofileInput' id="address" type="text" value={rlink} onChange={(event) => setRLink(event.target.value)} required></input> <br />
                                    <MDBBtn type='submit' className='mb-4 mprofileBtn' block>Add Lab Report</MDBBtn>
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

export default UpdateReport