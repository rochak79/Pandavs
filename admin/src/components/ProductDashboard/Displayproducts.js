import React, { useEffect, useState } from "react";
import "./Displayproducts.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Displayproducts = () => {
  const [products, setProducts] = useState([]);

  // Delete product
  const deleteProduct = (pid) => {
    console.log(pid);
    axios.delete(`http://localhost:7000/api/product/${pid}`);
  };

  useEffect(() => {
    axios
      .get("http://localhost:7000/api/product/products")
      .then((result) => {
        setProducts(result.data.products);
        console.log(result.data.products);
        // console.log(result.data.products);
      })
      .catch((err) => {
        console.log(err);
        // alert("Error receiving data");
      });
  }, []);

  return (
    <main role="main">
      <h1 className="text-center text-white pt-5">Total Products</h1>
      <div className="container">
        <div className="row heading text-center">
          <div className="col-md-1">Image</div>
          <div className="col-md-2">Name</div>
          <div className="col-md-1">Price</div>
          <div className="col-md-1">Discount</div>
          <div className="col-md-1">Quantity</div>
          <div className="col-md-1">Stock</div>
          <div className="col-md-2">Description</div>
        </div>
        <div className="row">
          {products.map((data) => {
            return (
              <div className="row row__content col-md-12 mt-1 test mb-3 text-center">
                <div className="col-md-1">
                  <img
                    src={"http://localhost:7000/" + data.image}
                    alt={data.name}
                    className="img-responsive"
                  />
                </div>
                <div className="col-md-2">{data.name}</div>
                <div className="col-md-1">
                  <strike className="strike-text text-danger">
                    Rs.{data.old_price}
                  </strike>
                  <br />
                  <p className="text-success">Rs.{data.new_price}</p>
                </div>
                <div className="col-md-1">{data.discount}%</div>
                <div className="col-md-1">{data.quantity}</div>
                <div className="col-md-1">{data.stock}</div>
                <div className="col-md-2">{data.desc}</div>
                <div className="col-md-2">
                  <button className="btn btn_update">
                    <Link to={"/updateproduct/"}>
                      <button className="btn btn_update">Update</button>
                    </Link>
                  </button>{" "}
                  | &nbsp;
                  <button
                    className="btn btn_delete"
                    onClick={() => {
                      deleteProduct(data._id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      );
    </main>
  );
};

export default Displayproducts;
