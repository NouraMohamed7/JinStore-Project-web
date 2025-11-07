import React from 'react'
import './ProductDashboard.css'

function ProductDashboard() {

  return <div className="ProductDashboard w-100 my-4">
    <h2>Add New Product</h2>
        <form  className='form-pro flex-dir w-75 m-auto py-4 px-3  rounded shadow'>
          <div className=''>
            <label htmlFor="proName">Product Name</label>
            <input type="text" id="proName" />
          </div>
          <div>
            <label htmlFor="proPrice"> Price</label>
            <input type="text" id="proPrice" />
          </div>
          <div>
            <label htmlFor="proDiscount"> Discount</label>
            <input type="text" id="proDiscount" />
          </div>
          <div>
            <label htmlFor="proTitle">Title</label>
            <input type="text" id="proTitle" />
          </div>
          <div>
            <label htmlFor="proDesc">Description</label>
            <input type="text" id="proDesc" />
          </div>
          <div>
            <label htmlFor="proAmount">Amount</label>
            <input type="text" id="proAmount" />
          </div>
          <div>
            <label htmlFor="proImags">Product Image</label>
            <input type="file" id="proImags" />
          </div>
          <button className='btn-add btn btn-success rounded w-25'>Add</button>
        </form>
      </div>
 
  
}

export default ProductDashboard