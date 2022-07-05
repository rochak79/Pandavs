import React from 'react';
import './PayButton.css';
import axios from 'axios';
import { useSelector } from 'react-redux';

const PayButton = ({ cartItem }) => {
  const url = 'http://localhost:7000';
  const handleCheckOut = () => {
    axios
      .post(`${url}/stripe/create-checkout-session`, {
        cartItem,
      })
      .then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url;
        }
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <>
      <button className='checkout-btn' onClick={() => handleCheckOut()}>
        CheckOut
      </button>
    </>
  );
};

export default PayButton;
