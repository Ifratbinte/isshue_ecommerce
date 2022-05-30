import React, { Component } from 'react'
import HeroSection from './slider/heroCarousel'
import BestSale from './product/bestSale'
import NewProduct from './product/newProduct'
import Popular from './product/popular'
import Brand from './slider/slick/brandSlider'
import SearchSmall from './Form/searchSmall'
import Gadget from './Collection/gadget'
import Fashion from './Collection/fashion'
import Electronics from './product/electronics'
import WinterCollection from './product/winterCollection'
class Home extends Component {

    
  render() {
    return (
      <div className='top-res-gap'>

        {/* Hero Slider */}
        <div class="hero-slider position-relative">
          <div class="header-slider">
            <div class="animation-slide">
                <HeroSection />
            </div>
          </div>
        </div>
        

        {/* Feature - Electronics */}
        <div className="Feature py-5">
            <div className="container">
                <Electronics/>
            </div>
        </div>

        {/* Women fashion */}
        <div className="women-fasion bg-gray py-5">
            <div className="container">
                <div className="row align-items-center justify-content-center justify-content-sm-between mb-5 mb-sm-2">
                    <div className="col-12 col-sm-auto text-center text-sm-left mb-2 mb-sm-0">
                        <a href=""><h3 className="category-headdin">Women's Fashion</h3></a>
                    </div>
                    {/* <div className="col-8 col-sm-5 col-md-4 col-lg-3">
                        <SearchSmall/>            
                    </div> */}
                </div>
                <div className="headding-border position-relative mb-4 d-none d-sm-block"></div>
                <div className="row">
                    <div className="col-md-5 col-lg-6">
                        <div className="img-area position-relative bg-white border p-4 p-lg-5 mb-3 mb-md-0">
                            <div className="img-area_header mb-2">
                                <p className="mb-1">Women's Fashion</p>
                                <h3 className="img-area_header-title mb-0">Hoodies -Wireless Audio System Multiroom 360 degree</h3>
                                <div class="product-offer-label d-flex align-items-center justify-content-center text-white flex-column position-absolute shadow">
                                    <span class="mb-1 offer-percent">10%</span> 
                                    <small class="offer-text">Offers</small>
                                </div>
                            </div>
                            
                            <div className="img">
                                <a href="/product-details">
                                    <img className="img-fluid" src="assets/img/isshue/thumb/thumb-5.jpg" alt="E-book Reader - Now with a Built-in Front Light - White"/>
                                </a>
                            </div>
                            <div className="text-block">
                                <p className="body-copy text-block_des overflow-hidden">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et fermentum dui. Ut orci quam, ornare sed lorem sed, hendrerit auctor dolor. Nulla viverra </p>
                                <div className="link">
                                    <a href="/product-details" className="link-text text-uppercase">Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7 col-lg-6">
                        <Fashion />
                    </div>
                </div>
            </div>
        </div>
        
        {/*Feature - Winter collection */}
        <div className="Feature py-5">
            <div className="container">
                <WinterCollection/>
            </div>
        </div>

        {/* Gadget */}
        <div className="bg-gray gadget-section py-5">
            <div className="container">
                <div className="row align-items-center justify-content-center justify-content-sm-between mb-5 mb-sm-2">
                    <div className="col-12 col-sm-auto text-center text-sm-left mb-2 mb-sm-0">
                        <a href=""><h3 className="category-headdin">Gadget & Gear</h3></a>
                    </div>
                    {/* <div className="col-8 col-sm-5 col-md-4 col-lg-3">
                        <SearchSmall/>            
                    </div> */}
                </div>
                <div className="headding-border position-relative mb-4 d-none d-sm-block"></div>

                <div className="row">
                    <div className="col-md-5 col-lg-6">
                        <div className="img-area position-relative bg-white border p-4 p-lg-5 mb-3 mb-md-0">
                            <div className="img-area_header mb-2">
                                <p className="mb-1">Gadget &amp; Gear</p>
                                <h3 className="img-area_header-title mb-0">E-book Reader - Now with a Built-in Front Light - White</h3>
                            </div>
                            <div className="img">
                                <a href="/product-details">
                                    <img className="img-fluid" src="assets/img/isshue/thumb/thumb-1.png" alt="E-book Reader - Now with a Built-in Front Light - White"/>
                                </a>
                            </div>
                            <div className="text-block">
                                <p className="body-copy text-block_des overflow-hidden">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et fermentum dui. Ut orci quam, ornare sed lorem sed, hendrerit auctor dolor. Nulla viverra </p>
                                <div className="link">
                                    <a href="/product-details" className="link-text text-uppercase">Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7 col-lg-6">
                        <Gadget />
                    </div>
                </div>
            </div>
        </div>

        {/* Best Sale Product */}
        <div className="product-sale">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-sm-6 mb-3 mb-md-0">
                        <h3 className="category-headding">Best sale Product</h3>
                        <div className="headding-border"></div>
                        <BestSale />
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-3 mb-md-0">
                        <h3 className="category-headding">New Product</h3>
                        <div className="headding-border"></div>
                        <NewProduct />
                    </div>
                    <div className="col-lg-4 col-md-6 mb-3 mb-md-0">
                        <h3 className="category-headding">Most Popular Product</h3>
                        <div className="headding-border"></div>
                        <Popular />
                    </div>
                </div>
            </div>
        </div>

        {/* Brand Slider */}
        <div className="brand-sectionh">
            <div className="container mt-1 mb-5">
                <div className="brand px-4 py-4">
                    <Brand/>
                </div>
            </div>
        </div>

      </div>

    )
  }
}
export default Home;