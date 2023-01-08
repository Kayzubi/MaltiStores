import React, { useRef, useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Container, Row } from 'reactstrap'
import { images, icons } from '../../assets/images'
import styles from './header.module.scss'
import { FaRegHeart } from 'react-icons/fa'
import {
  HiOutlineMenuAlt3,
  HiOutlineX,
  HiOutlineShoppingCart,
} from 'react-icons/hi'

import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'

import { signOut } from 'firebase/auth'
import { auth } from '../../firebase.config'
import useAuth from '../../CustomHooks/useAuth'
import { toast } from 'react-toastify'

const navLinks = [
  {
    path: 'home',
    display: 'Home',
  },
  {
    path: 'shop',
    display: 'Shop',
  },
  {
    path: 'cart',
    display: 'Cart',
  },
]

const Header = () => {
  const headerRef = useRef(null)
  const navbarRef = useRef(null)
  const [navOpen, setNavOpen] = useState(false)

  const { currentUser } = useAuth()

  const navigate = useNavigate()

  const totalQuantity = useSelector((state) => state.cart.totalQuantity)
  const totalFavorites = useSelector((state) => state.wishList.totalQuantity)

  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef?.current.classList.add(`${styles.stickyHeader}`)
      } else {
        headerRef?.current.classList.remove(`${styles.stickyHeader}`)
      }
    })
  }

  const logOut = () => {
    signOut(auth)
      .then(() => {
        toast.success('Signed out')
      })
      .catch((err) => {
        toast.error(err.message)
      })
  }

  useEffect(() => {
    stickyHeaderFunc()

    return () => window.removeEventListener('scroll', stickyHeaderFunc)
  }, [])

  const navToggle = () => {
    navbarRef.current.classList.toggle(`${styles.activeNavigation}`)
    setNavOpen(!navOpen)
  }

  return (
    <header ref={headerRef}>
      <Container>
        <Row>
          <div className={styles.navWrapper}>
            <div className={styles.logo}>
              <img src={images.logo} alt='logo' />
              <div>
                <h1>MaltiStores</h1>
                <p>Since 1997</p>
              </div>
            </div>
            <div
              className={styles.navigation}
              ref={navbarRef}
              onClick={navToggle}>
              <ul>
                {navLinks.map((item, index) => (
                  <li key={index}>
                    <NavLink
                      className={(navClass) =>
                        navClass.isActive ? `${styles.activeNav}` : ''
                      }
                      to={item.path}>
                      {item.display}
                    </NavLink>
                  </li>
                ))}
                <>
                  {currentUser ? (
                    <li className={styles.mobileBtn}>
                      <button className={styles.btnSignOut} onClick={logOut}>
                        Sign out
                      </button>
                    </li>
                  ) : (
                    <li className={styles.mobileBtn}>
                      <button
                        className={styles.btnSignIn}
                        onClick={() => navigate('/sign-up')}>
                        Sign up
                      </button>
                      <button
                        className={styles.btnSignUp}
                        onClick={() => navigate('/login')}>
                        Log in
                      </button>
                    </li>
                  )}
                </>
              </ul>
            </div>
            <div className={styles.navIcons}>
              <span className={styles.icon}>
                <FaRegHeart />
                {totalFavorites !== 0 && (
                  <span className={styles.badge}>{totalFavorites}</span>
                )}
              </span>
              <span className={styles.icon} onClick={() => navigate('/cart')}>
                <HiOutlineShoppingCart />
                {totalQuantity !== 0 && (
                  <span className={styles.badge}>{totalQuantity}</span>
                )}
              </span>
              {!currentUser ? (
                <span className={styles.deskBtn}>
                  <motion.button
                    whileTap={{ scale: 1.2 }}
                    className={styles.btnSignIn}
                    onClick={() => navigate('/sign-up')}>
                    Sign up
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 1.2 }}
                    className={styles.btnSignUp}
                    onClick={() => navigate('/login')}>
                    Log in
                  </motion.button>
                </span>
              ) : (
                <>
                  <span className={styles.greeting}>
                    Hi, {currentUser.displayName}
                  </span>
                  <span className={styles.userImage}>
                    <motion.img
                      whileTap={{ scale: 1.2 }}
                      src={icons.userIcon}
                      alt='user'
                    />
                  </span>
                  <span className={styles.deskBtn}>
                    <motion.button
                      whileTap={{ scale: 1.2 }}
                      className={styles.btnSignOut}
                      onClick={logOut}>
                      Sign out
                    </motion.button>
                  </span>
                </>
              )}

              <div onClick={navToggle} className={styles.menuIcon}>
                {!navOpen ? <HiOutlineMenuAlt3 /> : <HiOutlineX color='#fff' />}
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header
