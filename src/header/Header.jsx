import React from "react";
import "./header.scss";
import Tools from "./tools/Tools";
import Days from "./days/Days";

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
