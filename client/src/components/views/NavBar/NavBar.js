import React, { useState } from "react";
import RightMenu from "./Sections/RightMenu";
import "./Sections/Navbar.css";
import "fontsource-roboto";
import Logo from "../../../assets/img/logo.png";
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
          <div>Sculplay</div>
        </a>
      </div>
      <div className="menu__container">
        <a href="/"></a>
        <div className="menu_rigth">
          <RightMenu mode="horizontal" />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
