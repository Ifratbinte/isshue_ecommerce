
import React, {useState} from 'react'

const Checkout = () => {
    const [show, setShow] = useState(false);
    
    return (
      <section className="checkout-section">
          <div className="container">
                <nav aria-label="breadcrumb" className="my-4">
                    <ol className="breadcrumb d-inline-flex mb-0">
                        <li className="breadcrumb-item align-items-center">
                            <a href="" className="d-flex align-items-center"><i className="mr-2 fa fa-home"></i>Home</a>
                        </li>
                        <li className="breadcrumb-item align-items-center">
                            <a href="" className="d-flex align-items-center">Chekout</a>
                        </li>
                    </ol>
                </nav>
                <div className="checkout-form mt-5">
                    <div className="row">
                        <div className="col-md-8">
                            <h2 className="d-block text-center">Checkout</h2>
                            <div className="checkout-submit-form">
                                    <h4>Returning Customer? <a href="#" onClick={() => setShow(!show)}> Click here to login</a></h4>
                                    {show && <div className="card card-body">
                                        <p>If you have shopped with us before, please enter your details in the boxes below. If you are a new customer please proceed to the Billing &amp; Shipping section.</p>
                                        <form>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="email">Email address<span>*</span></label>
                                                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp"/>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="password">Password<span>*</span></label>
                                                        <input type="password" className="form-control" id="password"/>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group form-check">
                                                        <input type="checkbox" className="form-check-input" id="checkbox"/>
                                                        <label className="form-check-label" htmlFor="checkbox">Remembar Me</label>
                                                    </div>
                                                </div>
                                                <button type="submit" className="button-primary ml-3">Submit</button>
                                            </div>
                                        </form>
                                    </div>}
                            </div>

                                <div className="billing-section">
                                    <h4>Biiling Details</h4>
                                    <div className="billing-information">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label htmlFor="first">First Name<span>*</span></label>
                                                <input type="text" id="fir"/>
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="last">Last Name<span>*</span></label>
                                                <input type="text" id="last"/>
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="email">Customer Email</label>
                                                <input type="text" id="email"/>
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="phone">Customer Mobile<span>*</span></label>
                                                <input type="text" id="phone"/>
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="district">Country<span>*</span></label>
                                                <select id="district">
                                                    <option className="custom-select" value="Bagladesh" selected>Bangladesh</option>
                                                    <option value="1">Austrelia</option>
                                                    <option value="2">Nepal</option>
                                                    <option value="3">Canada</option>
                                                    <option value="4">Rashia</option>
                                                    <option value="5">Spain</option>
                                                    <option value="6">Japan</option>
                                                </select>
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="address1">Address 1<span>*</span></label>
                                                <input type="text" id="address1" placeholder="House number and steet name" className="address1-first"/>
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="district">District<span>*</span></label>
                                                <select id="district">
                                                    <option className="custom-select" value="Bagladesh" selected></option>
                                                    <option value="ctg">Chittagong</option>
                                                    <option value="cumilla">Cumilla</option>
                                                    <option value="khalna">Khulna</option>
                                                    <option value="barishal">Barishal</option>
                                                    <option value="rajshahi">Rajshahi</option>
                                                    <option value="chandpur">Chandpur</option>
                                                </select>
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="address2">Address 2<span>*</span></label>
                                                <input type="text" id="address2" placeholder="Address2" className="address1-first"/>
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="town">City<span>*</span></label>
                                                <input type="text" id="town" placeholder='City'/>
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="zip">Postcode / ZIP (optional)</label>
                                                <input type="text" id="zip" placeholder='Zip'/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="billing-terms">
                                        <div className="form-group form-check m-1">
                                            <input type="checkbox" className="form-check-input" id="checkbox1"/>
                                            <label className="form-check-label" htmlFor="checkbox1">Create Account</label>
                                        </div>
                                        <div className="form-group form-check m-1">
                                            <input type="checkbox" className="form-check-input" id="checkbox2"/>
                                            <label className="form-check-label" htmlFor="checkbox2">Privacy Policy</label>
                                        </div>
                                        <div className="form-group form-check m-1">
                                            <input type="checkbox" className="form-check-input" id="checkbox3"/>
                                            <label className="form-check-label" htmlFor="checkbox3">Ship to a different address?</label>
                                        </div>
                                        <div className="form-group checkout-comment mt-3">
                                            <label className="checkout-comment-text" htmlFor="ordre-notes">Add Comment About Your Order.</label>
                                            <textarea className="form-control" id="ordre-notes" name="ordre-notes"  rows="4"
                                                placeholder="Notes about your order, e.g. special notes for delivery.">
                                            </textarea>
                                        </div>
                                    </div>
                                </div>
                        </div>

                        <div className="col-md-4">
                            <div className="d-flex align-items-center justify-content-between mb-2">
                                <h4 className="pb-3 mb-0">Items In Your Cart.</h4>
                                <span className="badge badge-pill badge-soft-success">1 tems</span>
                            </div>
                            <div className="card shadow-none" id="card-summary">
                                <div className="card-body">
                                    <div className="row ">
                                        <div className="col-9">
                                            <div className="media align-items-center">
                                                <img className="mr-2 checkout-item" src="assets/img/isshue/product/category_1/product_1.jpg" alt=''/>
                                                <div className="media-body">
                                                    <h6 className="mb-1 item-short-name">Sound System -Bluetooth headsets 50 Sports</h6>
                                                    <div className="text-black-50 fs-14">1 x $ 190.00</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-3 text-dark text-right">$190.00</div>
                                    </div>
                                    <hr />
                                    <div className="d-flex justify-content-between">
                                        <span>Sub Total:</span>
                                        <span>1000.00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card shadow-none" id="checkout-shipping">
                                <div className="card-body">
                                    <h5><strong>Shipping Method</strong></h5>
                                    <p className='checkout-text'>Kindly Select the preferred shipping method to use on this order.</p>
                                    <div className="shipping-method">
                                        <div className="inside">
                                            <p className='mb-1'><strong>Inside the city</strong></p>
                                            <div className="custom-control custom-radio"  >
                                                <input type="radio" id="customRadioInline1" name="customRadioInline1" className="custom-control-input"/>
                                                <label className="custom-control-label" htmlFor="customRadioInline1">- $ 0.00</label>
                                            </div>
                                        </div>
                                        <div className="outside mt-4">
                                            <p className='mb-1'><strong>Outside the city</strong></p>
                                            <div className="custom-control custom-radio"  >
                                                <input type="radio" id="customRadioInline2" name="customRadioInline1" className="custom-control-input"/>
                                                <label className="custom-control-label" htmlFor="customRadioInline2">- $ 0.00</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card shadow-none" id="checkout-shipping">
                                <div className="card-body">
                                    <h5><strong>Payment Method</strong></h5>
                                    <div className="shipping-method">
                                        <div className="custom-control custom-radio " data-toggle="collapse" data-target="#collapseeight" aria-expanded="true" aria-controls="collapseeight">
                                            <input type="radio" id="customRadioInline5" name="customRadioInline7" className="custom-control-input"/>
                                            <label className="custom-control-label" htmlFor="customRadioInline5">Cash On Delivery</label>
                                        </div>
                                        <div className="custom-control custom-radio " data-toggle="collapse" data-target="#collapsenine" aria-expanded="false" aria-controls="collapsenine">
                                            <input type="radio" id="customRadioInline6" name="customRadioInline7" className="custom-control-input"/>
                                            <label className="custom-control-label" htmlFor="customRadioInline6">Paypal</label>
                                        </div>
                                        <div className="custom-control custom-radio " data-toggle="collapse" data-target="#collapseeleven" aria-expanded="false" aria-controls="collapseeleven">
                                            <input type="radio" id="customRadioInline7" name="customRadioInline7" className="custom-control-input"/>
                                            <label className="custom-control-label" htmlFor="customRadioInline7">MasterCard</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-3"><button className="btn button-primary btn-block">Confirm Order</button></div>
                            </div>
                        </div>
                    </div>
                </div>          
          </div>
      </section>
    )
}
export default Checkout;