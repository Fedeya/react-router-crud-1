import React from "react";

const Footer = () => {

  const year = new Date().getFullYear();
  
  return (
    <p className="text-center mt-5">&copy; Federico Minaya {year}</p>
  );
}

export default Footer;