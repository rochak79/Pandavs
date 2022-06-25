import React from "react";
import "./Profile.css";

const Profile = () => {
  const dataa = localStorage.getItem("userData");
  const final = JSON.parse(dataa);
  console.log(final);

  return (
    <>
      <div class="student-profile py-4">
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <div class="card shadow-sm">
                <div class="card-header bg-transparent text-center">
                  <img
                    class="profile_img"
                    src="https://placeimg.com/640/480/arch/any"
                    alt=""
                  />
                  <h3>{final.name}</h3>
                </div>
                <div class="card-body">
                  <p class="mb-0">
                    <strong class="pr-1">User ID: </strong>
                    {final._id}
                  </p>
                  <p class="mb-0">
                    <strong class="pr-1">Email: </strong>
                    {final.email}
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-8">
              <div class="card shadow-sm">
                <div class="card-header bg-transparent border-0">
                  <h3 class="mb-0">
                    <i class="far fa-clone pr-1"></i>General Information
                    <button class="update-profile">
                      <i class="fas fa-edit"></i>
                    </button>
                  </h3>
                </div>
                <div class="card-body pt-0">
                  <table class="table table-bordered">
                    <tr>
                      <th width="30%">Address</th>
                      <td width="2%">:</td>
                      <td>{final.address}</td>
                    </tr>
                    <tr>
                      <th width="30%">Role</th>
                      <td width="2%">:</td>
                      <td>{final.role}</td>
                    </tr>
                    <tr>
                      <th width="30%">Phone </th>
                      <td width="2%">:</td>
                      <td>+977{final.phone}</td>
                    </tr>
                    <tr>
                      <th width="30%">Gender</th>
                      <td width="2%">:</td>
                      <td>{final.gender}</td>
                    </tr>
                    <tr>
                      <th width="30%">About myself:</th>
                      <td width="2%">:</td>
                      <td>{final.desc}</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
