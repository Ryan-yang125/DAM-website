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
  const itemStyle = {
    fontStyle: "Roboto",
    color: props.fontColor,
    marginRight: "15px",
  };
  if (user.userData && !user.userData.isAuth) {
    return (
      <div>
        <Breadcrumb separator=" ">
          <Breadcrumb.Item key="mail">
            <a href="/login" style={itemStyle}>
              SIGNIN
            </a>
          </Breadcrumb.Item>
          <Breadcrumb.Item key="app">
            <a href="/register" style={itemStyle}>
              SIGNUP
            </a>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    );
  } else {
    return (
      <div>
        <Breadcrumb separator=" ">
          <Breadcrumb.Item key="landing">
            <a href="/landing" style={itemStyle}>
              EXPLORE
            </a>
          </Breadcrumb.Item>
          <Breadcrumb.Item key="upload">
            <a href="/product/upload" style={itemStyle}>
              UPLOAD
            </a>
          </Breadcrumb.Item>

          <Breadcrumb.Item key="cart">
            <Badge count={user.userData && user.userData.cart.length}>
              <a href="/user/cart" style={itemStyle}>
                COLLECTIONS &nbsp;&nbsp;&nbsp;
                <HeartOutlined style={{ fontSize: "20px" }} />
              </a>
            </Badge>
          </Breadcrumb.Item>

          <Breadcrumb.Item key="logout">
            <a onClick={logoutHandler} style={itemStyle}>
              LOGOUT
            </a>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    );
  }
}

export default withRouter(RightMenu);
