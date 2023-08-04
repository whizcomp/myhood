import React from "react";
import blue from "../assets/blue.png";
import AOS from "aos";

export default function Hero() {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="hero tilt">
      <div className="container h-100 ">
        <div className="row h-100">
          <div
            className="col-12 col-md-6  d-flex flex-column justify-content-center align-items-center"
            data-aos="slide-up"
          >
            <div>
              <h1 className="fw-bold display-3 pb-3" data-aos="slide-up">
                Winter Hood
              </h1>
              <h2 className="fs-5 text-grey pb-2">
                Your One-Stop Destination for Stylish and Warm hoodies
              </h2>
              <button className="btn btn-lg btn-secondary btn-mod">
                Shop now
              </button>
            </div>
          </div>
          <div className="col-12 col-md-6 h-100">
            <div className="d-flex justify-content-center align-items-center pt-3">
              <img src={blue} alt="" height="400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
