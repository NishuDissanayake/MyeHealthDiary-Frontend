import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import React from 'react';
import './finddoctor.css';
import FDHeaderImg from './../../../Assets/Find Doctor Img.jpg';
import FDSImg from './../../../Assets/Find Doctor Img2.jpg';

function finddoctor() {
  return (
    <MDBContainer className='findDoctorCont1'>
      <MDBContainer className='findDoctorCont2'>
        <div className='findDoctorHeaderImg'>
          <img src={FDHeaderImg} alt='...' className='fdimg'/>
        </div>
      </MDBContainer>

      <MDBContainer className='findDoctorCont3'>
        <MDBRow className='fdText1'>Find Your Doctor</MDBRow>
        <MDBRow>
          <MDBCol>
            <form>
              <MDBRow className='fdText2'>Find Through Specialization:</MDBRow>
              <MDBRow>
                <select name="cars" id="cars" className='fdInput1'>
                  <option value="volvo">Select</option>
                  <option value="volvo">Cardiology</option>
                  <option value="saab">VOG</option>
                  <option value="mercedes">Nutritionist</option>
                  <option value="saab">Dentist</option>
                </select>
              </MDBRow>
              <MDBRow><MDBBtn className='fdBtn'>Find Doctor</MDBBtn></MDBRow>
            </form>
          </MDBCol>
          <MDBCol>
            <form>
              <MDBRow className='fdText2'>Find By Name:</MDBRow>
              <MDBRow>
                <input type='text' className='fdInput2'/>
              </MDBRow>
              <MDBRow><MDBBtn className='fdBtn'>Find Doctor</MDBBtn></MDBRow>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <MDBContainer className='findDoctorCont4'>
        <MDBRow>
          <MDBCol lg='8' md='16'>
          <MDBTable striped>
            <MDBTableHead dark>
              <tr>
                <th scope='col'>Doctor</th>
                <th scope='col'>Hospital</th>
                <th scope='col'>Contact Number</th>
                <th scope='col'>Specialization</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              <tr>
                <th scope='row'>Dr. Ruwan Samaranayake</th>
                <td>Genral Hospital, Ragama</td>
                <td>0113434345</td>
                <td>Cardiology</td>
              </tr>
              <tr>
                <th scope='row'>Dr. Ruwan Samaranayake</th>
                <td>Genral Hospital, Ragama</td>
                <td>0113434345</td>
                <td>Cardiology</td>
              </tr>
              <tr>
                <th scope='row'>Dr. Ruwan Samaranayake</th>
                <td>Genral Hospital, Ragama</td>
                <td>0113434345</td>
                <td>Cardiology</td>
              </tr>
              <tr>
                <th scope='row'>Dr. Ruwan Samaranayake</th>
                <td>Genral Hospital, Ragama</td>
                <td>0113434345</td>
                <td>Cardiology</td>
              </tr>
              <tr>
                <th scope='row'>Dr. Ruwan Samaranayake</th>
                <td>Genral Hospital, Ragama</td>
                <td>0113434345</td>
                <td>Cardiology</td>
              </tr>
            </MDBTableBody>
          </MDBTable>
          </MDBCol>
          <MDBCol>
            <img src={FDSImg} alt='....' className='fdSecondImg' />
          </MDBCol>
        </MDBRow>
      </MDBContainer>

    </MDBContainer>
  )
}

export default finddoctor