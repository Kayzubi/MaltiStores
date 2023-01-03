import React from 'react'
import PropTypes from 'prop-types'
import styles from './commonSection.module.scss'

const CommonSection = ({ title }) => {
  return (
    <section className={styles.commonSection}>
      <h1>{title}</h1>
    </section>
  )
}

CommonSection.propTypes = {
  title: PropTypes.string.isRequired,
}

export default CommonSection
