import { Route, Routes, Navigate } from 'react-router-dom'

import Home from '../views/Home/Home'
import Cart from '../views/Cart/Cart'
import ProductDetails from '../views/ProductDetails/PrductDetails'
import Shop from '../views/Shop/Shop'
import Login from '../views/Login/Login'
import SignUp from '../views/Login/SignUp'
import Checkout from '../views/Checkout/Checkout'
import ProtectedRoute from './ProtectedRoute'
import Wishlist from '../views/Wishlist/Wishlist'
import Success from '../views/Success/Success'

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/home' />} />
      <Route path='/*' element={<Navigate to='/home' />} />
      <Route path='home' element={<Home />} />
      <Route path='shop' element={<Shop />} />
      <Route path='shop/:id' element={<ProductDetails />} />
      <Route path='cart' element={<Cart />} />
      <Route path='wishlist' element={<Wishlist />} />
      <Route path='login' element={<Login />} />
      <Route path='sign-up' element={<SignUp />} />
      <Route path='confirmed' element={<Success />} />

      <Route
        path='checkout'
        element={
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}

export default Routers
