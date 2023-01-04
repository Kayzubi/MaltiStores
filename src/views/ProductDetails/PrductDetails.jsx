import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

import { motion, AnimatePresence } from 'framer-motion'
import { Container, Row, Col } from 'reactstrap'
import { FaStar, FaRegStar } from 'react-icons/fa'

import Helmet from '../../components/Helmet/Helmet'
import CommnSection from '../../components/CommonSection/CommonSection'
import ProductList from '../../components/ProductList/ProductList'
import products from '../../assets/data/products'
import styles from './productDetails.module.scss'
import StarRatings from '../../components/StarRatings/StarRatings'

const ratings = [1, 2, 3, 4, 5]

const PrductDetails = () => {
  const { id } = useParams()
  const product = products.find((item) => item.id === id)
  const [tab, setTab] = useState('desc')
  const [rating, setRating] = useState(0)

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
  }

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

                <p className={styles.price}>${price}</p>
                <p className={styles.shortDes}>{shortDesc}</p>

                <motion.button whileTap={{ scale: 1.2 }} className='buyBtn'>
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
                        {reviews.map((item) => (
                          <li className={styles.review}>
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
                      <div className={styles.formGroup}>
                        <input type='text' placeholder='Full name....' />
                      </div>
                      <div className='d-flex gap-2 mt-3 mb-3'>
                        {ratings.map((item) => (
                          <span
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
                          placeholder='Leave a message...'></textarea>
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
