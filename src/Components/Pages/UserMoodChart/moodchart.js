import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import React from 'react';
import './moodchart.css';
import moodIco from './../../../Assets/mood.png';
import Chart from 'react-google-charts';

const LineData = [
  ['x', 'dogs', 'cats'],
  [0, 0, 0],
  [1, 10, 5],
  [2, 23, 15],
  [3, 17, 9],
  [4, 18, 10],
  [5, 9, 5],
  [6, 11, 3],
  [7, 27, 19],
]
const LineChartOptions = {
  hAxis: {
    title: 'Time',
  },
  vAxis: {
    title: 'Popularity',
  },
  series: {
    1: { curveType: 'function' },
  },
}

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
        <div className="container mt-5">
          <h2>Mood Chart Line Graph Example</h2>
          <Chart
            width={'700px'}
            height={'410px'}
            chartType="LineChart"
            loader={<div>Loading Chart</div>}
            data={LineData}
            options={LineChartOptions}
            rootProps={{ 'data-testid': '2' }}
          />
        </div>
      </MDBContainer>

    </MDBContainer>
  )
}

export default moodchart