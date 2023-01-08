import React, { useState, useEffect } from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Link, useNavigate } from 'react-router-dom'

import { FaExclamationCircle } from 'react-icons/fa'

import { createEmailAccount, logInWithEmail } from '../../Authorization'

import Helmet from '../../components/Helmet/Helmet'
import Loader from '../../components/Loader/Loader'

import { images } from '../../assets/images'
import styles from './login.module.scss'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [loading, setLoading] = useState(false)

  const formValues = {
    username: username,
    email: email,
    password: password,
  }

  const [formErrors, setFormErrors] = useState({})

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    const valid = validateForm(formValues)

    if (valid) {
      signUpWithEmail()
    }
  }

  const signUpWithEmail = async (e) => {
    setLoading(true)

    const obj = {
      email,
      password,
      username,
    }
    const user = await createEmailAccount(obj)

    if (!user) {
      setLoading(false)
    } else {
      logInWithEmail(email, password)
      setLoading(false)
      navigate('/')
    }
  }

  const validateForm = (values) => {
    const errors = {}
    let valid = true
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
    const passwordRe = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/gm

    if (!values.username) {
      errors.username = 'Username cannot be empty'
    }
    if (!values.email) {
      errors.email = 'Email cannot be empty'
      valid = false
    } else if (!regex.test(values.email)) {
      errors.email = 'Enter a valid email'
      valid = false
    }
    if (!passwordRe.test(values.password)) {
      errors.password = `Password must have at least 8 characters, must contain at least 1 uppercase letter 1 lowercase letter, and 1 number, Can contain special characters`
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
                      <h5>Create an account</h5>
                      <p>Create a free account to continue</p>

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
                            placeholder='Username'
                            id='username'
                            name='username'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                          />

                          <label htmlFor='email'>Username</label>
                        </div>
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
                          Already have an account?{' '}
                          <span className={styles.switch}>
                            <Link to={'/login'}>Log in here</Link>{' '}
                          </span>
                        </p>

                        <button type='submit' className='buyBtn w-100 mt-3'>
                          sign up
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

export default SignUp
