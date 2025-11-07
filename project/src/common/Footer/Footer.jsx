import React from 'react'
import './Footer.css'
import { TfiEmail } from "react-icons/tfi";
import { FaPhoneVolume } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";
import footimg1 from './../../assets/images/googlefootimg.png'
import footimg2 from './../../assets/images/appfootimg.png'

function Footer() {
  return (
    <div className="Footer flex-dir mt-5">
      
      <div className="flex justify-content-between w-100 px-5">
        <div className="flex-dir fs-6">
          <b>Join our newsletter for £10 offs</b>
          <p>
            Register now to get latest updates on promotions & coupons.Don’t
            worry, we not spam!
          </p>
        </div>
        <div>
          <div>
            <TfiEmail className="icon-email" />
            <input type="text" placeholder="Enter your email address" />
            <button>SEND</button>
          </div>

          <div>
            <span>By subscribing you agree to our</span>
            <span> Terms & Conditions and Privacy & Cookies Policy.</span>
          </div>
        </div>
      </div>

      <div className="flex justify-content-between w-100 p-5">
        <div className="flex-dir">
          <b>Do You Need Help ?</b>
          <p>
            Autoseligen syr. Nek diarask fröbomba. Nör antipol kynoda nynat.
            Pressa fåmoska.
          </p>
          <div className="flex gap-1 my-1">
            <FaPhoneVolume className="m-auto ic" />
            <div>
              <p className="m-0">Monday-Friday: 08am-9pm</p>
              <b>0 800 300-353</b>
            </div>
          </div>
          <div className="flex gap-1 my-1">
            <HiOutlineMail className="m-auto" />
            <div>
              <p>Need help with your order?</p>
              <b>info@example.com</b>
            </div>
          </div>
        </div>

        <div className="flex-dir">
          <b>Make Money with Us</b>
          <p>Sell on Grogin</p>
          <p>Sell Your Services on Grogin</p>
          <p>Sell on Grogin Business</p>
          <p>Sell Your Apps on Grogin</p>
          <p>Become an Affilate</p>
          <p>Advertise Your Products</p>
          <p>Sell-Publish with Us</p>
          <p>Become an Blowwe Vendor</p>
        </div>

        <div className="flex-dir">
          <b>Let Us Help You</b>
          <p>Accessibility Statement</p>
          <p>Your Orders</p>
          <p>Returns & Replacements</p>
          <p>Shipping Rates & Policies</p>
          <p>Refund and Returns Policy</p>
          <p>Privacy Policy</p>
          <p>Terms and Conditions</p>
          <p>Cookie Settings</p>
          <p>Help Center</p>
        </div>

        <div className="flex-dir">
          <b>Get to Know Us</b>
          <p>Careers for Grogin</p>
          <p>About Grogin</p>
          <p>Inverstor Relations</p>
          <p>Grogin Devices</p>
          <p>Customer reviews</p>
          <p>Social Responsibility</p>
          <p>Store Locations</p>
        </div>

        <div className="flex-dir">
          <b>Download our app</b>
          <div className="flex gap-3">
            <img src={footimg1} alt="" />
            <p>Download App Get -10% Discount</p>
          </div>
          <div className="flex gap-3">
            <img src={footimg2} alt="" />
            <p>Download App Get -20% Discount</p>
          </div>
          <p>Follow us on social media:</p>
          <div className="flex gap-4">
            <div>
              <FaFacebookF />
            </div>
            <div>
              <FaXTwitter />
            </div>
            <div>
              <LuInstagram />
            </div>
            <div>
              <FaLinkedinIn />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-content-between w-100 px-5 ">
        <div className='flex gap-1'>
          <p>
            Copyright 2024 © Jinstore WooCommerce WordPress Theme. All right
            reserved. Powered by
          </p>
          <span>BlackRise Themes.</span>
        </div>
        <div className='flex gap-3'>
          <a href="#">Terms and Conditions</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Order Tracking</a>
        </div>
      </div>
    </div>
  );
}

export default Footer