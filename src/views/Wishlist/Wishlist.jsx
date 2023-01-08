import React, { useEffect } from 'react'

import { Container, Row, Col } from 'reactstrap'
import { motion } from 'framer-motion'
import { FaRegTrashAlt } from 'react-icons/fa'

import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../../redux/slices/cartSlice'
import { wishActions } from '../../redux/slices/wishListSlice'

import Helmet from '../../components/Helmet/Helmet'
import CommonSection from '../../components/CommonSection/CommonSection'
import styles from './wishlist.module.scss'
import { toast } from 'react-toastify'
const Cart = () => {
  const wishList = useSelector((state) => state.wishList.wishList)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Helmet title='Wishlist'>
      <CommonSection title='Wishlist' />
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              {wishList.length === 0 ? (
                <h5 className='text-center fs-5'>No Items in Wishlist</h5>
              ) : (
                <table className={`table bordered ${styles.cartTable}`}>
                  <thead>
                    <tr>
                      <th></th>
                      <th>Item</th>
                      <th>Price</th>
                      <th>Add to cart</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {wishList.map((item, index) => (
                      <Tr item={item} key={index} />
                    ))}
                  </tbody>
                </table>
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

const Tr = ({ item }) => {
  const { id, productName, image, price } = item
  const dispatch = useDispatch()

  const addtoCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        productName,
        imgUrl: image,
        price,
      })
    )
    toast.success('Product added to cart')
  }

  const removeFromList = () => {
    dispatch(wishActions.deleteItem(item.id))
    toast.success('Product removed from wishlist')
  }

  return (
    <tr>
      <td>
        <img src={image} alt='' />
      </td>
      <td>{productName}</td>
      <td>${price}</td>
      <td>
        <motion.button
          whileTap={{ scale: 1.2 }}
          className={styles.addBtn}
          onClick={addtoCart}>
          add to cart
        </motion.button>
      </td>
      <td>
        <motion.button
          className={styles.delete}
          whileTap={{ scale: 1.2 }}
          onClick={removeFromList}>
          <FaRegTrashAlt />
        </motion.button>
      </td>
    </tr>
  )
}

export default Cart
