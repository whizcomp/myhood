import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import Input from "./Input";
import axios from "axios";
import UserContext from "../Context/userContext";
export default function Login() {
  const { user, setUser } = useContext(UserContext);
  const [errorMessage, setErrorMessage] = useState("");
  const handleSubmit = async (values) => {
    const { email, password } = values;
    try {
      const res = await axios.post("http://localhost/winter-hood/login.php", {
        email,
        password,
      });
      if (res.status == 400) {
        console.log(res.statusText);
      } else if (res.status == 200) {
        console.log(res.data);
        const { token } = res.data;
        localStorage.setItem("token", token);
        setUser(res.data.user);
      }
    } catch ({ response }) {
      setErrorMessage(response.data.error);
    }
  };
  return (
    <div>
      <div className="container">
        <div className="login">
          <div className="text-center p-4 m-5 shadow">
            <h4 className="fw-bold">Welcome to Winter Hood</h4>
            <p>Fill in the details to Login</p>

            <Formik
              initialValues={{
                email: "",
                password: "",
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
                        className="btn-close"
                        data-bs-dismiss="alert"
                        aria-label="Close"
                      ></button>
                    </div>
                  )}
                  <Input name="email" label="Email" placeholder="Email" />
                  <Input
                    name="password"
                    label="password"
                    placeholder="password"
                    type="password"
                  />

                  <div className="mb-3 d-grid gap-2">
                    <button type="submit" className="btn btn-primary">
                      login
                    </button>
                    <Link to="/register" className="btn btn-light">
                      Register
                    </Link>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
        {/* <div className="card p-3 m-3">
          <h1 className="text-center">Login</h1>
          
          
          
          
        </div> */}
      </div>
    </div>
  );
}
