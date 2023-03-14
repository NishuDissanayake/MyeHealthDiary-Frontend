import React, { useState } from 'react';
import './calendar.css';
import { MDBContainer, MDBRow, MDBCol, MDBTable, MDBTableHead, MDBTableBody, MDBBtn } from 'mdb-react-ui-kit';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import calImg from './../../../Assets/Calendar Img.jpg';

function CalendarPage() {
  const [date, setDate] = useState(new Date());

  const onDateChange = (newDate) => {
    setDate(newDate);
    console.log(newDate);
  }

  return (
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
                      <img src={calImg} alt='.....' className='calRadioStyle' />
                      Happy
                    </label>
                  </MDBCol>
                  <MDBCol>
                    <label className='calendarLabe2'>
                      <input type="radio" name="test" value="small" />
                      <img src={calImg} alt='.....' className='calRadioStyle' />
                      Happy
                    </label>
                  </MDBCol>
                  <MDBCol>
                    <label className='calendarLabe2'>
                      <input type="radio" name="test" value="small" />
                      <img src={calImg} alt='.....' className='calRadioStyle' />
                      Happy
                    </label>
                  </MDBCol>
                  <MDBCol>
                    <label className='calendarLabe2'>
                      <input type="radio" name="test" value="small" />
                      <img src={calImg} alt='.....' className='calRadioStyle' />
                      Happy
                    </label>
                  </MDBCol>
                  <MDBCol>
                    <label className='calendarLabe2'>
                      <input type="radio" name="test" value="small" />
                      <img src={calImg} alt='.....' className='calRadioStyle' />
                      Happy
                    </label>
                  </MDBCol>
                  <MDBCol>
                    <label className='calendarLabe2'>
                      <input type="radio" name="test" value="small" />
                      <img src={calImg} alt='.....' className='calRadioStyle' />
                      Happy
                    </label>
                  </MDBCol>
                  <MDBCol>
                    <label className='calendarLabe2'>
                      <input type="radio" name="test" value="small" />
                      <img src={calImg} alt='.....' className='calRadioStyle' />
                      Happy
                    </label>
                  </MDBCol>
                  <MDBCol>
                    <label className='calendarLabe2'>
                      <input type="radio" name="test" value="small" />
                      <img src={calImg} alt='.....' className='calRadioStyle' />
                      Happy
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
                      <img src={calImg} alt='.....' className='calRadioStyle' />
                      Happy
                    </label>
                  </MDBCol>
                  <MDBCol>
                    <label className='calendarLabe2'>
                      <input type="radio" name="test" value="small" />
                      <img src={calImg} alt='.....' className='calRadioStyle' />
                      Happy
                    </label>
                  </MDBCol>
                  <MDBCol>
                    <label className='calendarLabe2'>
                      <input type="radio" name="test" value="small" />
                      <img src={calImg} alt='.....' className='calRadioStyle' />
                      Happy
                    </label>
                  </MDBCol>
                  <MDBCol>
                    <label className='calendarLabe2'>
                      <input type="radio" name="test" value="small" />
                      <img src={calImg} alt='.....' className='calRadioStyle' />
                      Happy
                    </label>
                  </MDBCol>
                  <MDBCol>
                    <label className='calendarLabe2'>
                      <input type="radio" name="test" value="small" />
                      <img src={calImg} alt='.....' className='calRadioStyle' />
                      Happy
                    </label>
                  </MDBCol>
                  <MDBCol>
                    <label className='calendarLabe2'>
                      <input type="radio" name="test" value="small" />
                      <img src={calImg} alt='.....' className='calRadioStyle' />
                      Happy
                    </label>
                  </MDBCol>
                  <MDBCol>
                    <label className='calendarLabe2'>
                      <input type="radio" name="test" value="small" />
                      <img src={calImg} alt='.....' className='calRadioStyle' />
                      Happy
                    </label>
                  </MDBCol>
                  <MDBCol>
                    <label className='calendarLabe2'>
                      <input type="radio" name="test" value="small" />
                      <img src={calImg} alt='.....' className='calRadioStyle' />
                      Happy
                    </label>
                  </MDBCol>
                </MDBRow>
              </MDBRow>

              <MDBRow className='calendarRow3'>
                <label className='calendarLabel'>Other</label>
                <MDBRow className='calendarIconRow'>
                  <MDBCol>
                    <label className='calendarLabe2'>
                      <input type="checkbox" name="1" value="0" />
                      <img src={calImg} alt='.....' className='calRadioStyle' />
                      Happy
                    </label>
                  </MDBCol>
                  <MDBCol>
                    <label className='calendarLabe2'>
                      <input type="checkbox" name="2" value="1" />
                      <img src={calImg} alt='.....' className='calRadioStyle' />
                      Happy
                    </label>
                  </MDBCol>
                  <MDBCol>
                    <label className='calendarLabe2'>
                      <input type="checkbox" name="1" value="0" />
                      <img src={calImg} alt='.....' className='calRadioStyle' />
                      Happy
                    </label>
                  </MDBCol>
                  <MDBCol>
                    <label className='calendarLabe2'>
                      <input type="checkbox" name="2" value="1" />
                      <img src={calImg} alt='.....' className='calRadioStyle' />
                      Happy
                    </label>
                  </MDBCol>
                  <MDBCol>
                    <label className='calendarLabe2'>
                      <input type="checkbox" name="1" value="0" />
                      <img src={calImg} alt='.....' className='calRadioStyle' />
                      Happy
                    </label>
                  </MDBCol>
                  <MDBCol>
                    <label className='calendarLabe2'>
                      <input type="checkbox" name="2" value="1" />
                      <img src={calImg} alt='.....' className='calRadioStyle' />
                      Happy
                    </label>
                  </MDBCol>
                  <MDBCol>
                    <label className='calendarLabe2'>
                      <input type="checkbox" name="3" value="2" />
                      <img src={calImg} alt='.....' className='calRadioStyle' />
                      Happy
                    </label>
                  </MDBCol>
                  <MDBCol>
                    <label className='calendarLabe2'>
                      <input type="checkbox" name="4" value="3" />
                      <img src={calImg} alt='.....' className='calRadioStyle' />
                      Happy
                    </label>
                  </MDBCol>
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
  )
}

export default CalendarPage