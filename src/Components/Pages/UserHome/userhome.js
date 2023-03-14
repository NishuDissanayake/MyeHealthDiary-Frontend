import { MDBContainer, MDBRow, MDBCol, MDBTable, MDBTableHead, MDBTableBody, MDBBtn } from 'mdb-react-ui-kit';
import React from 'react';
import './userhome.css';
import uHomeImg from './../../../Assets/User Home Img.jpg';

function userhome() {
  return (
    <MDBContainer breakpoint='sm md lg xl xxl main-cont'>
      <MDBContainer className='uhomeCont1'>
        <MDBRow className='uHomeT1'>Hello, User</MDBRow>
        <MDBRow className='uHomeT2'>We hope you are having a wonderful day today!</MDBRow>
      </MDBContainer>

      <MDBContainer className='uhomeCont2'>
        <MDBRow className='uhomeCont2R'>
          <MDBCol>
            <MDBRow className='uHomeT3'>Don't forget to take your meds on time!</MDBRow>
            <MDBRow>
              <MDBCol lg='4' md='8' className='uHomeT4'>Condition:</MDBCol>
              <MDBCol lg='8' md='16' className='uHomeT5'>Acute Leukaemia</MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol lg='4' md='8' className='uHomeT4'>Start Date:</MDBCol>
              <MDBCol lg='8' md='16' className='uHomeT5'>02 - 02 - 2023</MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol lg='4' md='8' className='uHomeT4'>Doctor:</MDBCol>
              <MDBCol lg='8' md='16' className='uHomeT5'>Dr. John Davis</MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol><center><img src={uHomeImg} alt='...' className='uHomeImgCls' /></center></MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBTable striped>
            <MDBTableHead dark>
              <tr>
                <th scope='col'>Name</th>
                <th scope='col'>Type</th>
                <th scope='col'>Color</th>
                <th scope='col'>Qty</th>
                <th scope='col'>Meals</th>
                <th scope='col'>Morning</th>
                <th scope='col'>Afternoon</th>
                <th scope='col'>Night</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              <tr>
                <th scope='row'>Ventolin</th>
                <td>Pill</td>
                <td>Violet</td>
                <td>1</td>
                <td>After Meals</td>
                <td>No</td>
                <td>No</td>
                <td>Yes</td>
              </tr>
              <tr>
                <th scope='row'>Ventolin</th>
                <td>Pill</td>
                <td>Violet</td>
                <td>1</td>
                <td>After Meals</td>
                <td>No</td>
                <td>No</td>
                <td>Yes</td>
              </tr>
              <tr>
                <th scope='row'>Ventolin</th>
                <td>Pill</td>
                <td>Violet</td>
                <td>1</td>
                <td>After Meals</td>
                <td>No</td>
                <td>No</td>
                <td>Yes</td>
              </tr>
            </MDBTableBody>
          </MDBTable>
        </MDBRow>
        <MDBRow className='uHomeBtnR'>
          <MDBBtn className='uHomeBtn'>Set As Recovered</MDBBtn>
        </MDBRow>
      </MDBContainer>
    </MDBContainer>
  )
}

export default userhome