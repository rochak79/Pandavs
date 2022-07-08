import React from 'react'
import {Link} from 'react-router-dom';

const Dash = () => {

    const totalUser = localStorage.getItem("totalUser")
  const final = (totalUser);

  const totalProduct = localStorage.getItem("totalProduct")
  const finalP = (totalProduct);

  const totalContact = localStorage.getItem("totalContact")
  const finalc = (totalContact);
  return (
    <div>
        <div className="container">
          <div className="row">
  <div className="col-sm-6">
    <div className="card text-dark">
      <div className="card-body">
        <h5 className="card-title">There are {final} users enrolled in your site.</h5>
        <Link to="/userdashboard"><button className="btn btn-primary">See Users</button></Link>
        
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card text-dark">
      <div className="card-body">
        <h5 className="card-title">There are {finalP} products in your site.</h5>
        <Link to="/displayproducts"><button className="btn btn-primary">See Products</button></Link>
        
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card text-dark">
      <div className="card-body">
        <h5 className="card-title">You have {finalc} messages.</h5>
        
        <Link to="/displaycontact"><button className="btn btn-primary">See Messages</button></Link>
      </div>
    </div>
  </div>
</div>
          </div>
    </div>
  )
}

export default Dash