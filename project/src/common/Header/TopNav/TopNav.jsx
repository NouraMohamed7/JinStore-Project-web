import React from 'react'
import './TopNav.css'
import Dropdown from "react-bootstrap/Dropdown";

function TopNav() {
  return (
    <div className="TopNav flex justify-content-between ">
      <div className="flex gap-4">
        <div className="flex gap-2">
          <a href="#">About Us</a>
          <a href="#">My account</a>
          <a href="#">Wishlist</a>
        </div>
        <div className="flex gap-1">
          <p className="m-0">We deliver to you every day from</p>
          <span>7:00 to 23:00</span>
        </div>
      </div>

      <div className="flex gap-3">
        <Dropdown className='flex'>
          <Dropdown.Toggle
            variant="secondary"
            id="dropdown-basic"
            className="Dropdown m-0"
          >
            language
          </Dropdown.Toggle>

          <Dropdown.Menu >
            <Dropdown.Item href="#" className="Dropdown-item">
              Arabic
            </Dropdown.Item>
            <Dropdown.Item href="#" className="Dropdown-item">
              English
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <span>USD</span>
        <span>Order Tracking</span>
      </div>
    </div>
  );
}

export default TopNav