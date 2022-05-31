import React, {useState} from 'react'
import FashionThumb from './fashionThumb';

function Fashion() {
    const [fashionThumb] = useState(FashionThumb)
  return (
    <div className="list-area">
        {
            fashionThumb.map((currentItem) => {
                const{id, image, title, price, oldPrice, save} = currentItem
                return <div key={id} className="item position-relative bg-white border text-center float-left mb-3">
                    <div className="img">
                        <a href="/product-details"><img src={image}/></a>
                    </div>
                    <div className="info-area">
                        <div className="model-name">
                            <a href="/product-details">{title}</a> 
                        </div>
                        <div className="star-rating justify-content-center mt-4">
                            <i className="fa fa-star-o"></i>
                            <i className="fa fa-star-o"></i>
                            <i className="fa fa-star-o"></i>
                            <i className="fa fa-star-o"></i>
                            <i className="fa fa-star-o"></i>                                        
                        </div>
                        {/* Product price area */}
                        <div className="price-area d-flex align-items-center justify-content-center mb-2">
                            <div className="purchase-price">
                                <div className="price">${price}</div>
                            </div>
                            <div className="product-price ml-2">
                                <del className="price">${oldPrice}</del> 
                                <div className="legal">Save ${save}</div>
                            </div>
                         </div>
                                
                        <a href="/cart" className="btn btn-soft-primary btn-pill add-to-cartd-inline-flex align-items-center mt-2">
                            <i className="fa fa-cart-plus mr-2"></i>Add To Cart                                        
                        </a>	
                    </div>
                </div>
            })
        }
    </div>
  )
}
export default Fashion;