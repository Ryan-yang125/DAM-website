import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getCartItems, removeCartItem } from "../../../_actions/user_actions";
import UserCardBlock from "./Sections/UserCardBlock";
import { Row, Col, Card } from "antd";
import { HeartTwoTone } from "@ant-design/icons";
import ImageSlider from "../../utils/ImageSlider";

function CartPage(props) {
  const dispatch = useDispatch();
  const { Meta } = Card;
  useEffect(() => {
    //get user's cart items id
    let cartItems = [];
    if (props.user.userData && props.user.userData.cart) {
      if (props.user.userData.cart.length > 0) {
        props.user.userData.cart.forEach((item) => {
          cartItems.push(item.id);
        });
        dispatch(getCartItems(cartItems, props.user.userData.cart)).then(
          (response) => {
            if (response.payload.length > 0) {
            }
          }
        );
      }
    }
  }, [props.user.userData]);
  const addToCartHandler = (productId) => {};
  const products = props.user.cartDetail;
  const renderCards = products.map((product, index) => {
    return (
      <Col lg={8} xs={24}>
        <Card
          hoverable={false}
          bordered={false}
          loading={false}
          cover={
            <a href={`/product/${product._id}`}>
              {" "}
              <ImageSlider images={product.images} />
            </a>
          }
        >
          <Meta
            title={product.title}
            description={product.artist}
            avatar={
              <HeartTwoTone
                twoToneColor="#000000"
                style={{ fontSize: "20px" }}
                onClick={() => addToCartHandler(product._id)}
              />
            }
          />
        </Card>
      </Col>
    );
  });
  const removeFromCart = (productId) => {
    dispatch(removeCartItem(productId)).then((response) => {
      if (response.payload.cartDetail.length <= 0) {
      } else {
      }
    });
  };
  return (
    <div style={{ width: "85%", margin: "3rem auto" }}>
      <h1>My Collections</h1>
      <div>
        <Row glutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>{renderCards}</Row>
      </div>
    </div>
  );
}

export default CartPage;
