import React, { useState } from "react";
import RightMenu from "./Sections/RightMenu";
import "./Sections/Navbar.css";
import "fontsource-roboto";
function NavBar() {
  return (
    <div
      className="menu"
      style={{
        position: "fixed",
        zIndex: 5,
        width: "100%",
        fontFamily: "Roboto",
      }}
    >
      <div className="menu__logo">
        <a href="/">
          <div
            style={{
              color: "#000000",
              font: "italic 1.2em Fira Sans, serif",
              marginLeft: 20,
              marginTop: 20,
            }}
          >
            SCULPLAY
          </div>
        </a>
      </div>
      <div className="menu__container">
        <a href="/"></a>
        <div className="menu_rigth">
          <RightMenu />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
