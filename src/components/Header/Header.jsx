import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Row } from 'reactstrap'
import { images, icons } from '../../assets/images'
import styles from './header.module.scss'
import { FaHeart, FaShoppingCart } from 'react-icons/fa'

const Header = () => {
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
  return (
    <div>
      <Container>
        <Row>
          <div className={styles.navWrapper}>
            <div>
              <img src={images.logo} alt='logo' />
              <div>
                <h1>MultiStores</h1>
                <p>Since 1997</p>
              </div>
            </div>
            <div>
              <ul>
                {navLinks.map((item, i) => (
                  <li>
                    <NavLink
                      className={(navClass) => (navClass.isActive ? '' : '')}
                      key={i}
                      to={item.path}>
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span>
                <FaHeart />
              </span>
              <span>
                <FaShoppingCart />
              </span>
              <span>
                <img src={icons.userIcon} alt='user' />
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  )
}

export default Header
