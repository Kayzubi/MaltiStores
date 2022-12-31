import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import products from '../../assets/data/products'

import Helmet from '../../components/Helmet/Helmet'
import { images } from '../../assets/images'
import styles from './home.module.scss'

import { Container, Row, Col } from 'reactstrap'
import Services from '../../components/services/Services'
import ProductList from '../../components/ProductList/ProductList'

const Home = () => {
  const [data, setData] = useState(products)

  useEffect(() => {
    const filteredData = products.filter((item) => item.category === 'mobile')

    setData(filteredData)
  }, [])

  const year = new Date().getFullYear()
  return (
    <Helmet title='Home'>
      <section className={styles.heroSection}>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className={styles.heroContent}>
                <div>
                  <p>Trending products in {year}</p>
                  <h2>Make your interior more minimalistic & modern</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Itaque officia consectetur sint esse ad error vitae labore
                    tenetur iste ducimus.
                  </p>
                  <Link to={'/shop'}>
                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 1.1 }}
                      className={styles.buyBtn}>
                      Shop now
                    </motion.button>
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg='6' md='6'>
              <img src={images.heroImg} alt='' />
            </Col>
          </Row>
        </Container>
      </section>
      <Services />
      <section>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2>Trending Products</h2>
            </Col>
            <ProductList data={data} />
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Home
