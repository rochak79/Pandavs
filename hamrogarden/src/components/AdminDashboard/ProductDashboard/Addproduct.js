import React from "react";
import "./Addproduct.css";
import addproduct from "../../../images/addproduct.png";

const Addproduct = () => {
  return (
    <>
      <div className="addproduct">
        <div className="inner">
          <div className="content">
            <h2 className="apheading">Add Product</h2>
            <input type="text" name="" placeholder="Product's Name"></input>
            <input type="number" name="" placeholder="Old Price"></input>
            <input type="number" name="" placeholder="New Price"></input>
            <input type="number" name="" placeholder="Quantity"></input>
            <textarea
              rows="4"
              cols="50"
              name="comment"
              form="usrform"
              placeholder="Enter text here..."
              className="desc"
            ></textarea>
            <input type="number" name="" placeholder="Stock"></input>
            <input type="number" name="" placeholder="Discount"></input>
            <input type="file" className="fileupload" name=""></input>
            <button className="addproductbtn">Add Product</button>
          </div>
          <div className="imageseciton">
            <img src={addproduct} className="addpimage" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Addproduct;
