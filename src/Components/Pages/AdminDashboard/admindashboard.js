import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import React, { useEffect, useState, useRef } from 'react';
import './admindashboard.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import covimg from './../../../Assets/AdminDashboard.jpg';

function Admindashboard() {

    const scrollToDoctors = () => {
        const doctorsRow = document.getElementById('doctors');
        doctorsRow.scrollIntoView({ behavior: 'smooth' });
    }

    const scrollToHospitals = () => {
        const doctorsRow = document.getElementById('hospitals');
        doctorsRow.scrollIntoView({ behavior: 'smooth' });
    }

    const scrollToEmts = () => {
        const doctorsRow = document.getElementById('emts');
        doctorsRow.scrollIntoView({ behavior: 'smooth' });
    }

    const scrollToUsers = () => {
        const doctorsRow = document.getElementById('users');
        doctorsRow.scrollIntoView({ behavior: 'smooth' });
    }


    const [doctors, setDoctors] = useState([]);
    const [hospitals, setHospitals] = useState([]);
    const [emts, setEmts] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getDoctor();
    }, [])

    const getDoctor = async () => {

        axios.get('https://my-ehealth-diary-backend.herokuapp.com/api/get-doctors')
            .then(response => {
                setDoctors(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    useEffect(() => {
        getHospital();
    }, [])

    const getHospital = async () => {

        axios.get('https://my-ehealth-diary-backend.herokuapp.com/api/get-hospitals')
            .then(response => {
                setHospitals(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    useEffect(() => {
        getEmts();
    }, [])

    const getEmts = async () => {

        axios.get('https://my-ehealth-diary-backend.herokuapp.com/api/get-emts')
            .then(response => {
                setEmts(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    useEffect(() => {
        getUser();
    }, [])

    const getUser = async () => {

        axios.get('https://my-ehealth-diary-backend.herokuapp.com/api/get-users')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (

        <>
            {localStorage.getItem('role') !== 'admin' ? window.location.href = '/' : (

                <MDBContainer>

                    <MDBContainer className='aprofileCont2'>
                        <div className='admin-prof-head'>
                            <img src={covimg} alt='Image' className='admin-dash-img' />
                            <MDBRow className='aprofileT1'><center>Admin Dashboard</center></MDBRow>
                        </div>

                        <MDBRow className='aprofileR1'>
                            <MDBCol col-md-3 col-sm-6 className='aprof-btn-col'>
                                <MDBBtn className='aprofBtn1' onClick={scrollToDoctors}>Doctors</MDBBtn>
                            </MDBCol>
                            <MDBCol col-md-3 col-sm-6 className='aprof-btn-col'>
                                <MDBBtn className='aprofBtn1' onClick={scrollToHospitals}>Hospitals</MDBBtn>
                            </MDBCol>
                            <MDBCol col-md-3 col-sm-6 className='aprof-btn-col'>
                                <MDBBtn className='aprofBtn1' onClick={scrollToEmts}>EMTs</MDBBtn>
                            </MDBCol>
                            <MDBCol col-md-3 col-sm-6 className='aprof-btn-col'>
                                <MDBBtn className='aprofBtn1' onClick={scrollToUsers}>Users</MDBBtn>
                            </MDBCol>
                        </MDBRow>

                        <MDBRow className='aprofileT2' id='doctors'>
                            <MDBCol className='dash-section-col1'>Doctor Records</MDBCol>
                            <MDBCol className='dash-section-col2'>
                                <Link to="/add-doctor">
                                    <MDBBtn className='aprofBtn2'>Add New Doctor</MDBBtn>
                                </Link>
                            </MDBCol>
                        </MDBRow>

                        <MDBRow className='aprofileTbl1'>
                            <MDBTable striped>
                                <MDBTableHead dark>
                                    <tr>
                                        <th scope='col'>Docotr ID</th>
                                        <th scope='col'>Name</th>
                                        <th scope='col'>Hospital</th>
                                        <th scope='col'>Specialization</th>
                                        <th scope='col'>Qualifications</th>
                                        <th scope='col'>Phone Number</th>
                                        <th scope='col'>Email</th>
                                        <th scope='col'>Status</th>
                                    </tr>
                                </MDBTableHead>
                                <MDBTableBody>
                                    {doctors.map((doctor) => (
                                        <tr key={doctor.doctor_id}>
                                            <td>{doctor.doctor_id}</td>
                                            <td>{doctor.doctor_name}</td>
                                            <td>{doctor.hospital}</td>
                                            <td>{doctor.specialization}</td>
                                            <td>{doctor.qualifications}</td>
                                            <td>{doctor.phone_number}</td>
                                            <td>{doctor.email}</td>
                                            <td>{doctor.status}</td>
                                        </tr>
                                    ))}
                                </MDBTableBody>
                            </MDBTable>
                        </MDBRow>

                        <MDBRow className='aprofileT2' id='hospitals'>
                            <MDBCol className='dash-section-col1'>Hospital Records</MDBCol>
                            <MDBCol className='dash-section-col2'>
                                <Link to="/add-hospital">
                                    <MDBBtn className='aprofBtn2'>Add New Hospital</MDBBtn>
                                </Link>
                            </MDBCol>
                        </MDBRow>

                        <MDBRow className='aprofileTbl1'>
                            <MDBTable striped>
                                <MDBTableHead dark>
                                    <tr>
                                        <th scope='col'>Hospital Registration No</th>
                                        <th scope='col'>Name</th>
                                        <th scope='col'>Address</th>
                                        <th scope='col'>Phone Number</th>
                                        <th scope='col'>Status</th>
                                        <th scope='col'>Manage</th>
                                    </tr>
                                </MDBTableHead>
                                <MDBTableBody>
                                    {hospitals.map((hospital) => (
                                        <tr key={hospital.hospital_regno}>
                                            <td>{hospital.hospital_regno}</td>
                                            <td>{hospital.hospital_name}</td>
                                            <td>{hospital.address}</td>
                                            <td>{hospital.phone_number}</td>
                                            <td>{hospital.status}</td>
                                            <td><Link to="/mood-chart">
                                                <MDBBtn className='aprofBtn3'>Manage Hospital</MDBBtn>
                                            </Link></td>
                                        </tr>
                                    ))}
                                </MDBTableBody>
                            </MDBTable>
                        </MDBRow>

                        <MDBRow className='aprofileT2' id='emts'>
                            <MDBCol className='dash-section-col1'>Emergency Medical Team Member Records</MDBCol>
                            <MDBCol className='dash-section-col2'>
                                <Link to="/add-emt">
                                    <MDBBtn className='aprofBtn2'>Add New EMT Member</MDBBtn>
                                </Link>
                            </MDBCol>
                        </MDBRow>

                        <MDBRow className='aprofileTbl1'>
                            <MDBTable striped>
                                <MDBTableHead dark>
                                    <tr>
                                        <th scope='col'>EMT ID</th>
                                        <th scope='col'>Name</th>
                                        <th scope='col'>Hospital</th>
                                        <th scope='col'>Designation</th>
                                        <th scope='col'>Phone Number</th>
                                        <th scope='col'>Email</th>
                                        <th scope='col'>Status</th>
                                    </tr>
                                </MDBTableHead>
                                <MDBTableBody>
                                    {emts.map((emt) => (
                                        <tr key={emt.emt_id}>
                                            <td>{emt.emt_id}</td>
                                            <td>{emt.emt_name}</td>
                                            <td>{emt.hospital}</td>
                                            <td>{emt.designation}</td>
                                            <td>{emt.phone_number}</td>
                                            <td>{emt.email}</td>
                                            <td>{emt.status}</td>
                                        </tr>
                                    ))}
                                </MDBTableBody>
                            </MDBTable>
                        </MDBRow>

                        <MDBRow className='aprofileT2' id='users'>User Records</MDBRow>

                        <MDBRow className='aprofileTbl1'>
                            <MDBTable striped>
                                <MDBTableHead dark>
                                    <tr>
                                        <th scope='col'>NIC</th>
                                        <th scope='col'>First Name</th>
                                        <th scope='col'>Last Name</th>
                                        <th scope='col'>Birthday</th>
                                        <th scope='col'>Address</th>
                                        <th scope='col'>Phone Number</th>
                                        <th scope='col'>Email</th>
                                        <th scope='col'>Status</th>
                                        <th scope='col'>View Profile</th>
                                    </tr>
                                </MDBTableHead>
                                <MDBTableBody>
                                    {users.map((user) => (
                                        <tr key={user.nic}>
                                            <td>{user.nic}</td>
                                            <td>{user.first_name}</td>
                                            <td>{user.last_name}</td>
                                            <td>{user.birth_day}</td>
                                            <td>{user.address}</td>
                                            <td>{user.phone_number}</td>
                                            <td>{user.email}</td>
                                            <td>{user.status}</td>
                                            <td><Link to="/user-emergency">
                                                <MDBBtn className='aprofBtn3'>View Profile</MDBBtn>
                                            </Link></td>
                                        </tr>
                                    ))}
                                </MDBTableBody>
                            </MDBTable>
                        </MDBRow>


                    </MDBContainer>

                </MDBContainer>
            )}</>
    )
}

export default Admindashboard