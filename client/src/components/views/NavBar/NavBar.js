import React, { useState } from "react";
import RightMenu from "./Sections/RightMenu";
import "./Sections/Navbar.css";
import "fontsource-roboto";
function NavBar(props) {
  const navStyle = {
    color: props.fontColor || "black",
    font: "italic 1.2em Fira Sans, serif",
    fontSize: "30px",
  };
  const positionStyle = props.positionStyle || "relative";
  return (
    <div
      className="menu"
      style={{
        position: positionStyle,
        zIndex: 5,
        width: "100%",
        fontFamily: "Roboto",
        display: "flex",
      }}
    >
      <div
        className="menu__logo"
        style={{ marginTop: "30px", marginLeft: "50px" }}
      >
        <a href="/">
          <div style={navStyle}>SCULPLAY</div>
        </a>
      </div>
      <div
        style={{ marginTop: "40px", marginLeft: "50px", marginRight: "20px" }}
      >
        <RightMenu fontColor={props.fontColor || "black"} />
      </div>
    </div>
  );
}

export default NavBar;
