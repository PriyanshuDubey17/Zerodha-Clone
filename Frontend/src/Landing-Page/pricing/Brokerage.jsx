import React from "react";
import "../home/Home.css";

function Brokerage() {
  return (
    <div className="container mt-5">
      <div className="row mt-5">
        <div className="col-12 col-md-8">
          <div className="p-5 fs-5" style={{ fontWeight: "400", width: "80%" }}>
            <a href="" className="">
              {" "}
              Brokerage calculator
            </a>
          </div>
          <ul
            className="text-muted "
            style={{ fontSize: "0.7rem", lineHeight: "1.8rem" }}
          >
            <li className="text-muted ">
              Call & Trade and RMS auto-squareoff: Additional charges of ₹50 +
              GST per order.
            </li>
            <li className="text-muted ">
              Digital contract notes will be sent via e-mail.
            </li>
            <li className="text-muted ">
              Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note. Courier charges apply.
            </li>
            <li className="text-muted ">
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower)
            </li>
            <li className="text-muted ">
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li className="text-muted ">
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>
        <div className="col-12 col-md-4 fs-5">
          <div className="text-center p-5" style={{ fontWeight: "400" }}>
            {" "}
            <a href="" className="">
              List of charges
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
