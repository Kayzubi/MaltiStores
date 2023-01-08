import React, { useState, useEffect } from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Link, useNavigate } from 'react-router-dom'

import Helmet from '../../components/Helmet/Helmet'
import Loader from '../../components/Loader/Loader'

import { logInWithEmail } from '../../Authorization'
import { FaExclamationCircle } from 'react-icons/fa'
import { images } from '../../assets/images'
import styles from './login.module.scss'
import { toast } from 'react-toastify'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const formValues = {
    email: email,
    password: password,
  }

  const [formErrors, setFormErrors] = useState({})

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    let valid = validateForm(formValues)

    if (valid) {
      signIn()
    }
  }

  const signIn = async () => {
    setLoading(true)
    const user = await logInWithEmail(email, password)
    if (user) {
      toast.success('Signed in successfully')
      setLoading(false)
      navigate('/')
    } else {
      setLoading(false)
    }
  }

  const validateForm = (values) => {
    const errors = {}
    let valid = true
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i

    if (!values.email) {
      errors.email = 'Email cannot be empty'
      valid = false
    } else if (!regex.test(values.email)) {
      errors.email = 'Enter a valid email'
      valid = false
    }
    if (!values.password) {
      errors.password = 'Please enter a password'
      valid = false
    }

    setFormErrors(errors)
    return valid
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Helmet title='Login'>
      <section className='mt-1'>
        <Container>
          <div className={styles.formContainer}>
            <Row>
              {loading ? (
                <Col
                  lg='12'
                  className='d-flex justify-content-center align-items-center'>
                  <Loader />
                </Col>
              ) : (
                <>
                  <Col lg='6'>
                    <div className={styles.loginSection}>
                      <h5>Welcome back!</h5>
                      <p>Sign in to your account to continue</p>

                      {Object.keys(formErrors).length !== 0 && (
                        <div className='mt-4'>
                          {Object.keys(formErrors).map((key) => (
                            <p
                              key={key}
                              className='error d-flex gap-2 align-items-center mb-2'>
                              <FaExclamationCircle /> {formErrors[key]}
                            </p>
                          ))}
                        </div>
                      )}

                      <form
                        action=''
                        className={styles.loginForm}
                        onSubmit={handleSubmit}>
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
