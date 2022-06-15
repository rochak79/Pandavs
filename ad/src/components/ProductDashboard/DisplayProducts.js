import React, { useEffect, useState } from "react";
import "./DisplayProduct.css";
import axios from "axios";
import { Link } from "react-router-dom";

const DisplayProducts = () => {
  const [products, setProducts] = useState([]);

  // Delete product
  const deleteProduct = (pid) => {
    window.alert(`Are you sure you want to delete this product?`);
    try {
      console.log(pid);
      axios.delete(`http://localhost:7000/api/product/${pid}`);
      window.alert("Product deleted successfully");
      window.location.replace("/displayproducts");
    } catch (error) {
      console.log(error);
      window.alert("Failed to delete the product!");
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:7000/api/product/products")
      .then((result) => {
        setProducts(result.data.products);
        console.log(result.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main role="main">
      <h1 className="text-center text-white pt-5">Total Products</h1>
      <div className="container">
        <div className="row">
          <h2>Products</h2>
          <table className="table__contact text-dark">
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Discount</th>
              <th>Description</th>
              <th></th>
            </tr>
            {products.map((data) => {
              return (
                <>
                  <tr>
                    <td>
                      <img
                        src={"http://localhost:7000/" + data.image}
                        alt={data.name}
                        className="pdimg"
                      />
                    </td>
                    <td>{data.name}</td>
                    <td>
                      <strike className="strike-text text-danger">
                        Rs.{data.old_price}
                      </strike>
                      <br />
                      <p className="text-success">Rs.{data.new_price}</p>
                    </td>
                    <td>{data.discount}%</td>
                    <td>{data.desc}</td>
                    <td>
                      <button className="btn btn_update">
                        <Link to={"/updateproduct/" + data._id}>
                          <button className="btn btn_update">Update</button>
                        </Link>
                      </button>
                      |
                      <button
                        className="btn btn_delete"
                        onClick={() => {
                          deleteProduct(data._id);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>

                  {/* <div className="row row__content col-md-12 mt-1 test mb-3 text-center">
                  <div className="row">
                    <div className="col-md-2">
                      <img
                        src={"http://localhost:7000/" + data.image}
                        alt={data.name}
                        className="img-responsive"
                      />
                    </div>
                    <div className="col-md-2 b_data">{data.name}</div>
                    <div className="col-md-1">
                      <strike className="strike-text text-danger">
                        Rs.{data.old_price}
                      </strike>
                      <br />
                      <p className="text-success">Rs.{data.new_price}</p>
                    </div>
                    <div className="col-md-1 b_data">{data.discount}%</div>
                    <div className="col-md-1 b_data">{data.stock}</div>
                    <div className="col-md-2 b_data">{data.desc}</div>
                    <div className="col-md-2">
                      <div className="text-dark">
                        <button className="btn btn_update">
                          <Link to={"/updateproduct/" + data._id}>
                            <button className="btn btn_update">Update</button>
                          </Link>
                        </button>
                        |
                        <button
                          className="btn btn_delete"
                          onClick={() => {
                            deleteProduct(data._id);
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div> */}
                </>
              );
            })}
          </table>
        </div>
      </div>
      );
    </main>
  );
};

export default DisplayProducts;
