import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Products.css";
import { Link } from "react-router-dom";

const Products = () => {

  

  
  // handleTextSearch = (e) =>{
  //   let searchTerm = e.currentTarget.value;
  //   axios.get(`http://localhost:7000/api/product/products`).then((res)=>{
  //     if (res.data.success) {
  //       filterContent(res.data.products, searchTerm)
  //     }
  //   });
  // };
  
  

 


  const [product, setProduct] = useState([]);
  

  useEffect(() => {
    axios.get(`http://localhost:7000/api/product/products`).then((result) => {
      setProduct(result.data.products);
    });
  }, []);

  
  return (
    <div className="product">
      <div className="product-left">
        <h3 className="text-center">Discover our products!</h3>
        <div class="form-outline">
          <input
            type="search"
            id="form1"
            class="form-control"
            placeholder="Type query"
            aria-label="Search"
            
            
          />
        </div>
      </div>
      <div className="product-right">
        <div className="inner-product">
          <div class="shell">
            <h3 className="ml-3">Our Products.</h3>
            <div class="row">
              {product.map((result) => {
                return (
                  <div className="col-12 col-sm-8 col-md-6 col-lg-4">
                    <div className="bg-light card pro-card">
                      <img
                        className="card-img"
                        src={"http://localhost:7000/" + result.image}
                        alt="Image"
                      />
                      <div className="card-body">
                        <h4 className="card-title">{result.name}</h4>
                        <p className="card-text pro-desc">{result.desc}</p>
                        <div className="buy d-flex justify-content-between align-items-center">
                          <div>
                            <h5 className="mt-4">
                              {" "}
                              <strike>
                                <small className="text-danger">
                                  Rs:{result.old_price}
                                </small>
                              </strike>{" "}
                              <div className="text-success">
                                Rs:
                                {result.new_price}
                              </div>
                            </h5>
                          </div>
                          <div className="">
                            <Link
                              to={"/product/" + result._id}
                              className="btn-learnmore btn btn-success mt-3 "
                            >
                              Learn More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
