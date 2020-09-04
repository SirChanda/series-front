import React from "react";
import { Link } from "react-router-dom";
import "./main.css";

export default ({ img, text, path }) => {
  return (
    <Link to={!path ? "/" : path}>
      <div className="button-container">
        <img src={img}></img>
        <label>{text}</label>
      </div>
    </Link>
  );
};
