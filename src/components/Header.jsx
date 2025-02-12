import React from "react";

const Header = ({pageName}) => {
  return (
    <div className="border-b-2 border-gray-700 px-4 py-4 bg-gray-800 text-2xl text-gray-100">
      <h2>{pageName}</h2>
    </div>
  );
};

export default Header;
