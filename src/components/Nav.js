import React, { useState } from "react";
import { FaAlignJustify } from "react-icons/fa";
const Nav = () => {
  const [state, setState] = useState(true);
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__container">
          <ul className="navbar__left">
            <div className="navbar__left-logo">
              <img src="/images/logo.png" alt="logo" />
            </div>
          </ul>
          {state ? (
            <ul className="navbar__right">
              <li>
                <a href="#Home">Home</a>
              </li>
              <li>
                <a href="Projects">Projects</a>
              </li>
              <li>
                <a href="About">About</a>
              </li>
              <li>
                <a href="Blogs">Blogs</a>
              </li>
              <li>
                <a href="Prices">Prices</a>
              </li>
              <li>
                <a href="Contact">Contact</a>
              </li>
              
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="toggle" onClick={() => setState(!state)}>
        <FaAlignJustify />
      </div>
    </nav>
  );
};

export default Nav;
