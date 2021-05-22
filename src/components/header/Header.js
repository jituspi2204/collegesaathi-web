import React from "react";
const Header = ({ title }) => {
  return (
    <header>
      <p className="text-2xl font-bold">{title}</p>
      <div className="w-14 bg-yellow-400 h-1 mb-10" />
    </header>
  );
};

export default Header;
