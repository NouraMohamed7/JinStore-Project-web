import React from "react";
import "./Heading.css";
import slider1 from "../../assets/images/slider-01.jpg.png";
import slider2 from "../../assets/images/slider-02.png";
import slider3 from "../../assets/images/slider-03.jpg.png";
import banner from "../../assets/images/span.banner-badge.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay ,Pagination} from "swiper/modules";
import "swiper/css";
import 'swiper/swiper-bundle.css'

function Heading() {
  return (
    <Swiper
      loop="true"
      className="mySwiper  Heading  w-100"
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      pagination={{
        dynamicBullets :true,
    
      }}
      
      speed={1200}
      modules={[Autoplay, Pagination]}
    >
      <SwiperSlide>
        <div className="p-2 w-100 slider pothion-relative">
          <img src={slider1} alt="" className="w-100 h-100" />

          <div className="flex-dir">
            <img src={banner} alt="" />
            <b className="my-2">
              Get the best quality products at the lowest prices
            </b>
            <p>
              We have prepared special discounts for you on grocery products.
              Don't miss these opportunities...
            </p>
            <div className="flex gap-4  mt-5">
              <button className="btn rounded py-2 px-5  btn-success ">
                Shop Now
              </button>
              <div>
                <span>$21.67</span>
                <del>$26.67</del>
                <p className="m-0">Don't miss this limited time offer.</p>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="p-2 w-100 slider pothion-relative">
          <img src={slider2} alt="" className="w-100 h-100" />

          <div className="flex-dir">
            <img src={banner} alt="" />
            <b className="my-2">
              Shopping with us for better quality and the best price
            </b>
            <p>
              We have prepared special discounts for you on grocery products.
              Don't miss these opportunities...
            </p>
            <div className="flex gap-4  mt-5">
              <button className="btn rounded py-2 px-5  btn-success ">
                Shop Now
              </button>
              <div>
                <span>$21.67</span>
                <del>$26.67</del>
                <p className="m-0">Don't miss this limited time offer.</p>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="p-2 w-100 slider pothion-relative">
          <img src={slider3} alt="" className="w-100 h-100" />

          <div className="flex-dir">
            <img src={banner} alt="" />
            <b className="my-2">
              Get the best quality products at the lowest prices
            </b>
            <p>
              We have prepared special discounts for you on organic breakfast
              products.
            </p>
            <div className="flex gap-4  mt-5">
              <button className="btn rounded py-2 px-5  btn-success ">
                Shop Now
              </button>
              <div>
                <span>$21.67</span>
                <del>$26.67</del>
                <p className="m-0">Don't miss this limited time offer.</p>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Heading;
