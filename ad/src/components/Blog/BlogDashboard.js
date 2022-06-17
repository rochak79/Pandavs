import React from "react";
import { Link } from "react-router-dom";
import "./BlogDashboard.css";

const BlogDashboard = () => {
  return (
    <>
      <div class="main-container">
        <div class="heading">
          <h1 class="heading__title">Blog</h1>
        </div>
        <div class="cards">
          <div class="card card-1">
            <p className="text-success">
              Want to add Blog on your site so that user can read them? Add from
              here.
            </p>
            <h2 class="card__title">Add Blog.</h2>
            {/* <img src={add} alt="add_products" className="pimg" /> */}
            <p class="card__apply">
              <Link class="card__link" to="/addblog">
                Add Now <i class="fas fa-arrow-right"></i>
              </Link>
            </p>
          </div>
          <div class="card card-2">
            <p className="text-info">
              Want to view, edit or delete your Blogs? Perform such task from
              here.
            </p>
            <h2 class="card__title">View Blogs.</h2>
            {/* <img src={d} alt="display_products" className="pimg" /> */}
            <p class="card__apply">
              <Link class="card__link" to="/displayblog">
                View Now <i class="fas fa-arrow-right"></i>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDashboard;
