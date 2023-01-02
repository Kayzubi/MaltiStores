import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import styles from './footer.module.scss'
import { Link } from 'react-router-dom'
import { MdLocationOn, MdLocalPhone, MdEmail } from 'react-icons/md'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <Container>
        <Row>
          <Col lg='4'>
            <div className={styles.logo}>
              <div>
                <h1>MaltiStores</h1>
              </div>
            </div>
            <p className={styles.footerText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              suscipit similique possimus magnam natus dolorum officia amet,
              quisquam dolorem delectus!
            </p>
          </Col>
          <Col lg='3'>
            <div>
              <h4 className={styles.footerHeading}>Popular Products</h4>
              <ListGroup className='mb-3'>
                <ListGroupItem className='ps-0 border-0 mb-3'>
                  <Link to={'#'}>Mobile Phones</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 mb-3'>
                  <Link to={'#'}>Modern Sofa</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 mb-3'>
                  <Link to={'#'}>Arm Chairs</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 mb-3'>
                  <Link to={'#'}>Smart Watches</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='2'>
            <div>
              <h4 className={styles.footerHeading}>Site Map</h4>
              <ListGroup className='mb-3'>
                <ListGroupItem className='ps-0 border-0 mb-3'>
                  <Link to={'/home'}>Home</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 mb-3'>
                  <Link to={'/shop'}>Shop</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 mb-3'>
                  <Link to={'/login'}>Log in</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 mb-3'>
                  <Link to={'#'}>Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='3'>
            <div className={styles.contact}>
              <h4 className={styles.footerHeading}>Contact</h4>
              <ListGroup className='mb-3'>
                <ListGroupItem className='ps-0 border-0 mb-3'>
                  <span>
                    <MdLocationOn />
                  </span>
                  <p> 123 Micheal Adesonya street, Ibadan, Nigeria</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 mb-3'>
                  <span>
                    <MdLocalPhone />
                  </span>
                  <p> 0901 444 5915, 0808 332 8835</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 mb-3'>
                  <span>
                    <MdEmail />
                  </span>
                  <p>info@maltistores.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='12' className='mt-5'>
            <p className='text-center'>
              &copy; Copyright {year}. Built by{' '}
              <a href='https://github.com/Kayzubi'>Kizito Azubuike</a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
