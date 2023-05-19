import React, { useState } from 'react';
import logo from './../../../Assets/Logo-Light.png';
import './navbar.css';
import {
    MDBNavbar,
    MDBContainer,
    MDBNavbarBrand,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBCollapse
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [showNavText, setShowNavText] = useState(false);

    const logout = () => {
        localStorage.clear();
        window.location.href = '/';
    }

    return (
        <MDBNavbar expand='lg' className='navbarCol'>
            <MDBContainer>
                <MDBNavbarBrand className='navTextCol' tag={Link} to='/' ><img src={logo} className='logoImg' /></MDBNavbarBrand>
                <MDBNavbarToggler
                    type='button'
                    data-target='#navbarText'
                    aria-controls='navbarText'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowNavText(!showNavText)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>
                <MDBCollapse navbar show={showNavText}>
                    <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                        {localStorage.getItem('role') === 'user' || localStorage.getItem('role') === 'doctor' || localStorage.getItem('role') === 'emt' || localStorage.getItem('role') === 'admin' ? null : (
                            <MDBNavbarItem className='navItem'>
                                <MDBNavbarLink className='navTextCol' active aria-current='page' tag={Link} to='/login'>
                                    Login
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                        )}
                        {localStorage.getItem('role') === 'user' || localStorage.getItem('role') === 'doctor' || localStorage.getItem('role') === 'emt' || localStorage.getItem('role') === 'admin' ? null : (

                            <MDBNavbarItem className='navItem'>
                                <MDBNavbarLink className='navTextCol' active aria-current='page' tag={Link} to='/register'>
                                    Register
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                        )}
                        {localStorage.getItem('role') !== 'user' ? <></> : (
                            <MDBNavbarItem className='navItem'>
                                <MDBNavbarLink className='navTextCol' active aria-current='page' tag={Link} to='/home'>
                                    Home
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                        )}
                        {localStorage.getItem('role') !== 'user' ? <></> : (
                            <MDBNavbarItem>
                                <MDBNavbarLink className='navTextCol' tag={Link} to='/calendar'>
                                    Calendar
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                        )}
                        {localStorage.getItem('role') !== 'user' ? <></> : (
                            <MDBNavbarItem>
                                <MDBNavbarLink className='navTextCol' tag={Link} to='/records'>
                                    Medical Records
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                        )}
                        {localStorage.getItem('role') !== 'user' ? <></> : (
                            <MDBNavbarItem>
                                <MDBNavbarLink className='navTextCol' tag={Link} to='/doctors'>
                                    Find Doctors
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                        )}
                        {localStorage.getItem('role') !== 'user' ? <></> : (
                            <MDBNavbarItem>
                                <MDBNavbarLink className='navTextCol' tag={Link} to='/vaccinations'>
                                    Vaccinations
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                        )}
                        {localStorage.getItem('role') !== 'user' ? <></> : (
                            <MDBNavbarItem>
                                <MDBNavbarLink className='navTextCol' tag={Link} to='/profile'>
                                    Profile
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                        )}
                        {localStorage.getItem('role') !== 'admin' ? <></> : (
                            <MDBNavbarItem>
                                <MDBNavbarLink className='navTextCol' tag={Link} to='/admin-dashboard'>
                                    Admin Dashboard
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                        )}
                        {localStorage.getItem('role') === 'admin' || localStorage.getItem('role') === 'emt' || localStorage.getItem('role') === 'doctor' ? (
                            <MDBNavbarItem>
                                <MDBNavbarLink className='navTextCol' tag={Link} to='/emergency'>
                                    Find User
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                        ) : null}
                        {localStorage.getItem('role') !== 'admin' ? <></> : (
                            <MDBNavbarItem>
                                <MDBNavbarLink className='navTextCol' tag={Link} to='/admin-profile'>
                                    Profile
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                        )}
                        {localStorage.getItem('role') !== 'emt' ? <></> : (
                            <MDBNavbarItem>
                                <MDBNavbarLink className='navTextCol' tag={Link} to='/emt-profile'>
                                    Profile
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                        )}
                        {localStorage.getItem('role') !== 'doctor' ? <></> : (
                            <MDBNavbarItem>
                                <MDBNavbarLink className='navTextCol' tag={Link} to='/doctor-profile'>
                                    Profile
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                        )}
                        {localStorage.getItem('role') !== 'doctor' ? <></> : (
                            <MDBNavbarItem>
                                <MDBNavbarLink className='navTextCol' tag={Link} to='/predict'>
                                    Disease Prediction
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                        )}
                        <MDBNavbarItem>
                            <MDBNavbarLink className='navTextCol' tag={Link} to='https://www.blog.myehealthdiary.me/' target='_blanc'>
                                Blog
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink className='navTextCol' tag={Link} to='https://forum.myehealthdiary.me/' target='_blanc'>
                                Forum
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        {localStorage.getItem('role') === 'user' || localStorage.getItem('role') === 'admin' || localStorage.getItem('role') === 'emt' || localStorage.getItem('role') === 'doctor' ? (
                            <MDBNavbarItem>
                                <MDBNavbarLink className='navTextCol' tag={Link} onClick={logout}>
                                    Log Out
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                        ) : null}
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}