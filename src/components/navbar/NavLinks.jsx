import React from "react";
import { links } from "./NavbarLinks";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoChevronUpSharp } from "react-icons/io5";
import '../navbar/Header.jsx'


const NavLinks = (props) => {
  const [heading, setHeading] = useState("");
  return (
    <>
      {links.map((link) => (
        <div>
          <div className="md:cursor-pointer group">
            <p
              className={props.color ? "hover:text-blue-500 flex justify-between items-center text-black md:pr-0 pr-5 group" : " hover:text-blue-500 flex justify-between items-center text-white md:pr-0 pr-5 group"}
              onClick={() =>
                heading !== link.name ? setHeading(link.name) : setHeading("")
              }
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "12px",
                fontWeight: "600",
              }}
            >
              {link.name}
              {link.submenu && (
                <>
                  <span className="text-xl md:hidden inline">
                    {heading === link.name ? (
                      <IoChevronUpSharp />
                    ) : (
                      <IoIosArrowDown />
                    )}
                  </span>

                  <span className="text-xl md:mt-1 md:ml-2 inline md:block hidden  group-hover:mt-2">
                    <IoIosArrowDown />
                  </span>
                </>
              )}
            </p>
            {link.submenu && (
              <div
                className="subNavLinks bg-white absolute hidden group-hover:md:block hover:md:block "
                style={{ border: "1px solid black", transition: "0.3s",padding:"10px 0" }}
              >
                  {link.sublinks?.map((li) => (
                    <div style={{padding:"5px"}}>
                      <li className="text-sm text-gray-700 my-2.5 hover:text-blue-700">
                        {li.name}
                      </li>
                    </div>
                  ))}
              </div>
            )}
          </div>
          {/* Mobile Menu */}
          <div
            className={`
              ${heading === link.name ? "md:hidden" : "hidden"}
          `}
          >
            {link.sublinks?.map((sublink) => (
              <div>
                <div>
                  <h1 className="py-4 pl-7 font-semibold md:pr-5">
                    {sublink.name}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
