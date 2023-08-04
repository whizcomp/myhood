import React from "react";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div>
      <div className="container">
        <div className="login">
          <div className="text-center p-4 m-5 shadow">
            <h4 className="fw-bold">Welcome to Winter Hood</h4>
            <p>Fill in the details to Login</p>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Email"
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="password"
              />
            </div>
            <div className="fs-6 pb-2 fw-bold text-start">Forgot password?</div>
            <div className="mb-3 d-grid gap-2">
              <button className="btn btn-primary">login</button>
              <Link to="/register" className="btn btn-light">
                Register
              </Link>
            </div>
          </div>
        </div>
        {/* <div className="card p-3 m-3">
          <h1 className="text-center">Login</h1>
          
          
          
          
        </div> */}
      </div>
    </div>
  );
}
