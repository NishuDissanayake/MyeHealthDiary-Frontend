import React, { useState } from 'react';
import './signup.css';
import SignupImage from './../../../Assets/Signup Image.png';
import {
    MDBInput,
    MDBCol,
    MDBRow,
    MDBCheckbox,
    MDBBtn,
    MDBIcon,
    MDBDropdown,
    MDBDropdownMenu,
    MDBDropdownToggle,
    MDBDropdownItem
} from 'mdb-react-ui-kit';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

export default function Signup() {

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [address, setAddress] = useState('');
    const [contact, setContact] = useState('');
    const [bday, setBday] = useState('');
    const [gender, setGender] = useState('');
    const [nic, setNic] = useState('');
    const [email, setEmail] = useState('');
    const [emcontactname, setEmContactName] = useState('');
    const [emcontact, setEmContact] = useState('');
    const [bgroup, setBGroup] = useState('');
    const [chronicdisease, setChronicDisease] = useState('');
    const [insurance, setInsurance] = useState('');
    const [pass, setPass] = useState('');
    const [cpass, setCPass] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const res = await axios.post(`https://my-ehealth-diary-backend.herokuapp.com/api/add-user?first_name=` + fname + `&last_name=` + lname + `&address=` + address + `&phone_number=` + contact + `&birth_day=` + bday + `&gender=` + gender + `&nic=` + nic + `&email=` + email + `&emergency_contact_person=` + emcontactname + `&emergency_contact=` + emcontact + `&blood_group=` + bgroup + `&chronic_disease=` + chronicdisease + `&health_insurance_provider=` + insurance + `&pass=` + pass);
            console.log(res.data);

            setFname("");
            setLname("");
            setAddress("");
            setContact("");
            setBday("");
            setGender("");
            setNic("");
            setEmail("");
            setEmContactName("");
            setEmContact("");
            setBGroup("");
            setChronicDisease("");
            setInsurance("");
            setPass("");
            Swal.fire({
                title: 'Success!',
                text: 'User registration successfully!',
                icon: 'success',
                confirmButtonText: 'OK'
            });

            window.location.href = '/login';

        } catch (error) {
            console.log(error);
            Swal.fire({
                title: 'Error!',
                text: 'User registration failed!',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    };


    return (
        <form className='signForm' onSubmit={handleSubmit}>
            <div className='formContent center'>
                <MDBRow className='mb-4 mainColSign'>
                    <span className='signText'><img src={SignupImage} className="signImage" />Sign Up</span>
                    <MDBRow>
                        <MDBCol className='inputSign'>
                            <label className='signLText'>First Name</label>
                            <MDBInput className='fname' id='email' type='text' value={fname} onChange={(event) => setFname(event.target.value)} required />
                        </MDBCol>
                        <MDBCol className='inputSign'>
                            <label className='signLText'>Last Name</label>
                            <MDBInput className='lname' id='email' type='text' value={lname} onChange={(event) => setLname(event.target.value)} required />
                        </MDBCol>
                    </MDBRow><MDBRow>
                        <MDBCol className='inputSign'>
                            <label className='signLText'>Address</label>
                            <MDBInput className='address' id='email' type='text' value={address} onChange={(event) => setAddress(event.target.value)} required />
                        </MDBCol>
                        <MDBCol className='inputSign'>
                            <label className='signLText'>Contact Number</label>
                            <MDBInput className='contact' id='email' type='text' value={contact} onChange={(event) => setContact(event.target.value)} required />
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol className='inputSign'>
                            <label className='signLText'>Birth Day</label>
                            <MDBInput className='inputField' id='bday' type='date' value={bday} onChange={(event) => setBday(event.target.value)} required />
                        </MDBCol>
                        <MDBCol className='inputSign'>
                            <label className='signLText'>Gender</label><br />
                            <select name="cars" id="cars" className='signGenDrop' value={gender} onChange={(event) => setGender(event.target.value)} required >
                                <option value="">Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="rather not say">Rather Not Say</option>
                            </select>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol className='inputSign'>
                            <label className='signLText'>NIC</label>
                            <MDBInput className='inputField' id='nic' type='text' value={nic} onChange={(event) => setNic(event.target.value)} required />
                        </MDBCol>
                        <MDBCol className='inputSign'>
                            <label className='signLText'>Email Address</label>
                            <MDBInput className='inputField' id='email' type='text' value={email} onChange={(event) => setEmail(event.target.value)} required />
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol className='inputSign'>
                            <label className='signLText'>Emergency Contact Person Name</label>
                            <MDBInput className='inputField' id='ename' type='text' value={emcontactname} onChange={(event) => setEmContactName(event.target.value)} required />
                        </MDBCol>
                        <MDBCol className='inputSign'>
                            <label className='signLText'>Emergency Contact Number</label>
                            <MDBInput className='inputField' id='econtact' type='text' value={emcontact} onChange={(event) => setEmContact(event.target.value)} required />
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol className='inputSign'>
                            <label className='signLText'>Blood Group</label><br />
                            <select name="cars" id="cars" className='signGenDrop' value={bgroup} onChange={(event) => setBGroup(event.target.value)} required >
                                <option value="">Blood Group</option>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                            </select>
                        </MDBCol>
                        <MDBCol className='inputSign'>
                            <label className='signLText'>Long Term/ Chronic Diseases</label>
                            <MDBInput className='inputField' id='diseases' type='text' value={chronicdisease} onChange={(event) => setChronicDisease(event.target.value)} required />
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol className='inputSign'>
                            <label className='signLText'>Health Insurance Provider</label>
                            <MDBInput className='inputField' id='insurance' type='text' value={insurance} onChange={(event) => setInsurance(event.target.value)} required />
                        </MDBCol>
                        <MDBCol></MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol className='inputSign'>
                            <label className='signLText'>Password</label>
                            <MDBInput className='inputField' id='pwd' type='password' value={pass} onChange={(event) => setPass(event.target.value)} required />
                        </MDBCol>
                        <MDBCol className='inputSign'>
                            <label className='signLText'>Confirm Password</label>
                            <MDBInput className='inputField' id='cpwd' type='password' value={cpass} onChange={(event) => setCPass(event.target.value)} required />
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <div className='signBtnCen'>
                            <MDBBtn type='submit' className='mb-4 btnSign' block>Sign Up</MDBBtn>
                        </div>
                    </MDBRow>
                    <MDBRow>
                        <div className='text-center'>
                            <p>
                                Already have an account? <span className='loginBText'><Link to="/login">
                                    Login
                                </Link></span>
                            </p>
                        </div>
                    </MDBRow>
                </MDBRow>
            </div>
        </form >
    );
}