import React from 'react';
import './records.css';
import { MDBContainer, MDBRow, MDBCol, MDBTable, MDBTableHead, MDBTableBody, MDBBtn } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';


function records() {
  return (
    <MDBContainer breakpoint='sm md lg xl xxl main-cont'>
      <MDBContainer className='recordsCont1'>
        <MDBRow className='recordsT1'>Let’s go through your recent medical records...</MDBRow>
      </MDBContainer>

      <MDBContainer className='reportTable'>
        <MDBTable striped>
          <MDBTableHead dark>
            <tr>
              <th scope='col'>Date</th>
              <th scope='col'>Type</th>
              <th scope='col'>Diagnosis</th>
              <th></th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            <tr>
              <th scope='row'>03 - 02 - 2023</th>
              <td>Hospitalization</td>
              <td>Acute Leukamia</td>
              <td>
                <Link to="/hospitalization-record">
                <MDBBtn className='reportBtn'>View Full Report</MDBBtn>
                </Link></td>
            </tr>
            <tr>
              <th scope='row'>03 - 02 - 2023</th>
              <td>Clinic</td>
              <td>Acute Leukamia</td>
              <td><MDBBtn className='reportBtn'>View Full Report</MDBBtn></td>
            </tr>
            <tr>
              <th scope='row'>03 - 02 - 2023</th>
              <td>OPD</td>
              <td>Common Cold</td>
              <td><MDBBtn className='reportBtn'>View Full Report</MDBBtn></td>
            </tr>
          </MDBTableBody>
        </MDBTable>
      </MDBContainer>

    </MDBContainer>
  )
}

export default records