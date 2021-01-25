import React from 'react';
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { makeStyles } from '@material-ui/core/styles';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import PinterestIcon from '@material-ui/icons/Pinterest';


const useStyles = makeStyles({
  links: {
    listStyle: 'none',
    color:'#666666',
    '&:hover': {
      color: '#000000'
    }
  },
  top: {
    backgroundColor: '#eeeeee',
  },
  bottom: {
    backgroundColor: '#000000',
    color: '#ffffff',
  },
  list: {
    listStyle: 'none',
    display: 'flex',
  }
});

const Footer = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
    <div className={`${classes.top} py-5 d-none d-lg-block`}>
     <Container className={classes.links} >
        <Row lg={4} >
          <Col>
          <p className='font-weight-bold'>Help and Information</p>
            <li>
              <Link to='#' className={classes.links}>
                Help
              </Link>
            </li>
            <li>
              <Link to='#' className={classes.links} >
                Track Order
              </Link>
            </li>
            <li>
              <Link to='#' className={classes.links} >
                Delivery Returns
              </Link>
            </li>
          </Col>
          <Col>
            <p className='font-weight-bold'>About Shoppers</p>
            <li>
              <Link to='#' className={classes.links} >
                About Us
              </Link>
            </li>
            <li>
              <Link to='#' className={classes.links} >
                Careers at Shoppers
              </Link>
            </li>
            <li>
              <Link to='#' className={classes.links} >
                Corporate Responsibility
              </Link>
            </li>
            <li>
              <Link to='#' className={classes.links} >
                Investors Site
              </Link>
            </li>
          </Col>
          <Col>
            <li>
            <p className='font-weight-bold'>More from Shoppers</p>

              <Link to='#' className={classes.links} >
                Mobile ans Shoppers Apps
              </Link>
            </li>
            <li>
              <Link to='#' className={classes.links} >
                Shoppers Marketplace
              </Link>
            </li>
            <li>
              <Link to='#' className={classes.links} >
                Gift vouchers
              </Link>
            </li>
            <li>
              <Link to='#' className={classes.links} >
                Fashion Discovery
              </Link>
            </li>
          </Col>
          <Col>
          <p className='font-weight-bold'>Socials</p>

            <li>
              <Link to='#' className={classes.links}>
               <TwitterIcon className='mr-3'/>
               <InstagramIcon className='mr-3'/>
               <FacebookIcon className='mr-3'/>
               <PinterestIcon/>
              </Link>
            </li>
          </Col>

  
        </Row>
     </Container>

    </div>
    <div className={`${classes.bottom} pt-4 py-3`}>
      <Container className='d-flex justify-content-between'>
          <p className='mb-0'>&copy; Shoppers</p>
          <div className='mb-0'>
          <ul className={`${classes.list}`}>
            <li className='mr-2'>
              Privacy
            </li>
            <li className='mr-2'>
              |
            </li>
            <li>
              Ts&Cs 
            </li>
          </ul>
      
          </div>
      </Container>
    </div>
  </div>
  );
}

export default Footer;
