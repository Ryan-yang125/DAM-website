import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Row, Col, Card, notification } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
function ImageSlider(props) {
  const { Meta } = Card;
  const dispatch = useDispatch();
  const [hovered, sethovered] = useState(false);
  const [IfLikes, setIfLikes] = useState(false);
  const addToCartHandler = () => {
    setIfLikes(!IfLikes);
    notification.open({
      message: `${
        !IfLikes ? "❤️  Add to Collections!" : "💔  Remove from Collections!"
      }`,
      placement: "bottomLeft",
      duration: 2.5,
    });
  };
  const removeFromCartHandler = () => {};
  return (
    <div>
      <Row glutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {props.products &&
          props.products.map((product, index) => {
            return (
              <Col lg={8} xs={24}>
                <Card
                  hoverable={false}
                  bordered={false}
                  loading={false}
                  cover={
                    <a href={`/product/${product._id}`}>
                      {" "}
                      <img
                        style={{
                          width: "100%",
                          height: "100%",
                          transform: `${
                            hovered ? "scale(0.95)" : "scale(1.0)"
                          }`,
                          transitionDuration: "0.6s",
                        }}
                        src={`http://localhost:5000/${product.images[0]}`}
                        alt="productImage"
                        onMouseEnter={() => sethovered(true)}
                        onMouseLeave={() => sethovered(false)}
                      />
                    </a>
                  }
                >
                  <Meta
                    title={product.title}
                    description={product.artist}
                    avatar={
                      IfLikes ? (
                        <HeartFilled onClick={addToCartHandler} />
                      ) : (
                        <HeartOutlined onClick={addToCartHandler} />
                      )
                    }
                  />
                </Card>
              </Col>
            );
          })}
      </Row>
    </div>
  );
}

export default ImageSlider;
