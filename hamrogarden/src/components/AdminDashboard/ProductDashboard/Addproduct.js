import React, { useState } from "react";
import "./Addproduct.css";
import addproduct from "../../../images/addproduct.png";
import axios from "axios";

const Addproduct = () => {
  const [name, setName] = useState("");
  const [old_price, setOprice] = useState("");
  const [new_price, setNprice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  const [stock, setStock] = useState("");
  const [discount, setDiscount] = useState("");

  // submit
  const productadd = (e) => {
    e.preventDefault();
    const submitData = {
      name,
      old_price,
      new_price,
      quantity,
      desc,
      image,
      stock,
      discount,
    };
    axios
      .post(`http://localhost:7000/api/product/addproduct`, submitData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((result) => {
        console.log(result);
        window.alert("Product Added!");
      })
      .catch((error) => {
        // console.log(error);
        window.alert("Failed to add product!");
      });
  };
  return (
    <>
      <div className="addproduct">
        <form action="POST" encType="multipart/form-data">
          <div className="inner">
            <div className="content">
              <h2 className="apheading">Add Product</h2>
              <input
                type="text"
                name=""
                placeholder="Product's Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="number"
                name=""
                placeholder="Old Price"
                value={old_price}
                onChange={(e) => setOprice(e.target.value)}
              />
              <input
                type="number"
                name=""
                placeholder="New Price"
                value={new_price}
                onChange={(e) => setNprice(e.target.value)}
              />
              <input
                type="number"
                name=""
                placeholder="Quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
              <input type="number" name="" placeholder="Quantity"></input>
              <textarea
                rows="4"
                cols="50"
                name="comment"
                form="usrform"
                placeholder="Enter text here..."
                className="desc"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
              <input
                type="number"
                name=""
                placeholder="Stock"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
              />
              <input
                type="number"
                name=""
                placeholder="Discount"
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
              />
              {/* <input
              type="file"
              className="fileupload"
              name="image"
              onChange={(e) => setImage(e.target.files[0])}
            /> */}
              <input
                type="file"
                class="form-control"
                id="exampleInputName"
                placeholder="text"
                name="image"
                onChange={(e) => setImage(e.target.files[0])}
              />
              <button className="addproductbtn" onClick={productadd}>
                Add Product
              </button>
            </div>
            <div className="imageseciton">
              <img src={addproduct} className="addpimage" alt="" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Addproduct;
