import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import React from 'react';
import './moodchart.css';
import moodIco from './../../../Assets/mood.png';

function moodchart() {
  return (
    <MDBContainer>
      <MDBRow>
        <span className='moodHeader'>
          <img src={moodIco} alt='...' className='moodIcon' />
          Mood Chart
        </span>
      </MDBRow>

      <MDBContainer>

      </MDBContainer>

    </MDBContainer>
  )
}

export default moodchart