import React from "react";
import "./create-btn.scss";

const CreateBtn = ({ handleDisplay }) => {
  return (
    <button onClick={handleDisplay} className="create-btn">
      + Create
    </button>
  );
};

export default CreateBtn;
