import React from "react";
import { Controller } from "react-hook-form";

const Input = ({
  name,
  control,
  placeholder,
  errors,
  className,
  type = "text",
  ...props
}) => (
  <Controller
    name={name}
    control={control}
    render={({ field }) => (
      <>
        {type === "textarea" ? (
          <textarea
            {...field}
            placeholder={placeholder}
            className={`textarea ${errors ? "border-red-500" : ""}`}
            {...props}
          />
        ) : (
          <input
            {...field}
            type={type}
            placeholder={placeholder}
            className={`input ${errors ? "border-red-500" : ""}`}
            {...props}
          />
        )}
        {errors && (
          <p className="error-label absolute mt-1 ml-2 text-red-500">
            {errors.message}
          </p>
        )}
      </>
    )}
  />
);

export default Input;
