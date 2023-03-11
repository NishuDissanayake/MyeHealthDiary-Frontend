import React from 'react';
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

export default function signup() {
    return (
        <form className='signForm'>
            <div className='formContent center'>
                <MDBRow className='mb-4 mainColSign'>
                    <span className='signText'><img src={SignupImage} className="signImage" />Sign Up</span>
                    <MDBRow>
                        <MDBCol className='inputSign'>
                            <label className='signLText'>First Name</label>
                            <MDBInput className='fname' id='email' type='text' />
                        </MDBCol>
                        <MDBCol className='inputSign'>
                            <label className='signLText'>Last Name</label>
                            <MDBInput className='lname' id='email' type='text' />
                        </MDBCol>
                    </MDBRow><MDBRow>
                        <MDBCol className='inputSign'>
                            <label className='signLText'>Address</label>
                            <MDBInput className='address' id='email' type='text' />
                        </MDBCol>
                        <MDBCol className='inputSign'>
                            <label className='signLText'>Contact Number</label>
                            <MDBInput className='contact' id='email' type='text' />
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol className='inputSign'>
                            <label className='signLText'>Birth Day</label>
                            <MDBInput className='inputField' id='bday' type='date' />
                        </MDBCol>
                        <MDBCol className='inputSign'>
                            <label className='signLText'>Gender</label>
                            <select name="cars" id="cars">
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol className='inputSign'>
                            <label className='signLText'>NIC</label>
                            <MDBInput className='inputField' id='nic' type='text' />
                        </MDBCol>
                        <MDBCol className='inputSign'>
                            <label className='signLText'>Email Address</label>
                            <MDBInput className='inputField' id='email' type='text' />
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol className='inputSign'>
                            <label className='signLText'>Emergency COntact Person Name</label>
                            <MDBInput className='inputField' id='ename' type='text' />
                        </MDBCol>
                        <MDBCol className='inputSign'>
                            <label className='signLText'>Emergency Contact Number</label>
                            <MDBInput className='inputField' id='econtact' type='text' />
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol className='inputSign'>
                            <label className='signLText'>Blood Group</label>
                            <MDBInput className='inputField' id='email' type='text' />
                        </MDBCol>
                        <MDBCol className='inputSign'>
                            <label className='signLText'>Long Term/ Chronic Diseases</label>
                            <MDBInput className='inputField' id='diseases' type='text' />
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol className='inputSign'>
                            <label className='signLText'>Allergies</label>
                            <MDBInput className='inputField' id='allergy' type='text' />
                        </MDBCol>
                        <MDBCol className='inputSign'>
                            <label className='signLText'>Health Insurance Provider</label>
                            <MDBInput className='inputField' id='insurance' type='text' />
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol className='inputSign'>
                            <label className='signLText'>Password</label>
                            <MDBInput className='inputField' id='pwd' type='password' />
                        </MDBCol>
                        <MDBCol className='inputSign'>
                            <label className='signLText'>Confirm Password</label>
                            <MDBInput className='inputField' id='cpwd' type='password' />
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBBtn type='submit' className='mb-4 btnSign' block>Sign Up</MDBBtn>
                    </MDBRow>
                    <MDBRow>
                        <div className='text-center'>
                            <p>
                                Already have an account? <span className='loginBText'><a href='#!'>Login</a></span>
                            </p>
                        </div>
                    </MDBRow>
                </MDBRow>
            </div>
        </form >
    );
}