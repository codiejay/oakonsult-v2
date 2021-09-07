import React from "react";
import "./styles.scss";

const Spinner = ({ style }) => (
  <div className="SpinnerOverlay" style={{ ...style }}>
    {/* <img src={logo} alt="logo" className="SpinnerImage" /> */}
    <div className="SpinnerContainer"></div>
  </div>
);

export default Spinner;
