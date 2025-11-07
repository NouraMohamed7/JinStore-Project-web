import React, { useRef, useState } from 'react'
import './DownNav.css'
import { LuLayoutGrid } from "react-icons/lu";
import { MdKeyboardArrowDown } from "react-icons/md";
// eslint-disable-next-line no-unused-vars
import {motion } from "framer-motion";
import Framermotionstagger from '../../../hooks/Framermotionstagger';
import { NavLink } from 'react-router-dom';


function DownNav() {
  const [isOpen, setIsOpen] = useState(false);
  const useMenuAnimation = Framermotionstagger()
  const scope = useMenuAnimation(isOpen);
 const [selected , setSelected]=useState("Fruits & Vegetables");

  const refbtn = useRef();
  const handelSelect=(e)=>{
     setSelected(  e.target.innerText);
    setIsOpen(!isOpen)
  }
 
  return (
    <div className="DownNav flex my-2" ref={scope}>
      <div className="container flex justify-content-between ">
        <div className="customselect">
          <motion.div
            className="select-button flex gap-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <LuLayoutGrid />
            <span className="me-5" ref={refbtn}>
              All Categories
            </span>
            <MdKeyboardArrowDown className="arrow" />
          </motion.div>
          <div className="select-options ">
            <p className="select-item" onClick={handelSelect}>
              category one
            </p>
            <p className="select-item" onClick={handelSelect}>
              category two
            </p>
            <p className="select-item" onClick={handelSelect}>
              category three
            </p>
            <p className="select-item" onClick={handelSelect}>
              category four
            </p>
            <p className="select-item" onClick={handelSelect}>
              Fruits & Vegetables
            </p>
          </div>
        </div>

        <div>
          <ul className="flex gap-3 m-0">
            <li>
              <NavLink to={"/home"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"Shop"}>Shop</NavLink>
            </li>
            <li>
              <NavLink to={selected}>{selected}</NavLink>
            </li>
            <li>
              <NavLink to={"Beverages"}>Beverages</NavLink>
            </li>
            <li>
              <NavLink to={"Blog"}>Blog</NavLink>
            </li>
            <li>
              <NavLink to={"Contact"}>Contact</NavLink>
            </li>
          </ul>
        </div>

        <div className="flex gap-3">
          <div>
            <span>Trending Products</span>
            <MdKeyboardArrowDown />
          </div>
          <div>
            <span>Almost Finished</span>
            <button className="btn btn-danger">SALE</button>
            <MdKeyboardArrowDown />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DownNav