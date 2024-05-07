import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.jpg";
import NavLinks from "./NavLinks";
import Button from "../Buttons/Button";
import NightModeIcon from "../../assets/NighModeIcon.jpg";
import "../navbar/Navbar.css";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY > 10) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);
  return (
    <header className={color ? "flex bg-white" : "flex"}
    style={{
      height: "90px",
      width: "100%",
      alignItems: "center",
      position: "fixed",
    }}>
    <nav className="navbar flex justify-center w-full">
      <div
        id="nav"
        className="nav flex items-center font-medium justify-between"
      >
        <div
          className=" md:w-auto flex justify-center h-full"
          style={{
            width: "15%",
            alignItems: "center",
          }}
        >
          <img
            src={Logo}
            alt="Logo-Image"
            className="md:cursor-pointer h-9"
          />
          <div
            className="text-3xl md:hidden z-50"
            onClick={() => setOpen(!open)}
          >
            {open ? <IoClose /> : <IoMenu />}
          </div>
        </div>
        <ul
          className="md:flex hidden uppercase items-center justify-around font-[Poppins]"
          style={{ width: "60%", height: "100%" }}
        >
          <NavLinks color={color}/>
        </ul>

        <div
          className="md:block hidden"
          style={{
            width: "10% ",
            display: "flex",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Button text="Get Quotes" width="100%"></Button>
        </div>
        <div
          style={{
            width: "5%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src={NightModeIcon}
            alt="Night-Mode-Icon"
            className="w-[45px] h-[45px]"
            style={{ borderRadius: "50%", width: "45px", height: "45px" }}
          />
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
    </header>
  );
};

export default Navbar;
