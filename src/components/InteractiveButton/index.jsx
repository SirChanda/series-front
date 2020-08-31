import React from "react";
import { Redirect } from "react-router-dom";
import "./main.css";

export default ({ img, text, path }) => {
  const RedirectPage = () => {
    return <Redirect to={path}></Redirect>;
  };

  return (
    <div className="button-container" onClick={RedirectPage}>
      <img src={img}></img>
      <label>{text}</label>
    </div>
  );
};
