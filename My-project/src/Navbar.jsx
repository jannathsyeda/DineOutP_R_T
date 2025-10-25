import React from "react";
import logo from "./assets/logo.svg";
import userIcon from "./assets/react.svg";
export default function Navbar() {
    
  return (
    <nav className="bg-[rgba(89,86,86,0.29)] rounded-full mt-4 px-8 py-3 flex justify-between items-center">
      <div className="flex items-center ">
        <div className="text-primary mr-2">
          <img src={logo} />
        </div>
        <h1 className="text-2xl font-bold">
          <span className="text-[#FF602C]">Dine</span>Out
        </h1>
      </div>
      <div className="flex items-center">
        <img src={userIcon} className="h-10" />
      </div>
    </nav>
  );
}
