import React from "react";
import "./Home.css";
import ecosystem from "../media/imgaes/ecosystem.png";

function Stats() {
  return (
    <>
      <div className="container p-4 ">
        <div className="row ">
          <div className="col-12 col-md-6 p-5">
            <h2 className="mb-5">Trust with confidence</h2>
            <h3 className="fs-4">Customer-first always</h3>
            <p className="fs-8 text-muted">
              That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh
              crores worth of equity investments.
            </p>

            <h3 className="fs-4 mt-5">No spam or gimmicks</h3>
            <p className="fs-8 text-muted">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like.
            </p>

            <h3 className="fs-4 mt-5">The Zerodha universe</h3>
            <p className="fs-8 text-muted">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>

            <h3 className="fs-4 mt-5">Do better with money</h3>
            <p className="fs-8 text-muted">
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <img
              src={ecosystem}
              alt="Hero Image"
              className=""
              style={{ width: "95%", height: "80%" }}
            />

            <div className="text-center mt-4">
              <a href="" className="mx-4">
                Explore our products{" "}
                <i
                  className="fa-solid fa-arrow-right"
                  style={{ color: "#4B7CCB" }}
                ></i>
              </a>
              <a href="">
                Try Kite demo{" "}
                <i
                  className="fa-solid fa-arrow-right"
                  style={{ color: "#4B7CCB" }}
                ></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Stats;
