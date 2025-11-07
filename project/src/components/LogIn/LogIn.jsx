import React from "react";
import "./LogIn.css";

function LogIn() {
  return (
    <div className="LogIn">
      <div className="container flex-dir gap-4 my-5">
        <div className="flex gap-4 ">
          <b>
            <a href="/">Signup</a>
          </b>
          <b>LogIn </b>
        </div>
        <div>
          <form className="flex-dir w-50 m-auto gap-3 ">
            <p>
              There are many advantages to creating an account: the payment
              process is faster, shipment tracking is possible and much more.
            </p>


            <div className="flex-dir gap-1 w-100">
              <label htmlFor="email" className="w-100 px-2">
                email address*
              </label>
              <input
                type="text"
                id="email"
                className="w-100 rounded py-2 px-4"
              />
            </div>
            <div className="flex-dir gap-1 w-100">
              <label htmlFor="pass" className="w-100 px-2">
                password*
              </label>
              <input
                type="text"
                id="pass"
                className="w-100 rounded py-2 px-4"
              />
            </div>
           

            <button className="w-100 btn btn-success">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
