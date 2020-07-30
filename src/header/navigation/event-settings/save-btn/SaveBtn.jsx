import React from "react";
import "./save-btn.scss";

const SaveBtn = ({ readInputsData, isButtonAvailable }) => {
  return (
    <button
      disabled={isButtonAvailable}
      onClick={readInputsData}
      className="save-btn"
    >
      Save
    </button>
  );
};

export default SaveBtn;
