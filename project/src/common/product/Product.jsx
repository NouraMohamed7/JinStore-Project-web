import React from 'react'
import './product.css'
import Process from '../Process/Process'
import pro1 from './../../assets/images/product1.jpg'
import pro2 from './../../assets/images/product2.jpg'
import pro3 from './../../assets/images/product3.jpg'
import { FaStar } from "react-icons/fa6";
import { GrFavorite } from "react-icons/gr";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { FiEye } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

function Product() {
  return (
    <div className=" product flex-dir  rounded gap-3 shadow p-3 mb-5 bg-white rounded">
      <Swiper
        className="img-product mySwiper"
        pagination={true}
        modules={[Pagination]}
        loop={true}
      >
        <SwiperSlide>
          <img src={pro1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pro2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pro3} alt="" />
        </SwiperSlide>

        <div className="process-product">
          <div className="discount-product">45%</div>
          <div className='flex gap-2'> 

          <GrFavorite className="wishlist-product" />
          <FiEye className='detail-product'/>
          </div>
        </div>
      </Swiper>

      <div className="details-product flex-dir gap-2">
        <div className="title-product">
          Vitaminwater zero sugar squeezed electrolyte…
        </div>

        <div className="rate-product ">
          <div className="stars flex gap-1">
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
          </div>
          <span>4</span>
        </div>

        <div className="price flex">
          <span>$4.99</span>
          <del>$8.99</del>
        </div>

        <div className="cart-product flex">
          <div className="icon-cart-product py-0 px-2 rounded">
            <PiShoppingCartSimpleBold />
          </div>
          <span className="stoct-product">In Stock</span>
        </div>
      </div>
    </div>
  );
}

export default Product