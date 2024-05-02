import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.jpg";
import NavLinks from "./NavLinks";
import Button from "../Buttons/Button";
import NightModeIcon from "../../assets/NightModeIcon.webp";
import "../navbar/Navbar.css";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navbar bg-white">
      <div className="flex items-center font-medium justify-around">
        <div className=" p-5 md:w-auto w-full flex justify-between">
          <img src={Logo} alt="Logo-Image" className="md:cursor-pointer h-9" />
          <div
            className="text-3xl md:hidden z-50"
            onClick={() => setOpen(!open)}
          >
            {open ? <IoClose /> : <IoMenu />}
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
          <NavLinks />
        </ul>
        <div>
          <div className="md:block hidden">
            <Button />
          </div>
          <div>
            <img
              src={NightModeIcon}
              alt="Night-Mode-Icon"
              className="w-[45px] h-[45px]"
            />
          </div>
        </div>

        {/* Mobile Nav */}
        <ul
          className={`md:hidden bg-[#025add] absolute w-full h-full bottom-0 py-24 pl-4 duration-500 ${
            open ? "right-0" : "right-[-100%]"
          }`}
        >
          <NavLinks />
          <div className="py-5">
            <Button />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
