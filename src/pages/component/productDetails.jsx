import React, { Component } from 'react'
import ProductZoom from './productDetails/productZoom'
import ProductDetailsTab from './productDetails/DetailsTab';
import WinterCollection from './product/winterCollection'

class ProductDetails extends Component {
  render() {
    return (
      <div className='top-res-gap'>
        {/* breadcrumb */}
        <div className="container">
            <nav aria-label="breadcrumb" className="my-2">
                <ol className="breadcrumb d-inline-flex mb-0">
                    <li className="breadcrumb-item align-items-center"><a href="" className="d-flex align-items-center"><i className="fa fa-home mr-2"></i>Home</a></li>
                    <li className="breadcrumb-item align-items-center"><a href="" className="d-flex align-items-center">Electronics</a></li>
                    <li className="breadcrumb-item align-items-center active" aria-current="page">Rechargeable Fan - Magnetic wired Bluetooth earphones Music headset With Mic Earbuds Pk I12 Tws Airpos I900</li>
                </ol>
            </nav>
            <div className="product-header row no-gutters align-items-center border-bottom pb-2 mb-5">
              <div className="col-md-8">
                  <h4 className='mb-3'>Rechargeable Fan - Magnetic wired Bluetooth earphones Music headset With Mic Earbuds Pk I12 Tws Airpos I900</h4>
                  <ul className="entry-meta d-flex flex-wrap align-items-centerm-0">
                      <li className="meta-brand position-relative"> Brand: <a href="" className="meta-value">panasonic</a></li>
                      <li className="position-relative">
                          <div className="product-rating d-flex align-items-center">
                              <div className="star-rating mb-0 mr-1">
                                  <i className="fa fa-star-o"></i>
                                  <i className="fa fa-star-o"></i>
                                  <i className="fa fa-star-o"></i>
                                  <i className="fa fa-star-o"></i>
                                  <i className="fa fa-star-o"></i>                            
                              </div>
                              <a href="#" className="review-link text-muted">(<span className="count">0</span> Review)</a>
                          </div>
                      </li>
                      <li className="meta-sku position-relative"> Item Code: <span className="meta-value">R-f</span></li>
                  </ul>
              </div>
            </div>
        </div>

        
        <ProductZoom />
        <ProductDetailsTab />
        <section className="related-product-section section-gap">
            <div className="container">
              <div className="section-title d-flex justify-content-between">
                  <h4>You May Also Be Interested In</h4>
              </div>
              <WinterCollection/>
            </div>
        </section>
        
      </div>
    )
  }
}
export default ProductDetails;
