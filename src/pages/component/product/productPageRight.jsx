import React, {useState} from 'react'
import Product from './product'
// import LoadMore from '../reactActions/loadMore'

const ProductPageRight = () => {

    const [product] = useState(Product);

  return (
    <div className="col-md-9">
        <div className="product-right">
            <div class="d-flex align-items-center justify-content-between mb-2">
                <div class="filter-title">
                    <h4 class="d-inline-block">Winter Collection</h4>
                    <span class="text-black-50">- 11 Items</span>
                </div>
                <a class="btn button-primary text-white" href=""><i class="fa fa-hand-o-left" aria-hidden="true"></i> Back to home</a>
            </div>
            <div className="row ">
                {
                    product.map((elem) => {
                        const {id, image, title, price} = elem;
                        return(
                            <div key={id} className="col-lg-3 col-md-4 col-6 mb-3">
                                <div className="feature-card card border-0 border">
                                    <div className="card-body">
                                        <a href="/product-details" className="product-img d-block">
                                            <img className="img-fluid" src={image} alt="image"/>
                                        </a>
                                        <a a href="/product-details" className='product-name overflow-hidden'>{title}</a>
                                        <div className="star-rating">
                                            <i className="fa fa-star-o"></i>
                                            <i className="fa fa-star-o"></i>
                                            <i className="fa fa-star-o"></i>
                                            <i className="fa fa-star-o"></i>
                                            <i className="fa fa-star-o"></i>                        
                                        </div>
                                        <h5 className="product-price font-italic">${price} / Unit </h5>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}
export default ProductPageRight;