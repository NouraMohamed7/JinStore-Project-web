import React from "react";
import'./Logo.css'
import { IoLocationOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { GrFavorite } from "react-icons/gr";
import { IoCartOutline } from "react-icons/io5";
import Logoimg from './../../../assets/images/logo.png'
import { NavLink } from "react-router-dom";


function Logo() {
  return (
    <div className="Logo px-0 yx-0  ">
      <div className="container flex justify-content-between">
        <div>
          <img src={Logoimg} alt="" />
        </div>

        <div className="flex  ">
          <IoLocationOutline className="icon" />
          <div>
            <p>Deliver to</p>
            <span>all</span>
          </div>
        </div>

        <div className="flex search">
          <input
            type="text"
            placeholder="Search for products, categories or brands..."
          />
          <IoSearchOutline className="icon-search" />
        </div>

        <div className="flex">
          <CiUser className="icon" />
          <div>
            <p>
              <NavLink to={"/login"}>sign in</NavLink>
            </p>
            <span>Account</span>
          </div>
        </div>

        <div className="flex gap-3">
          <div>
            <GrFavorite className="icon-wishlist" />
            <span>0</span>
          </div>
          <div>
            <IoCartOutline className="icon-cart" />
            <span>0</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logo;
