import React, {useState} from 'react'
import CategoryItems from './categoryItems'

const Category = () => {

  const [category] = useState(CategoryItems);

  return (
    <section className="category-item section-gap">
          <div className="container">
              <div className="category">
                  <div className="row">
                      <div className="col-md-12">
                          <div className="section-title category-title">
                              <h3>Category</h3>
                          </div>
                      </div>
                  </div>

                  <div className="row">
                    {
                      category.map((elem) => {
                        const { id, image, name } = elem;
                        return(
                          <div key={id} className="col-lg-2 col-md-3 col-sm-4 col-6">
                            <div className="ta-single-product">
                              <a href="/product">
                                  <div className="p-4 text-center">
                                      <img className="s-product-img" src={image} alt=""/>
                                      <h5>{name}</h5>
                                  </div>
                              </a>
                            </div>
                          </div>
                        )
                      })
                    }
                  </div>
              </div>
          </div>
      </section>
  )

}


 

export default Category;