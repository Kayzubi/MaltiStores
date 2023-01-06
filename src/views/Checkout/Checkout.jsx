import React, { useEffect } from 'react'

import { Container, Row, Col } from 'reactstrap'

import Helmet from '../../components/Helmet/Helmet'
import CommonSection from '../../components/CommonSection/CommonSection'

import styles from './checkout.module.scss'
import { useSelector } from 'react-redux'
const Checkout = () => {
  const quantity = useSelector((state) => state.cart.totalQuantity)
  const amount = useSelector((state) => state.cart.totalPrice)

  const numberWithCommas = (x) => {
    const newX = x * 503
    return newX.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  const price = numberWithCommas(amount)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Helmet title='Checkout'>
      <CommonSection title='Checkout' />

      <section>
        <Container>
          <Row>
            <Col lg='8'>
              <form action='#'>
                <h5 className='heading__secondary mb-3'>Billing information</h5>
                <div className={styles.formGroup}>
                  <input type='text' placeholder='Full name' />
                </div>
                <div className={styles.formGroup}>
                  <input type='text' placeholder='email' />
                </div>{' '}
                <div className={styles.formGroup}>
                  <input type='number' placeholder='Phone number' />
                </div>{' '}
                <div className={styles.formGroup}>
                  <input type='text' placeholder='Street address' />
                </div>{' '}
                <div className={styles.formGroup}>
                  <input type='number' placeholder='Postal code' />
                </div>{' '}
                <div className={styles.formGroup}>
                  <input type='text' placeholder='City' />
                </div>
                <div className={styles.formGroup}>
                  <input type='text' placeholder='Country' />
                </div>
              </form>
            </Col>
            <Col lg='4'>
              <div className={styles.checkoutDetails}>
                <h6>
                  Total Qty: <span>{quantity} items</span>
                </h6>
                <h6>
                  Subtotal: <span>₦{price}</span>
                </h6>
                <h6>
                  <span>
                    Shipping: <br /> <small>free shipping</small>
                  </span>
                  <span>0</span>
                </h6>
                <h4>
                  Total Cost: <span>₦{price}</span>
                </h4>
                <button className='shopbtn w-100 btnLarge'>
                  Complete Order
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Checkout
