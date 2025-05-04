import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path ? "text-blue-400 underline" : "hover:text-blue-400";

  return (
    <nav className="bg-[#1e293b] shadow-md py-4 px-8 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-white">MySite</h1>
      <div className="space-x-6 text-lg">
        <Link to="/" className={isActive("/")}>Home</Link>
        <Link to="/about" className={isActive("/about")}>About</Link>
        <Link to="/contact" className={isActive("/contact")}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;