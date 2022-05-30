import React, { Component } from 'react'

class HeaderTop extends Component {
  render() {
    return (
        <div className="top-header d-none d-lg-block">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-6 col-xs-2">
                        <div className="contact-info">
                            <ul>
                                <li><span><i className="fa fa-headphones"></i> Have a question?</span></li>
                                <li><span> CALL US +00-000-00000</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-2">
                        <div className="topbar-menu">
                            <ul>
                                <li><a href="#"><i className="fa fa-user-o"></i> Track My Order</a></li>
                                <li className="action-nav-list">
                                    <div className="user-lang">
                                        <a href="/" className="ban-bdt">English / USD</a>
                                        <div className="lang-form">
                                            <form action="">
                                                <div className="form-group">
                                                    <select className="form-control select-currenct" id="country1">
                                                        <option value="item1">BDT</option>
                                                        <option value="item2">USD</option>
                                                        <option value="item3">Riyal</option>
                                                        <option value="item4">KWD</option>
                                                    </select>
                                                </div>
                                                <ul className='lang-currency'>
                                                    <li><a href="">Bangla</a></li>
                                                    <li><a href="">English</a></li>
                                                </ul>
                                            </form>
                                        </div>
                                    </div>
                                </li>
                                <li><a href="/registration"><i className="fa fa-user-o"></i> Sign In</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
export default HeaderTop;
