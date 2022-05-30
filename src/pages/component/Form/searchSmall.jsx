import React, { Component } from 'react'

class searchSmall extends Component {
  render() {
    return (
        <form action="#">
            <div className="input-group-overlay">
                <div className="input-group-prepend-overlay">
                    <button className="input-group-text" type="submit"><i className='fa fa-search'></i></button>
                </div>
                <input className="form-control prepended-form-control appended-form-control" name="product_name" type="text" placeholder="Search...." />
            </div>
        </form> 
    )
  }
}
export default searchSmall;