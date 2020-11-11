/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Menu, Badge, Breadcrumb } from "antd";
import { HeartTwoTone, HeartOutlined } from "@ant-design/icons";
import axios from "axios";
import { USER_SERVER } from "../../../Config";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";

function RightMenu(props) {
  const user = useSelector((state) => state.user); //TODO

  const logoutHandler = () => {
    axios.get(`${USER_SERVER}/logout`).then((response) => {
      if (response.status === 200) {
        props.history.push("/login");
      } else {
        alert("Log Out Failed");
      }
    });
  };

  if (user.userData && !user.userData.isAuth) {
    return (
      <Breadcrumb>
        <Breadcrumb.Item key="mail">
          <a href="/login">SignIn</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item key="app">
          <a href="/register">SignUp</a>
        </Breadcrumb.Item>
      </Breadcrumb>
    );
  } else {
    return (
      <Breadcrumb style={{ color: "#ffffff" }}>
        <Breadcrumb.Item key="landing">
          <a href="/landing" style={{ fontSize: 20 }}>
            EXPLORE
          </a>
        </Breadcrumb.Item>
        <Breadcrumb.Item key="upload">
          <a href="/product/upload">UPLOAD</a>
        </Breadcrumb.Item>

        <Breadcrumb.Item key="cart">
          <Badge count={user.userData && user.userData.cart.length}>
            <a href="/user/cart">
              COLLECTIONS
              <HeartOutlined style={{ fontSize: 30 }} />
            </a>
          </Badge>
        </Breadcrumb.Item>

        <Breadcrumb.Item key="logout">
          <a onClick={logoutHandler}>LOGOUT</a>
        </Breadcrumb.Item>
      </Breadcrumb>
    );
  }
}

export default withRouter(RightMenu);
