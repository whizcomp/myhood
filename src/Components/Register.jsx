import React from "react";

export default function Register() {
  return (
    <div className="container">
      <div className="login">
        <div className="text-center p-4 m-5 shadow">
          <h4 className="fw-bold">Welcome to Winter Hood</h4>
          <p>Fill in the details to Register</p>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email"
            />
            <label for="email">Email</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="firstname"
              placeholder="FirstName"
            />
            <label for="firstname">FirstName</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="lastname"
              placeholder="LastName"
            />
            <label for="lastname">LastName</label>
          </div>
          <div class="form-floating pb-2">
            <textarea
              class="form-control"
              placeholder="Address"
              id="floatingTextarea"
            ></textarea>
            <label for="floatingTextarea">Your Address</label>
          </div>
          <div className="mb-3 d-grid gap-2">
            <button className="btn btn-primary">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
