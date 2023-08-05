import React from "react";
import { TfiClose } from "react-icons/tfi";

export default function CartBox({ img, title, status, amount }) {
  return (
    <div className="container w-50 mb-3">
      <div className="shadow p-3 d-flex flex-row bg-light w-100">
        <img src={img} alt="" className="" height={200} />
        <div className="d-flex  me-auto ms-auto">
          <div className="justify-content-center">
            <h6 className="fw-bold">{title}</h6>
            <div className="d-flex flex-column">
              <p className="fw-bold fs-5 ">$ {amount}</p>
              <div className="d-flex flex-column">
                <p>Number of items: 12</p>

                <div className="">
                  <p
                    className={`badge rounded-pill bg-${
                      status == "shipping" ? "primary" : "success"
                    } text-dark`}
                  >
                    {" "}
                    {status}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
