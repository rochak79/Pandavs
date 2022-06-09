import React from "react";
import "./Profile.css";

const Profile = () => {
  const user = localStorage.getItem("user");
  console.log(user);

  return (
    <>
      <div className="profile">
        <div className="profile_left">this will be image section</div>
        <div className="profile_right">
          {/* <h2>Name:{user.name}</h2>
          <h2>Email:{user.email}</h2>
          <h2>Password:{user.password}</h2> */}
          <h2>Name:</h2>
          <h2>Email:</h2>
          <h2>Password:</h2>
        </div>
      </div>
    </>
  );
};

export default Profile;
