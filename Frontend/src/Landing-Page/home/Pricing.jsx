import React from "react";
import "./Home.css";

function Pricing() {
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-12 col-md-4">
          <h2 className="mb-5 free">Unbeatable pricing</h2>
          <p
            className="fs-8 text-muted mt-4 trading"
            style={{ width: "28rem" }}
          >
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" className="free-link">
            See pricing{" "}
            <i
              className="fa-solid fa-arrow-right"
              style={{ color: "#4B7CCB" }}
            ></i>
          </a>
        </div>
        <div className="col-12 col-md-2"></div>
        <div className="col-12 col-md-6">
          <div className="row text-center">
            <div className="col border p-3">
              <h1 className="pb-4">₹0</h1>
              <p className="pt-4">
                Free equity delivery and direct mutual funds
              </p>
            </div>
            <div className="col border p-3">
              <h1 className="pb-4">₹20</h1>
              <p className="pt-4">Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
