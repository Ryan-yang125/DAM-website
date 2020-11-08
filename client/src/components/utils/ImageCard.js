import React, { useState, useEffect } from "react";
import {} from "react-redux";
import { Card, notification } from "antd";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { addToCart, removeCartItem } from "../../_actions/user_actions";
import { useDispatch } from "react-redux";
import Item from "antd/lib/list/Item";
export default function ImageCard(props) {
  const { Meta } = Card;
  const dispatch = useDispatch();
  const [hovered, sethovered] = useState(false);
  const [IfLikes, setIfLikes] = useState(false); //TODO
  useEffect(() => {
    if (props.userlikes && props.userlikes.cart)
      if (props.userlikes.cart.length > 0)
        props.userlikes.cart.forEach((item) => {
          if (item.id == props.product._id) setIfLikes(true);
        });
  }, [props.userlikes]);
  const addToCartHandler = () => {
    setIfLikes(!IfLikes);
    notification.open({
      message: "❤️  Add to Collections!",
      placement: "bottomLeft",
      duration: 2.5,
    });
    dispatch(addToCart(props.product._id));
  };
  const removeFromCartHandler = () => {
    setIfLikes(!IfLikes);
    notification.open({
      message: "Remove from Collections!",
      placement: "bottomLeft",
      duration: 2.5,
    });
    dispatch(removeCartItem(props.product._id));
  };
  return (
    <div>
      <Card
        hoverable={false}
        bordered={false}
        loading={false}
        cover={
          <a href={`/product/${props.product._id}`}>
            {" "}
            <img
              style={{
                width: "100%",
                height: "100%",
                transform: `${hovered ? "scale(0.95)" : "scale(1.0)"}`,
                transitionDuration: "0.6s",
              }}
              src={`http://localhost:5000/${props.product.images[0]}`}
              alt="productImage"
              onMouseEnter={() => sethovered(true)}
              onMouseLeave={() => sethovered(false)}
            />
          </a>
        }
      >
        <Meta
          title={props.product.title}
          description={props.product.artist}
          avatar={
            IfLikes ? (
              <HeartFilled onClick={removeFromCartHandler} />
            ) : (
              <HeartOutlined onClick={addToCartHandler} />
            )
          }
        />
      </Card>
    </div>
  );
}
