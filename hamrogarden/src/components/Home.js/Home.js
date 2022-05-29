import React, { useState, useEffect } from "react";
import "./Home.css";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:7000/api/product/products")
      .then((result) => {
        setData(result.data.products);
        console.log(result.data.products);
        // console.log(result.data.products);
      })
      .catch((err) => {
        console.log(err);
        // alert("Error receiving data");
      });
  }, []);

  return (
    <>
      {data.map((result) => {
        return (
          <>
            <div class="shell">
              <div class="container">
                <div class="row">
                  <div class="col-md-3">
                    <div class="wsk-cp-product">
                      <div class="wsk-cp-img">
                        <img
                          src={"http://localhost:7000/" + result.image}
                          alt={result.name}
                          class="img-responsive"
                        />
                      </div>
                      <div class="wsk-cp-text">
                        <div class="category">
                          <span>{result.discount}% OFF</span>
                        </div>
                        <div class="title-product">
                          <h3>{result.name}</h3>
                        </div>
                        <div class="description-prod">
                          <p>{result.desc}</p>
                        </div>
                        <div class="card-footer">
                          <div class="wcf-left">
                            <span class="price">
                              <strike>
                                <small>Rs:{result.old_price}</small>
                              </strike>{" "}
                              &nbsp;
                            </span>
                            <span class="price">Rs:{result.new_price}</span>
                          </div>
                          <div class="wcf-right">
                            <a href="#" class="buy-btn">
                              Add to Cart
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}

      {/* {data.map((result) => {
        return (
          <div class="card">
            <img
              src={"http://localhost:7000/" + result.image}
              className="profileimage"
            />{" "}
            <div class="card-body">
              <h5 class="card-title">{result.name}</h5>
              <p class="card-text">{result.desc}</p>
              <p class="card-text">Rs.{result.old_price}</p>
              <p class="card-text">Rs.{result.new_price}</p>
              <p class="card-text">{result.discount}%</p>
              <p class="card-text">{result.stock}</p>
              <p class="card-text">{result.quantity}</p>
            </div>
          </div>
        );
      })}{" "} */}
    </>
  );
};

export default Home;
