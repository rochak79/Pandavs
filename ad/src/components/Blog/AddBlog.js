import React, { useState } from "react";
import "./AddBlog.css";
import axios from "axios";
import b from "../images/b.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [blog, setBlog] = useState("");

  const submitBlog = (e) => {
    e.preventDefault();
    const blogData = {
      title,
      blog,
    };

    axios
      .post(`http://localhost:7000/blog/createblog`, blogData)
      .then((result) => {
        
        setBlog(result.data.blog);
        toast.success("Blog addedd successfully!!");
        window.setTimeout(function () {
          window.location.replace("/blogdashboard");
        }, 2000);
      })
      .catch((err) => {
        const error = err.response.message;
        window.alert(error);
      });
  };
  return (
    <div className="container">
      <div className="addblog">
        <div className="add__inner">
          <form action="POST" encType="multipart/form-data">
            <div className="inner">
              <div className="content">
                <h2 className="apheading">Add blog</h2>
                <input
                  type="text"
                  name=""
                  placeholder="Blog's title."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                  rows="4"
                  cols="50"
                  name="comment"
                  form="usrform"
                  placeholder="Your blog here..."
                  className="desc"
                  value={blog}
                  onChange={(e) => setBlog(e.target.value)}
                />

                <button className="addblogbtn" onClick={submitBlog}>
                  Add blog
                </button>
              </div>
              <div className="imageseciton">
                <img src={b} className="blogimg" alt="" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
