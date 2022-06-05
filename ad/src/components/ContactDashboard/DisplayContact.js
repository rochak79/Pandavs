import React, { useState, useEffect } from "react";
import "./DisplayContact.css";
import axios from "axios";

const DisplayContact = () => {
  const [contact, setContacts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:7000/api/contact/contacts")
      .then((result) => {
        setContacts(result.data.contact);
        console.log(result.data.contact);
        // console.log(result.data.products);
      })
      .catch((err) => {
        console.log(err);
        // alert("Error receiving data");
      });
  }, []);
  return (
    <>
      <h2>Contacts</h2>
      <table className="table__contact">
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Message</th>
        </tr>
        {contact.map((contacts) => {
          return (
            <tr>
              <td>{contacts.name}</td>
              <td>{contacts.email}</td>
              <td>{contacts.number}</td>
              <td>{contacts.message}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
};

export default DisplayContact;
