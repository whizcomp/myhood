import { useFormikContext } from "formik";
import React from "react";

export default function Input({
  label,
  name,
  placeholder,
  type = "text",
  ...props
}) {
  const { values, errors, touched, handleChange, handleBlur } =
    useFormikContext();
  return (
    <>
      <div className="form-floating  mb-3">
        <input
          type={type}
          className="form-control"
          id={name}
          name={name}
          placeholder={placeholder}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values[name]}
          {...props}
        />
        <label htmlFor={name} className="form-label">
          {label}
        </label>
        {errors[name] && touched[name] ? (
          <div className="text-danger">{errors[name]}</div>
        ) : null}
      </div>
    </>
  );
}
