import axios from "axios";
import React, { useState } from "react";
import "../../assets/css/APIDemo2.css";

export function APIDemo2() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const res = await axios.get("https://dummyjson.com/products");
    console.log("axios object: ", res);
    console.log("res.data: ", res.data);
    console.log("res.data.products: ", res.data.products);
    setProducts(res.data.products);
  };

  return (
    <div className="api-container">
      <h1 className="api-title">APIDemo2</h1>

      <button className="product-btn" onClick={getProducts}>
        Get Products
      </button>

      <table className="product-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>IMG</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>
                  <img
                    className="product-img"
                    src={product.thumbnail}
                    alt="img"
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
