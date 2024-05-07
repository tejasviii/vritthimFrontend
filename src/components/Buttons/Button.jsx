import React from "react";

const Button = ({text, width, marginLeft, paddingTop, paddingBottom, paddingLeft, paddingRight}) => {
  return (
    <button
      class="bg-blue-700 text-white  hover:bg-blue-600"
      style={{
        fontFamily: "'Poppins', sans-serif",
        fontWeight: "500",
        fontSize: "14px",
        letterSpacing: "1px",
        display: "inline-block",
        borderRadius: "50px",
        width: width,
        marginLeft : marginLeft,
        paddingTop: paddingTop,
        paddingBottom: paddingBottom,
        paddingLeft: paddingLeft,
        paddingRight: paddingRight
      }}
    >
      {text}
    </button>
  );
};

export default Button;
