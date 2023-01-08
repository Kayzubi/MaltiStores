import React from 'react'
import PropTypes from 'prop-types'
import styles from './productCard.module.scss'

import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../../redux/slices/cartSlice'
import { wishActions } from '../../redux/slices/wishListSlice'

import { toast } from 'react-toastify'
import { FaRegHeart, FaHeart } from 'react-icons/fa'

import { Col } from 'reactstrap'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

const ProductCard = ({ item }) => {
  const dispatch = useDispatch()
  const [isFavorite, setIsFavorite] = useState(false)

  const wishList = useSelector((state) => state.wishList.wishList)

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
    toast.success('Product added to cart')
  }

  const handleWishList = () => {
    if (isFavorite) {
      dispatch(wishActions.deleteItem(id))
      toast.success('Product removed from wishlist')
    } else {
      dispatch(
        wishActions.addItem({
          id,
          productName,
          imgUrl,
          price,
        })
      )
      toast.success('Product added to wishlist')
    }
  }

  const numberWithCommas = (x) => {
    const newX = x * 503
    return newX.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  useEffect(() => {
    const existingItem = wishList.find((item) => item.id === id)

    if (!existingItem) {
      setIsFavorite(false)
    } else {
      setIsFavorite(true)
    }
  }, [id, wishList])

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
          <span className={styles.actions}>
            <motion.span
              className={styles.favBtn}
              whileTap={{ scale: 1.2 }}
              onClick={handleWishList}>
              {isFavorite ? <FaHeart color='red' /> : <FaRegHeart />}
            </motion.span>
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
