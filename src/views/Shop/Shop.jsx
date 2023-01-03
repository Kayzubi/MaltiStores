import React, { useState } from 'react'
import Helmet from '../../components/Helmet/Helmet'
import CommonSection from '../../components/CommonSection/CommonSection'
import { Col, Container, Row } from 'reactstrap'
import { HiOutlineSearch } from 'react-icons/hi'
import styles from './shop.module.scss'
import ProductList from '../../components/ProductList/ProductList'

import products from '../../assets/data/products'

const Shop = () => {
  const [productsData, setProductsData] = useState(products)

  const handleFilter = (e) => {
    const filterValue = e.target.value

    const filteredProducts = products.filter(
      (item) => item.category === filterValue
    )

    if (filteredProducts.length !== 0) {
      setProductsData(filteredProducts)
    } else {
      setProductsData(products)
    }
  }

  const handleSearch = (e) => {
    const searchParam = e.target.value

    const searchedProducts = products.filter((item) =>
      item.productName.toLowerCase().includes(searchParam.toLowerCase())
    )

    setProductsData(searchedProducts)
  }

  return (
    <Helmet title='Shop'>
      <CommonSection title={'Products'} />

      <section>
        <Container>
          <Row>
            <Col lg='3' md='3'>
              <div className={styles.filterOptions}>
                <select name='' id='' onChange={handleFilter}>
                  <option value=''>Filter by Category</option>
                  <option value='sofa'>Sofa</option>
                  <option value='mobile'>Mobile</option>
                  <option value='chair'>Chair</option>
                  <option value='watch'>Watch</option>
                  <option value='wireless'>Wireless</option>
                </select>
              </div>
            </Col>
            <Col lg='3' md='3'>
              <div className={styles.filterOptions}>
                <select name='' id=''>
                  <option disabled>Sort by:</option>
                  <option value='ascending'>Ascending</option>
                  <option value='descending'>Descending</option>
                </select>
              </div>
            </Col>
            <Col lg='6' md='6'>
              <div className={styles.searchBox}>
                <input
                  type='text'
                  placeholder='Search products....'
                  onChange={handleSearch}
                />
                <span>
                  <HiOutlineSearch />
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            {productsData.length === 0 ? (
              <>
                <h1 className={styles.large}>No Products Found</h1>
                <p className='text-center fs-6 mt-3'>
                  Try searching for something else...
                </p>
              </>
            ) : (
              <ProductList data={productsData} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Shop
