import { useState } from "react";
import { GiCrossMark } from "react-icons/gi";
import { RxHamburgerMenu } from "react-icons/rx";
import SideNav from "./SideNav";

function Navbar() {
  const [openSideNav, setOpenSideNav] = useState(false);
  const toggleSideNav = () => {
    setOpenSideNav(!openSideNav);
  };
  return (
    <nav className="relative flex justify-evenly items-center p-4">
      <RxHamburgerMenu
        onClick={toggleSideNav}
        className="md:hidden cursor-pointer text-2xl"
      />
      <img src="codingpro_logo.png" className="w-48" />
      <div className="flex gap-8 max-md:hidden">
        <a href="#" className="hover:text-sky-500">
          About Us
        </a>
        <a href="#" className="hover:text-sky-500">
          Virtual Labs
        </a>
        <a href="#" className="hover:text-sky-500">
          Programs
        </a>
        <a href="#" className="hover:text-sky-500">
          For College
        </a>
      </div>
      <SideNav openSideNav={openSideNav} />
      <div className="flex gap-8">
        <button className="bg-white rounded-lg p-2 px-4 text-sky-500 border border-sky-500">
          Log in
        </button>
        <button className="bg-sky-500 text-white rounded-lg p-2 px-4">
          Register
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
