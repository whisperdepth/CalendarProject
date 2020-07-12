import React from "react";
import "./GMT.css";

const GMT = ({ monday }) => {
  return (
    <div className="GMT">{`${new Date(monday).toString().slice(24, 31)}`}</div>
  );
};

export default GMT;
