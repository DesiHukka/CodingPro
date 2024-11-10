import React from "react";
import { BiSolidContact } from "react-icons/bi";
import { FaTrophy } from "react-icons/fa";
import { GiLabCoat } from "react-icons/gi";
import { HiBuildingOffice } from "react-icons/hi2";

function SideNav({ openSideNav }) {
  return (
    <div
      className={`absolute top-full left-0 transition-transform transform ${
        openSideNav ? "translate-x-0" : "-translate-x-full"
      } duration-300 ease-in-out bg-slate-300  `}
    >
      {openSideNav && (
        <div className="flex flex-col border-2 border-sky-500">
          <div className="flex items-center gap-2 text-xs font-medium p-8 border-b-2 bg-white text-black">
            <BiSolidContact className="text-3xl text-sky-800" />
            <a href="#">About Us</a>
          </div>
          <div className="flex items-center gap-2 text-xs font-medium p-8 border-b-2 bg-white text-black">
            <GiLabCoat className="text-3xl text-sky-800" />
            <a href="#">Virtual Labs</a>
          </div>
          <div className="flex items-center gap-2 text-xs font-medium p-8 border-b-2 bg-white text-black">
            <FaTrophy className="text-3xl text-sky-800" />
            <a href="#">Programs</a>
          </div>
          <div className="flex items-center gap-2 text-xs font-medium p-8 border-b-2 bg-white text-black">
            <HiBuildingOffice className="text-3xl text-sky-800" />
            <a href="#">For Colleges</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default SideNav;
