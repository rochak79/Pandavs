import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./BlogDetail.css";
import { Link } from "react-router-dom";

const BlogDetail = () => {
  const { id } = useParams();

  const [blog, setBlog] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:7000/blog/${id}`)
      .then((result) => {
        setBlog(result.data.blog);
      })
      .catch((err) => {
        const error = err.response.message;
        window.alert(error);
      });
  }, []);
  return (
    <div>
      <Link to="/blog">
        <button className="goback">
          {" "}
          <i class="fas fa-arrow-left"></i> Go back
        </button>
      </Link>
      <div className="blog-detail">
        <h4 className="bh">{blog.title}</h4>
        <p className="bt">{blog.time}</p>
        <p className="bb">{blog.blog}</p>
      </div>
    </div>
  );
};

export default BlogDetail;
