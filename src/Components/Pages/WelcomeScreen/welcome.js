import { MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import welcomeImg from './../../../Assets/Home Img1.png';
import welcomeImg2 from './../../../Assets/Home Img2.jpg';
import React from 'react';
import './welcome.css';

function welcome() {
  return (
    <MDBContainer className='welcomeMainCont'>
      <div className='welcomeHeaderImg'><img src={welcomeImg} alt='....' className='welcomeImg' /></div>
      <div className='welcomeH2'>
        <MDBRow className='welcomeT1'>
          Lorem ipsum dolor sit 320000
          consectetur adipiscing elit
        </MDBRow>
        <MDBRow className='welcomeT2'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </MDBRow>
      </div>

      <MDBContainer fluid className='welcomeCont2'>
        <MDBRow className='welcomeMRow'>
          <MDBCol>
            <div className='welcomeNo1'>1</div>
          </MDBCol>
          <MDBCol>
            <div className='welcomeNo1'>2</div>
          </MDBCol>
          <MDBCol>
            <div className='welcomeNo1'>3</div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <MDBRow className='welcomeMRow2'>
          <MDBCol>
            <MDBRow className='welcomeT3'>Heading</MDBRow>
            <MDBRow  className='welcomeT4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </MDBRow>
          </MDBCol>
          <MDBCol>
            <img src={welcomeImg2} alt='....' className='homeImg2Style'/> 
          </MDBCol>
        </MDBRow>

    </MDBContainer>
  )
}

export default welcome