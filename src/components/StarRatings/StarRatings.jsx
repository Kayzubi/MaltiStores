import React from 'react'
import { FaStar, FaRegStar } from 'react-icons/fa'
import styles from './starRating.module.scss'

const StarRatings = ({ rating }) => {
  const ratingPercent = (rating / 5) * 100
  return (
    <div className={styles.rating}>
      <div className={styles.empty}>
        <span>
          <FaRegStar />
        </span>
        <span>
          <FaRegStar />
        </span>
        <span>
          <FaRegStar />
        </span>
        <span>
          <FaRegStar />
        </span>
        <span>
          <FaRegStar />
        </span>
      </div>
      <div className={styles.filled} style={{ width: `${ratingPercent}%` }}>
        <span>
          <FaStar />
        </span>
        <span>
          <FaStar />
        </span>
        <span>
          <FaStar />
        </span>
        <span>
          <FaStar />
        </span>
        <span>
          <FaStar />
        </span>
      </div>
    </div>
  )
}

export default StarRatings
