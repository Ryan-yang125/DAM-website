import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getCartItems } from "../../../_actions/user_actions";
import ImageSlider from "../../utils/ImageSlider";
import NavBar from "../NavBar/NavBar";

function CartPage(props) {
  const dispatch = useDispatch();
  useEffect(() => {
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
  return (
    <div>
      <NavBar />
      <div style={{ width: "85%", margin: "3rem auto" }}>
        <div>
          <ImageSlider
            products={props.user.cartDetail}
            userlikes={props.user.userData}
          />
        </div>
      </div>
    </div>
  );
}

export default CartPage;
