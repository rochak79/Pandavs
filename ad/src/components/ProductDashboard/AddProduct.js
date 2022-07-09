import React, { useState } from "react";
import "./AddProduct.css";
import addproduct from "../images/addproduct.jpg";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const AddProduct = () => {
  const [name, setName] = useState("");
  const [old_price, setOprice] = useState("");
  const [new_price, setNprice] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  const [stock, setStock] = useState("");
  const [discount, setDiscount] = useState("");
  const [category, setCategory] = useState("");

  // submit
  const productadd = (e) => {
    e.preventDefault();
    const submitData = {
      name,
      old_price,
      new_price,
      desc,
      image,
      stock,
      discount,
      category,
    };
    axios
      .post(`http://localhost:7000/api/product/addproduct`, submitData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((result) => {
      
        
        toast.success("Product addedd successfully!!");
        window.setTimeout(function () {
          window.location.replace("/productdashboard");
        }, 2000);
      })
      .catch((error) => {
        const err = error.response.data.message;
        console.log(err);
        window.alert(err);
      });
  };
  return (
    <>
      <div className="addproduct">
        <div className="add__inner">
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
                <input
                  type="text"
                  name=""
                  placeholder="Category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
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
      </div>
    </>
  );
};

export default AddProduct;
