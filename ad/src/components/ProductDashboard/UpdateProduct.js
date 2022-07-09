import React, { useEffect, useState } from "react";
import "./UpdateProduct.css";
import update from "../images/update.jpg";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Updateproduct = () => {
  const [name, setName] = useState("");
  const [old_price, setOprice] = useState("");
  const [new_price, setNprice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [desc, setDesc] = useState("");

  const [stock, setStock] = useState("");
  const [discount, setDiscount] = useState("");
  const [prodata, setProdata] = useState([]);
  const [category, setCategory] = useState("");
  

  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:7000/api/product/` + id)
      .then((result) => {
        try {
          setProdata(result.data.product);
        setName(result.data.name);
        setNprice(result.data.price);
        
          
        } catch (error) {
          toast.error("Failed to update")
        }
        
      })
      .catch();
  }, []);

  // submit
  const productupdate = (e) => {
    e.preventDefault();
    const submitData = {
      name,
      old_price,
      new_price,
      quantity,
      desc,
      
      stock,
      discount,
      category
    };

    axios
      .put(`http://localhost:7000/api/product/${id}`, submitData)
      .then((result) => {
        toast.success("Product Updated successfully!!");
        window.setTimeout(function () {
          window.location.replace("/productdashboard");
        }, 2000);

      })
      .catch((error) => {
        toast.error("Failed to Update product!");
      });
  };
  return (
    <>
      <div className="updateproduct">
        <form action="POST" encType="multipart/form-data">
          <div className="inner">
            <div className="imageseciton">
              <img src={update} className="updatepimage" alt="" />
            </div>
            <div className="content">
              <h2 className="upheading">Update Product</h2>
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
              
              <button className="updateproductbtn" onClick={productupdate}>
                Update Product
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Updateproduct;
