import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './CheckOutSuccess.css';

const CheckOutSuccess = () => {
  return (
    <div className='checkout-success'>
      <h2>Order Successful</h2>
      <p>
        Incase any inqueries contact support at{' '}
        <a href='mailto:hamrogarden1@gmail.com'>hamrogarden1@gmail.com</a>
      </p>
    </div>
  );
};

export default CheckOutSuccess;
