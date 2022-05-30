import React from 'react'
import HeroSlider from "react-slick";

function heroCarousel() {

  var slickHero = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <HeroSlider {...slickHero}>
      <div class="item slider-item bg-img-hero d-flex align-items-center justify-content-center">
        <a href=""><img src="assets/img/isshue/slider/slider_1.png"/></a>
      </div>
      <div class="item slider-item bg-img-hero d-flex align-items-center justify-content-center">
        <a href=""><img src="assets/img/isshue/slider/slider_2.png"/></a>
      </div>
      <div class="item slider-item bg-img-hero d-flex align-items-center justify-content-center">
        <a href=""><img src="assets/img/isshue/slider/slider_3.png"/></a>
      </div>
        
    </HeroSlider>
  )
}
export default heroCarousel;
