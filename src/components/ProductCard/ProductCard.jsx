import React from 'react'
import PropTypes from 'prop-types'
import styles from './productCard.module.scss'

import { useDispatch } from 'react-redux'
import { cartActions } from '../../redux/slices/cartSlice'

import { toast } from 'react-toastify'

import { Col } from 'reactstrap'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'

const ProductCard = ({ item }) => {
  const dispatch = useDispatch()

  const { id, productName, imgUrl, price, category } = item

  const navigate = useNavigate()

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        productName,
        imgUrl,
        price,
      })
    )
    toast.success('Product Added Successfully')
  }

  const numberWithCommas = (x) => {
    const newX = x * 503
    return newX.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  const newPrice = numberWithCommas(price)
  return (
    <Col lg='3' md='4'>
      <div className={styles.productCard}>
        <div>
          <motion.img
            whileHover={{ scale: 0.9 }}
            src={imgUrl}
            alt=''
            onClick={() => navigate(`/shop/${id}`)}
          />
        </div>
        <div className='p-2'>
          <h3 className={styles.productName}>
            <Link to={`/shop/${id}`}>{productName}</Link>
          </h3>
          <span className={styles.productCategory}>{category}</span>
        </div>
        <div className='d-flex justify-content-between p-2 align-items-center'>
          <span>₦{newPrice}</span>
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
