import React from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import TextArea from "./TextArea";
import Input from "./Input";
export default function Register() {
  const handleSubmit = (values) => {
    // console.log(values);
    navigate("/password-register", { state: values });
  };
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="login">
        <div className="text-center p-4 m-5 shadow">
          <h4 className="fw-bold">Welcome to Winter Hood</h4>
          <p>Fill in the details to Register</p>
          <Formik
            initialValues={{
              email: "",
              firstname: "",
              lastname: "",
              address: "",
            }}
            onSubmit={(values) => handleSubmit(values)}
          >
            {({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <Input
                  name="email"
                  label="Your Email"
                  placeholder="email"
                  type="email"
                />
                <Input name="firstname" label="Firstname" placeholder="John" />
                <Input name="lastname" label="lastname" placeholder="Doe" />
                <TextArea
                  name="address"
                  label="Your address"
                  placeholder="address"
                />

                <div className="mb-3 d-grid gap-2">
                  <button type="submit" className="btn btn-primary">
                    Next &gt;&gt;
                  </button>
                  <p>
                    Have an account? <Link to="/login">Login</Link>
                  </p>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
