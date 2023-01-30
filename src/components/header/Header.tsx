import React from "react";
import { useAuth } from "../../context/authContext";
import { basicComponentStyle } from "../../styles/styles";

const Header = () => {
  const { isAuthenticated } = useAuth();
  return (
    <div
      className={`w-full h-20 my-2 flex justify-around px-2 py-1 ${basicComponentStyle}`}
    >
      <Logo />
      {/* search bar */}
      <SearchBar />
      {isAuthenticated && <AuthLinks />}
    </div>
  );
};

const Logo = () => {
  return (
    <div
      className="text-3xl font-extrabold  mx-10  px-2 py-1 h-10 my-auto
    bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text"
    >
      PicsXone
    </div>
  );
};

const SearchBar = () => {
  return (
    <div className="w-64 py-2 mx-10 flex items-center">
      <input className="w-4/5 rounded-sm py-1 mx-auto border " type="text" />
      <button className="bg-blue-600 text-white  font-bold font-lg px-2  h-8 rounded-sm">
        Search
      </button>
    </div>
  );
};

const AuthLinks = () => {
  const ButtonStyle = `hover:bg-blue-600 hover:text-white text-blue-600 font-bold font-lg px-2  mx-5 h-8 rounded-md`;

  return (
    <div className="flex mx-10 items-center ">
      <button className={ButtonStyle}>Log In</button>
      <button className={ButtonStyle}>Sign up</button>
    </div>
  );
};

export default Header;
