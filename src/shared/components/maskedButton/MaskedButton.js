import React from "react";
import "./MaskedButton.scss";

const MaskedButton = ({ onClick }) => {
  return (
    <div className="masked-button">
      <button
        type="button"
        className="masked-button__wrap btn-primary"
        onClick={onClick}
      >
        <div className="masked-button__wrap__icon btn-primary__icon"></div>
        View PII Data
      </button>
    </div>
  );
};

export default MaskedButton;
