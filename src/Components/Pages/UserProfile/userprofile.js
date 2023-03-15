import React from 'react';
import './userprofile.css';
import { MDBContainer, MDBRow, MDBCol, MDBTable, MDBTableHead, MDBTableBody, MDBBtn } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import AllImg from './../../../Assets/Allergy Img.jpg';

function userprofile() {
  return (
    <MDBContainer>

      <MDBContainer className='uprofileCont2'>
        <MDBRow className='uprofileT1'>Welcome Back, User!</MDBRow>

        <MDBRow className='uprofileTbl1'>
          <MDBTable striped>
            <MDBTableHead dark>
              <tr>
                <th scope='col' colSpan='3'>Emergency Medical Information</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              <tr>
                <th scope='row'>Name</th>
                <td colSpan='2'>John Doe</td>
              </tr>
              <tr>
                <th scope='row'>Age</th>
                <td colSpan='2'>29 years 3 months 1 day</td>
              </tr>
              <tr>
                <th scope='row'>Gender</th>
                <td colSpan='2'>Male</td>
              </tr>
              <tr>
                <th scope='row'>Emergency Contact Person</th>
                <td>Maxim Baker</td>
                <td>
                  <Link to="/hospitalization-record">
                    <MDBBtn className='profBtn'>Update</MDBBtn>
                  </Link></td>
              </tr>
              <tr>
                <th scope='row'>Emergency Contact Number</th>
                <td>0787878786</td>
                <td>
                  <Link to="/hospitalization-record">
                    <MDBBtn className='profBtn'>Update</MDBBtn>
                  </Link></td>
              </tr>
              <tr>
                <th scope='row'>Blood Group</th>
                <td>A+</td>
                <td>
                  <Link to="/hospitalization-record">
                    <MDBBtn className='profBtn'>Update</MDBBtn>
                  </Link></td>
              </tr>
              <tr>
                <th scope='row'>Chronic/ Long Term Diseases</th>
                <td>Acute Leukaemia</td>
                <td>
                  <Link to="/hospitalization-record">
                    <MDBBtn className='profBtn'>Update</MDBBtn>
                  </Link></td>
              </tr>
              <tr>
                <th scope='row'>Health Insurance Provider</th>
                <td>Life Care Health Insurance</td>
                <td>
                  <Link to="/hospitalization-record">
                    <MDBBtn className='profBtn'>Update</MDBBtn>
                  </Link></td>
              </tr>
            </MDBTableBody>
          </MDBTable>
        </MDBRow>
      </MDBContainer>

      <MDBContainer className='uprofileCont2'>

        <MDBRow className='uprofileR3'>
          <MDBCol className='uprofileTbl2'>
            <MDBTable striped>
              <MDBTableHead dark>
                <tr>
                  <th scope='col'>Allergies</th>
                  <th className='profAllergyBtns'>
                    <Link to="/hospitalization-record">
                      <MDBBtn className='profBtnL'>Add New</MDBBtn>
                    </Link>
                    <Link to="/hospitalization-record">
                      <MDBBtn className='profBtnL'>Refresh</MDBBtn>
                    </Link></th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                <tr>
                  <td colSpan='2'>Peanuts</td>
                </tr>
                <tr>
                  <td colSpan='2'>Peanuts</td>
                </tr>
                <tr>
                  <td colSpan='2'>Peanuts</td>
                </tr>
              </MDBTableBody>
            </MDBTable>
          </MDBCol>
          <MDBCol className='uprofileImg'>
            <img src={AllImg} alt='....' className='allImgStyle' />
          </MDBCol>
        </MDBRow>

        <MDBRow className='uprofileR4'>
          <MDBCol className='uprofileB1'>
            <Link to="/vaccinations">
              <MDBBtn className='profBtn1'>Visit Vaccinations</MDBBtn>
            </Link>
          </MDBCol>
          <MDBCol className='uprofileB2'>
            <Link to="/mood-chart">
              <MDBBtn className='profBtn2'>Visit Mood Chart</MDBBtn>
            </Link>
          </MDBCol>
        </MDBRow>

      </MDBContainer>

    </MDBContainer>
  )
}

export default userprofile