import React, { useState } from "react";
import Input from "./Input";
import { Formik } from "formik";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
export default function PasswordRegister() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const handleSubmit = (values) => {
    const { password } = values;
    const details = { ...state, password };

    submitDetails(details);
  };
  const [errorMessage, setErrorMessage] = useState("");
  const submitDetails = async (details) => {
    const { email, firstname, lastname, address, password } = details;
    try {
      await axios.post("http://localhost/winter-hood/register.php", {
        email,
        firstname,
        lastname,
        address,
        password,
      });
      navigate("/login");
    } catch ({ response }) {
      setErrorMessage(response.data.error);
    }
  };
  return (
    <div className="container">
      <div className="login">
        <div className="text-center p-4 m-5 shadow">
          <h4 className="fw-bold"> Welcome to Winter Hood</h4>
          <p>Setup Your Password</p>
          <Formik
            initialValues={{
              email: state.email,
              password: "",
              repeatPassword: "",
            }}
            onSubmit={(values) => handleSubmit(values)}
          >
            {({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                {errorMessage && (
                  <div
                    className="alert alert-danger alert-dismissible fade show"
                    role="alert"
                  >
                    {errorMessage}
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                    ></button>
                  </div>
                )}
                <Input
                  name="email"
                  label="Email"
                  placeholder={state.email}
                  disabled
                />
                <Input
                  name="password"
                  label="password"
                  placeholder="password"
                  type="password"
                />
                <Input
                  name="repeatPassword"
                  label="Repeat password"
                  placeholder="Repeat password"
                  type="password"
                />
                <div className="mb-3 d-grid gap-2">
                  <button type="submit" className="btn btn-primary">
                    Register
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
