import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./Forum.css";

const SimgleForum = () => {
  const { id } = useParams();
  const [forum, setForum] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:7000/forum/${id}`).then((result) => {
      setForum(result.data.forum);
    });
  });

  const addNowError = () => {
    window.alert(
      "This is read only page. Please head to Forum page in order to add a forum."
    );
  };
  return (
    <>
      <div className="forum">
        <div className="forum-left">
          <form>
            <Link to="/forum">
              <button className="btn-back mb-5">
                <i class="text-white fa fa-arrow-left" aria-hidden="true"></i>{" "}
                Back
              </button>
            </Link>
            <h3>This Article is from,</h3>
            <div className="form-group">
              <label for="name">Name</label>
              <p className="form-control">{forum.name}</p>
            </div>
          </form>
        </div>
        <div className="forum-right">
          <h3 className="text-center">Single Forum!</h3>
          <hr />
          <div className="row forum-row">
            <div class="card forum-card">
              <div class="card-body forum-row">
                <h5 class="card-title">{forum.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">By: {forum.name}</h6>
                <p class="card-text forum-query" style={{ height: "auto" }}>
                  {forum.query}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default SimgleForum;
