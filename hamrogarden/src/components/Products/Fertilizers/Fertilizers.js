import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Fertilizers.css";
import { Link } from "react-router-dom";

const Fertilizers = () => {
  const [fertilizers, setFertilizers] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:7000/fertilizer/fertilizers`).then((result) => {
      setFertilizers(result.data.fertilizers);
    });
  }, []);
  return (
    <div>
      <div className="fertilizers">
        <div className="left">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Reprehenderit, in. Officiis, dolorem consectetur. Voluptatum sed
          veniam voluptate commodi? Cum reprehenderit magnam harum suscipit quam
          commodi unde debitis, incidunt ipsum asperiores?
        </div>
        <div className="right">
          <div className="row">
            {fertilizers.map((result) => {
              return (
                <div className="fertilizer col-12 col-sm-8 col-md-6 col-lg-4">
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
                            to={"/fertilizer/" + result._id}
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
  );
};

export default Fertilizers;
