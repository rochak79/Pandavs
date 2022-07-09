import React, { useEffect, useState } from "react";
import "./Blog.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Blog = () => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:7000/blog/blogs`)
      .then((result) => {
        console.log(result.data.blog);
        setBlog(result.data.blog);
      })
      .catch((err) => {
        const error = err.response.message;
        window.alert(error);
      });
  }, []);
  return (
    <div>
      <div class="container row blog-container">
        <h3 className="blog-main">
          <i class="fas fa-arrow-right"></i> Be challenged and encouraged with
          our featured article
        </h3>
        {blog.map((data) => {
          return (
            <>
              <div class="col-sm-6">
                <div class="card blog-card">
                  <div class="card-body blog-body">
                    <h4 class="card-title blog-title">{data.title}</h4>
                    <p className="blog-date">{data.time}</p>
                    <p class="card-text">{data.blog}</p>
                   
                  </div>
                  <div className="blog-read">
                      <Link
                        to={"/blog/" + data._id}
                        class=" blog-read btn-primary"
                      >
                        Read more.
                      </Link>
                    </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
