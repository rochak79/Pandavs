import React, { useEffect, useState } from "react";
import "./Forum.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Forum = () => {
  // user detail
  const dataa = localStorage.getItem("userData");
  const final = JSON.parse(dataa);

  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [query, setQuery] = useState("");
  const [forums, setForum] = useState([]);

  const submitForum = (e) => {
    e.preventDefault();
    const forumData = {
      name,
      title,
      query,
    };
    axios
      .post(`http://localhost:7000/forum/addforum`, forumData)
      .then((result) => {
        console.log(result);
        if (result.status === 201) {
          toast.success("Query addedd successfully!!");
          window.setTimeout(function () {
            window.location.replace("/forum");
          }, 2500);
        } else {
          toast.error("Failed to add your query!");
        }
      })
      .catch((err) => {
        const error = err.response.data.message;
        toast.error(error);
      });
  };

  //   Get Forums
  useEffect(() => {
    axios
      .get(`http://localhost:7000/forum/forums`)
      .then((result) => {
        setForum(result.data.forum);
      })
      .catch((err) => {
        const error = err.message;
        toast.error(error);
      });
  }, []);
  return (
    <>
      <div className="forum">
        <div className="forum-left">
          <form>
            <h3>Add your queries from here</h3>
            <div className="form-group">
              <label for="name">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder={final.name}
                value={name}
                onChange={(e) => setName(final.name)}
              />
            </div>
            <div className="form-group">
              <label for="title">Title</label>
              <input
                type="text"
                className="form-control"
                placeholder="Your Title here"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Message</label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Your Query here"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              ></textarea>
            </div>
            <button type="submit" className="forum-add" onClick={submitForum}>
              Add Now!
            </button>
          </form>
        </div>
        <div className="forum-right">
          <h3 className="text-center">Forums!</h3>
          <hr />
          <div className="row forum-row">
            {forums.map((forum) => {
              return (
                <>
                  <div class="card" style={{ width: "18rem" }}>
                    <div class="card-body forum-row">
                      <h5 class="card-title">{forum.title}</h5>
                      <h6 class="card-subtitle mb-2 text-muted">
                        By: {forum.name}
                      </h6>
                      <p class="card-text">{forum.query}</p>
                    </div>
                    <p>
                      <Link to={"/forum/" + forum._id} className="card__link">
                        Read More <i class="fas fa-arrow-right"></i>
                      </Link>
                    </p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={1500}
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

export default Forum;
