import React, { Component } from 'react'

class Newslatter extends Component {
  render() {
    return (
        <div class="newsletter border-top py-4">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-7">
                        <div class="row align-items-center">
                            <div class="col-12 col-sm-auto mb-4 mb-lg-0">
                                <h5 class="newsletter-title mb-0"><i class="fa fa-paper-plane-o send" aria-hidden="true"></i>Subscribe for news and Offers</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <form action="#" class="row m0 newsletter_form" acceptCharset="utf-8">
                            <input type="hidden" name="ame" value=""/>  
                            <div class="input-group">
                                <input type="email" class="form-control" placeholder="Enter your email." required="" id="email"/>
                                <div class="input-group-append ml-2">
                                    <button class="btn btn-secondary text-capitalize color4 color46"  id="btn" type="button">Subscribe</button>
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