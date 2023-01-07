import React from 'react'
import Ball from '../../assets/images/Ball-1s-200px.gif'
import styles from './loader.module.scss'

const Loader = () => {
  return (
    <div className={styles.loader}>
      <img src={Ball} alt='' />
      <h1>Loading....</h1>
    </div>
  )
}

export default Loader
