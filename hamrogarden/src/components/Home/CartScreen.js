import React, { useEffect } from "react";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import "./CartScreen.css";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
  Alert,
} from "react-bootstrap";
import { addToCart, removeFromCart } from "../../action/cartAction";

const CartScreen = ({ history }) => {
  const { id } = useParams();
  const productId = id;
  const navigate = useNavigate();
  const location = useLocation();
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);
  // Remove Cart
  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };
  const checkoutHandler = () => {
    navigate("/login?redirect=/shipping");
  };
  return (
    <div className="cart_screen">
      <div className="product_back">
        <Link to="/" className="product_back_text">
          <i class="fas fa-arrow-left"></i> &nbsp;Back
        </Link>
      </div>
      <h1>Shopping Cart</h1>
      <Row className="cart_screen">
        <Col md={8}>
          {cartItems.length === 0 ? (
            <Alert>
              Your cart is empty.
              <br />
              <p>
                <Link to="/" className="cart_back">
                  Click here
                </Link>{" "}
                to go back.
              </p>
            </Alert>
          ) : (
            <ListGroup variant="flush">
              {cartItems.map((item) => (
                <ListGroup.Item key={item.product}>
                  <Row>
                    <Col md={2} className="image_cart cart_detail">
                      <Image
                        src={`http://localhost:7000/${item.image} `}
                        alt={item.name}
                        fluid
                        rounded
                      />
                    </Col>
                    <Col md={3} className="cart_detail">
                      <Link
                        to={`/product/${item.product}`}
                        className="cart_detail"
                      >
                        {item.name}
                      </Link>
                    </Col>
                    <Col md={2} className="cart_detail">
                      Rs: {item.new_price}
                    </Col>
                    <Col md={2} className="cart_detail">
                      <Form.Control
                        as="select"
                        value={item.qty}
                        onChange={(e) =>
                          dispatch(
                            addToCart(item.product, Number(e.target.value))
                          )
                        }
                      >
                        {[...Array(item.stock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                    <Col md={2} className="cart_detail">
                      <Button
                        type="button"
                        variant="light"
                        onClick={() => removeFromCartHandler(item.product)}
                      >
                        <i className="fas fa-trash" />
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>
                  Subtotal({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                  items
                </h2>
                <h3>
                  Rs:{" "}
                  {cartItems
                    .reduce((acc, item) => acc + item.qty * item.new_price, 0)
                    .toFixed(2)}
                </h3>
              </ListGroup.Item>
              <ListGroup.Item className="ptc">
                <Button
                  type="button"
                  className="btn-block"
                  disabled={cartItems.length === 0}
                  onClick={checkoutHandler}
                >
                  Proceed to Checkout
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col md={2}></Col>
      </Row>
    </div>
  );
};
export default CartScreen;
