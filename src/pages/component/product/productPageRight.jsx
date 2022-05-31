import React, {useState} from 'react'
import Product from './product'

function ProductPageRight(props){

    const [product] = useState(Product);
    const [noOfElement, senoOfElement] = useState(8);
    const loadMore = () => {
        senoOfElement(noOfElement + noOfElement);
    }
    const slice = product.slice(0, noOfElement);

  return (
    <div className="col-md-9">
        <div className="product-right">
            <div className="d-flex align-items-center justify-content-between mb-2">
                <div className="filter-title">
                    <h4 className="d-inline-block">Winter Collection</h4>
                    <span className="text-black-50">- 11 Items</span>
                </div>
                <a className="btn button-primary text-white" href="/"><i className="fa fa-hand-o-left" aria-hidden="true"></i> Back to home</a>
            </div>
            <div className="row ">
                {
                    slice.map((elem) => {
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
            <button className="button-primary" onClick={() => loadMore()}>Load More</button>
        </div>
    </div>
  )
}
export default ProductPageRight;