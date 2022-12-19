import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 container mx-auto text-center p-10 text-sm text-teal-900 border-t-2 border-teal-900 border-dashed rounded-bl-lg rounded-br-lg">
      <p>&copy; {new Date().getFullYear()} Todo App.All right reserved</p>
    </footer>
  );
};

export default Footer;
