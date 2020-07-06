import React from "react";
import "./header.scss";
import Tools from "./tools/Tools";
import Days from "./days/Days";

const Header = () => {
  return (
    <header className="header">
      <Tools />
      <Days />
    </header>
  );
};

export default Header;
