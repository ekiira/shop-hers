import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import sh1 from '../../assets/shoes/airforce.jpeg';
import cl1 from '../../assets/clothing/shirt1.jpeg'
// import cl2 from '../../assets/clothing/shirt3-w.jpeg'
import Bg1 from '../../assets/bags/bag1.jpeg'
import gft1 from  '../../assets/gifts/gift1.jpeg'
import gft2 from  '../../assets/gifts/gift2.jpeg'
import gft3 from  '../../assets/gifts/gift3.jpeg'
import gft4 from  '../../assets/gifts/gift4.jpeg'

import './NewIn.css';
import { Link } from '@material-ui/core';
const NewIn = ({location}) => {
  console.log('ssme', location)
  return (
    <div className='py-5'>
      <Container className='pb-5'>
      <h3 className='font-weight-bold pb-5'>New Arrivals</h3>

      <Row xs={2} md={3}>
        <Col className='pt-4 pt-lg-0'>
          <img src={sh1} className='img-fluid' alt=''/>
      {/* <p className='text-center off mb-0'>Get 50% off</p> */}

     
        </Col>
        <Col className='pt-4 pt-lg-0'>
        <img src={cl1} className='img-fluid' alt=''/>
      {/* <p className='text-center off mb-0'>Get 10% off</p> */}

       
        </Col>
        <Col className='pt-4 pt-lg-0'>
        <img src={Bg1} className='img-fluid' alt=''/>
      {/* <p className='text-center off mb-0'>Get 90% off</p> */}

 
        </Col>
        {/* <Col>
        <h3 className='text-center'>ddd</h3>
        </Col> */}
      </Row>
      </Container>
    <div className='sport'>
      <Container className='py-5 d-flex justify-content-center align-items-center'>
       <div>
       <div className='sport-head p-4 text-center'><p className='sport-title mb-0'>
       FEELING SPORTY
         </p> 
       <br/>
       <p className='sport-subtitle mb-0'>Introducing out varieties of sport gears</p>
       <div>
            <button>
              Check it out
            </button>
       </div>
          
            </div>      
            </div>  
      </Container>
    </div>
    <div className='gift-pack py-5'>
      <Container>
        <h3 className='font-weight-bold'>Check out our Gift Packs</h3>
        <Row xs={2} md={2} lg={4} className='pt-5'>
          <Col className='pt-4 pt-lg-0'>
            <img src={gft1} className='img-fluid' alt=''/>
          </Col>
          <Col className='pt-4 pt-lg-0'>
            <img src={gft2} className='img-fluid' alt=''/>
          </Col>
          <Col className='pt-4 pt-lg-0'>
            <img src={gft3} className='img-fluid' alt=''/>
          </Col>
          <Col className='pt-4 pt-lg-0'>
            <img src={gft4} className='img-fluid' alt=''/>
          </Col>
        </Row>
        <div className='pt-3 text-center'>
          <Link to='#'>
            View More
          </Link>
        </div>
      </Container>
    </div>
    </div>
  );
}

export default NewIn;
