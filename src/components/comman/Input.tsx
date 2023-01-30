import React from "react";

interface InputProps {
  type: string;
  handleFunction?: (value?:any)=>void;
  value?: string | number | any;
  placeholder?: string;
}
const Input = ({ type, handleFunction, value, placeholder }: InputProps) => {
  let style: string =
    "w-full h-10 border-gray-500 border rounded-sm px-2 py-2 my-5";

  return (
    <>
      <input
        className={style}
        type={type}
        value={value}
        onChange={(e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement >) => {
          handleFunction?.(e.target.value);
        }}
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
