import axios from "axios";
import React, { useEffect, useState } from "react";
import "./DisplayBlog.css";
import { Link } from "react-router-dom";

const DisplayBlog = () => {
  const [blogs, setBlogs] = useState([]);

  const deleteBlog = (bid) => {
    window.alert(`Are you sure you want to delete this Blog?`);
    try {
      console.log(bid);
      axios.delete(`http://localhost:7000/blog/${bid}`);
      window.alert("Blog deleted successfully");
      window.location.replace("/displayblog");
    } catch (error) {
      const err = error.response.message;
      window.alert(err);
    }
  };
  useEffect(() => {
    axios
      .get(`http://localhost:7000/blog/blogs`)
      .then((result) => {
        console.log(result.data.blog);
        setBlogs(result.data.blog);
      })
      .catch((err) => {
        const error = err.response.message;
        window.alert(error);
      });
  });
  return (
    <div>
      <h2>Blogs</h2>
      <table className="table__contact">
        <tr>
          <th>Title</th>
          <th>Blog</th>
          <th></th>
        </tr>
        {blogs.map((blog) => {
          return (
            <tr>
              <td className="blog-table">{blog.title}</td>
              <td className="blog-table">{blog.blog}</td>
              <td>
               

                
                <button className="btn btn_delete" onClick={()=>deleteBlog(blog._id)}>
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default DisplayBlog;
