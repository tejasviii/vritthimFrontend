import React from "react";

const Button = () => {
  return (
    <button
      class="bg-blue-700 text-white  hover:bg-blue-600"
      style={{
        fontFamily: "'Poppins', sans-serif",
        fontWeight: "400",
        fontSize:"14px",
        letterSpacing: "1px",
        display: "inline-block",
        borderRadius: "50px",
        width: "100%",
      }}
    >
      Get Quotes
    </button>
  );
};

export default Button;
