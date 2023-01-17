import React from "react";

interface IInputProps {
  type: string;
  handleFunction?: (value: string | any) => {};
  value?: string | number | any;
  placeholder?: string;
}
const Input = ({ type, handleFunction, value, placeholder }: IInputProps) => {
  let style: string =
    "w-full h-10 border-gray-500 border rounded-sm px-2 py-2 my-5";

  return (
    <>
      <input
        className={style}
        type={type}
        value={value}
        onChange={handleFunction}
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
