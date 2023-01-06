import React, { useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Link } from 'react-router-dom'

import Helmet from '../../components/Helmet/Helmet'

import { images } from '../../assets/images'
import styles from './login.module.scss'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [file, setFile] = useState(null)

  return (
    <Helmet title='Login'>
      <section className='mt-1'>
        <Container>
          <div className={styles.formContainer}>
            <Row>
              <Col lg='6'>
                <div className={styles.loginSection}>
                  <h5>Create an account</h5>
                  <p>Create a free account to continue</p>

                  <form action='' className={styles.loginForm}>
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

                    <div className={styles.formFile}>
                      <input
                        type='file'
                        placeholder=''
                        id='profileImg'
                        name='profileImg'
                        value={file}
                        onChange={(e) => setFile(e.target.files[0])}
                      />

                      <label htmlFor='profileImg'>Upload Profile Picture</label>
                    </div>

                    <p>
                      Already have an account?{' '}
                      <span className={styles.switch}>
                        <Link to={'/login'}>Log in here</Link>{' '}
                      </span>
                    </p>

                    <button type='submit' className='buyBtn w-100'>
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
            </Row>
          </div>
        </Container>
      </section>
    </Helmet>
  )
}

export default SignUp
