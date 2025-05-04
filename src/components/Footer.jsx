import React from "react";

const Footer = () => (
  <footer className="bg-[#1e293b] border-t text-center text-sm text-gray-400 py-6 mt-8">
    &copy; {new Date().getFullYear()} <span className="font-semibold text-white">MySite</span>. All rights reserved.
  </footer>
);

export default Footer;
