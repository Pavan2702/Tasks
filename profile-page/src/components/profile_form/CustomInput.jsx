"use client";
import { ErrorMessage } from "formik";
import React, { useState, useRef } from "react";

const CustomInput = ({
  field,
  form,
  placeholder,
  inputPlaceholder,
  required = false,
  isDisabled = false,
  type,
  min,
  max,
  className,
  autoComplete,
  children,
  classNameWrapper,
  classNameContainer,
  handleChange,
  textPlaceholder,
  titleText,
}) => {
  if (handleChange) {
    field.onChange = handleChange;
  }

  const inputRef = useRef(null);
  const [isHidden, setIsHidden] = useState(true);
  const [isFocused, setIsFocused] = useState(false);

  const handleEyeClick = () => {
    setIsHidden(!isHidden);
  };

  const inputFocused = () => {
    setIsFocused(true);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const inputDeFocused = () => {
    setIsFocused(false);
    if (inputRef.current) {
      inputRef.current.blur();
    }
  };

  return (
    <div className={classNameWrapper}>
      <div className="flex">
        <div
          onClick={inputFocused}
          className={`flex flex-grow items-center rounded-lg border-[1.2px] ${isDisabled ? "border-[#E3E3E4]/30" : "border-[#E3E3E4]"
            } ${classNameContainer}`}
        >
          <div
            className={`relative w-full cursor-text  ${className} ${isDisabled ? "cursor-not-allowed" : ""
              }`}
          >
            <span
              className={`absolute left-3 transition-all duration-200 ${field.value || isFocused ? "-top-2 text-xs text-gray-500" : "top-1/2 transform -translate-y-1/2 text-lg text-gray-500"
                }`}
            >
              {field.value || isFocused || field.value === 0
                ? titleText || placeholder
                : placeholder}
              {required && <span className="text-red-500 ml-1">*</span>}
            </span>

            {/* Input Field */}
            <input
              ref={inputRef}
              type={isHidden ? type : "text"}
              value={field?.value ?? ""}
              {...field}
              onBlur={inputDeFocused}
              onFocus={inputFocused}
              min={min}
              max={max}
              autoComplete={autoComplete || "off"}
              placeholder={inputPlaceholder}
              disabled={isDisabled}
              className={`w-full px-3 py-3 inputplace text-gray-700 border-none bg-transparent text-sm placeholder:text-sm focus:outline-none ${isDisabled ? "bg-gray-100" : "bg-white"
                }`}
            />

            {/* if email is correct thenn show circle right icon */}
            {type === "email" && field.value && (
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM6.93931 11.6569L6.93934 11.6568L6.93936 11.6569L11.8891 6.70711C12.2796 6.31658 12.2796 5.68342 11.8891 5.29289C11.4986 4.90237 10.8654 4.90237 10.4749 5.29289L6.93933 8.82846L5.5251 7.41423C5.13458 7.0237 4.50141 7.0237 4.11089 7.41422C3.72036 7.80475 3.72036 8.43791 4.11089 8.82844L6.93931 11.6569Z" fill="#27CFB1" />
                </svg>
              </div>
            )}
          </div>
          <div>{children}</div>
        </div>
      </div>
      <div className="text-sm text-red-600">
        <ErrorMessage name={field.name} />
      </div>
    </div>
  );
};

export default CustomInput;
