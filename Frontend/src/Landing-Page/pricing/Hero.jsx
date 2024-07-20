import React from "react";
import pricing0 from "../media/imgaes/pricing0.svg";
import pricingEquity from "../media/imgaes/pricingEquity.svg";
import otherTrades from "../media/imgaes/otherTrades.svg";
import '../home/Home.css'

function Hero() {
  return (
    <>
      <div className="container">
        <div className="row text-center mt-5 p-5">
          <h1 className="p-3">Pricing</h1>
          <p className="fs-5">
            Free equity investments and flat ₹20 intraday and F&O trades
          </p>
        </div>
      </div>

      <div className="container p-5 mt-5 border-top border-bottom">
        <div className="row mt-5 " >
          <div className="col-4 ">
            <img src={pricing0} alt="pricing0" style={{width:"80%"}}/>
            <h3 className="mt-3">Free equity delivery</h3>
            <p className=" pt-3  text-small text-muted" style={{lineHeight:"1.8rem"}}>
              All equity delivery investments (NSE, BSE), are absolutely free —
              ₹ 0 brokerage.
            </p>
          </div>
          <div className="col-4 ">
            <img src={otherTrades} alt="otherTrades "  style={{width:"80%"}}/>

            <h3 className="mt-3">Intraday and F&O trades</h3>
            <p className=" pt-3 text-small text-muted" style={{lineHeight:"1.8rem"}}>
              Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
              intraday trades across equity, currency, and commodity trades.
              Flat ₹20 on all option trades.
            </p>
          </div>
          <div className="col-4">
            <img src={pricingEquity} alt="pricingEquity" style={{width:"80%"}}/>
            <h3 className="mt-3">Free direct MF</h3>
            <p className="pt-3 text-small text-muted " style={{lineHeight:"1.8rem"}}>
            All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
