import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = ({className, ...rest}: InputProps) => {
  return (
    <input
      className={`border-b p-2 outline-0 rounded-md min-w-40 border-primary ${className ?? "" }`}
      {...rest}
    />
  );
};
