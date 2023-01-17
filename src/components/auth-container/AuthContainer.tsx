import React, { ReactNode } from "react";



const AuthContainer = ({heading,children}:{heading?:ReactNode,children:ReactNode}) => {
  return (
    <div className=" h-96 w-96 bg-white shadow-md  mx-auto my-10 rounded-sm flex flex-col px-5 py-2">
      <div className="text-center text-xl font-bold py-2 ">{heading}</div>
     {children}
    </div>
  );
};

export default AuthContainer;
