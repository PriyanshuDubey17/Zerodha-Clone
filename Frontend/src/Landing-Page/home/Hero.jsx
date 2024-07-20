import React from "react";
import heroImage from "../media/imgaes/homeHero.png";
import "./Home.css";

function Hero() {
  return (
    <>
      <div className="container p-5 mb-5">
        <div className="row  text-center">
          <img src={heroImage} alt="Hero Image" className="mt-5 pt-5" />
          <h1 className="mt-5 pt-5">Invest in everything</h1>
          <p className="p-2">
            Online platform to invest in stocks, derivatives, mutual funds, and
            more
          </p>
          <button
            className="p-2 btn btn-primary fs-5 mb-5"
            style={{ width: "20%", margin: " 0 auto" }}
          >
            Sign up now
          </button>
        </div>
      </div>
    </>
  );
}

export default Hero;
