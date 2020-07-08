import React from "react";
import "./GMT.scss";
import moment from "moment";

const GMT = ({ monday }) => {
  return (
    <div className="GMT">{`GMT${moment(monday)
      .format()
      .toString()
      .slice(19, 22)}`}</div>
  );
};

export default GMT;
