import React from "react";

const Footer = () => {
  return (
    <footer className=" text-black text-center py-4 max-h-screen">
      <p className="text-sm">© {new Date().getFullYear()} LPPM TSU</p>
    </footer>
  );
};

export default Footer;
