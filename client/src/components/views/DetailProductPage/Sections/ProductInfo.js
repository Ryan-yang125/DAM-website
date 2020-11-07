import React, { useEffect, useState } from "react";
import { Typography, notification } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
function ProductInfo(props) {
  const { Title, Paragraph, Text, Link } = Typography;

  const [Product, setProduct] = useState({});
  const [IfLikes, setIfLikes] = useState(false);
  useEffect(() => {
    setProduct(props.detail);
  }, [props.detail]);

  const addToCarthandler = () => {
    setIfLikes(!IfLikes);
    notification.open({
      message: `${
        !IfLikes ? "❤️  Add to Collections!" : "💔  Remove from Collections!"
      }`,
      placement: "bottomLeft",
      duration: 2.5,
    });
    props.addToCart(props.detail._id);
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
            <HeartFilled onClick={addToCarthandler} style={likeStyle} />
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
