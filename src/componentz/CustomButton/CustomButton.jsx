import React from "react";

import "./styles.scss";

const CustomButton = ({
  label,
  className,
  onClick,
  onMouseEnter,
  onMouseLeave,
  inverted,
  icon,
  style,
}) => {
  return (
    <button
      className={`custom-btn ${inverted && "inverted"} ${className}`}
      onClick={onClick}
      style={{ ...style }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {label} {icon && <span style={{ marginLeft: "0.5em" }}>{icon}</span>}
    </button>
  );
};

export default CustomButton;
