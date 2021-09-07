import React from "react";
import "./styles.scss";

const FormSelect = ({ handleChange, defaul, options, ...otherProps }) => {
  return (
    <select className="form-select" onChange={handleChange} {...otherProps}>
      <option
        value={defaul.toLowerCase() === "select" ? "" : defaul.toLowerCase()}
      >
        {defaul.split("-").join(" ")}
      </option>
      {options.map((item, index) => (
        <option key={index} value={item.toLowerCase()}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default FormSelect;
