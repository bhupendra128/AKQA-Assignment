import React from "react";
import "./Button.scss";

const index = (props) => {
  const { ctaLabel, className, handleButtonClick, disabled } = props;
  return (
    <div className={`button-wrapper ${className}`}>
      <button onClick={handleButtonClick} disabled={disabled}>
        {ctaLabel}
      </button>
    </div>
  );
};

export default index;
