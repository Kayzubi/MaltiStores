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
import Clock from '../../components/Clock/Clock'

const Home = () => {
  const [trending, setTrending] = useState([])
  const [bestSales, setBestSales] = useState([])
  const [popular, setPopular] = useState([])

  useEffect(() => {
    const filteredTrending = products.filter(
      (item) => item.category === 'chair'
    )
    const filteredBestSales = products.filter(
      (item) => item.category === 'mobile'
    )

    const filteredPopular = products.filter((item) => item.category === 'watch')

    setTrending(filteredTrending)
    setBestSales(filteredBestSales)
    setPopular(filteredPopular)
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
              <h2 className='heading__secondary'>Trending Products</h2>
            </Col>
            <ProductList data={trending} />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className='heading__secondary'>Best Sales</h2>
            </Col>
            <ProductList data={bestSales} />
          </Row>
        </Container>
      </section>

      <section className={styles.counterSection}>
        <Container>
          <Row>
            <Col lg='6' md='6' className='text-start pt-5'>
              <img src={images.countDownImg} alt='' />
            </Col>
            <Col lg='6' md='6' className='pt-5 text-white'>
              <div className={styles.clockSectionTop}>
                <h4 className='mb-2 fs-6'>Limited Offer</h4>
                <h3 className='mb-3 fs-5'>Quality ArmChair</h3>
              </div>
              <Clock />
              <Link to={'/shop'}>
                <motion.button
                  whileTap={{ scale: 1.1 }}
                  className={styles.shopBtn}>
                  Visit store
                </motion.button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className='heading__secondary'>Popular Products</h2>
            </Col>
            <ProductList data={popular} />
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Home
