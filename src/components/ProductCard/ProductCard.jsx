import React from 'react'
import PropTypes from 'prop-types'
import styles from './productCard.module.scss'

import { useDispatch } from 'react-redux'
import { cartActions } from '../../redux/slices/cartSlice'

import { toast } from 'react-toastify'

import { Col } from 'reactstrap'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const ProductCard = ({ item }) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(cartActions.addItem(item))
    toast.success('Product Added Successfully')
  }
  return (
    <Col lg='3' md='4'>
      <div className={styles.productCard}>
        <div>
          <motion.img whileHover={{ scale: 0.9 }} src={item.imgUrl} alt='' />
        </div>
        <div className='p-2'>
          <h3 className={styles.productName}>
            <Link to={`/shop/${item.id}`}>{item.productName}</Link>
          </h3>
          <span className={styles.productCategory}>{item.category}</span>
        </div>
        <div className='d-flex justify-content-between p-2 align-items-center'>
          <span>${item.price}</span>
          <span>
            <motion.button
              whileTap={{ scale: 1.2 }}
              className={styles.addBtn}
              onClick={addToCart}>
              ADD TO CART
            </motion.button>
          </span>
        </div>
      </div>
    </Col>
  )
}

ProductCard.propTypes = {
  item: PropTypes.object.isRequired,
}

export default ProductCard
