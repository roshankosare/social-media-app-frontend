import React from "react";

const Button = ({
  value,
  handleFunction,
}: {
  value?: string;
  handleFunction?: () => {};
}) => {
  return (
    <>
      <button
        className="w-full h-10 bg-sky-600 text-white font-bold border-2 rounded-sm px-2 py-2 my-5"
        onClick={handleFunction}
      >
        {" "}
        {value}
      </button>
    </>
  );
};

export default Button;
