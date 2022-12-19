import React from "react";
import { HiDocumentText } from "react-icons/hi";
const Header = () => {
  return (
    <div className="header bg-gray-900 container mx-auto p-10 border-b-2 border-dashed border-teal-900 rounded-tl-lg rounded-tr-lg">
      <h2 className="uppercase font-semibold text-teal-500 tracking-wider flex gap-2 items-center">
        <span>
          <HiDocumentText />
        </span>
        <span>Todo App</span>
      </h2>
    </div>
  );
};

export default Header;
