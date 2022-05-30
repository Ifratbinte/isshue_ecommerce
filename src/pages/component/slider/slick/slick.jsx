import React from 'react'
import Slider from "react-slick";

function Slick() {

    var slickSlider = {
        autoplay: true,
        dots: true,
        
        infinite: true,
        speed: 400,
        slidesToShow: 6,
        slidesToScroll: 1
      };

    return (
        <Slider {...slickSlider}>
            <div className="single-ta-scroll-slider">
                <a href="/product-details">
                    <div className="media">
                        <img src="assets/img/category/cat2.png" alt="" className=""/>
                        <div className="media-body align-self-center">
                            <h5 className="">Whiting</h5>
                        </div>
                    </div>
                </a>
            </div>
            <div className="single-ta-scroll-slider">
                <a href="/product-details">
                    <div className="media">
                        <img src="assets/img/category/cat8.jpg" alt="" className=""/>
                        <div className="media-body align-self-center">
                            <h5 className="">Balm</h5>
                        </div>
                    </div>
                </a>
            </div>
            <div className="single-ta-scroll-slider">
                <a href="/product-details">
                    <div className="media">
                        <img src="assets/img/category/cat9.jpg" alt="" className=""/>
                        <div className="media-body align-self-center">
                            <h5 className="">Lotion</h5>
                        </div>
                    </div>
                </a>
            </div>
            <div className="single-ta-scroll-slider">
                <a href="/product-details">
                    <div className="media">
                        <img src="assets/img/category/cat10.jpeg" alt="" className=""/>
                        <div className="media-body align-self-center">
                            <h5 className="">Shampoo</h5>
                        </div>
                    </div>
                </a>
            </div>
            <div className="single-ta-scroll-slider">
                <a href="/product-details">
                    <div className="media">
                        <img src="assets/img/category/cat11.jpg" alt="" className=""/>
                        <div className="media-body align-self-center">
                            <h5 className="">Shaving</h5>
                        </div>
                    </div>
                </a>
            </div>
            <div className="single-ta-scroll-slider">
                <a href="/product-details">
                    <div className="media">
                        <img src="assets/img/category/cat12.jpg" alt="" className=""/>
                        <div className="media-body align-self-center">
                            <h5 className="">Gel</h5>
                        </div>
                    </div>
                </a>
            </div>
            <div className="single-ta-scroll-slider">
                <a href="/product-details">
                    <div className="media">
                        <img src="assets/img/category/cat14.jpg" alt="" className=""/>
                        <div className="media-body align-self-center">
                            <h5 className="">Hand Gel</h5>
                        </div>
                    </div>
                </a>
            </div>
            <div className="single-ta-scroll-slider">
                <a href="/product-details">
                    <div className="media">
                        <img src="assets/img/category/cat4.jpg" alt="" className=""/>
                        <div className="media-body align-self-center">
                            <h5 className="">Cream</h5>
                        </div>
                    </div>
                </a>
            </div>
        </Slider>
    )
}
export default Slick;