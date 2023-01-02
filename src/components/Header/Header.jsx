import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Row } from 'reactstrap'
import { images, icons } from '../../assets/images'
import styles from './header.module.scss'
import { FaHeart, FaShoppingCart, FaBars } from 'react-icons/fa'

import { motion } from 'framer-motion'
import { useEffect } from 'react'

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

  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add(`${styles.stickyHeader}`)
      } else {
        headerRef.current.classList.remove(`${styles.stickyHeader}`)
      }
    })
  }

  useEffect(() => {
    stickyHeaderFunc()

    return () => window.removeEventListener('scroll', stickyHeaderFunc)
  }, [])

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
            <div className={styles.navigation}>
              <ul>
                {navLinks.map((item, i) => (
                  <li key={i}>
                    <NavLink
                      className={(navClass) =>
                        navClass.isActive ? `${styles.activeNav}` : ''
                      }
                      to={item.path}>
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.navIcons}>
              <span className={styles.icon}>
                <FaHeart />
                <span className={styles.badge}>1</span>
              </span>
              <span className={styles.icon}>
                <FaShoppingCart />
                <span className={styles.badge}>1</span>
              </span>
              <span className={styles.userImage}>
                <motion.img
                  whileTap={{ scale: 1.2 }}
                  src={icons.userIcon}
                  alt='user'
                />
              </span>
            </div>
            <div className={styles.menu}>
              <FaBars />
            </div>
          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header
