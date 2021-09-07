import React from "react";

const Spacing = ({ width, height, style }) => {
  return <div style={{ width: width, height: height, ...style }}></div>;
};

export default Spacing;
