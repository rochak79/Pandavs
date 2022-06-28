import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./UpdateProfile.css";

const UpdateProfile = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [desc, setDesc] = useState("");

  const [getUser, setGetUser] = useState([]);

  //   get the user detail
  useEffect(() => {
    axios.get(`http://localhost:7000/user/user/${id}`).then((result) => {
      setGetUser(result.data.user);
    });
  }, []);

  //   update profile details
  const sendData = (e) => {
    e.preventDefault();
    const updatedData = {
      name,
      email,
      address,
      phone,
      gender,
      desc,
    };
    axios
      .put(`http://localhost:7000/user/user/${id}`, updatedData)
      .then((result) => {
        const userData = result.data.UserUpdated;
        const oldUser = localStorage.getItem("userData");
        const finalOldUser = JSON.parse(oldUser);
        console.log("Old:", finalOldUser);
        const test = window.localStorage.removeItem("userData");
        localStorage.setItem("userData", JSON.stringify(userData));
        console.log("updated:", userData);

        console.log(test);
        window.alert("Success");
        window.location.replace("/profile");
      });
  };

  return (
    <div>
      <div className="user-profile py-4">
        <div className="container">
          <Link to="/profile">
            {" "}
            <button className="btn-back">
              <i class="fa fa-arrow-left" aria-hidden="true"></i> Back
            </button>
          </Link>
          <h1>Update Profile</h1>
          <div className="row">
            <div className="col-lg-4">
              <div className="card shadow-sm">
                <div className="card-header bg-transparent text-center">
                  <img
                    className="profile_img"
                    src="https://placeimg.com/640/480/arch/any"
                    alt=""
                  />
                  <h3>
                    <input
                      type="text"
                      placeholder={getUser.name}
                      className="text-center hereko"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </h3>
                </div>
                <div className="card-body">
                  <p className="mb-0">
                    <strong className="pr-1">User ID: </strong>
                    {getUser._id}
                  </p>
                  <p className="mb-0">
                    <strong className="pr-1">
                      Email:
                      <input
                        type="text"
                        placeholder={getUser.email}
                        className="hereko"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </strong>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card shadow-sm">
                <div className="card-header bg-transparent border-0">
                  <h3 className="mb-0">
                    <i className="far fa-clone pr-1"></i>General Information
                  </h3>
                </div>
                <div className="card-body pt-0">
                  <table className="table table-bordered">
                    <tr>
                      <th width="30%">Address</th>
                      <td width="2%">:</td>
                      <td>
                        <input
                          type="text"
                          placeholder={getUser.address}
                          className="hereko"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th width="30%">Role </th>
                      <td width="2%">:</td>
                      <td>{getUser.role}</td>
                    </tr>
                    <tr>
                      <th width="30%">Phone </th>
                      <td width="2%">:</td>
                      <td>
                        +977
                        <input
                          type="text"
                          placeholder={getUser.phone}
                          className="hereko"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th width="30%">Gender</th>
                      <td width="2%">:</td>
                      <td>
                        <input
                          type="text"
                          placeholder={getUser.gender}
                          className="hereko"
                          value={gender}
                          onChange={(e) => setGender(e.target.value)}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th width="30%">About myself:</th>
                      <td width="2%">:</td>
                      <td>
                        <textarea
                          type="text"
                          id="form3Example1c"
                          rows="4"
                          cols="30"
                          placeholder={getUser.desc}
                          className=" hereko"
                          value={desc}
                          onChange={(e) => setDesc(e.target.value)}
                        />
                      </td>
                    </tr>
                  </table>
                  <button
                    className="bg-success btn-update-profile"
                    onClick={sendData}
                  >
                    Update!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
