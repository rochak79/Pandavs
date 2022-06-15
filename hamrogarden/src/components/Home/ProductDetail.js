import React, { useState, useEffect } from "react";
import "./ProductDetail.css";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [pdata, setPdata] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:7000/api/product/` + id)
      .then((result) => {
        console.log(result.data.product);
        setPdata(result.data.product);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <div className="container">
        <div className="card">
          <div className="container-fliud">
            <div className="wrapper row">
              <section class="section-a">
                <div class="container">
                  <div>
                    <h3>{pdata.name}</h3>
                    <p>{pdata.desc}</p>
                    <div>
                      <small className="text-danger">
                        Rs:
                        <strike>{pdata.old_price}</strike>
                      </small>
                    </div>

                    <span className="text-success">Rs: {pdata.new_price}</span>
                    <div>Stock: {pdata.stock}</div>
                    <div>Discount: {pdata.discount}%</div>
                    <div className="btn-buy-container">
                      <Link to="#" class="btn-buy">
                        <i className="fas fa-shopping-cart"> </i> Add to Cart
                      </Link>
                    </div>
                  </div>
                  <img
                    src={"http://localhost:7000/" + pdata.image}
                    alt="Image"
                    className="pimage"
                  />
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
