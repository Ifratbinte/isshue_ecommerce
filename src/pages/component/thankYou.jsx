import React, { Component } from 'react'

class ThankYou extends Component {
  render() {
    return (
      <section className="gretings-page text-center">
        <div className="container">
            <div className="gretings-container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="gretings-content-inner">
                            <div className="checkicon">
                                <i className="fa fa-check" aria-hidden="true"></i>
                            </div>
                            <div className="gretings-text-title">
                                <h1>Thank You!</h1>
                            </div>
                            <div className="gretings-text-des">
                                <p>for purchasing with <span><a href="/">Isshue</a></span></p>
                            </div>
                            <div className="gretingsBtn">
                                <a href="/product" className='text-link-color'>For purchas more go here <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                            </div>
                            <div className="gretingsBtn2">
                                <a href="/" className='text-link-color'><i className="fa fa-long-arrow-left" aria-hidden="true"></i> Back to home</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    )
  }
}
export default ThankYou;