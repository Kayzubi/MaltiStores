import React, { useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Link, useNavigate } from 'react-router-dom'

import Helmet from '../../components/Helmet/Helmet'

import { logInWithEmail } from '../../Authorization'

import { images } from '../../assets/images'
import styles from './login.module.scss'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const signIn = async (e) => {
    e.prevendDefault()
    setLoading(true)

    const user = await logInWithEmail(email, password)

    if (!user) {
      setLoading(false)
    } else {
      setLoading(false)
      navigate('/home')
      console.log(user)
    }
  }

  return (
    <Helmet title='Login'>
      <section className='mt-1'>
        <Container>
          <div className={styles.formContainer}>
            <Row>
              {loading ? (
                <Col lg='12'>
                  <h6 className='text-center'>Loading...</h6>
                </Col>
              ) : (
                <>
                  <Col lg='6'>
                    <div className={styles.loginSection}>
                      <h5>Welcome back!</h5>
                      <p>Sign in to your account to continue</p>

                      <form
                        action=''
                        className={styles.loginForm}
                        onSubmit={signIn}>
                        <div className={styles.formGroup}>
                          <input
                            type='text'
                            placeholder='Email'
                            id='email'
                            name='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />

                          <label htmlFor='email'>Email</label>
                        </div>
                        <div className={styles.formGroup}>
                          <input
                            type='password'
                            placeholder='Password'
                            id='password'
                            name='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />

                          <label htmlFor='password'>Password</label>
                        </div>

                        <p>
                          Don't have an account?{' '}
                          <span className={styles.switch}>
                            <Link to={'/sign-up'}>Create one here</Link>{' '}
                          </span>
                        </p>

                        <button type='submit' className='buyBtn w-100'>
                          Log in
                        </button>
                      </form>
                    </div>
                  </Col>
                  <Col lg='6' className={styles.imageSection}>
                    <div className={styles.loginImg}>
                      <div className={styles.logo}>
                        <h1>Maltistores</h1>
                        <p>since 1997</p>
                      </div>
                      <div className={styles.cover}></div>
                      <img src={images.loginImg} alt='' />
                    </div>
                  </Col>
                </>
              )}
            </Row>
          </div>
        </Container>
      </section>
    </Helmet>
  )
}

export default Login
