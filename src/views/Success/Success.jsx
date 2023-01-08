import React from 'react'
import Helmet from '../../components/Helmet/Helmet'
import confirmed from '../../assets/images/confirmed.gif'

import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

import { Container } from 'reactstrap'
import { useEffect } from 'react'

const Success = () => {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  })
  return (
    <Helmet title='COnfirmed'>
      <section className='mt-4'>
        <Container>
          <div className='text-center'>
            <div className='mb-3'>
              <img src={confirmed} alt='' />
            </div>
            <h1 className='fs-3 fw-bold text-center'>
              Thank you for shopping!
            </h1>
            <p className='mt-3'>Your order is now being processed</p>
            <div className='d-flex align-items-center justify-content-center gap-5'>
              <motion.button
                whileTap={{ scale: 1.2 }}
                className='shopBtn'
                onClick={() => navigate('/home')}>
                Go to home
              </motion.button>
              <motion.button
                whileTap={{ scale: 1.2 }}
                className='buyBtn'
                onClick={() => navigate('/shop')}>
                Continue shopping
              </motion.button>
            </div>
          </div>
        </Container>
      </section>
    </Helmet>
  )
}

export default Success
