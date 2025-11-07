import React from "react";
import "./Info.css";

function Info() {
  return (
    <div className="Info flex py-2  ">
      <div>
        <p>
          FREE delivery & 40% Discount for next 3 orders! Place your 1st order
          in.
        </p>
      </div>
      <div className="flex gap-3">
        <p>Until the end of the sale:</p>
        <div className="flex gap-2">
          <p>
            <span>47</span>days
          </p>
          <p>
            <span>06</span>hours
          </p>
          <p>
            <span>55</span>min
          </p>
          <p>
            <span>06</span>hours
          </p>
          <p>
            <span>51</span>sec
          </p>
        </div>
      </div>
    </div>
  );
}

export default Info;
