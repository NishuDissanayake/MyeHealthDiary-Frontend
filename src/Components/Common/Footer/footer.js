import React from 'react';
import './footer.css';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='text-justify text-lg-left footerAlign footerStyles'>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg='9' md='18' className='mb-4 mb-md-0 footerCol1'>
            <p className=''>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.</p>
          </MDBCol>

          <MDBCol>
            <MDBRow lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='mb-0 logoText'>My eHealth Diary</h5>
              <MDBRow>
                <MDBCol className='footerIcons'>
                  <a href="https://web.facebook.com/profile.php?id=100092041792944" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-square-facebook ico-color"></i>
                  </a>
                </MDBCol>
                <MDBCol className='footerIcons'>
                  <a href="https://twitter.com/MyehealthD" target="_blank" rel="noopener noreferrer">
                    <i class="fa-brands fa-square-twitter ico-color"></i>
                  </a>
                </MDBCol>
                <MDBCol className='footerIcons'>
                  <a href="https://www.instagram.com/my_ehealth_diary/" target="_blank" rel="noopener noreferrer">
                    <i class="fa-brands fa-square-instagram ico-color"></i>
                  </a>
                </MDBCol>
                <MDBCol className='footerIcons'>
                  <a href="mailto:admin@mg.myehealthdiary.me" target="_blank" rel="noopener noreferrer">
                    <i class="fa-solid fa-envelope ico-color"></i>
                  </a>
                </MDBCol>
              </MDBRow>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3 copyBar' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-light' href='#'>
          My eHealth Diary
        </a>
      </div>
    </MDBFooter>
  );
}