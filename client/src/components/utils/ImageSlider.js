import React from "react";
import { Row, Col } from "antd";
import ImageCard from "../utils/ImageCard";
function ImageSlider(props) {
  return (
    <div>
      <Row glutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {props.products &&
          props.products.map((product, index) => {
            return (
              <Col lg={8} xs={24}>
                <ImageCard product={product} userlikes={props.userlikes} />
              </Col>
            );
          })}
      </Row>
    </div>
  );
}

export default ImageSlider;
