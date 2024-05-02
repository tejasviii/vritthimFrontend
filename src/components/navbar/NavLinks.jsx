import React from "react";
import { links } from "./NavbarLinks";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoChevronUpSharp } from "react-icons/io5";


const NavLinks = () => {
  const [heading, setHeading] = useState("");
  return (
    <>
      {links.map((link) => (
        <div>
          <div className="px-3 text-left md:cursor-pointer group">
            <h1
              className="py-7 flex justify-between items-center md:pr-0 pr-5 group"
              onClick={() =>
                heading !== link.name ? setHeading(link.name) : setHeading("")
              }
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

                  <span
                    className="text-xl md:mt-1 md:ml-2 inline md:block hidden group:hover:rotate-180 group-hover:mt-2"
                  >
                    <IoIosArrowDown />
                  </span>
                </>
              )}
            </h1>
            {link.submenu && (
              <div>
                <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
                  <div className="py-3">
                    <div className="w-4 h-4 left-3 absolute mt-1 bg-white rotate-45"></div>
                  </div>
                  <div className="bg-white p-3.5">
                    {link.sublinks?.map((li) => (
                      <div>
                        <li className="text-sm text-gray-700 my-2.5 hover:text-blue-700">
                          {li.name}
                        </li>
                      </div>
                    ))}
                  </div>
                </div>
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
