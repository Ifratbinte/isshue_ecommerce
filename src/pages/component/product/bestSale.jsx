import React, {useState} from 'react'
import BestSaleItem from './bestSaleItem'

function BestSale() {
    const [popular] = useState(BestSaleItem)
  return (
    <div className="feature-category">
        {
            popular.map((currentItem) => {
                const{id, image, title, price} = currentItem;
                return <div kay={id} className="feature-item widget">       
                    <div className="media mb-3">
                        <a className="entry-thumb d-block position-relative bg-white mr-3" href="">
                            <img  src={image} alt="image" width="64"/>
                        </a>
                        <div className="media-body">
                            <h6 className="entry-title product-name overflow-hidden">
                                <a href="" className="d-block">{title}</a>
                            </h6>
                            <div className="star-rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-o"></i>                            
                            </div>
                            <p className="entry-meta">${price}</p>
                        </div>
                    </div>                                    
                </div> 
            })
        } 
    </div>
  )
}
export default BestSale;