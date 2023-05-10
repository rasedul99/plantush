import React from "react";

const Button = ({ children }) => {
  return (
    <button className="bg-primary text-white py-4 px-9 rounded-tl-[20px] rounded-br-[20px]  font-poppins font-medium text-lg">
      {children}
    </button>
  );
};

export default Button;
