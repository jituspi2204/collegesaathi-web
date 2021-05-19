import React from "react";
const Header = ({ title }) => {
  return (
    <header>
      <p className="text-2xl font-bold">{title}</p>
      <div className="w-10 bg-yellow-400 h-2 mb-10" />
    </header>
  );
};

export default Header;
