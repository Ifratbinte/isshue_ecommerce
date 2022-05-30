import React from 'react'
import BrandSlider from "react-slick";

function SlickBrand() {

    var SlickBrandSlider = {
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint : 1024,
                SlickBrandSlider: {
                    autoplay: true,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint : 600,
                SlickBrandSlider: {
                    autoplay: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint : 480,
                SlickBrandSlider: {
                    autoplay: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
        ]
      };

    return (
        <BrandSlider {...SlickBrandSlider}>
            <div className="brand-logo">
                <a href="/product">
                    <img src="assets/img/isshue/brand/brand-1.png" alt="" />
                </a>
            </div>
            <div className="brand-logo">
                <a href="/product">
                    <img src="assets/img/isshue/brand/brand-2.png" alt="" />
                </a>
            </div>
            <div className="brand-logo">
                <a href="/product">
                    <img src="assets/img/isshue/brand/brand-3.png" alt="" />
                </a>
            </div>
            <div className="brand-logo">
                <a href="/product">
                    <img src="assets/img/isshue/brand/brand-4.png" alt="" />
                </a>
            </div>
            <div className="brand-logo">
                <a href="/product">
                    <img src="assets/img/isshue/brand/brand-5.png" alt="" />
                </a>
            </div>
            <div className="brand-logo">
                <a href="/product">
                    <img src="assets/img/isshue/brand/brand-1.png" alt="" />
                </a>
            </div>
            <div className="brand-logo">
                <a href="/product">
                    <img src="assets/img/isshue/brand/brand-6.png" alt="" />
                </a>
            </div>
            <div className="brand-logo">
                <a href="/product">
                    <img src="assets/img/isshue/brand/brand-4.png" alt="" />
                </a>
            </div>
        </BrandSlider>
    )
}
export default SlickBrand;