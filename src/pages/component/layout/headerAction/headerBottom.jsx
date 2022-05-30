import React, { Component } from 'react'
import Slick from '../../slider/slick/slick'
import HeaderAction from './headerAction'

class HeaderBottom extends Component {
  render() {
    return (
        <div className="header-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <div className="menu header-category">
                            <nav>
                                <ul>
                                    <li><a href="/"><i className="fa fa-bars pr-2"></i> All Categories <i className="fa fa-angle-down"></i></a>
                                        <ul className="submenu">
                                            <li className="static"><a href="/product"> Women's Fashion<i className="fa fa-angle-right"></i></a>
                                                <div className="mega-menu mega-full">
                                                    <ul>
                                                        <li className="subcate-title"><a href="/">Tops</a></li>
                                                        <li><a href="/">T-shirt</a></li>
                                                        <li><a href="/">Hoodies</a></li>
                                                        <li><a href="/">Shirt</a></li>
                                                        <li><a href="/">Skin Whiting</a></li>
                                                    </ul>
                                                    <ul>
                                                        <li className="subcate-title"><a href="/">Winter Cloth</a></li>
                                                        <li><a href="/">Watch</a></li>
                                                        <li><a href="/">Shoe</a></li>
                                                        <li><a href="/">Tawal</a></li>
                                                        <li><a href="/">Salwar Kamez</a></li>
                                                    </ul>
                                                    <ul>
                                                        <li className="subcate-title"><a href="/">Accessories</a></li>
                                                        <li><a href="/">Hats</a></li>
                                                        <li><a href="/"> SunGlass</a></li>
                                                        <li><a href="/">Washer</a></li>
                                                    </ul>
                                                    <ul>
                                                        <li className="subcate-title"><a href="/">Cosmetics</a></li>
                                                        <li><a href="/">Bag</a></li>
                                                        <li><a href="/">Face powder</a></li>
                                                        <li><a href="/">Eye liner</a></li>
                                                        <li><a href="/">face wash</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="static"><a href="/product">Men's Fasion<i className="fa fa-angle-right"></i></a>
                                                <div className="mega-menu mega-full">
                                                    <ul>
                                                        <li className="subcate-title"><a href="/">Lotion</a></li>
                                                        <li><a href="/">Baby Lotion</a></li>
                                                        <li><a href="/">Mostorizer</a></li>
                                                        <li><a href="/">Body lotion</a></li>
                                                        <li><a href="/">Skin Whiting</a></li>
                                                    </ul>
                                                    <ul>
                                                        <li className="subcate-title"><a href="/">Cream</a></li>
                                                        <li><a href="/">Night Cream</a></li>
                                                        <li><a href="/">Day cream</a></li>
                                                        <li><a href="/">Suns Skin</a></li>
                                                        <li><a href="/">Dry skin</a></li>
                                                    </ul>
                                                    <ul>
                                                        <li className="subcate-title"><a href="/">Skincare</a></li>
                                                        <li><a href="/">Alovera gel</a></li>
                                                        <li><a href="/"> face wash</a></li>
                                                        <li><a href="/">Clean clear</a></li>
                                                    </ul>
                                                    <ul>
                                                        <li className="subcate-title"><a href="/">Cosmetics</a></li>
                                                        <li><a href="/">Lipstic</a></li>
                                                        <li><a href="/">Face powder</a></li>
                                                        <li><a href="/">Eye liner</a></li>
                                                        <li><a href="/">face wash</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="static"><a href="/product">Travel Kit<i className="fa fa-angle-right"></i></a>
                                                <div className="mega-menu mega-full">
                                                    <ul>
                                                        <li className="subcate-title"><a href="/">Lotion</a></li>
                                                        <li><a href="/">Baby Lotion</a></li>
                                                        <li><a href="/">Mostorizer</a></li>
                                                        <li><a href="/">Body lotion</a></li>
                                                        <li><a href="/">Skin Whiting</a></li>
                                                    </ul>
                                                    <ul>
                                                        <li className="subcate-title"><a href="/">Cream</a></li>
                                                        <li><a href="/">Night Cream</a></li>
                                                        <li><a href="/">Day cream</a></li>
                                                        <li><a href="/">Suns Skin</a></li>
                                                        <li><a href="/">Dry skin</a></li>
                                                    </ul>
                                                    <ul>
                                                        <li className="subcate-title"><a href="/">Skincare</a></li>
                                                        <li><a href="/">Alovera gel</a></li>
                                                        <li><a href="/"> face wash</a></li>
                                                        <li><a href="/">Clean clear</a></li>
                                                    </ul>
                                                    <ul>
                                                        <li className="subcate-title"><a href="/">Cosmetics</a></li>
                                                        <li><a href="/">Lipstic</a></li>
                                                        <li><a href="/">Face powder</a></li>
                                                        <li><a href="/">Eye liner</a></li>
                                                        <li><a href="/">face wash</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="static"><a href="/product">Cosmetics<i className="fa fa-angle-right"></i></a>
                                                <div className="mega-menu mega-full">
                                                    <ul>
                                                        <li className="subcate-title"><a href="/">Lotion</a></li>
                                                        <li><a href="/">Baby Lotion</a></li>
                                                        <li><a href="/">Mostorizer</a></li>
                                                        <li><a href="/">Body lotion</a></li>
                                                        <li><a href="/">Skin Whiting</a></li>
                                                    </ul>
                                                    <ul>
                                                        <li className="subcate-title"><a href="/">Cream</a></li>
                                                        <li><a href="/">Night Cream</a></li>
                                                        <li><a href="/">Day cream</a></li>
                                                        <li><a href="/">Suns Skin</a></li>
                                                        <li><a href="/">Dry skin</a></li>
                                                    </ul>
                                                    <ul>
                                                        <li className="subcate-title"><a href="/">Skincare</a></li>
                                                        <li><a href="/">Alovera gel</a></li>
                                                        <li><a href="/"> face wash</a></li>
                                                        <li><a href="/">Clean clear</a></li>
                                                    </ul>
                                                    <ul>
                                                        <li className="subcate-title"><a href="/">Cosmetics</a></li>
                                                        <li><a href="/">Lipstic</a></li>
                                                        <li><a href="/">Face powder</a></li>
                                                        <li><a href="/">Eye liner</a></li>
                                                        <li><a href="/">face wash</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="static"><a href="/product">Baby shop<i className="fa fa-angle-right"></i></a>
                                                <div className="mega-menu mega-full">
                                                    <ul>
                                                        <li className="subcate-title"><a href="/">Lotion</a></li>
                                                        <li><a href="/">Baby Lotion</a></li>
                                                        <li><a href="/">Mostorizer</a></li>
                                                        <li><a href="/">Body lotion</a></li>
                                                        <li><a href="/">Skin Whiting</a></li>
                                                    </ul>
                                                    <ul>
                                                        <li className="subcate-title"><a href="/">Cream</a></li>
                                                        <li><a href="/">Night Cream</a></li>
                                                        <li><a href="/">Day cream</a></li>
                                                        <li><a href="/">Suns Skin</a></li>
                                                        <li><a href="/">Dry skin</a></li>
                                                    </ul>
                                                    <ul>
                                                        <li className="subcate-title"><a href="/">Skincare</a></li>
                                                        <li><a href="/">Alovera gel</a></li>
                                                        <li><a href="/"> face wash</a></li>
                                                        <li><a href="/">Clean clear</a></li>
                                                    </ul>
                                                    <ul>
                                                        <li className="subcate-title"><a href="/">Cosmetics</a></li>
                                                        <li><a href="/">Lipstic</a></li>
                                                        <li><a href="/">Face powder</a></li>
                                                        <li><a href="/">Eye liner</a></li>
                                                        <li><a href="/">face wash</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="static"><a href="/product">baby kit<i className="fa fa-angle-right"></i></a>
                                                <div className="mega-menu mega-full">
                                                    <ul>
                                                        <li className="subcate-title"><a href="/">Lotion</a></li>
                                                        <li><a href="/">Baby Lotion</a></li>
                                                        <li><a href="/">Mostorizer</a></li>
                                                        <li><a href="/">Body lotion</a></li>
                                                        <li><a href="/">Skin Whiting</a></li>
                                                    </ul>
                                                    <ul>
                                                        <li className="subcate-title"><a href="/">Cream</a></li>
                                                        <li><a href="/">Night Cream</a></li>
                                                        <li><a href="/">Day cream</a></li>
                                                        <li><a href="/">Suns Skin</a></li>
                                                        <li><a href="/">Dry skin</a></li>
                                                    </ul>
                                                    <ul>
                                                        <li className="subcate-title"><a href="/">Skincare</a></li>
                                                        <li><a href="/">Alovera gel</a></li>
                                                        <li><a href="/"> face wash</a></li>
                                                        <li><a href="/">Clean clear</a></li>
                                                    </ul>
                                                    <ul>
                                                        <li className="subcate-title"><a href="/">Cosmetics</a></li>
                                                        <li><a href="/">Lipstic</a></li>
                                                        <li><a href="/">Face powder</a></li>
                                                        <li><a href="/">Eye liner</a></li>
                                                        <li><a href="/">face wash</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="static"><a href="/product">Computer Gaming<i className="fa fa-angle-right"></i></a>
                                                <div className="mega-menu mega-full">
                                                    <ul>
                                                        <li className="subcate-title"><a href="/">Lotion</a></li>
                                                        <li><a href="/">Baby Lotion</a></li>
                                                        <li><a href="/">Mostorizer</a></li>
                                                        <li><a href="/">Body lotion</a></li>
                                                        <li><a href="/">Skin Whiting</a></li>
                                                    </ul>
                                                    <ul>
                                                        <li className="subcate-title"><a href="/">Cream</a></li>
                                                        <li><a href="/">Night Cream</a></li>
                                                        <li><a href="/">Day cream</a></li>
                                                        <li><a href="/">Suns Skin</a></li>
                                                        <li><a href="/">Dry skin</a></li>
                                                    </ul>
                                                    <ul>
                                                        <li className="subcate-title"><a href="/">Skincare</a></li>
                                                        <li><a href="/">Alovera gel</a></li>
                                                        <li><a href="/"> face wash</a></li>
                                                        <li><a href="/">Clean clear</a></li>
                                                    </ul>
                                                    <ul>
                                                        <li className="subcate-title"><a href="/">Cosmetics</a></li>
                                                        <li><a href="/">Lipstic</a></li>
                                                        <li><a href="/">Face powder</a></li>
                                                        <li><a href="/">Eye liner</a></li>
                                                        <li><a href="/">face wash</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="static"><a href="/product">Home & Beauty<i className="fa fa-angle-right"></i></a>
                                                <div className="mega-menu mega-full">
                                                    <ul>
                                                        <li className="subcate-title"><a href="/">Lotion</a></li>
                                                        <li><a href="/">Baby Lotion</a></li>
                                                        <li><a href="/">Mostorizer</a></li>
                                                        <li><a href="/">Body lotion</a></li>
                                                        <li><a href="/">Skin Whiting</a></li>
                                                    </ul>
                                                    <ul>
                                                        <li className="subcate-title"><a href="/">Cream</a></li>
                                                        <li><a href="/">Night Cream</a></li>
                                                        <li><a href="/">Day cream</a></li>
                                                        <li><a href="/">Suns Skin</a></li>
                                                        <li><a href="/">Dry skin</a></li>
                                                    </ul>
                                                    <ul>
                                                        <li className="subcate-title"><a href="/">Skincare</a></li>
                                                        <li><a href="/">Alovera gel</a></li>
                                                        <li><a href="/"> face wash</a></li>
                                                        <li><a href="/">Clean clear</a></li>
                                                    </ul>
                                                    <ul>
                                                        <li className="subcate-title"><a href="/">Cosmetics</a></li>
                                                        <li><a href="/">Lipstic</a></li>
                                                        <li><a href="/">Face powder</a></li>
                                                        <li><a href="/">Eye liner</a></li>
                                                        <li><a href="/">face wash</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="col-md-10">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item "><a className="nav-link"href="/product">Women's Fashion</a></li>
                            <li className="nav-item "><a className="nav-link"href="/product">Men's Fashion</a></li>
                            <li className="nav-item "><a className="nav-link"href="/product">Electronics</a></li>
                            <li className="nav-item "><a className="nav-link"href="/product">Home & Beauty</a></li>
                            <li className="nav-item "><a className="nav-link"href="/product">Computer</a></li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
export default HeaderBottom
