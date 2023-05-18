import React, { useState } from 'react';
import './calendar.css';
import { MDBContainer, MDBRow, MDBCol, MDBTable, MDBTableHead, MDBTableBody, MDBBtn } from 'mdb-react-ui-kit';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import calImg from './../../../Assets/Calendar Img.jpg';
import happy from './../../../Assets/happy.png';
import calm from './../../../Assets/calm.png';
import anxious from './../../../Assets/anxious.png';
import irritated from './../../../Assets/irritated.png';
import depressed from './../../../Assets/depressed.png';
import confused from './../../../Assets/confused.png';
import mood_swings from './../../../Assets/mood_swings.png';
import energetic from './../../../Assets/energetic.png';
import fine from './../../../Assets/fine.png';
import headache from './../../../Assets/head.png';
import insominia from './../../../Assets/insomnia.png';
import fatigue from './../../../Assets/fatigue.png';
import stomach from './../../../Assets/stomach.png';
import muscle from './../../../Assets/muscle.png';
import pain from './../../../Assets/pain.png';
import eye from './../../../Assets/eye.png';
import stress from './../../../Assets/stress.png';
import travel from './../../../Assets/travel.png';
import injury from './../../../Assets/injury.png';
import alcohol from './../../../Assets/alcohol.png';

function CalendarPage() {
  const [date, setDate] = useState(new Date());

  const onDateChange = (newDate) => {
    setDate(newDate);
    console.log(newDate);
  }

  return (

    <>
      {localStorage.getItem('role') !== 'user' ? window.location.href = '/' : (

        <MDBContainer breakpoint='sm md lg xl xxl main-cont'>
          <MDBContainer className='calendarCont1'>
            <MDBRow className='calendarT1'>How are you feeling today?</MDBRow>
          </MDBContainer>

          <MDBContainer className='calendarCont2'>
            <form>
              <MDBRow className='calendarMRow'>
                <MDBCol lg='8' md='16' className='calendarCol1'>
                  <MDBRow className='calendarRow1'>
                    <label className='calendarLabel'>How is your mood?</label>
                    <MDBRow className='calendarIconRow'>
                      <MDBCol>
                        <label className='calendarLabe2'>
                          <input type="radio" name="test" value="small" />
                          <img src={happy} alt='.....' className='calRadioStyle' />
                          Happy
                        </label>
                      </MDBCol>
                      <MDBCol>
                        <label className='calendarLabe2'>
                          <input type="radio" name="test" value="small" />
                          <img src={calm} alt='.....' className='calRadioStyle' />
                          Calm
                        </label>
                      </MDBCol>
                      <MDBCol>
                        <label className='calendarLabe2'>
                          <input type="radio" name="test" value="small" />
                          <img src={irritated} alt='.....' className='calRadioStyle' />
                          Irritated
                        </label>
                      </MDBCol>
                      <MDBCol>
                        <label className='calendarLabe2'>
                          <input type="radio" name="test" value="small" />
                          <img src={anxious} alt='.....' className='calRadioStyle' />
                          Anxious
                        </label>
                      </MDBCol>
                      <MDBCol>
                        <label className='calendarLabe2'>
                          <input type="radio" name="test" value="small" />
                          <img src={depressed} alt='.....' className='calRadioStyle' />
                          Depressed
                        </label>
                      </MDBCol>
                      <MDBCol>
                        <label className='calendarLabe2'>
                          <input type="radio" name="test" value="small" />
                          <img src={mood_swings} alt='.....' className='calRadioStyle' />
                          Mood Swings
                        </label>
                      </MDBCol>
                      <MDBCol>
                        <label className='calendarLabe2'>
                          <input type="radio" name="test" value="small" />
                          <img src={confused} alt='.....' className='calRadioStyle' />
                          Confused
                        </label>
                      </MDBCol>
                      <MDBCol>
                        <label className='calendarLabe2'>
                          <input type="radio" name="test" value="small" />
                          <img src={energetic} alt='.....' className='calRadioStyle' />
                          Energetic
                        </label>
                      </MDBCol>
                    </MDBRow>
                  </MDBRow>
                  <MDBRow className='calendarRow2'>
                    <label className='calendarLabel'>Any symptoms?</label>
                    <MDBRow className='calendarIconRow'>
                      <MDBCol>
                        <label className='calendarLabe2'>
                          <input type="radio" name="test" value="small" />
                          <img src={fine} alt='.....' className='calRadioStyle' />
                        </label>
                      </MDBCol>
                      <MDBCol>
                        <label className='calendarLabe2'>
                          <input type="radio" name="test" value="small" />
                          <img src={headache} alt='.....' className='calRadioStyle' />
                        </label>
                      </MDBCol>
                      <MDBCol>
                        <label className='calendarLabe2'>
                          <input type="radio" name="test" value="small" />
                          <img src={fatigue} alt='.....' className='calRadioStyle' />
                        </label>
                      </MDBCol>
                      <MDBCol>
                        <label className='calendarLabe2'>
                          <input type="radio" name="test" value="small" />
                          <img src={insominia} alt='.....' className='calRadioStyle' />
                        </label>
                      </MDBCol>
                      <MDBCol>
                        <label className='calendarLabe2'>
                          <input type="radio" name="test" value="small" />
                          <img src={stomach} alt='.....' className='calRadioStyle' />
                        </label>
                      </MDBCol>
                      <MDBCol>
                        <label className='calendarLabe2'>
                          <input type="radio" name="test" value="small" />
                          <img src={muscle} alt='.....' className='calRadioStyle' />
                        </label>
                      </MDBCol>
                      <MDBCol>
                        <label className='calendarLabe2'>
                          <input type="radio" name="test" value="small" />
                          <img src={pain} alt='.....' className='calRadioStyle' />
                        </label>
                      </MDBCol>
                      <MDBCol>
                        <label className='calendarLabe2'>
                          <input type="radio" name="test" value="small" />
                          <img src={eye} alt='.....' className='calRadioStyle' />
                        </label>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol className='calendarLabe2'>Everything is Fine</MDBCol>
                      <MDBCol className='calendarLabe2'>Headache</MDBCol>
                      <MDBCol className='calendarLabe2'>Fatigue</MDBCol>
                      <MDBCol className='calendarLabe2'>Insomnia</MDBCol>
                      <MDBCol className='calendarLabe2'>Stomach Pain</MDBCol>
                      <MDBCol className='calendarLabe2'>Muscle Pain</MDBCol>
                      <MDBCol className='calendarLabe2'>Pain</MDBCol>
                      <MDBCol className='calendarLabe2'>Eye Discomfort</MDBCol>
                    </MDBRow>
                  </MDBRow>

                  <MDBRow className='calendarRow3'>
                    <label className='calendarLabel'>Other</label>
                    <MDBRow className='calendarIconRow'>
                      <MDBCol>
                        <label className='calendarLabe2'>
                          <input type="radio" name="test" value="small" />
                          <img src={stress} alt='.....' className='calRadioStyle' />
                          Stress
                        </label>
                      </MDBCol>
                      <MDBCol>
                        <label className='calendarLabe2'>
                          <input type="radio" name="test" value="small" />
                          <img src={alcohol} alt='.....' className='calRadioStyle' />
                          Alcohol
                        </label>
                      </MDBCol>
                      <MDBCol>
                        <label className='calendarLabe2'>
                          <input type="radio" name="test" value="small" />
                          <img src={travel} alt='.....' className='calRadioStyle' />
                          Travel
                        </label>
                      </MDBCol>
                      <MDBCol>
                        <label className='calendarLabe2'>
                          <input type="radio" name="test" value="small" />
                          <img src={injury} alt='.....' className='calRadioStyle' />
                          Disease or Injury
                        </label>
                      </MDBCol>
                      <MDBCol></MDBCol>
                      <MDBCol></MDBCol>
                      <MDBCol></MDBCol>
                      <MDBCol></MDBCol>
                    </MDBRow>
                  </MDBRow>

                  <MDBRow className='calendarRow4'><MDBBtn className='calButton'>Add Record</MDBBtn></MDBRow>

                </MDBCol>
                <MDBCol className='calendarCol2'>
                  <MDBRow className='calendarRow5'>
                    <Calendar
                      onChange={onDateChange}
                      value={date}
                      showNeighboringMonth={false}
                      locale={"en-US"}
                    />
                  </MDBRow>
                  <MDBRow className='calendarRow6'>
                    <img src={calImg} alt='.....' className='calImgStyle' />
                  </MDBRow>
                </MDBCol>
              </MDBRow>
            </form>
          </MDBContainer>

        </MDBContainer>

      )}</>

  )
}

export default CalendarPage