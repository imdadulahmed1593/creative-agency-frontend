import React from "react";
import "./Partners.css";
function Partners() {
  return (
    <div className="partners__logos d-flex mt-5 justify-content-center align-items-center container row">
      <div className="col-sm partners__logo">
        <img src={require("../../images/logos/google.png")} alt="" />
      </div>
      <div className="col-sm partners__logo">
        <img src={require("../../images/logos/netflix.png")} alt="" />
      </div>
      <div className="col-sm partners__logo">
        <img src={require("../../images/logos/airbnb.png")} alt="" />
      </div>
      <div className="col-sm partners__logo">
        <img src={require("../../images/logos/slack.png")} alt="" />
      </div>
      <div className="col-sm partners__logo">
        <img src={require("../../images/logos/uber.png")} alt="" />
      </div>
    </div>
  );
}

export default Partners;
