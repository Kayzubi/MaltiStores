import React from 'react'
import PropTypes from 'prop-types'
import styles from './productCard.module.scss'

import { Col } from 'reactstrap'
import { motion } from 'framer-motion'

const ProductCard = ({ item }) => {
  return (
    <Col lg='3' md='4'>
      <div className={styles.productCard}>
        <div>
          <motion.img whileHover={{ scale: 0.9 }} src={item.imgUrl} alt='' />
        </div>
        <div className='p-2'>
          <h3 className={styles.productName}>{item.productName}</h3>
          <span className={styles.productCategory}>{item.category}</span>
        </div>
        <div className='d-flex justify-content-between p-2 align-items-center'>
          <span>${item.price}</span>
          <span>
            <motion.button whileTap={{ scale: 1.2 }} className={styles.addBtn}>
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
