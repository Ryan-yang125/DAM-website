import React, { useEffect, useState } from "react";
import { Button, Descriptions } from "antd";
import { StarTwoTone } from "@ant-design/icons";
function ProductInfo(props) {
  const [Product, setProduct] = useState({});

  useEffect(() => {
    setProduct(props.detail);
  }, [props.detail]);

  const addToCarthandler = () => {
    props.addToCart(props.detail._id);
  };

  return (
    <div>
      <Descriptions title="Product Info">
        <Descriptions.Item label="Title"> {Product.title}</Descriptions.Item>
        <Descriptions.Item label="Artist">{Product.artist}</Descriptions.Item>
        <Descriptions.Item label="Likes"> {Product.likes}</Descriptions.Item>
        <Descriptions.Item label="Description">
          {" "}
          {Product.description}
        </Descriptions.Item>
      </Descriptions>

      <br />
      <br />
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          size="large"
          shape="round"
          type="danger"
          onClick={addToCarthandler}
        >
          Add to Collections!
          <StarTwoTone twoToneColor="#eb2f96" />
        </Button>
      </div>
    </div>
  );
}

export default ProductInfo;
