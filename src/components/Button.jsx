import React from "react";
const Button = ({
  isDisabled,
  btnType,
  containerStyle,
  handleClick,
}) => {
  return (
    <button
      disabled={isDisabled ?? false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyle}`}
      onClick={handleClick}
    >
      <span className="flex-1">Show More</span>
    </button>
  );
};

export default Button;
