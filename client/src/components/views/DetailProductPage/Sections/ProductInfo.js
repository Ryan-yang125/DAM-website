import React, { useEffect, useState } from "react";
import { Typography, notification } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { addToCart, removeCartItem } from "../../../../_actions/user_actions";
import { useDispatch } from "react-redux";
import { CodeSandboxOutlined } from "@ant-design/icons";
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
          if (item.id === props.detail._id) setIfLikes(true);
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
            <h3>{`${Product.artist || "Oliver Laric."}`}</h3>
          </div>
          <div>
            <h4>{`${Product.title || "Amonit"}`}</h4>
          </div>
        </div>
        <div>
          {IfLikes ? (
            <HeartFilled onClick={removeFromCartHandler} style={likeStyle} />
          ) : (
            <HeartOutlined onClick={addToCarthandler} style={likeStyle} />
          )}
        </div>
        <div
          style={{
            marginTop: "2px",
            marginLeft: "10px",
          }}
        >
          <a
            href={`http://127.0.0.1:5500/test.html?obj=${encodeURIComponent(
              Product.objs &&
                new URL(Product.objs[0], "http://localhost:5000/").href
            )}`}
            style={{ color: "black", fontSize: "35px" }}
          >
            <CodeSandboxOutlined />
          </a>
        </div>
      </div>
      <br />
      <h3>Introduction:</h3>
      <Text>{Product.description}</Text>
      <div style={{ display: "flex" }}>
        <h4 style={{ fontWeight: "bolder" }}>Dimensions:&nbsp;</h4>
        <div>
          <h4 style={{ marginTop: "1px" }}>{`${
            Product.dimensions || "45X50X60"
          }`}</h4>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <h4 style={{ fontWeight: "bolder" }}>Locations:&nbsp;</h4>
        <div>
          <h4 style={{ marginTop: "1px" }}>{`${
            Product.location || "Utopia"
          }`}</h4>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <h4 style={{ fontWeight: "bolder" }}>Material:&nbsp;</h4>
        <div>
          <h4 style={{ marginTop: "1px" }}>{`${
            Product.material || "Stone Funk"
          }`}</h4>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <h4 style={{ fontWeight: "bolder" }}>Period:&nbsp;</h4>
        <div>
          <h4 style={{ marginTop: "1px" }}>{`${
            Product.period || "About 1800s"
          }`}</h4>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
