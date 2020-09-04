import React from "react";
import { Link } from "react-router-dom";
import "./main.css";

export default ({ children, img, path }) => {
  return (
    <Link to={!path ? "/" : path}>
      <li className="list-option">
        <img src={img} />
        <span>{children}</span>
      </li>
    </Link>
  );
};
