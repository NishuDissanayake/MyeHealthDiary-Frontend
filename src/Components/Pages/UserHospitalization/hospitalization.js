import React from 'react';
import './hospitalization.css';
import { MDBContainer, MDBRow, MDBCol, MDBTable, MDBTableHead, MDBTableBody, MDBBtn } from 'mdb-react-ui-kit';
import HospImg from './../../../Assets/Hospitalization Record Img.png';
import { Link } from 'react-router-dom';

function hospitalization() {
  return (
    <MDBContainer>

      <MDBContainer>
        <MDBRow className='hospT1'>These are the details of the medical record you requested...</MDBRow>

        <MDBRow className='hospR2'>
          <MDBCol>
            <MDBTable striped className='hospTable1'>
              <MDBTableBody>
                <tr>
                  <th scope='row'>Date</th>
                  <td>03 - 01 - 2023</td>
                </tr>
                <tr>
                  <th scope='row'>Patient's Name</th>
                  <td>Maxim Baker</td>
                </tr>
                <tr>
                  <th scope='row'>Doctor in Charge</th>
                  <td>Roger Davis</td>
                </tr>
                <tr>
                  <th scope='row'>Condition</th>
                  <td>Acute Leukaemia</td>
                </tr>
                <tr>
                  <th scope='row'>Date of Hospitalization</th>
                  <td>01 - 01 - 2023</td>
                </tr>
                <tr>
                  <th scope='row'>Date of Discahrge</th>
                  <td>03 - 01 - 2023</td>
                </tr>
              </MDBTableBody>
            </MDBTable>
          </MDBCol>
          <MDBCol>
            <img src={HospImg} alt='....' className='hospImgStyles' />
          </MDBCol>
        </MDBRow>

      </MDBContainer>

      <MDBContainer className='hospContL'>

        <MDBRow className='hospR3'>
          <MDBTable striped>
            <MDBTableHead className='hospTbl2Head'>
              <tr>
                <th scope='col'>Diagnosis</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              <tr>
                <td>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</td>
              </tr>
            </MDBTableBody>
          </MDBTable>
        </MDBRow>

        <MDBRow className='hospR3'>
          <MDBTable striped>
            <MDBTableHead className='hospTbl2Head'>
              <tr>
                <th scope='col'>Treatments</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              <tr>
                <td>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</td>
              </tr>
            </MDBTableBody>
          </MDBTable>
        </MDBRow>

        <MDBRow className='hospR3'>
          <MDBTable striped>
            <MDBTableHead className='hospTbl2Head'>
              <tr>
                <th scope='col'>Bowel and Bladder Functions</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              <tr>
                <td>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</td>
              </tr>
            </MDBTableBody>
          </MDBTable>
        </MDBRow>

        <MDBRow className='hospR3'>
          <MDBTable striped>
            <MDBTableHead className='hospTbl2Head'>
              <tr>
                <th scope='col'>Lab Tests</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              <tr>
                <td>ECG</td>
              </tr>
              <tr>
                <td>ECG</td>
              </tr>
            </MDBTableBody>
          </MDBTable>
        </MDBRow>

        <MDBRow className='hospR3'>
          <MDBTable striped>
            <MDBTableHead className='hospTbl2Head'>
              <tr>
                <th scope='col'>Temperature</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              <tr>
                <td>2023 - 01 - 05, 37.5 C</td>
              </tr>
              <tr>
                <td>2023 - 01 - 05, 37.5 C</td>
              </tr>
            </MDBTableBody>
          </MDBTable>
        </MDBRow>

        <MDBRow className='hospR3'>
          <MDBTable striped>
            <MDBTableHead className='hospTbl2Head'>
              <tr>
                <th scope='col'>Blood Pressure</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              <tr>
                <td>2023 - 01 - 05, 37.5 C</td>
              </tr>
              <tr>
                <td>2023 - 01 - 05, 37.5 C</td>
              </tr>
            </MDBTableBody>
          </MDBTable>
        </MDBRow>

        <MDBRow className='hospR3'>
          <MDBTable striped>
            <MDBTableHead className='hospTbl2Head'>
              <tr>
                <th scope='col'>Reports</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              <tr>
                <td>2023 - 01 - 05, 37.5 C</td>
              </tr>
              <tr>
                <td>2023 - 01 - 05, 37.5 C</td>
              </tr>
            </MDBTableBody>
          </MDBTable>
        </MDBRow>

      </MDBContainer>

    </MDBContainer>
  )
}

export default hospitalization