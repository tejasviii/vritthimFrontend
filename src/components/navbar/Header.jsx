import React, { useState } from "react";
import Navbar from "./Navbar";

const Header = () => {
  //To change Navbar color
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
    <header
      className={color ? "flex bg-white" : "flex"}
      style={{
        height: "90px",
        width: "100%",
        alignItems: "center",
        position: "fixed",
      }}
    >
      <Navbar 
        color={color}
      />
    </header>
  );
};

export default Header;
