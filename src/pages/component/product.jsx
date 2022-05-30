import React, { Component } from 'react'
import ProductPageleft from './product/productPageleft'
import ProductPageRight from './product/productPageRight';

class Product extends Component {
  render() {
    return (
      <section className="category-page-area pt-sm-5 pt-lg-0">
          <div className="container">
              <div className="category-page-inner">
                  <div className="row">
                      <ProductPageleft />
                      <ProductPageRight />
                  </div> 
              </div>
        </div>
      </section>
    )
  }
}
export default Product;
