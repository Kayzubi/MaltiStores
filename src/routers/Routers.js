import { Route, Routes, Navigate } from 'react-router-dom'

import Home from '../views/Home/Home'
import Cart from '../views/Cart/Cart'
import ProductDetails from '../views/ProductDetails/PrductDetails'
import Shop from '../views/Shop/Shop'
import Login from '../views/Login/Login'
import SignUp from '../views/Login/SignUp'
import Checkout from '../views/Checkout/Checkout'
import ProtectedRoute from './ProtectedRoute'

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/home' />} />
      <Route path='/*' element={<Navigate to='/home' />} />
      <Route path='home' element={<Home />} />
      <Route path='shop' element={<Shop />} />
      <Route path='shop/:id' element={<ProductDetails />} />
      <Route path='cart' element={<Cart />} />
      <Route path='login' element={<Login />} />
      <Route path='sign-up' element={<SignUp />} />
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
