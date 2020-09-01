import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./main.css";

export default () => {
  const menu = useRef(null);

  const openMenu = () => {
    menu.current.classList.add("active");
  };

  const closeMenu = (e) => {
    if (menu.current && !menu.current.contains(e.target))
      menu.current.classList.remove("active");
  };

  document.addEventListener("mousedown", (e) => closeMenu(e));

  return (
    <div className="menu-container" ref={menu} onClick={openMenu}>
      <div className="menu">
        <h3>Series</h3>
        <ul className="menu-options">
          <li>
            <Link to="/" onClick={(e) => closeMenu(e)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={(e) => closeMenu(e)}>
              About
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
