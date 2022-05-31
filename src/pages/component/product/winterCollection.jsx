import React, {useState} from 'react'
import Product from './product'

function WinterCollection() {
  const [searchTerm, setSearchTerm] = useState("");
  return (

    <>
        <div className="row align-items-center justify-content-center justify-content-sm-between mb-5 mb-sm-2">
            <div className="col-12 col-sm-auto text-center text-sm-left mb-2 mb-sm-0">
                <a href=""><h3 className="category-headdin">Winter Collection</h3></a>
            </div>
            <div className="col-8 col-sm-5 col-md-4 col-lg-3">
              <form action="#">
                <div className="input-group-overlay">
                    <div className="input-group-prepend-overlay">
                        <button className="input-group-text" type="submit"><i className='fa fa-search'></i></button>
                    </div>
                    <input className="form-control prepended-form-control appended-form-control" name="product_name" type="text" autoComplete='off' placeholder="Search...." onChange={(event) => {
                      setSearchTerm(event.target.value);
                    }} />
                </div>
              </form> 
            </div>
        </div>
        <div className="headding-border position-relative mb-4 d-none d-sm-block"></div>
        <div className="row">
          {
            Product.filter((val) => {
              if(searchTerm === ""){
                return val;
              }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                return val;
              }
            })
            .map((val) => {
              const {id, image, title, price} = val;
              return <div key={id} className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
                  <div className="feature-card card border-0 border">
                      <div className="card-body">
                          <a href="/product-details"  className="product-img d-block">
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
            })
          }
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
              <div className="deals-item-inner deals-item-all bg-white overflow-hidden border position-absolute top-0 left-0 right-0 bottom-0 d-flex align-items-center text-center">
                  <div>
                      <h5 className="mb-3">12 + Items Available</h5>
                      <a href="/product" className="btn button-primary btn-sm text-white font-weight-500">View All<i className='fa fa-arrow-right ml-2'></i></a>
                  </div>
              </div>
          </div>
        </div>          
    </>
    
  )
}
export default WinterCollection;