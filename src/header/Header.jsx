import React from "react";
import "./header.scss";
import Tools from "./tools/Tools";
import Days from "./days/Days";

class Header extends React.Component {
  

  render(){
    return (
    <header className="header">
      <Tools />
      <Days />
    </header>
  );
  }
  
};

export default Header;
