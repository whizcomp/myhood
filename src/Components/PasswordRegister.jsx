import React from "react";

export default function PasswordRegister() {
  return (
    <div className="container">
      <div className="login">
        <div className="text-center p-4 m-5 shadow">
          <h4 className="fw-bold"> Welcome to Winter Hood</h4>
          <p>Setup Your Password</p>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="email"
              value="yourEmail@gmail.com"
              disabled
            />
            <label for="email">Email</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="password"
            />
            <label for="password">Password</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="repeatPassword"
              placeholder="Repeat-password"
            />
            <label for="repeatPassword">Repeat Password</label>
          </div>
          <div className="mb-3 d-grid gap-2">
            <button className="btn btn-primary">Register</button>
          </div>
        </div>
      </div>
    </div>
  );
}
