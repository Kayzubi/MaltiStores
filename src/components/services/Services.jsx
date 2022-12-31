import React from 'react'

import serviceData from '../../assets/data/serviceData'
import styles from './services.module.scss'

import { motion } from 'framer-motion'

import { Container, Row, Col } from 'reactstrap'

const Services = () => {
  return (
    <section className={styles.servicesSection}>
      <Container>
        <Row>
          {serviceData.map((item, index) => (
            <Col lg='3' md='4' key={index}>
              <motion.div
                whileHover={{ scale: 1.2 }}
                className={styles.service}>
                <span>{item.icon}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Services
