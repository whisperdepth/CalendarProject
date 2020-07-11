import React from "react";
import "./save-btn.scss";

class SaveBtn extends React.Component {
  
  render() {
    const { readInputsData, isButtonAvailable } = this.props;
    return (
      <button
        disabled={isButtonAvailable}
        onClick={readInputsData}
        className="save-btn"
      >
        Save
      </button>
    );
  }
}

export default SaveBtn;
