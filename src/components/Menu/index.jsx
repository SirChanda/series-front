import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./main.css";

export default () => {
  const hamburguerMenu = useRef(null);

  const openMenu = () => {
    hamburguerMenu.current.classList.add("active");
  };

  const closeMenu = () => {
    hamburguerMenu.current.classList.remove("active");
  };

  return (
    <div className="menu-container" ref={hamburguerMenu}>
      <span className="hamburguer-menu" onClick={openMenu}>
        &#9776;
      </span>
      <div className="menu">
        <span onClick={closeMenu}>&times;</span>
        <h3>Series</h3>
        <ul className="menu-options">
          <li>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMenu}>
              About
            </Link>
          </li>
        </ul>
      </div>
      <div className="empty-place" onClick={closeMenu}></div>
    </div>
  );
};
