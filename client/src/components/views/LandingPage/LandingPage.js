import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Axios from "axios";
import { Col, Card, Row, Button } from "antd";
import { LoadingOutlined, HeartTwoTone } from "@ant-design/icons";
import ImageSlider from "../../utils/ImageSlider";
import CheckBox from "./Sections/CheckBox";
import RadioBox from "./Sections/RadioBox";
import { Category, Period } from "./Sections/Datas";
import SearchFeature from "./Sections/SearchFeature";
import bgVideo from "../../../assets/video/bg1.mp4";

function LandingPage(props) {
  const [Products, setProducts] = useState([]);
  const [Skip, setSkip] = useState(0);
  const [Limit, setLimit] = useState(9);
  const [PostSize, setPostSize] = useState();
  const [SearchTerms, setSearchTerms] = useState("");

  const [Filters, setFilters] = useState({
    category: [],
    period: [],
  });

  useEffect(() => {
    const variables = {
      skip: Skip,
      limit: Limit,
    };

    getProducts(variables);
  }, []); //only useEffect when Mount and willUnMount

  const getProducts = (variables) => {
    Axios.post("/api/product/getProducts", variables).then((response) => {
      if (response.data.success) {
        if (variables.loadMore) {
          setProducts([...Products, ...response.data.products]);
        } else {
          setProducts(response.data.products);
        }
        setPostSize(response.data.postSize);
      } else {
        alert("Failed to fectch product datas");
      }
    });
  };

  const onLoadMore = () => {
    let skip = Skip + Limit;

    const variables = {
      skip: skip,
      limit: Limit,
      loadMore: true,
      filters: Filters,
      searchTerm: SearchTerms,
    };
    getProducts(variables);
    setSkip(skip);
  };
  const showFilteredResults = (filters) => {
    const variables = {
      skip: 0,
      limit: Limit,
      filters: filters,
    };
    getProducts(variables);
    setSkip(0);
  };

  const handleFilters = (filters, category) => {
    const newFilters = { ...Filters };

    newFilters[category] = filters;

    console.log(newFilters);

    showFilteredResults(newFilters);
    setFilters(newFilters);
  };

  const updateSearchTerms = (newSearchTerm) => {
    const variables = {
      skip: 0,
      limit: Limit,
      filters: Filters,
      searchTerm: newSearchTerm,
    };

    setSkip(0);
    setSearchTerms(newSearchTerm);

    getProducts(variables);
  };

  return (
    <div style={{ width: "75%", margin: "3rem auto" }}>
      <div style={{ textAlign: "center" }}>
        <h2> Explore as you like ❤️</h2>
      </div>
      {/* Search  */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          margin: "1rem auto",
        }}
      >
        <SearchFeature refreshFunction={updateSearchTerms} />
      </div>
      {/* Filter  */}

      <Row gutter={[16, 16]}>
        <Col lg={12} xs={24}>
          <CheckBox
            list={Category}
            handleFilters={(filters) => handleFilters(filters, "category")}
          />
        </Col>
        <Col lg={12} xs={24}>
          <CheckBox
            list={Period}
            handleFilters={(filters) => handleFilters(filters, "period")}
          />
        </Col>
      </Row>

      {Products.length === 0 ? (
        <div
          style={{
            height: "300px",
            marginTop: "100px",
            textAlign: "center",
          }}
        >
          <LoadingOutlined style={{ fontSize: "100px" }} />
        </div>
      ) : (
        <div>
          <ImageSlider products={Products} userlikes={props.user.userData} />
        </div>
      )}
      <br />
      <br />

      {PostSize >= Limit && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button onClick={onLoadMore}>Load More</Button>
        </div>
      )}
    </div>
  );
}

export default LandingPage;
