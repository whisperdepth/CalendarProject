import React from "react";
import "./header.scss";
import Tools from "./tools/Tools";
import Days from "./days/Days";
import GetMonday from "./GetMonday.js";

const Header = ({ monday, week, ...props }) => {
  return (
    <header className="header">
      <Tools
        {...props}
        monday={monday}
      />
      <Days monday={monday} week={week}/>
    </header>
  );
};

export default Header;
