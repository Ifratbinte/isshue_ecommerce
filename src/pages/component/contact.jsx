import React, { Component } from 'react'

class Contact extends Component {
  render() {
    return (
        <section className='contact-page top-res-gap'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="gmap_canvas">
                            <iframe title="g-map" className="map-iframe" height="490" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=700&amp;height=515&amp;hl=en&amp;q=2Bdtask Limited&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="contact-inner">
                            <div className="contact-title mb-4">
                                <h3>Get In Touch</h3>
                                <p>For all enquries, please email us using the form below.</p>
                            </div>

                            <form action="#" className='contact-form'>
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="first">First Name<span>*</span></label>
                                        <input type="text" className="form-control" id="fname" placeholder="First Name" name="fname" autoComplete='off'/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="last">Last Name<span>*</span></label>
                                        <input type="text" className="form-control" id="lname" placeholder="Last Name" name="lname" autoComplete='off'/>
                                    </div>
                                    <div className="form-group col-12">
                                        <label htmlFor="email">Email<span>*</span></label>
                                        <input type="email" className="form-control" id="email" placeholder="Email" name="email" autoComplete='off'/>
                                    </div>
                                    <div className="form-group col-12">
                                        <label htmlFor="comment">Message<span>*</span></label>
                                        <textarea className="form-control" rows="5 " id="comment" placeholder="Write Something.."></textarea>
                                    </div>
                                </div>
                                <button className="button-primary mt-2" type="submit">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
  }
}
export default Contact;