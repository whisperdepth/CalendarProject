import React from "react";
import "./save-btn.scss";

const SaveBtn = ({ readInputsData }) => {
  return (
    <button onClick={readInputsData} className="save-btn">
      Save
    </button>
  );
};

export default SaveBtn;
