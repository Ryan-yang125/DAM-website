import React, { useEffect, useState } from "react";
import { Typography, notification } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { addToCart, removeCartItem } from "../../../../_actions/user_actions";
import { useDispatch } from "react-redux";

function ProductInfo(props) {
  const { Title, Paragraph, Text, Link } = Typography;
  const dispatch = useDispatch();
  const [Product, setProduct] = useState({});
  const [IfLikes, setIfLikes] = useState(false);
  useEffect(() => {
    setProduct(props.detail);
  }, [props.detail]);
  console.log(props.userlikes); //TODO
  useEffect(() => {
    if (props.userlikes && props.userlikes.cart)
      if (props.userlikes.cart.length > 0)
        props.userlikes.cart.forEach((item) => {
          if (item.id == props.detail._id) setIfLikes(true);
        });
  }, [props.userlikes]);
  const addToCarthandler = () => {
    setIfLikes(!IfLikes);
    notification.open({
      message: "❤️  Add to Collections!",
      placement: "bottomLeft",
      duration: 2.5,
    });
    dispatch(addToCart(props.detail._id));
  };
  const removeFromCartHandler = () => {
    setIfLikes(!IfLikes);
    notification.open({
      message: " Remove from Collections!",
      placement: "bottomLeft",
      duration: 2.5,
    });
    dispatch(removeCartItem(props.detail._id));
  };
  const likeStyle = {
    fontSize: 30,
    marginLeft: 40,
    marginTop: 10,
  };
  return (
    <div>
      <div className="info" style={{ display: "flex" }}>
        <div className="basic-info">
          <div>
            <h3>{`${Product.artist || "Unknown"}`}</h3>
          </div>
          <div>
            <h4>{`${Product.title || "Unknown"}`}</h4>
          </div>
        </div>
        <div>
          {IfLikes ? (
            <HeartFilled onClick={removeFromCartHandler} style={likeStyle} />
          ) : (
            <HeartOutlined onClick={addToCarthandler} style={likeStyle} />
          )}
        </div>
      </div>
      <br />
      <Text>{Product.description}</Text>
    </div>
  );
}

export default ProductInfo;
