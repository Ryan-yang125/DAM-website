import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Row, Col, Divider, Typography } from "antd";
import ProductImage from "./Sections/ProductImage";
import ProductInfo from "./Sections/ProductInfo";
import NavBar from "../NavBar/NavBar";
function DetailProductPage(props) {
  const { Title } = Typography;
  const productId = props.match.params.productId;
  const [Product, setProduct] = useState([]);

  useEffect(() => {
    Axios.get(`/api/product/products_by_id?id=${productId}&type=single`).then(
      (response) => {
        setProduct(response.data[0]);
      }
    );
  }, []);

  return (
    <div>
      <NavBar />
      <div
        className="postPage"
        style={{ width: "100%", padding: "3rem 4rem", marginTop: "20px" }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1
            style={{ font: "italic 1.2em Fira Sans, serif", fontSize: "30px" }}
          >
            {Product.title}
          </h1>
        </div>

        <br />

        {/* <Row gutter={[16, 16]}>
          <Col span={24}><ProductImage detail={Product} /></Col>
        </Row>
        <Divider /> */}
        <ProductInfo detail={Product} userlikes={props.user.userData} />
      </div>
    </div>
  );
}

export default DetailProductPage;
