import React, { useState, useRef } from 'react'
import { useParams } from 'react-router-dom'

import { motion, AnimatePresence } from 'framer-motion'
import { Container, Row, Col } from 'reactstrap'
import { FaStar, FaRegStar } from 'react-icons/fa'
import { toast } from 'react-toastify'

import Helmet from '../../components/Helmet/Helmet'
import CommnSection from '../../components/CommonSection/CommonSection'
import ProductList from '../../components/ProductList/ProductList'
import products from '../../assets/data/products'
import styles from './productDetails.module.scss'
import StarRatings from '../../components/StarRatings/StarRatings'

import { useDispatch } from 'react-redux'
import { cartActions } from '../../redux/slices/cartSlice'

const ratings = [1, 2, 3, 4, 5]

const PrductDetails = () => {
  const { id } = useParams()
  const product = products.find((item) => item.id === id)
  const [tab, setTab] = useState('desc')
  const [rating, setRating] = useState(0)

  const dispatch = useDispatch()

  const userRef = useRef('')
  const messageRef = useRef('')

  const {
    productName,
    imgUrl,
    avgRating,
    price,
    shortDesc,
    description,
    reviews,
    category,
  } = product

  const relatedProducts = products.filter((item) => item.category === category)

  const handleReviewSubmit = (e) => {
    e.preventDefault()

    const user = userRef.current.value
    const text = messageRef.current.value

    const reviewObj = {
      user,
      text,
      rating,
    }

    console.log(reviewObj)
    toast.success('Review submitted successfully')
  }

  const addToCart = () => {
    dispatch(cartActions.addItem(product))
    toast.success('Product Added Successfully')
  }

  const numberWithCommas = (x) => {
    const newX = x * 503
    return newX.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  const newPrice = numberWithCommas(price)

  return (
    <Helmet title={productName}>
      <CommnSection title={productName} />

      <AnimatePresence>
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          layout>
          <Container>
            <Row>
              <Col lg='6'>
                <img src={imgUrl} alt='' />
              </Col>
              <Col lg='6'>
                <h1 className={styles.productName}>{productName}</h1>
                <div className='d-flex align-items-center gap-4'>
                  <StarRatings rating={avgRating} />
                  <p className={styles.rating}>
                    (<span style={{ color: 'coral' }}>{avgRating} </span>
                    ratings)
                  </p>
                </div>

                <p className={styles.price}>₦{newPrice}</p>
                <p className={styles.shortDes}>{shortDesc}</p>

                <motion.button
                  whileTap={{ scale: 1.2 }}
                  className='buyBtn'
                  onClick={addToCart}>
                  ADD TO CART
                </motion.button>
              </Col>
              <Col lg='12' className='d-flex align-items-center gap-5 mt-4'>
                <h6
                  className={
                    tab === 'desc' ? `${styles.activeTab}` : `${styles.tab}`
                  }
                  onClick={() => setTab('desc')}>
                  Description
                </h6>
                <h6
                  className={
                    tab === 'rev' ? `${styles.activeTab}` : `${styles.tab}`
                  }
                  onClick={() => setTab('rev')}>
                  Reviews({reviews.length})
                </h6>
              </Col>
              <div className='mt-5 mb-5'>
                {tab === 'desc' ? (
                  <p className={styles.description}>{description}</p>
                ) : (
                  <div>
                    {reviews.length === 0 ? (
                      <h6 className='text-center fs-4 '>No reviews</h6>
                    ) : (
                      <ul className={styles.productReviews}>
                        {reviews.map((item, index) => (
                          <li className={styles.review} key={index}>
                            <span>{item.rating} rating</span>
                            <div>
                              <p>{item.user}</p>
                              <p>{item.text}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}

                    <form
                      action='#'
                      onSubmit={handleReviewSubmit}
                      className={styles.reviewForm}>
                      <h6 className='heading__secondary mb-4'>
                        Leave a message
                      </h6>
                      <div className={styles.formGroup}>
                        <input
                          type='text'
                          placeholder='Full name....'
                          ref={userRef}
                        />
                      </div>
                      <div className='d-flex gap-2 mt-3 mb-3'>
                        {ratings.map((item) => (
                          <span
                            key={item}
                            className='d-flex gap-1 align-items-center fs-6'
                            onClick={() => setRating(item)}>
                            {item}
                            {rating === item ? <FaStar /> : <FaRegStar />}
                          </span>
                        ))}
                      </div>
                      <div className={styles.formGroup}>
                        <textarea
                          cols='30'
                          rows='7'
                          placeholder='Leave a message...'
                          ref={messageRef}></textarea>
                      </div>

                      <motion.button
                        type='submit'
                        className='buyBtn'
                        whileTap={{ scale: 1.2 }}>
                        Submit
                      </motion.button>
                    </form>
                  </div>
                )}
              </div>
              <Col lg='12'>
                <h6 className='heading__secondary'>You might also like</h6>
              </Col>
              <ProductList data={relatedProducts} />
            </Row>
          </Container>
        </motion.section>
      </AnimatePresence>
    </Helmet>
  )
}

export default PrductDetails
