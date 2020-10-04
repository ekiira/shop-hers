import React from 'react';
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';
import Button from '@material-ui/core/Button';

// images
import sh1 from '../../assets/shoes/airforce.jpeg';
import sh2 from '../../assets/shoes/heel4.jpeg';

import cl1 from '../../assets/clothing/shirt1.jpeg'
import cl2 from '../../assets/clothing/cl4.jpeg'
import cl3 from '../../assets/clothing/cl3.jpeg'

import Hat1 from '../../assets/hats/hat3.jpeg'

import Bg1 from '../../assets/bags/bag1.jpeg'

import gft1 from  '../../assets/gifts/gift1.jpeg'
import gft2 from  '../../assets/gifts/gift2.jpeg'
import gft3 from  '../../assets/gifts/gift3.jpeg'
import gft4 from  '../../assets/gifts/gift4.jpeg'

import sdress from '../../assets/sales/sdress.jpeg'
import sshoe from '../../assets/sales/sshoe.jpeg'
import scoat from '../../assets/sales/scoat.jpeg'
import strouser from '../../assets/sales/strouser.jpeg'
import sbag from '../../assets/sales/sbag.jpeg'
import shat from '../../assets/sales/shat.jpeg'

// style
import './NewIn.css';

const NewIn = () => {
  return (
    <div className='py-5'>
      <Container className='pb-5'>
        <h3 className='font-weight-bold pb-5'>Shop By Category</h3>
        <Row xs={2} md={4}>
          <Col className='pt-4 pt-lg-0'>
            <div className='category-content'> 
              <Link to='/shoes'>
                <div className='image-overlay'></div>
              </Link>
              <img src={sh1} className='img-fluid' alt=''/>
              <div className='category-details fadeIn-top'>
                <p>Shop Shoes</p>
              </div>
            </div>
          </Col>

          <Col className='pt-4 pt-lg-0'>
            <div className='category-content'> 
              <Link to='/clothing'>
                <div className='image-overlay'></div>
              </Link>
              <img src={cl1} className='img-fluid' alt=''/>
              <div className='category-details fadeIn-top'>
                <p>Shop Clothing</p>
              </div>
            </div>
          </Col>

          <Col className='pt-4 pt-lg-0'>
            <div className='category-content'> 
              <Link to='/bags'>
                <div className='image-overlay'></div>
              </Link>
              <img src={Bg1} className='img-fluid' alt=''/>
              <div className='category-details fadeIn-top'>
                <p>Shop Bags</p>
              </div>
            </div>
          </Col>

          <Col className='pt-4 pt-lg-0'>
            <div className='category-content'> 
              <Link to='/hats'>
                <div className='image-overlay'></div>
              </Link>
              <img src={Hat1} className='img-fluid' alt=''/>
              <div className='category-details fadeIn-top'>
                <p>Shop Hats</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className='pb-5'>
        <h3 className='font-weight-bold pb-5'>New Arrivals</h3>
        <Row xs={3} md={3}>
          <Col className='pt-4 pt-lg-0'>
            <img src={sh2} className='img-fluid' alt=''/>
          </Col>

          <Col className='pt-4 pt-lg-0'>
            <img src={cl3} className='img-fluid' alt=''/>
          </Col>

          <Col className='pt-4 pt-lg-0'>
            <img src={cl2} className='img-fluid' alt=''/>
          </Col>
        </Row>
      </Container>

      <div className='py-5'>
        <div className='sales'>
          <div className='overlay py-5'>
            <Container>
              <div className='sales-s'>
                <p className='sales-head text-center p-3'>SALES SALES SALES</p>
                <Row xs={2} md={3} lg={6}>
                  <Col className='py-4 py-lg-0'>
                    <Card >
                      <Card.Img variant="top" src={sdress} className='img-fluid'/>
                      <Card.Title className='mb-0 p-3 text-center sales-title'>Dresses</Card.Title>
                    </Card>
                  </Col>

                  <Col className='py-4 py-lg-0'>
                    <Card >
                      <Card.Img variant="top" src={sshoe} className='img-fluid'/>
                      <Card.Title className='mb-0 p-3 text-center sales-title'>Shoes</Card.Title>
                    </Card>
                  </Col>

                  <Col className='py-4 py-lg-0'>
                    <Card >
                      <Card.Img variant="top" src={scoat} className='img-fluid' />
                      <Card.Title className='mb-0 p-3 text-center sales-title'>Coats</Card.Title>
                    </Card>
                  </Col>

                  <Col className='py-4 py-lg-0'>
                    <Card >
                      <Card.Img variant="top" src={strouser} className='img-fluid' />
                      <Card.Title className='mb-0 p-3 text-center sales-title'>Trousers</Card.Title>
                    </Card>
                  </Col>

                  <Col className='py-4 py-lg-0'>
                    <Card >
                      <Card.Img variant="top" src={sbag} className='img-fluid' />
                      <Card.Title className='mb-0 p-3 text-center sales-title'>Bags</Card.Title>
                    </Card>
                  </Col>

                  <Col className='py-4 py-lg-0'>
                    <Card >
                      <Card.Img variant="top" src={shat} className='img-fluid' />
                      <Card.Title className='mb-0 p-3 text-center sales-title'>Hats</Card.Title>
                    </Card>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
        </div>
      </div>

      <div className='py-5'>
        <div className='sport'>
          <Container className='py-5 d-flex justify-content-center align-items-center'>
            <div>
              <div className='sport-head p-4 text-center'>
                <p className='sport-title mb-0'>
                    FEELING SPORTY
                </p> 
                <br/>
                <p className='sport-subtitle mb-0'>Introducing our varieties of sport gears</p>
                <div className='pt-3'>
                  <Button variant="outlined">
                  Check it out
                </Button>
                  {/* <button>
                    Check it out
                  </button> */}
                </div>
              </div>      
            </div>  
          </Container>
        </div>
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
            <Link to='#' className='gift-link'>
              View More
            </Link>
          </div>
        </Container>
      </div>
      
    </div>
  );
}

export default NewIn;
