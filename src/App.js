import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderRes from './pages/component/layout/headerRes'
import HeaderTP from './pages/component/layout/HeaderTP'
import Home from './pages/component/home'
import About from './pages/component/about'
import Product from './pages/component/product'
import ProductDetails from './pages/component/productDetails'
import Cart from './pages/component/cart'
import Checkout from './pages/component/checkout'
import Contact from './pages/component/contact'
import Terms from './pages/component/terms'
import Newslatter from './pages/component/newslatter';
import Thanks from './pages/component/thankYou'
import Footer from './pages/component/layout/footer'

// form
import Login from './pages/component/Form/login'
import Registration from './pages/component/Form/registration'
import PassReq from './pages/component/Form/passwordRecovery'

class App extends Component {
  render() {
    return (
      <div>
        <HeaderRes />
        <div className="page_top">
            <a href="/">
                <i className="fa fa-chevron-up scroll-icon"></i>
            </a> 
        </div>
         <div className="body-container">
          <HeaderTP />
          <Router>
            <Routes>
                <Route path = "/" exact element={<Home />}/>
                <Route path="/about" element={<About/>}/>
                <Route path = "/product" element={<Product />} />
                <Route path = "/product-details" element={<ProductDetails />} />
                <Route path = "/cart" element={<Cart />} />
                <Route path = "/checkout" element={<Checkout />} />
                <Route path = "/contact" element={<Contact />} />
                <Route path = "/terms" element={<Terms />} />
                <Route path = "/grettings" element={<Thanks />} />

                {/* form */}
                <Route path = "/login" element={<Login />} />
                <Route path = "/registration" element={<Registration />} />
                <Route path = "/password-recovery" element={<PassReq />} />
            </Routes>
          </Router>
          <Newslatter/>
          <Footer />
        </div>
      </div>
    )
  }
}
export default App;
