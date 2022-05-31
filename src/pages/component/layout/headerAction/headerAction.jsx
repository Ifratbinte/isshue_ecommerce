import React, { Component } from 'react'

class HeaderAction extends Component {
  render() {
    return (
        <ul className="navbar-tool-list">
            <li className="navbar-tool">
                <a className="navbar-tool-icon-box bg-secondary" href="/compare">
                    <span className="navbar-tool-label">0</span>
                    <i className="fa fa-exchange" aria-hidden="true"></i>
                </a>
                <a className="navbar-tool-text d-none d-xl-block" href="/compare"><small>Product</small><br />Compare</a>
            </li>
            <li className="navbar-tool">
                <a className="navbar-tool-icon-box bg-secondary" href="#">
                    <span className="navbar-tool-label " id="wishlist-counter">0</span>
                    <i className="fa fa-heart-o" aria-hidden="true"></i>
                </a>
                <a href="#"className="navbar-tool-text d-none d-xl-block"><small>Favorites</small><br />Wishlist</a>
            </li>
            <li className="navbar-tool cart-box-wrapper">
                <a className="navbar-tool-icon-box bg-secondary" href="#">
                    <span className="navbar-tool-label " id="cart-counter">0</span>
                    <i className="fa fa-cart-plus" aria-hidden="true"></i>
                </a>
                <a href="/cart"className="navbar-tool-text d-none d-xl-block"><small>Cart</small><br />$ 50.10</a>
                
                <div className="cart-dropdown">
                    <div className="cart-scroll-content">
                        <div className="single-cart-item d-flex">
                            <a href="/" className="cart-first-child">
                                <div className="cart-item-content media">
                                    <img src="assets/img/isshue/product/category_2/product_10.jpg" alt="" className=""/>
                                    <div className="d-flex align-items-center">
                                        <div className="cart-p-price media-body">
                                            <h6 className="">Bangless 5 -Nine West Silver-Tone and Floater Quisque de </h6>
                                            <p className='text-muted'>1 x $ 100.43</p>
                                        </div>
                                        <div className="deletebtn"><i className="fa fa-close"></i></div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="single-cart-item d-flex">
                            <a href="/">
                                <div className="cart-item-content media">
                                    <img src="assets/img/isshue/product/category_1/product_1.jpg" alt="" className=""/>
                                    <div className="d-flex align-items-center">
                                        <div className="cart-p-price media-body">
                                            <h6 className="">High hill - Calvin Klein Women's Brady Pump</h6>
                                            <p className='text-muted'>2 x $ 50.15</p>
                                        </div>
                                        <div className="deletebtn"><i className="fa fa-close"></i></div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="cart-item-amount">
                        <div className="cart-amount">
                            <strong>Total :</strong>
                            <span className="price-currency"> $ 113.43 </span>
                        </div>
                    </div>
                    <div className="row no-gutters cart-button p-3">
                        <div className="col pr-2">
                            <a className="btn btn-block btn-success" href="/cart">View Cart</a>
                        </div>
                        <div className="col pl-2">
                            <a className="btn btn-block btn-success"href="/checkout">Checkout</a>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    )
  }
}
export default HeaderAction;
