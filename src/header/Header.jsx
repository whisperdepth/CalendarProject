import React from "react";
import "./header.scss";
import Navigation from "./navigation/Navigation";
import Week from "./week/Week";

const Header = ({ monday, week, ...props }) => {
  return (
    <header className="header">
      <Navigation {...props} monday={monday} />
      <Week monday={monday} week={week} />
    </header>
  );
};

export default Header;
