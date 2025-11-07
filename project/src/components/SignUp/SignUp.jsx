import React from "react";
import "./SignUp.css";

function SignUp() {
  return (
    <div className="SignUp">
      <div className="container flex-dir gap-4 my-5">
        <div className="flex gap-4 ">
          <b> <a href="/login">Login</a></b>
          <b>Register</b>
        </div>
        <div>
          <form className="flex-dir w-50 m-auto gap-3 ">
            <p>
              There are many advantages to creating an account: the payment
              process is faster, shipment tracking is possible and much more.
            </p>

            <div className="flex-dir gap-1  w-100">
              <label htmlFor="name" className="w-100 px-2">
                username*
              </label>
              <input
                type="text"
                id="name"
                className="w-100 rounded py-2 px-4"
              />
            </div>

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
            <div className="checkbox">
              <input type="checkbox" id="customer" />
              <label htmlFor="customer" >
                I am a customer
              </label>
            </div>
            <div className="checkbox">
              <input type="checkbox" id="vendor" />
              <label htmlFor="vendor" >
                I am a vendor
              </label>
            </div>

            <p>
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our <span>privacy policy.</span>
            </p>
            <button className="w-100 btn btn-success">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
