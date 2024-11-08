"use client";
import React from "react";

const CustomInput = ({
  type = "text",
  name,
  value,
  placeholder,
  onChange,
  onBlur,
}) => {


  return (
    <div className="w-full">
      <div className="relative">
        <input
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          className="peer w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-[13px] transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
        />
        <label className="absolute cursor-text bg-white px-1 left-2.5 top-2.5 text-slate-400 text-sm transition-all transform origin-left peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-slate-400 peer-focus:scale-90">
          {placeholder}
        </label>
        {type === "email" && value && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM6.93931 11.6569L6.93934 11.6568L6.93936 11.6569L11.8891 6.70711C12.2796 6.31658 12.2796 5.68342 11.8891 5.29289C11.4986 4.90237 10.8654 4.90237 10.4749 5.29289L6.93933 8.82846L5.5251 7.41423C5.13458 7.0237 4.50141 7.0237 4.11089 7.41422C3.72036 7.80475 3.72036 8.43791 4.11089 8.82844L6.93931 11.6569Z" fill="#27CFB1" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomInput;
