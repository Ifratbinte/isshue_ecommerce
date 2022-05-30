import React, { Component } from 'react'
import IncrementDecrement from '../cart/incrementDecrement';

class ProductDetailsContent extends Component {
    
  render() {
    return (
        <div className="col-lg-7">
            <div className="product-desc">
                <h2 className='product-price'>$ 13.30</h2>
                <h6>Status: <span>Out of Stock</span></h6>
                <hr />
                <p className='py-2 desc'>Nam tempus turpis at metus scelerisque placerat nulla deumantos s
                olicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. 
                Sedcus faucibus an sullamcorper mattis drostique…</p>
                
                    
                <div className="cart-product-qunty d-flex align-items-center">
                    <IncrementDecrement/>
                    <a href="/cart" className='button-primary ml-4'><i className="fa fa-cart-plus"></i> Add to Cart</a>
                    <div className="ml-2 wishlist">
                        <a href="/cart"><i className="fa fa-heart-o" aria-hidden="true"></i></a>
                    </div>  
                </div>
                <hr />
                <div className="single-category">
                    <h5>Category : <a href="/product">Electronics</a></h5>
                </div>
            </div>
        </div>
    )
  }
}
export default ProductDetailsContent;