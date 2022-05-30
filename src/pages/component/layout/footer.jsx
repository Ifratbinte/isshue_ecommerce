import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
        <footer id="footer">
            <footer className="main-footer border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-4 col-xl-4 py-3 py-md-5 text-center text-md-left d-md-block">
                            <div className="footer-about">
                                <div className="footer-logo mb-3">
                                    <a href="#"><img src="assets/img/isshue/logo.png" className="img-fluid" alt="logo"/></a>
                                </div>
                                <p>Isshue Multistore E-Commerce system.</p>
                                <address>
                                    <p>Address: New York, USA</p>
                                </address>

                                <div className="contact_info">
                                    <ul className="list-unstyled text-sm">
                                        <li>Mobile: <a href="tel:+00-000-00000">+00-000-00000</a></li>
                                        <li>Email: <a href="mailto:abc@gmail.com">abc@gmail.com</a></li>
                                        <li>Website: <a href="#">https://abc.com</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 py-3 py-md-5 d-none d-md-block">
                            <div className="footer-box">
                                <h4 className="link-title mb-3 font-weight-600 position-relative footer-app-link">Our Communities</h4>
                                    <ul className="social-icon">
                                        <li><a href="#"><div className="icon-wrap d-inline-block text-white text-center fb"><i className="fa fa-facebook"></i></div></a><a href="#">Facebook</a></li>
                                        <li><a href="#"><div className="icon-wrap d-inline-block text-white text-center inst"><i className="fa fa-instagram"></i></div></a><a href="#">Instagram</a></li>
                                        <li><a href="#"><div className="icon-wrap d-inline-block text-white text-center lin"><i className="fa fa-linkedin"></i></div></a><a href="#">Linkedin</a></li>
                                        <li><a href="#"><div className="icon-wrap d-inline-block text-white text-center yt"><i className="fa fa-youtube-square"></i></div></a><a href="#">Youtube</a></li>                       
                                    </ul> 
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 py-3 py-md-5 d-none d-md-block">
                            <div className="footer-box">
                                <h4 className="link-title mb-3 position-relative footer-app-link">Information</h4>
                                <ul className="footer-link menu mb-0">
                                    <li className="mb-2"><a href="/about" className="link d-block">About Us</a></li>
                                    <li className="mb-2"><a href="/contact" className="link d-block">Contact us</a></li>
                                    <li className="mb-2"><a href="#" className="link d-block">Delivery Information</a></li>
                                    <li className="mb-2"><a href="/terms" className="link d-block">Terms & Conditions</a></li>
                                    <li className="mb-2"><a href="#" className="link d-block">Track My Order</a></li>
                                </ul>                            
                            </div>
                        </div>
                        
                        <div className="col-sm-6 col-md-4 col-lg-3 col-xl-3 py-3 py-md-5 d-md-block">
                            <h3 className="link-title mb-3 font-weight-600 position-relative footer-app-link">Download The App</h3>
                            <p>Get access to all exclusive offers, discounts and deals by download our App !</p>

                            <a className="market-button google-button d-inline-block mr-2 mb-2 border rounded bg-gray" href=""><span className="mb-subtitle">Download on the</span><span className="mb-title">Google Play</span></a>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Sub Footer */}
            <div className="sub-footer bg-white py-3 border-top color2">
    <div className="container">
        <div className="row justify-content-end align-items-center">
            <div className="col-md-6 text-center text-md-left">
                <div className="copy">Developed by <a href="#" target="_blank">Bdtask</a></div>
            </div>
            <div className="col-md-6">
                <ul className="list-unstyled text-center text-md-right mb-0">
                    <li className="list-inline-item"><h6>Pay With :</h6></li>
                    <li className="list-inline-item">
                        <a href="#" target="_blank"><img width="30" height="30" src="assets/img/isshue/payment/payment_1.png" alt="paycard"/></a>
                    </li>
                    <li className="list-inline-item">
                        <a href="#" target="_blank"><img width="30" height="30" src="assets/img/isshue/payment/payment_2.png" alt="paycard"/></a>
                    </li>
                    <li className="list-inline-item">
                        <a href="#" target="_blank"><img width="30" height="30" src="assets/img/isshue/payment/payment_3.png" alt="paycard"/></a>
                    </li>
                    <li className="list-inline-item">
                        <a href="#" target="_blank"><img width="30" height="30" src="assets/img/isshue/payment/payment_4.jpg" alt="paycard"/></a>
                    </li>
                    <li className="list-inline-item">
                        <a href="#" target="_blank"><img width="30" height="30" src="assets/img/isshue/payment/payment_5.jpeg" alt="paycard"/></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
        </footer>
    )
  }
}
export default Footer;
