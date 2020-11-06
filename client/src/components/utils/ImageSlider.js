import React, { useState } from "react";
import { Carousel } from "antd";
import { ScanOutlined } from "@ant-design/icons";

function ImageSlider(props) {
  const [hovered, sethovered] = useState(false);
  return (
    <div>
      {props.images.map((image, index) => (
        <div key={index}>
          <img
            style={{
              width: "100%",
              height: "100%",
              transform: `${hovered ? "scale(0.95)" : "scale(1.0)"}`,
              transitionDuration: "0.6s",
            }}
            src={`http://localhost:5000/${image}`}
            alt="productImage"
            onMouseEnter={() => sethovered(true)}
            onMouseLeave={() => sethovered(false)}
          />
        </div>
      ))}
    </div>
  );
}

export default ImageSlider;
