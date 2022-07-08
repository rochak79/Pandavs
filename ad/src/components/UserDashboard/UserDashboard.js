import React, { useEffect, useState } from "react";
import "./UserDashboard.css";
import axiox from "axios";

const UserDashboard = () => {
 
  const [data, setData] = useState([]);

  //   recieving data
  useEffect(() => {
    axiox
      .get(`http://localhost:7000/user/users`)
      .then((result) => {
        
        const totalUser = result.data.user.length;
        localStorage.setItem("totalUser", JSON.stringify(totalUser))
        setData(result.data.user);
        // console.log(result.data.user);
      })
      .then((error) => {
        const err = error.response.data.message;
        window.alert(err);
      });
  }, []);
  return (
    <div>
      <h2>Our Registered users.</h2>
      <table className="table__contact">
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
        </tr>
        {data.map((d) => {
          return (
            <tr>
              <td>{d._id}</td>
              <td>{d.name}</td>
              <td>{d.email}</td>
              <td>{d.address}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default UserDashboard;
