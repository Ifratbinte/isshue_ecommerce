import React, { Component } from 'react'

class Newslatter extends Component {
  render() {
    return (
        <div className="newsletter border-top py-4">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="row align-items-center">
                            <div className="col-12 col-sm-auto mb-4 mb-lg-0">
                                <h5 className="newsletter-title mb-0"><i className="fa fa-paper-plane-o send" aria-hidden="true"></i>Subscribe for news and Offers</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <form action="#" className="row m0 newsletter_form" acceptCharset="utf-8">
                            <input type="hidden" name="ame" value=""/>  
                            <div className="input-group">
                                <input type="email" className="form-control" placeholder="Enter your email." required="" id="email"/>
                                <div className="input-group-append ml-2">
                                    <button className="btn btn-secondary text-capitalize color4 color46"  id="btn" type="button">Subscribe</button>
                                </div>
                            </div>
                        </form> 
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
export default Newslatter