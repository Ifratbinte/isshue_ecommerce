import React from 'react'
import ProductContent from './productDetailsContent'

function ProductZoom() {
  return (
    <div className="product-zoom">
        <div className="container">
            <div className="product-details-inner">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="data-img">
                            <img className=" img-fluid zoom-img-default" id="zoom-img" src="assets/img/isshue/thumb/thumb-9.png" data-zoom-image="img/single-product/datazoom1.jpg" alt=""/>
                        </div>
                        {/* <div className="row thumb-img pb-sm-4" id="thumbaa-img">
                            <div className="col-lg-4 col-sm-2 col-2 offset-3 offset-sm-3 offset-lg-0 single-thumbaa-img">
                                <a href="/" data-image="assets/img/single-product/data1.jpg" data-zoom-image="assets/img/single-product/datazoom1.jpg">
                                    <img className="img-fluid" src="assets/img/single-product/thumb1.jpg" alt='' />
                                </a>
                            </div>
                            <div className="col-lg-4 col-sm-2 col-2 single-thumbaa-img">
                                <a href="/" data-image="assets/img/single-product/data2.jpg" data-zoom-image="assets/img/single-product/datazoom2.jpg">
                                    <img className="img-fluid" src="assets/img/single-product/thumb2.jpg" alt='' />
                                </a>
                            </div>
                            <div className="col-lg-4 col-sm-2 col-2 single-thumbaa-img">
                                <a href="/" data-image="assets/img/single-product/data3.jpg" data-zoom-image="assets/img/single-product/datazoom3.jpg">
                                    <img className="img-fluid" src="assets/img/single-product/thumb3.jpg" alt='' />
                                </a>
                            </div>
                        </div> */}
                    </div>
                    <ProductContent />
                </div>
            </div>
        </div>
    </div>
  )
}
export default ProductZoom;