import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from "react-bootstrap";
import { Alert, Rating } from "@mui/material";
import "./ProductDetail.css";

const PetScreen = () => {
  // Cart
  const [qty, setQty] = useState(1);
  const { id } = useParams();
  const [pdata, setPdata] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`http://localhost:7000/api/product/` + id)
      .then((result) => {
        console.log(result.data);
        setPdata(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const navigate = useNavigate();
  const addToCartHandler = () => {
    navigate(`/cart/${id}?qty=${qty}`);
  };
  return (
    <>
      <div className="product-detail">
        <div className="container mt-4 texty" style={{ marginBottom: "35px" }}>
          <div className="product_back">
            <Link to="/" className="product_back_text">
              <i class="fas fa-arrow-left"></i> &nbsp;Back
            </Link>
          </div>
          {loading ? (
            <p />
          ) : error ? (
            <Alert variant="danger"></Alert>
          ) : (
            <Row>
              <Col md={6}>
                <Image
                  src={"http://localhost:7000/" + pdata.image}
                  alt={pdata.name}
                  fluid
                  className="product_image"
                ></Image>
              </Col>
              <Col md={3}>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <h3>{pdata.name}</h3>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <span style={{ fontWeight: "bold" }}>Price:</span>Rs.
                    {pdata.new_price}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <span style={{ fontWeight: "bold" }}>Description:</span>
                    {pdata.desc}
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col md={3}>
                <Card>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <Row>
                        <Col>Price:</Col>
                        <Col>
                          <strong>Rs: {pdata.new_price}</strong>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                    {/* Status */}
                    <ListGroup.Item>
                      <Row>
                        <Col>Status:</Col>
                        <Col>
                          {pdata.stock > 0 ? "In Stock" : "Out of Sock"}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                    {pdata.stock > 0 && (
                      <ListGroup.Item>
                        <Row>
                          <Col>Qty</Col>
                          <Col>
                            <Form.Control
                              as="select"
                              value={qty}
                              onChange={(e) => setQty(e.target.value)}
                            >
                              {[...Array(pdata.stock).keys()].map((x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              ))}
                            </Form.Control>
                          </Col>
                        </Row>
                      </ListGroup.Item>
                    )}
                    <ListGroup.Item className="atc">
                      <Button
                        onClick={addToCartHandler}
                        className="btn btn-dark atc"
                        type="button"
                        disabled={pdata.stock === 0}
                      >
                        Add to Cart
                      </Button>
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
            </Row>
          )}
        </div>
      </div>
    </>
  );
};
export default PetScreen;
