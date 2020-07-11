import React from "react";
import "./delete-btn.scss";

class DeleteBtn extends React.Component {
  render() {
    const { display, deleteId, handleEventDelete } = this.props;

    const style = {
      display: `${display}`,
      outline: "none",
      border: "none",
      cursor: "pointer",
      width: "100px",
      height: "45px",
      backgroundColor: "#fff",
      boxShadow: "0px 6px 20px -6px rgba(0,0,0,0.75)",
      position: "absolute",
      zIndex: "1",
      top: "50px",
      left: "100px",
      textAlign: "center",
      lineHeight: "45px",
    };
    return (
      <button onClick={() => handleEventDelete(deleteId)} style={style}>
        <span className="delete-btn__cross">+</span> delete
      </button>
    );
  }
}

export default DeleteBtn;
