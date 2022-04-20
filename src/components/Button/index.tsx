import React, { InputHTMLAttributes } from "react";

export const Button: React.FC<InputHTMLAttributes<HTMLButtonElement>> = (props) => (
  <button
    onClick={props.onClick}
    disabled={props.disabled}
    className="my-5 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-500 disabled:cursor-not-allowed"
  >
    { props.children }
  </button>
)
