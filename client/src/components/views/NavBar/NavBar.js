import React, { useState } from "react";
import LeftMenu from "./Sections/LeftMenu";
import RightMenu from "./Sections/RightMenu";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import ListIcon from "@material-ui/icons/List";
import "./Sections/Navbar.css";
import "fontsource-roboto";
import Logo from "../../../assets/img/logo.png";
function NavBar() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
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
          <img src={Logo} alt="Logo" style={{ width: 40, height: 40 }}></img>
        </a>
      </div>
      <div className="menu__container">
        <div className="menu_left">
          <LeftMenu mode="horizontal" />
        </div>
        <div className="menu_rigth">
          <RightMenu mode="horizontal" />
        </div>
        <Button
          className="menu__mobile-button"
          type="primary"
          onClick={showDrawer}
        >
          <ListIcon />
        </Button>
        <Drawer
          title="Basic Drawer"
          placement="right"
          className="menu_drawer"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          <LeftMenu mode="inline" />
          <RightMenu mode="inline" />
        </Drawer>
      </div>
    </div>
  );
}

export default NavBar;
