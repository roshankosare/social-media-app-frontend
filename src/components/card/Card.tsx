import React from "react";
import {FaHeart} from "react-icons/fa"
import {TfiCommentAlt} from "react-icons/tfi"

const Card = () => {
  return (
    <div className="flex flex-col h-auto w-80 shadow-lg border rounded-sm">
      <div className="flex justify-start px-4 py-2">
        <img className=" w-10 rounded-full border-2 border-blue-900  " src="avatar.png" alt="" />
        <p className="px-4 my-auto ">Roshan kosare</p>
      </div>
      <img className="" src="sample.jpg" alt="not found" />
      <div className="flex justify-between px-6 py-2">
       <div className="flex">
       <p>Likes:{43}</p>
        <FaHeart className="text-red-600 my-auto mx-1"/>
       </div>
        <div className="flex">
        <p>Comments:{20}</p>
        <TfiCommentAlt className="text-blue-500 my-auto mx-1"/>
        </div>
      </div>
    </div>
  );
};

export default Card;
