import React, { useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

import { Container, Row, Col } from 'reactstrap'
import { motion } from 'framer-motion'
import { FaRegTrashAlt } from 'react-icons/fa'

import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../../redux/slices/cartSlice'

import Helmet from '../../components/Helmet/Helmet'
import CommonSection from '../../components/CommonSection/CommonSection'
import styles from './cart.module.scss'
import { toast } from 'react-toastify'
const Cart = () => {
  const navigate = useNavigate()
  const cartItems = useSelector((state) => state.cart.cartItems)
  const totalAmount = useSelector((state) => state.cart.totalPrice)

  const numberWithCommas = (x) => {
    const newX = x * 503
    return newX.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }
  const newAmount = numberWithCommas(totalAmount)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Helmet title='Cart'>
      <CommonSection title='Shopping Cart' />
      <section>
        <Container>
          <Row>
            <Col lg='9'>
              {cartItems.length === 0 ? (
                <h5 className='text-center fs-5'>No Items in Cart</h5>
              ) : (
                <table className={`table bordered ${styles.cartTable}`}>
                  <thead>
                    <tr>
                      <th></th>
                      <th>Item</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, index) => (
                      <Tr item={item} key={index} />
                    ))}
                  </tbody>
                </table>
              )}
            </Col>
            <Col lg='3'>
              {cartItems.length !== 0 && (
                <div>
                  <h5 className='fw-bold d-flex justify-content-between align-items-center mb-3'>
                    Total: <span className='fs-3'>₦{newAmount}</span>
                  </h5>
                  <p className={styles.info}>
                    Taxes and Shipping fee will be calculated in checkout
                  </p>
                  <div>
                    <button
                      className='buyBtn mt-3 w-100'
                      onClick={() => navigate('/checkout')}>
                      Checkout
                    </button>
                    <button
                      className='buyBtn mt-1 w-100'
                      onClick={() => navigate('/shop')}>
                      Continue shopping
                    </button>
                  </div>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

const Tr = ({ item }) => {
  const dispatch = useDispatch()

  const removeFromCart = () => {
    dispatch(cartActions.deleteItem(item.id))
    toast.success('Product removed from cart')
  }

  return (
    <tr>
      <td>
        <img src={item.image} alt='' />
      </td>
      <td>{item.productName}</td>
      <td>${item.price}</td>
      <td>{item.quantity}pc</td>
      <td>
        <motion.button
          className={styles.delete}
          whileTap={{ scale: 1.2 }}
          onClick={removeFromCart}>
          <FaRegTrashAlt />
        </motion.button>
      </td>
    </tr>
  )
}

export default Cart
