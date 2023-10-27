import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function StudentDetails() {
  const { id } = useParams();
  const apiEndpoint = " http://localhost:3000/student/";
  const [item, setItem] = useState({});

  useEffect(() => {
    // Fetch data from your API using the ID

    axios
      .get(apiEndpoint.concat(id))
      .then((response) => {
        setItem(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h3>Stident details {id}</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Gender</th>
            <th>Valid</th>
            <th>RegistrationId</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td> {item.phone}</td>
            <td>{item.gender}</td>
            <td>{item.valid}</td>
            <td> {item.registrationId}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default StudentDetails;
