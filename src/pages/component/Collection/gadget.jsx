import React, {useState} from 'react'
import GagetThumb from './gadgetThumb';

function Gadget() {
    const [gadgetItem] = useState(GagetThumb)
  return (
    <div className="list-area">
        {
            gadgetItem.map((currentItem) => {
                const{id, image, title, price} = currentItem
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
                        <div className="price-area d-flex align-items-center justify-content-center mb-2">
                            <div className="purchase-price">
                                <div className="price">${price}</div>
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
export default Gadget;