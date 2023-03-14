import { MDBContainer, MDBRow, MDBCol, MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';
import React from 'react';
import './vaccines.css';
import VaccineImg from './../../../Assets/syringe.png';

function vaccines() {
  return (
    <MDBContainer className='vaccineCont1'>
      <MDBContainer className='vaccineCont2'>
        <MDBRow className='vaccineRow1'>
          <span className='vaccineT1'>
            <img src={VaccineImg} alt='...' className='vaccineIcon' />
            Vaccination History
          </span>
        </MDBRow>
      </MDBContainer>

      <MDBContainer className='vaccineCont3'>
        <MDBCol>
          <MDBTable striped>
            <MDBTableHead dark>
              <tr>
                <th scope='col'>Vaccination Name</th>
                <th scope='col'>Date</th>
                <th scope='col'>Dose</th>
                <th scope='col'>Batch Number</th>
                <th scope='col'>Location</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              <tr>
                <th scope='row'>BCG</th>
                <td>03 - -1 - 2023</td>
                <td>1</td>
                <td>BC335345</td>
                <td>General Hospital, Ragama</td>
              </tr>
              <tr>
                <th scope='row'>BCG</th>
                <td>03 - -1 - 2023</td>
                <td>1</td>
                <td>BC335345</td>
                <td>General Hospital, Ragama</td>
              </tr>
              <tr>
                <th scope='row'>BCG</th>
                <td>03 - -1 - 2023</td>
                <td>1</td>
                <td>BC335345</td>
                <td>General Hospital, Ragama</td>
              </tr>
              <tr>
                <th scope='row'>BCG</th>
                <td>03 - -1 - 2023</td>
                <td>1</td>
                <td>BC335345</td>
                <td>General Hospital, Ragama</td>
              </tr>
              <tr>
                <th scope='row'>BCG</th>
                <td>03 - -1 - 2023</td>
                <td>1</td>
                <td>BC335345</td>
                <td>General Hospital, Ragama</td>
              </tr>
            </MDBTableBody>
          </MDBTable>
        </MDBCol>
      </MDBContainer>
    </MDBContainer>
  )
}

export default vaccines