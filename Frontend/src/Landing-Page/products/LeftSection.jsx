import React from "react";
import googlePlayBadge from "../media/imgaes/googlePlayBadge.svg";
import appstoreBadge from "../media/imgaes/appstoreBadge.svg";
import "../home/Home.css";

function LeftSection({ imageURL, tittle, description, tryDemo, learnMore }) {
  return (
    <>
      <div className="container mt-5 ">
        <div className="row">
          <div className="col-12 col-md-5">
            <img src={imageURL} className="p-5 left-img" />
          </div>
          <div className="col-12 col-md-2 "></div>
          <div className="col-12 col-md-5 p-5">
            <div
              className="ml-5 kite"
              style={{ marginLeft: "20%", lineHeight: "2rem" }}
            >
              <h1 className="mt-5 ">{tittle}</h1>
              <p className="mt-3"> {description}</p>
              <a href="" className="mx-5">
                {tryDemo}
              </a>
              <a href="">{learnMore}</a>
              <img
                src={googlePlayBadge}
                alt="googlePlayBadge"
                className="mx-4 mt-4"
              />
              <img src={appstoreBadge} alt="appstoreBadge" className="mt-4" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftSection;
