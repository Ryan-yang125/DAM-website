import React from "react";
import { DeleteTwoTone } from "@ant-design/icons";
function UserCardBlock(props) {
  const renderCartImage = (images) => {
    if (images.length > 0) {
      let image = images[0];
      return `http://localhost:5000/${image}`;
    }
  };

  const renderItems = () =>
    props.products &&
    props.products.map((product) => (
      <tr key={product._id}>
        <td>
          <img
            style={{ width: "150px" }}
            alt="product"
            src={renderCartImage(product.images)}
          />
        </td>
        <td>
          <a href={`/product/${product._id}`}>Click</a>
        </td>
        <td>{product.title}</td>
        <td>{product.artist} </td>
        <td style={{ width: 150 }}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <DeleteTwoTone
            twoToneColor="#566270"
            style={{ fontSize: 35 }}
            onClick={() => props.removeItem(product._id)}
          />
        </td>
      </tr>
    ));

  return <div>{renderItems()}</div>;
}

export default UserCardBlock;
