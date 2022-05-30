import React, { Component } from 'react'
import HeaderAction from './headerAction'

class headerMiddle extends Component {
  render() {
    return (
        <div className="search-bar">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-2 col-sm-4 ">
                        <div className="logo">
                            <a href="/" className="site-logo">
                                <img src="assets/img/isshue/logo.png" alt=""/>
                            </a>
                        </div>
                    </div>

                    <div id="search-bar" className="col-md-5 col-sm-8 header-search">
                        <form action="">
                            <input type="text" name="text" placeholder='Search for Products'/>
                            <input type="submit" value="Search"/>
                        </form>
                    </div>

                    <div className="col-lg-4 col-md-3 col-12">
                        <HeaderAction />
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
export default headerMiddle;
