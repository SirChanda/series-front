import React from "react";
import "./main.css";

export default ({ children, img }) => {
  return (
    <li className="list-option">
      <img src={img} />
      <span>{children}</span>
    </li>
  );
};
